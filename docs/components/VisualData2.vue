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
    labels: ['40','80', '120'],
    datasets: [
        {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: [15,12, 3]
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