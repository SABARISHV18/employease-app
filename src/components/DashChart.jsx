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
    axios.get("https://employease-bynxe9n2a-sabarishs-projects-09ce967f.vercel.app/v1/categoryCount",{
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(result => SetcategoryCount(result.data.count))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    axios.get("https://employease-bynxe9n2a-sabarishs-projects-09ce967f.vercel.app/v1/employeeCount")
      .then(result => SetcategoryCount1(result.data.count))
      .catch(err => console.log(err))
  }, [])

  


  //  useEffect(() => {
  //   fetch('https://employease-l7okw15zd-sabarishs-projects-09ce967f.vercel.app/v1/categoryCount', {
  //     mode: 'no-cors'
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log('ans',data);
  //       SetcategoryCount(data.count);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching employee count:', error);
  //     });
  // }, []);

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