
import React, { useState } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import './Dashboard.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('daily-tab');
  
  const tabs = [
    { id: 'daily-tab', label: 'Daily Overview' },
    { id: 'weekly-tab', label: 'Weekly Analysis' },
    { id: 'monthly-tab', label: 'Monthly Trends' },
  ];
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  // Sample data for charts
  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Hours Worked',
        data: [7.5, 8, 6.5, 9, 7],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
      },
    ],
  };
  
  const pieChartData = {
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
        ],
      },
    ],
  };
  
  const lineChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Productivity Score',
        data: [78, 85, 82, 90],
        borderColor: '#10b981',
        tension: 0.4,
      },
    ],
  };
  
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Time Track Visualizer</h1>
        <div className="user-info">
          <span>Welcome, User</span>
          <button className="btn-settings">Settings</button>
        </div>
      </header>
      
      <div className="overview-cards">
        <div className="card">
          <h3>Total Hours</h3>
          <p className="card-value">38 hrs</p>
          <p className="card-change positive">+2.5% from last week</p>
        </div>
        <div className="card">
          <h3>Projects</h3>
          <p className="card-value">5</p>
          <p className="card-change">No change</p>
        </div>
        <div className="card">
          <h3>Average Daily</h3>
          <p className="card-value">7.6 hrs</p>
          <p className="card-change positive">+0.5 hrs from last week</p>
        </div>
        <div className="card">
          <h3>Efficiency</h3>
          <p className="card-value">85%</p>
          <p className="card-change positive">+5% from last week</p>
        </div>
      </div>
      
      <div className="tab-container">
        <div className="tab-buttons">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="tab-content">
          <div id="daily-tab" className={`tab-pane ${activeTab === 'daily-tab' ? 'active' : ''}`}>
            <h2>Daily Time Distribution</h2>
            <div className="charts-container">
              <div className="chart">
                <Bar data={barChartData} />
              </div>
              <div className="chart">
                <Pie data={pieChartData} />
              </div>
            </div>
          </div>
          
          <div id="weekly-tab" className={`tab-pane ${activeTab === 'weekly-tab' ? 'active' : ''}`}>
            <h2>Weekly Performance</h2>
            <div className="charts-container">
              <div className="chart wide-chart">
                <Line data={lineChartData} />
              </div>
            </div>
          </div>
          
          <div id="monthly-tab" className={`tab-pane ${activeTab === 'monthly-tab' ? 'active' : ''}`}>
            <h2>Monthly Trends</h2>
            <div className="charts-container">
              <div className="chart">
                <Bar data={barChartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
