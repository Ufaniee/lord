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

      // Create a gradient fill for the entire area under the line with consistent opacity
      const gradient = ctx.createLinearGradient(0, 0, 0, chartRef.current.clientHeight);
      gradient.addColorStop(0, 'rgba(177, 101, 233, 0.5)'); // Starting color with opacity
      gradient.addColorStop(1, 'rgba(177, 101, 233, 0.1)'); // Ending color with opacity

      // Create a new chart instance
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            data: [30, 50, 80, 81, 56, 55, 40],
            fill: true,
            backgroundColor: gradient, // Use the gradient for fill
            borderColor: '#B165E9', // Set line color to #B165E9
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
            tooltip: {
              enabled: true,
              callbacks: {
                title: (tooltipItem) => {
                  // You can customize the tooltip title here
                  return ` ${tooltipItem[0].label}`;
                },
                label: (tooltipItem) => {
                  // You can customize the tooltip label here
                  return `Orders: ${tooltipItem.formattedValue}`;
                },
              },
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className="w-[100%] md:w-[100%] lg:w-[100%] h-[400px] md:h-[400px] py-8">
      <canvas className='' ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
