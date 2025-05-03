import { io } from "socket.io-client";

// const socket = io("https://projectnewbackend1-1.onrender.com"); 

// export default socket;



const socket = io("https://projectnewbackend1-1.onrender.com", {
    transports: ["websocket", "polling"],
  });
  
  