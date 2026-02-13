import React from "react";
import { useNavigate } from "react-router-dom";

function History() {
  const navigate = useNavigate();

  // Dummy data (later fetch from backend/database)
  const reports = [
    {
      id: 1,
      name: "Blood_Test_Report.pdf",
      date: "12 Feb 2026",
      fileUrl: "/reports/blood_test.pdf"
    },
    {
      id: 2,
      name: "Xray_Report.pdf",
      date: "10 Feb 2026",
      fileUrl: "/reports/xray.pdf"
    }
  ];

  const openReport = (url) => {
    window.open(url, "_blank"); // opens PDF in browser
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📁 Report History</h2>
        <p style={styles.subtitle}>
          View your previously interpreted medical reports
        </p>

        {reports.map((report) => (
          <div
            key={report.id}
            style={styles.reportItem}
            onClick={() => openReport(report.fileUrl)}
          >
            <div>
              <strong>{report.name}</strong>
              <p style={styles.date}>{report.date}</p>
            </div>
          </div>
        ))}

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
    width: "420px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(13,110,253,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  title: {
    color: "#0d6efd",
    textAlign: "center"
  },
  subtitle: {
    fontSize: "14px",
    color: "#6c757d",
    textAlign: "center",
    marginBottom: "10px"
  },
  reportItem: {
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    cursor: "pointer",
    border: "1px solid #dee2e6",
    transition: "0.2s"
  },
  date: {
    fontSize: "12px",
    color: "#6c757d",
    marginTop: "5px"
  },
  backButton: {
    marginTop: "15px",
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
