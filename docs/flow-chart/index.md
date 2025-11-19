---
title: Diagrama de flujo
---

# Diagrama de flujo

Un diagrama de flujo es una representación gráfica que ilustra el flujo de un proceso o sistema mediante símbolos y flechas. Estos diagramas son herramientas visuales que ayudan a comprender, analizar y comunicar cómo funcionan los procesos, facilitando la identificación de pasos, decisiones y posibles mejoras.

![flow example](image.png)

Los diagramas de flujo utilizan una variedad de símbolos estandarizados para representar diferentes tipos de acciones o decisiones.

| Símbolo | Nombre | Descripción |
|---------|--------|-------------|
| ![terminator](/assets/flow_chart/start_end.svg) | Terminador | Representa el inicio o el final de un proceso. |
| ![process](/assets/flow_chart/process.svg) | Proceso | Indica una acción o tarea que se debe realizar. |
| ![decision](/assets/flow_chart/decision.svg) | Decisión | Representa un punto donde se debe tomar una decisión, generalmente con respuestas "sí" o "no". |
| ![inputoutput](/assets/flow_chart/input-output.svg) | Entrada/Salida | Indica la entrada o salida de datos en el proceso. |
| ![connector](/assets/flow_chart/inspection.svg) | Conector | Utilizado para conectar diferentes partes del diagrama, especialmente cuando se extiende a múltiples páginas. |

Estos símbolos se combinan para crear diagramas que representan procesos complejos de manera clara y concisa, facilitando la comprensión y el análisis de los mismos.

```mermaid
flowchart TD
  A([Start]) --> B(Process Step 1)
        B --> C{Decision Point?}
        C -- Yes --> D[/Action if Yes/]
        C -- No --> E[/Action if No/]
        D --> F([End])
        E --> F
```