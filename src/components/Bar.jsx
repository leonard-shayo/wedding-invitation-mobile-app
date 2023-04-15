import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Bar= (props) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy previous chart instance
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: props.labels,
        datasets: [
          {
            label: props.xLabel,
            backgroundColor: "rgba(137, 207, 240 0.2)",
            borderColor: "rgba(137, 207, 240 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(137, 207, 240 0.4)",
            hoverBorderColor: "rgba(137, 207, 240 1)",
            data: props.Data,
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    chartRef.current = chart; // Store chart instance for later use

    return () => {
      chart.destroy(); // Destroy chart instance when component unmounts
    };
  }, [props.labels, props.startedData, props.completedData]);

  return (
    <div>
      <canvas ref={canvasRef} id="chart" width="400" height="400" />
    </div>
  );
};

export default Bar;
