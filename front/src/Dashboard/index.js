import React, { useEffect } from "react";
import api from "../services/api";

export default function Dashboard() {
  useEffect(() => {
    async function loadSport() {
      const user_id = localStorage.getItem("user");
      const response = api.get("/dashboard", {
        headers: {
          user_id: user_id
        }
      });
    }

    loadSport();
  });

  return <div>Dashboard</div>;
}
