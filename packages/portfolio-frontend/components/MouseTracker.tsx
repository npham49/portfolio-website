"use client";
import React, { useEffect, useState } from "react";

const MouseTracker = ({ children }: any) => {
  const [globalMousePos, setGlobalMousePos] = useState({ x: 0, y: 0 });
  const [localMousePos, setLocalMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    // 👇 Get mouse position relative to element
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;

    setLocalMousePos({ x: localX, y: localY });
  };

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setGlobalMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${localMousePos.x}px ${localMousePos.y}px, rgba(120, 113, 108, 0.15), transparent 80%)`,
      }}
    >
      {children}
    </div>
  );
};

export default MouseTracker;
