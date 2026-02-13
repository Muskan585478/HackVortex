import React from "react";
import { useNavigate } from "react-router-dom";

function History() {
  const navigate = useNavigate();

  // Temporary dummy data (replace later with backend data)
  const reports = [
    {
      id: 1,
      name: "Blood Test Report",
      date: "12 Feb 2026",
      fileUrl: "/reports/Muskan Resume.pdf"
    },
    {
      id: 2,
      name: "X-Ray Report",
      date: "10 Feb 2026",
      fileUrl: "/reports/xray.pdf"
    }
  ];

  const openReport = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📁 Previous Reports</h2>
        <p style={styles.subtitle}>
          Click any report to view it in your browser
        </p>

        {reports.length === 0 ? (
          <p style={{ textAlign: "center" }}>No reports available.</p>
        ) : (
          reports.map((report) => (
            <div
              key={report.id}
              style={styles.reportItem}
              onClick={() => openReport(report.fileUrl)}
            >
              <h4 style={{ margin: "0" }}>{report.name}</h4>
              <small style={styles.date}>{report.date}</small>
            </div>
          ))
        )}

        <button
          style={styles.backButton}
          onClick={() => navigate("/dashboard")}
        >
          ⬅ Back to Dashboard
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef6fb",
    fontFamily: "Segoe UI"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    width: "450px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(13,110,253,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  title: {
    color: "#0d6efd",
    textAlign: "center",
    marginBottom: "5px"
  },
  subtitle: {
    fontSize: "14px",
    color: "#6c757d",
    textAlign: "center",
    marginBottom: "15px"
  },
  reportItem: {
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    border: "1px solid #dee2e6",
    cursor: "pointer",
    transition: "0.2s"
  },
  date: {
    color: "#6c757d"
  },
  backButton: {
    marginTop: "20px",
    padding: "12px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default History;
