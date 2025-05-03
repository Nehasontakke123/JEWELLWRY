import React, { useEffect, useState } from "react";
import "../assets/css/FloatingFlowers.css";

const FloatingFlowers = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const addElement = () => {
      const isFlower = Math.random() > 0.5;
      setElements((prevElements) => [
        ...prevElements,
        {
          id: Math.random(),
          type: isFlower ? "flower" : "leaf", 
          left: Math.random() * 90 + "vw",
          animationDuration: Math.random() * 5 + 3 + "s",
        },
      ]);

      if (elements.length > 50) {
        setElements((prevElements) => prevElements.slice(1));
      }
    };

    const interval = setInterval(addElement, 500);

    return () => clearInterval(interval);
  }, [elements]);

  return (
    <>
      {elements.map((element) => (
        <div
          key={element.id}
          className={element.type === "flower" ? "falling-flower" : "falling-leaf"}
          style={{
            left: element.left,
            animationDuration: element.animationDuration,
          }}
        ></div>
      ))}
    </>
  );
};

export default FloatingFlowers;

