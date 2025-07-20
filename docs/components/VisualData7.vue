<template>
    <div class="chart-container">
        <Radar :data="data" :options="options" />
    </div>
  </template>
  
  <script setup lang="ts">
  import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  } from 'chart.js'
  import { Radar } from 'vue-chartjs'
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  )
  
const data = {
  labels: [
    'PH',
    '炭酸塩硬度',
    '総硬度',
    '総塩度',
    '亜硝酸塩',
    '硝酸塩',
  ],
  datasets: [

    {
      label: '一番多い',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
    //   data: [70, 80, 62.5, 60, 50, 66.7] 
      data: [7, 40, 25, 0.3, 1, 10]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}

  </script>
  

  <style scoped>
.chart-container {
    width: 100%;
    max-width: 500px;
    height: 400px;
    margin: 0 auto;
}
</style>