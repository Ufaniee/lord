import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Check if there's an existing chart instance and destroy it
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create a new chart instance
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            data: [30, 50, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          }],
        },
        options: {
            responsive: true, // Allow chart to be responsive
          maintainAspectRatio: false, // Let the chart adapt to the container size
          scales: {
            x: {
              beginAtZero: false,
              grid: {
                display: false, // Hide x-axis lines
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                display: false, // Hide y-axis labels (counting)
              },
            },
          },
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className="w-[100%] md:w-[100%] lg:w-[100%] h-[400px] md:h-[400px]">
      <canvas className='' ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
