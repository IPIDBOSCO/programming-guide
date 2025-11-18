import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Programming guide",
  description: "A site to help student the basics of programming language",
  base: process.env.VITE_BASE_URL || '/',
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
      md.use(tabsMarkdownPlugin);
    },
  },
  vite: {
    server: {
      headers: {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp'
      }
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          ".h": "vscode-icons:file-type-cheader",
          ".cpp": "vscode-icons:file-type-cpp2",
          ".hpp": "vscode-icons:file-type-cppheader",
        }
      })
    ],
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/IPIDBOSCO/programming-guide' }
    ],
    sidebar: {
      '/cpp': [
        {
          text: 'Bases de C++',
          link: '/cpp',
          items: [
            { text: 'Antes de empezar', link: '/cpp/before' },
            { text: 'Compiladores', link: '/cpp/compiler' },
            { text: 'Hola Mundo', link: '/cpp/basics/01-hello_world' },
            { text: 'Variables', link: '/cpp/basics/02-variables' },
            { text: 'Tipos de datos', link: '/cpp/basics/03-data_types' },
            { text: 'Operadores', link: '/cpp/basics/04-operators', items: [{ text: 'Operadores de bit', link: '/cpp/basics/04.1-bit_operators' }] },
            { text: 'I/O estándar', link: '/cpp/basics/05-IO_basic' },
            { text: 'Estructura del programa', link: '/cpp/basics/06-program_structure' },
            { text: 'Librerías y encabezados', link: '/cpp/basics/07-libraries' },
            { text: 'Conditionales', link: '/cpp/basics/08-conditional' },
            { text: 'Bucles', link: '/cpp/basics/09-loops' },
            { text: 'Arreglos', link: '/cpp/basics/10-arrays' },
            { text: 'Funciones', link: '/cpp/basics/11-functions' },
            { text: 'Alcance de variables', link: '/cpp/basics/12-scope' },
          ]
        },
        {
          text: 'Lógica y Estructura',
          link: '/cpp/logic',
          items: [
            { text: 'Pseudocódigo', link: '/cpp/logic/01-pseudocode' },
            { text: 'Iteraciones en arreglos', link: '/cpp/logic/02-array_iterations' },
            { text: 'Introducción a la memoria', link: '/cpp/logic/03-memory_intro' },
            { text: 'Punteros', link: '/cpp/logic/04-pointers' },
          ]
        }
      ]
    }
  }
})
