import DefaultTheme from 'vitepress/theme'
import People from '../../components/People.vue' // 假设你的组件路径

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('People', People)
  }
}