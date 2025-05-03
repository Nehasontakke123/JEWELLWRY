import React, { useState, useEffect } from "react";
import { trackRepair } from "../api";
import socket from "../socket";

const RepairTracking = ({ repairId }) => {
  const [status, setStatus] = useState("Pending");
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await trackRepair(repairId);
        setStatus(response.data.status);
      } catch (error) {
        console.error("Tracking Error:", error);
      }
    };

    fetchStatus();

    socket.on("vanLocation", (data) => {
      setLocation(data);
    });

    return () => socket.off("vanLocation");
  }, [repairId]);

  return (
    <div>
      <h2>Repair Status: {status}</h2>
      <p>Van Location: {location.lat}, {location.lng}</p>
    </div>
  );
};

export default RepairTracking;
