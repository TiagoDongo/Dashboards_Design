const ctx = document.querySelector('.activity-chart');
const ctx2 = document.querySelector('.prog-chart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets:[{
            label: 'Time',
            data: [8, 6, 7, 6, 10, 8, 4],
            backgroundColor: '#888888',
            borderWidth: 3,
            borderRadius: 6,
            hoverBackgroundColor: '#f0f8ff',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                border: {
                    display: true,
                },
                grid: {
                    display: true,
                    color: '#d6d3d6'
                }
            },
            y: {
                ticks: {
                    display: false
                }
            }
        },
        Plugins: {
            legend: {
                display: false
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        }
    }
});

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets:[{
            label: 'Personal Grade Average',
            data: [6, 10, 8, 14, 6, 7, 4],
            borderColor: '#0891b2',
            tension: 0.4
        },
        {
            label: 'Class Grade Average ',
            data: [8, 6, 7, 6, 11, 8, 10],
            borderColor: '#ca0a04',
            tension: 0.4
        }
    ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                ticks: {
                    display: false
                },
                border: {
                    display: false,
                    dash: [5, 5]
                }
            }
        },
        Plugins: {
            legend: {
                display: false
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        }
    }
});