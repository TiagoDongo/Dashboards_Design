const darkMode = document.querySelector(".dark-mode");
const canvas = document.querySelector(".prog-chart");

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables");
  darkMode.querySelector("i:nth-child(1)").classList.toggle("active");
  darkMode.querySelector("i:nth-child(2)").classList.toggle("active");
});


if (canvas) {
  new Chart(canvas, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Tasks concluded ",
          data: [6, 10, 8, 14, 6, 9, 4],
          borderColor: "#1b9c85",
          backgroundColor: "#bbf7d04d",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Tasks faileds",
          data: [8, 2, 5, 6, 9, 1, 12],
          borderColor: "#ff0060",
          backgroundColor: "rgba(254, 205, 211, 0.3)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            drawBorder: false,
            borderDash: [5, 5],
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      animation: {
        duration: 1000,
        easing: "easeInOutQuad",
      },
    },
  });
} else {
  console.warn(
    "Canvas .prog-chart não encontrado — o gráfico não foi inicializado."
  );
}
