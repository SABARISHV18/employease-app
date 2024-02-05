import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import axios from 'axios';
// import Cookies from 'js-cookie';
// import CryptoJS from 'crypto-js';
const DashChart = ({ updateCounts }) => {
  const [count, SetcategoryCount] = useState(0);
  const [count1, SetcategoryCount1] = useState(0);
  useEffect(() => {
    axios.get("https://cloudy-bracelet-boa.cyclic.app/categoryCount")
      .then(result => SetcategoryCount(result.data.count))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    axios.get("https://cloudy-bracelet-boa.cyclic.app/employeeCount")
      .then(result => SetcategoryCount1(result.data.count))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    updateCounts(count, count1);
  }, [count, count1, updateCounts]);
  const data = {
    labels: ['Categorycount', 'EmployeeCount'],
    datasets: [
      {
        label: 'Count',
        backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(75, 192, 192, 0.8)'],
        hoverBorderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        data: [count, count1],
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default DashChart;