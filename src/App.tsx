
import React from 'react';
import './App.css';

// This component acts as a wrapper to render our HTML content
function App() {
  React.useEffect(() => {
    // Inject the HTML content
    const rootDiv = document.getElementById('html-content');
    if (rootDiv) {
      rootDiv.innerHTML = htmlContent;
      
      // Initialize charts after the HTML is injected
      setTimeout(() => {
        initializeCharts();
      }, 100);
    }
    
    // Add event listeners for tab switching
    setTimeout(() => {
      const tabButtons = document.querySelectorAll('.tab-button');
      tabButtons.forEach(button => {
        button.addEventListener('click', function() {
          const tabId = this.getAttribute('data-tab');
          
          // Remove active class from all tabs and buttons
          document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
          document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
          
          // Add active class to current tab and button
          this.classList.add('active');
          document.getElementById(tabId).classList.add('active');
        });
      });
    }, 200);
  }, []);

  return (
    <>
      <div id="html-content"></div>
      <script dangerouslySetInnerHTML={{ __html: `
        function initializeCharts() {
          // Bar chart
          const barCtx = document.getElementById('barChart').getContext('2d');
          new Chart(barCtx, {
            type: 'bar',
            data: {
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
              datasets: [
                {
                  label: 'Hours Worked',
                  data: [7.5, 8, 6.5, 9, 7],
                  backgroundColor: 'rgba(59, 130, 246, 0.6)',
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false
            }
          });

          // Pie chart
          const pieCtx = document.getElementById('pieChart').getContext('2d');
          new Chart(pieCtx, {
            type: 'pie',
            data: {
              labels: ['Project A', 'Project B', 'Project C', 'Meetings', 'Admin'],
              datasets: [
                {
                  data: [12, 19, 8, 15, 5],
                  backgroundColor: [
                    '#3b82f6',
                    '#10b981',
                    '#f59e0b',
                    '#ef4444',
                    '#9ca3af',
                  ]
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false
            }
          });

          // Line chart
          const lineCtx = document.getElementById('lineChart').getContext('2d');
          new Chart(lineCtx, {
            type: 'line',
            data: {
              labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
              datasets: [
                {
                  label: 'Productivity Score',
                  data: [78, 85, 82, 90],
                  borderColor: '#10b981',
                  tension: 0.4,
                  fill: false
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false
            }
          });
        }
      ` }}></script>
    </>
  );
}

// The actual HTML content as a string
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Time Track Visualizer</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>Time Track Visualizer</h1>
      <div class="user-info">
        <span>Welcome, User</span>
        <button class="btn-settings">Settings</button>
      </div>
    </header>
    
    <div class="overview-cards">
      <div class="card">
        <h3>Total Hours</h3>
        <p class="card-value">38 hrs</p>
        <p class="card-change positive">+2.5% from last week</p>
      </div>
      <div class="card">
        <h3>Projects</h3>
        <p class="card-value">5</p>
        <p class="card-change">No change</p>
      </div>
      <div class="card">
        <h3>Average Daily</h3>
        <p class="card-value">7.6 hrs</p>
        <p class="card-change positive">+0.5 hrs from last week</p>
      </div>
      <div class="card">
        <h3>Efficiency</h3>
        <p class="card-value">85%</p>
        <p class="card-change positive">+5% from last week</p>
      </div>
    </div>
    
    <div class="tab-container">
      <div class="tab-buttons">
        <button class="tab-button active" data-tab="daily-tab">Daily Overview</button>
        <button class="tab-button" data-tab="weekly-tab">Weekly Analysis</button>
        <button class="tab-button" data-tab="monthly-tab">Monthly Trends</button>
      </div>
      
      <div class="tab-content">
        <div id="daily-tab" class="tab-pane active">
          <h2>Daily Time Distribution</h2>
          <div class="charts-container">
            <div class="chart">
              <canvas id="barChart"></canvas>
            </div>
            <div class="chart">
              <canvas id="pieChart"></canvas>
            </div>
          </div>
        </div>
        
        <div id="weekly-tab" class="tab-pane">
          <h2>Weekly Performance</h2>
          <div class="charts-container">
            <div class="chart wide-chart">
              <canvas id="lineChart"></canvas>
            </div>
          </div>
        </div>
        
        <div id="monthly-tab" class="tab-pane">
          <h2>Monthly Trends</h2>
          <div class="charts-container">
            <div class="chart">
              <canvas id="barChart2"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

export default App;
