import React, { useEffect, useRef } from "react";

const AvalibleProductGraph = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const xPadding = 40;
    const yPadding = 30;
    const width = canvas.width - 2 * xPadding;
    const height = canvas.height - 2 * yPadding;

    const maxX = Math.max(...data.map((entry) => entry.numericDate));
    const minX = Math.min(...data.map((entry) => entry.numericDate));
    const maxY = Math.max(
      ...data.map((entry) =>
        Math.max(entry.availableProducts, entry.soldProducts, entry.productClicks)
      )
    );
    const minY = 0;

    const xScale = width / (maxX - minX);
    const yScale = height / (maxY - minY);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    data.forEach((entry) => {
      const x = xPadding + (entry.numericDate - minX) * xScale;

      // Draw line for available products
      const yAvailable =
        canvas.height - yPadding - (entry.availableProducts - minY) * yScale;
      ctx.beginPath();
      ctx.moveTo(x, yAvailable);
      ctx.lineTo(x, yAvailable);
      ctx.strokeStyle = "purple"; // Set color for available products
      ctx.stroke();

      // Draw line for sold products
      const ySold = canvas.height - yPadding - (entry.soldProducts - minY) * yScale;
      ctx.beginPath();
      ctx.moveTo(x, ySold);
      ctx.lineTo(x, ySold);
      ctx.strokeStyle = "blue"; // Set color for sold products
      ctx.stroke();

      // Draw line for product clicks
      const yClicks =
        canvas.height - yPadding - (entry.productClicks - minY) * yScale;
      ctx.beginPath();
      ctx.moveTo(x, yClicks);
      ctx.lineTo(x, yClicks);
      ctx.strokeStyle = "green"; // Set color for product clicks
      ctx.stroke();

      // Display date label
      ctx.fillStyle = "black";
      ctx.fillText(entry.date, x, canvas.height - yPadding + 15);
    });
  }, [canvasRef, data]);

  return <canvas ref={canvasRef} width={800} height={400} />;
};

export default AvalibleProductGraph;
