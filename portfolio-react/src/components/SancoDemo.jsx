import { useEffect, useRef, useState } from "react";

const EXAMPLES = [
  "How many containers moved out today?",
  "List all shipments for Client X",
  "Show gate-out records this week",
  "Which containers are currently in the yard?",
  "Show the latest shipment status",
];

const DEMO_SCHEMA = {
  Containers: ["ContainerNo", "ClientName", "CurrentStatus", "YardSlot"],
  Shipments: ["ShipmentNo", "ContainerNo", "ClientName", "Status", "UpdatedAt"],
  Clients: ["ClientId", "ClientName", "AccountType"],
  GateMovements: ["ContainerNo", "MovementType", "MovementAt", "Gate"],
};

const RESPONSES = {
  [EXAMPLES[0]]: {
    sql: "SELECT COUNT(*) AS ContainersMovedOut\nFROM demo_logistics.GateMovements\nWHERE MovementType = 'OUT'\n  AND CAST(MovementAt AS date) = CAST(GETDATE() AS date);",
    columns: ["ContainersMovedOut"],
    rows: [["18"]],
  },
  [EXAMPLES[1]]: {
    sql: "SELECT ShipmentNo, ContainerNo, Status\nFROM demo_logistics.Shipments\nWHERE ClientName = 'Client X';",
    columns: ["ShipmentNo", "ContainerNo", "Status"],
    rows: [["SHP-2048", "CONT-8801", "In Transit"], ["SHP-2051", "CONT-8814", "Arrived"]],
  },
  [EXAMPLES[2]]: {
    sql: "SELECT ContainerNo, MovementType, MovementAt\nFROM demo_logistics.GateMovements\nWHERE MovementType = 'OUT'\n  AND MovementAt >= DATEADD(day, -7, GETDATE())\nORDER BY MovementAt DESC;",
    columns: ["ContainerNo", "MovementType", "MovementAt"],
    rows: [["CONT-8814", "OUT", "2025-06-18 16:42"], ["CONT-8797", "OUT", "2025-06-17 11:08"]],
  },
  [EXAMPLES[3]]: {
    sql: "SELECT ContainerNo, ClientName, YardSlot\nFROM demo_logistics.Containers\nWHERE CurrentStatus = 'In Yard';",
    columns: ["ContainerNo", "ClientName", "YardSlot"],
    rows: [["CONT-8801", "Client X", "Y-04-18"], ["CONT-8820", "Bluewave Exports", "Y-02-07"]],
  },
  [EXAMPLES[4]]: {
    sql: "SELECT TOP 5 ShipmentNo, Status, UpdatedAt\nFROM demo_logistics.Shipments\nORDER BY UpdatedAt DESC;",
    columns: ["ShipmentNo", "Status", "UpdatedAt"],
    rows: [["SHP-2051", "Arrived", "2025-06-18 17:05"], ["SHP-2048", "In Transit", "2025-06-18 15:22"]],
  },
};

function SancoDemo() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  function ask(value = question) {
    const trimmed = value.trim();
    if (!trimmed) return;
    setQuestion(trimmed);
    setResponse(null);
    setIsLoading(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const match = EXAMPLES.find((example) => example.toLowerCase() === trimmed.toLowerCase());
      setResponse(match ? RESPONSES[match] : { fallback: true });
      setIsLoading(false);
    }, 450);
  }

  return (
    <aside className="sanco-demo reveal" aria-label="SANCO AI Assist interactive demo">
      <div className="sanco-demo-header">
        <div><span className="demo-kicker">TRY IT</span><h4>Ask the demo schema</h4></div>
        <span className="demo-live"><i /> SIMULATED</span>
      </div>
      <p className="demo-disclaimer">Demo mode — simulated responses using a sample schema. Not connected to a live database.</p>
      <p className="demo-schema"><span>demo_logistics</span> · {Object.keys(DEMO_SCHEMA).join(" · ")}</p>
      <div className="demo-chips" aria-label="Example questions">
        {EXAMPLES.map((example) => <button type="button" key={example} onClick={() => ask(example)}>{example}</button>)}
      </div>
      <form className="demo-form" onSubmit={(event) => { event.preventDefault(); ask(); }}>
        <input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask a logistics question…" aria-label="Demo question" />
        <button type="submit" className="demo-ask">Ask <span>↗</span></button>
      </form>
      <div className="demo-response" aria-live="polite">
        {isLoading && <div className="demo-loading"><span /><span /><span /> Generating a safe demo response…</div>}
        {!isLoading && response?.fallback && <p className="demo-fallback">This is a demo with a limited example set — the live version handles any natural-language question against a real 267-table database.</p>}
        {!isLoading && response?.sql && <div className="demo-result">
          <div className="demo-stage"><span>01</span><h5>Generated SQL</h5></div>
          <pre><code>{response.sql}</code></pre>
          <div className="demo-stage result-stage"><span>02</span><h5>Result</h5></div>
          <div className="demo-table-wrap"><table><thead><tr>{response.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{response.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>
        </div>}
      </div>
    </aside>
  );
}

export default SancoDemo;
