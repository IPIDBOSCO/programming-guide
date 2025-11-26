---
title: Diagrama de flujo
next:
  title: Trabajo con diagramas de flujo
  link: /flow-chart/work-with-flowchart
---

# Diagrama de flujo

Un diagrama de flujo es una representación gráfica que ilustra el flujo de un proceso o sistema mediante símbolos y flechas. Estos diagramas son herramientas visuales que ayudan a comprender, analizar y comunicar cómo funcionan los procesos, facilitando la identificación de pasos, decisiones y posibles mejoras.

<!-- ![flow example](image.png) -->

```mermaid
flowchart TD
  A([La lámpara no funciona])
  B{¿La lámpara está enchufada?}
  C[Enchufar la lámpara]
  D{¿La bombilla está fundida?}
  E[Cambiar la bombilla]
  F[Reparar o reemplazar la lámpara]

  A --> B
  B -- No --> C
  B -- Sí --> D
  D -- Sí --> E
  D -- No --> F

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;

  class B,D decision
  class C,E,F process
  class A start-end
```

Este ejemplo de diagrama de flujo muestra el proceso para diagnosticar por qué una lámpara no funciona, incluyendo decisiones y acciones a tomar. No es un diagrama exhaustivo, pero ilustra cómo se pueden representar visualmente los pasos en un proceso. 

Los diagramas de flujo utilizan una variedad de símbolos estandarizados para representar diferentes tipos de acciones o decisiones.

| Símbolo | Nombre | Descripción |
|---------|--------|-------------|
| ![terminator](/assets/flow_chart/start_end.svg) | Terminador | Representa el inicio o el final de un proceso. |
| ![process](/assets/flow_chart/process.svg) | Proceso | Indica una acción o tarea que se debe realizar. |
| ![decision](/assets/flow_chart/decision.svg) | Decisión | Representa un punto donde se debe tomar una decisión, generalmente con respuestas "sí" o "no". |
| ![inputoutput](/assets/flow_chart/input-output.svg) | Entrada/Salida | Indica la entrada o salida de datos en el proceso. |
| ![connector](/assets/flow_chart/inspection.svg) | Conector | Utilizado para conectar diferentes partes del diagrama, especialmente cuando se extiende a múltiples páginas. |

Estos símbolos se combinan para crear diagramas que representan procesos complejos de manera clara y concisa, facilitando la comprensión y el análisis de los mismos.
