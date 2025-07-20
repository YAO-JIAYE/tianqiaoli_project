<template>
    <div class="chart-container">
        <Pie :data="data" :options="options" />
    </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)


const data = {
    labels: ['0.3','0.5', '1','5'],
    datasets: [
        {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [7,12, 9, 2]
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1
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