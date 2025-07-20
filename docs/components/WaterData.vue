<template>
  <div class="water-quality-table">
    <h3>水質検査結果一覧</h3>
    <table class="quality-table">
      <thead>
        <tr>
          <th>検査項目</th>
          <th>測定値</th>
          <th>単位</th>
          <th>評価</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in waterQualityData" :key="item.parameter" :class="item.status">
          <td>{{ item.parameter }}</td>
          <td>{{ item.value }}</td>
          <td>{{ item.unit }}</td>
          <td>
            <span :class="'status-' + item.status">{{ item.evaluation }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const waterQualityData = [
  {
    parameter: 'PH',
    value: 7.0,
    unit: '',
    evaluation: '正常',
    status: 'normal'
  },
  {
    parameter: '炭酸塩硬度',
    value: 40,
    unit: 'mg/L',
    evaluation: '正常',
    status: 'normal'
  },
  {
    parameter: '総硬度',
    value: 25,
    unit: 'mg/L',
    evaluation: '正常',
    status: 'normal'
  },
  {
    parameter: '総塩度',
    value: 0.3,
    unit: '%',
    evaluation: '正常',
    status: 'normal'
  },
  {
    parameter: '亜硝酸塩',
    value: 1,
    unit: 'mg/L',
    evaluation: '正常',
    status: 'normal'
  },
  {
    parameter: '硝酸塩',
    value: 10,
    unit: 'mg/L',
    evaluation: '正常',
    status: 'normal'
  }
]
</script>

<style scoped>
.water-quality-table {
  margin: 20px 0;
  font-family: Arial, sans-serif;
}

.quality-table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

.quality-table th {
  background-color: #4CAF50;
  color: white;
  padding: 12px 15px;
  text-align: left;
  font-weight: bold;
}

.quality-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}

.quality-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.quality-table tr:hover {
  background-color: #f5f5f5;
}

.status-normal {
  color: #4CAF50;
  font-weight: bold;
}

.status-high {
  color: #FF9800;
  font-weight: bold;
}

.status-low {
  color: #2196F3;
  font-weight: bold;
}
</style>
