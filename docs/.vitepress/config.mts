import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withMermaid } from "vitepress-plugin-mermaid";
import { text } from 'stream/consumers';

// https://vitepress.dev/reference/site-config
export default withMermaid({
  mermaidPlugin: {
    class: "mermaid",
  },
  mermaid: {
    flowchart: {
      curve: 'stepAfter',
      defaultRenderer: 'elk'
    }
  },

  title: "Programming guide",
  description: "A site to help student the basics of programming language",
  base: process.env.VITE_BASE_URL || '/',
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
      md.use(tabsMarkdownPlugin);
    },
    math: true,
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
          ".c": "vscode-icons:file-type-c",
          ".ino": "vscode-icons:file-type-arduino",
          ".py": "vscode-icons:file-type-python",
          ".js": "vscode-icons:file-type-js-official",
          ".ts": "vscode-icons:file-type-typescript-official",
          ".json": "vscode-icons:file-type-json",
          ".flowchart": "mdi:chart-flow",
          ".mc": "mdi:chip",

        }
      }),
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
        },
        {
          text: 'Modularidad',
          link: '/cpp/modularity',
          items: [
            { text: 'Estructuras', link: '/cpp/modularity/structs' },
            { text: 'Funciones avanzadas', link: '/cpp/modularity/advanced-functions' },
            {
              text: 'Clases y objetos', link: '/cpp/modularity/class-object', items: [
                { text: 'Constructores y destructores', link: '/cpp/modularity/class-object/01-constructors' },
                { text: 'Encapsulación', link: '/cpp/modularity/class-object/02-encapsulation' },
                { text: 'Herencia', link: '/cpp/modularity/class-object/03-inheritance' },
                { text: 'Polimorfismo', link: '/cpp/modularity/class-object/04-polymorphism' },
              ]
            },
            { text: 'Vectores', link: '/cpp/modularity/vectors' },
            { text: 'Strings', link: '/cpp/modularity/strings' },

          ]
        },
        {
          text: 'Otros conceptos',
          items: [
            { text: 'Manejo de errores', link: '/cpp/other-concepts/error-handling' },
            { text: 'Archivos', link: '/cpp/other-concepts/files' },
          ]
        }
      ],
      'flow-chart': [
        {
          text: 'Diagrama de flujo',
          link: '/flow-chart',
          items: [
            { text: 'Trabajar con diagramas de flujo', link: '/flow-chart/work-with-flowchart' },
            { text: 'Bucles en diagramas de flujo', link: '/flow-chart/loop-flowchart' },
            // { text: 'Funciones en diagramas de flujo', link: '/flow-chart/functions-flowchart' },
            { text: 'Ejercicios #1', link: '/flow-chart/exercises-1' },
            { text: 'Ejercicios #2', link: '/flow-chart/exercises-2' }
          ]
        }
      ],
      'microcontrollers': [
        {
          text: 'Microcontroladores',
          link: '/microcontrollers',
          items: [
            // { text: 'Introducción a los microcontroladores', link: '/microcontrollers/intro' },
            { text: 'Antes de empezar', link: '/microcontrollers/before' },
            { text: 'Mi primer Blink', link: '/microcontrollers/blink' },
            { text: 'Arquitectura de un microcontrolador', link: '/microcontrollers/architecture' },
            { text: 'Bases de arduino', link: '/microcontrollers/arduino-basics' },
            {
              text: 'Elementos básicos', items: [
                { text: 'GPIO', link: '/microcontrollers/basics/01-GPIO' },
                { text: 'Serial', link: '/microcontrollers/basics/02-serial' },
                {
                  text: 'Entradas y salidas analógicas', link: '/microcontrollers/basics/03-analog', items: [
                    { text: 'PWM', link: '/microcontrollers/basics/031-PWM' }
                  ]
                },
              ]
            }
          ]
        }
      ],
      'network': [
        {
          text: 'Redes y comunicación',
          link: '/network',
          items: [
            { text: 'Tipos de redes', link: '/network/network-types' },
            { text: 'Componentes de red', link: '/network/components' },
            { text: 'Direcciones IP y DNS', link: '/network/ip-directions' },
            { text: 'Protocolos de comunicación', link: '/network/protocols' },
            // { text: 'Modelo OSI', link: '/network/osi-model' },
            { text: 'Ethernet', link: '/network/ethernet' },
            { text: 'Wi-Fi', link: '/network/wi-fi' },
            { text: 'Puertos', link: '/network/ports' },
            {
              text: 'Seguridad en redes', link: '/network/security', items: [
                { text: 'SSH', link: '/network/security/ssh' },
                { text: 'HTTPS y TLS/SSL', link: '/network/security/tls-ssl' },
                { text: 'Firewall', link: '/network/security/firewall' }
              ]
            }, {
              text: 'Diagnóstico y solución de problemas', link: '/network/troubleshooting', items: [
                { text: 'Ping', link: '/network/troubleshooting/ping' },
                { text: 'Traceroute', link: '/network/troubleshooting/traceroute' },
                { text: 'Netstat', link: '/network/troubleshooting/netstat' }
              ]
            },
            { text: 'APIs y servicios web', link: '/network/apis' }
          ]
        }
      ]
    }
  }
})
