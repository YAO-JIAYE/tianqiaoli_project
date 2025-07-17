<template>
    <div class="a">
        <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
        />
    </div>
    
</template>
  
<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

let chartData = {
    labels: [ 'January', 'February', 'March' ],
    datasets: [ { data: [40, 20, 12] } ]
}

let chartOptions = {
    responsive: true
}
</script>

<style module>

</style>