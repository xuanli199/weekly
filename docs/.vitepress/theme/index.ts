import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import ArticleMetadata from "./components/ArticleMetadata.vue"
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import MyLayout from './components/MyLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app , router }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    // 注册全局组件
    app.component('ArticleMetadata' , ArticleMetadata)
  }
}