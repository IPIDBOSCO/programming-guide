import type { Theme as ThemeType } from 'vitepress'
import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'

import CodeEditor from './components/CodeEditor.vue'
import CodeRunner from './components/CodeRunner.vue'

import "./mermaid.css";

const presets = definePreset(Aura, {
})

/** @type {import('vitepress').Theme} */
export default {
  extends: Theme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
    app.component('code-editor', CodeEditor)
    app.component('code-runner', CodeRunner)
    app.use(PrimeVue, {
      theme: {
        preset: presets,
      }
    })
  }
} as ThemeType