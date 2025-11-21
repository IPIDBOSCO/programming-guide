import type { Theme as ThemeType } from 'vitepress'
import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

import CodeEditor from './components/CodeEditor.vue'

import "./mermaid.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: Theme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
    app.component('code-editor', CodeEditor)
  }
} as ThemeType