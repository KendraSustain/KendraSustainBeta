// const color = ["#3D5061", "#ED9400", "#990045", "#001555", "#EDBC00"];
// const color = ["#fff"];
// color[Math.floor(Math.random() * color.length)]

export const columns = [
    {
        title: "ID", field: "id", editable: 'never', cellStyle: { color: "#222", borderBottom: "1px solid rgba(0,0,0,0.03)", fontSize: "0.8rem", fontWeight: "normal", paddingLeft: "30px", whiteSpace: "nowrap", fontFamily: "'Poppins', sans-serif" }, headerStyle: { fontSize: "1rem", fontWeight: "bold", borderBottom: "none", paddingLeft: "30px", whiteSpace: "nowrap" }
    },
    {
        title: "Name of Asset", field: "asset_name", cellStyle: { borderBottom: "1px solid rgba(0,0,0,0.03)", fontSize: "0.8rem", whiteSpace: "nowrap", textAlign: "left", fontFamily: "'Poppins', sans-serif" }, headerStyle: { fontSize: "1rem", fontWeight: "bold", borderBottom: "none", whiteSpace: "nowrap", textAlign: "left" },
        render: rowData => <span style={{ borderRadius: '5px', background: "#fff", padding: "5px 8px", color: "#333" }}>{rowData.asset_name}</span>
    },
    {
        title: "Asset Type", field: "asset_type", cellStyle: { borderBottom: "1px solid rgba(0,0,0,0.03)", fontSize: "0.8rem", whiteSpace: "nowrap", textAlign: "center", fontFamily: "'Poppins', sans-serif" }, headerStyle: { fontSize: "1rem", fontWeight: "bold", borderBottom: "none", whiteSpace: "nowrap", textAlign: "center" },
        render: rowData => <span style={{ borderRadius: '5px', background: "#fff", padding: "5px 8px", color: "#333" }}>{rowData.asset_type}</span>
    },
    {
        title: "Location", field: "location", cellStyle: { borderBottom: "1px solid rgba(0,0,0,0.03)", fontSize: "0.8rem", whiteSpace: "nowrap", textAlign: "center", fontFamily: "'Poppins', sans-serif" }, headerStyle: { fontSize: "1rem", fontWeight: "bold", borderBottom: "none", whiteSpace: "nowrap", textAlign: "center" },
        render: rowData => <span style={{ borderRadius: '5px', background: "#fff", padding: "5px 8px", color: "#333" }}>{rowData.location}</span>
    }
];