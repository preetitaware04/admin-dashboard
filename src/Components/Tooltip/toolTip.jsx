import Cookies from "js-cookie";
export const CustomTooltipProfit = ({ active, payload, label }) => {
  const theme = Cookies.get("theme");
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: theme === "dark" ? "#151515" : "#fff",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <p>
          <strong>Days:&nbsp;</strong>
          {label}
        </p>
        <p>
          <span style={{ color: "#8884d8" }}>Total Profit:&nbsp;</span>
          {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export const CustomTooltipSalesReport = ({ active, payload, label }) => {
  const theme = Cookies.get("theme");
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: theme === "dark" ? "#151515" : "#fff",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <p>{label}</p>
        <p>
          <span style={{ color: "#8884d8" }}>Revenue:&nbsp;</span>
          {payload[0].value}
        </p>
        <p>
          <span style={{ color: "#8884d8" }}>Expense:&nbsp;</span>
          {payload[1].value}
        </p>
      </div>
    );
  }
  return null;
};
