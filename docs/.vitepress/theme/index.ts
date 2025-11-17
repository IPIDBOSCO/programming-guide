import type { Theme as ThemeType } from 'vitepress'
import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'


export default {
  extends: Theme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  }
} as ThemeType