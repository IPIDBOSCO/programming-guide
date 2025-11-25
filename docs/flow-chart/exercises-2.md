---
title: Ejercicios de diagramas de flujo #2
---

# Ejercicios de diagramas de flujo #2

En esta sección, encontrarás una serie de ejercicios diseñados para practicar y mejorar tus habilidades en la creación y comprensión de diagramas de flujo. Estos ejercicios representan situaciones de procesos prácticos y aplicaciones en el mundo real.

## Ejercicio 1: Calentador de agua inteligente

Realizar un diagrama de flujo para que un calentador de agua caliente el agua hasta una temperatura deseada. El calentador debe encenderse cuando la temperatura del agua esté por debajo de la temperatura objetivo y apagarse cuando se alcance o supere dicha temperatura.

::: details Problema resuelto

Este es un diagrama de flujo que tiene un bucle para verificar continuamente la temperatura del agua y controlar el calentador en consecuencia. No tiene fin, ya que el calentador debe seguir funcionando indefinidamente para mantener la temperatura del agua.

```mermaid
flowchart TD
  A([Inicio])
  B[Establecer temperatura objetivo]
  C[Leer temperatura actual del agua]
  D{¿Temperatura actual < Temperatura objetivo?}
  E[Encender calentador]
  F[Apagar calentador]

  A --> B
  B --> C
  C --> D
  D == Sí ==> E
  D == No ==> F
  E --> C
  F --> C

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;

  class A start-end
  class B,C,E,F process
  class D decision
```

:::

## Ejercicio 2: Calentador de agua inteligente con verificación de nivel de agua

En el ejemplo anterior, no se tenía en cuenta el nivel del agua, lo que podría causar daños al calentador si se intenta calentar agua cuando no hay suficiente o también desperdiciar energía/combustible. Realizar un diagrama de flujo que incluya una verificación del nivel de agua antes de encender el calentador. Si el nivel de agua es bajo, el calentador no debe encenderse y debe mostrar una advertencia.

::: details Problema resuelto

Este diagrama de flujo incluye una verificación adicional del nivel de agua antes de decidir si encender o apagar el calentador. Si el nivel de agua es bajo, se muestra una advertencia y no se enciende el calentador.

```mermaid
---
config:
  flowchart:
    curve: monotoneX
---
flowchart TD
  A([Inicio])
  B[Establecer temperatura objetivo]
  C[Leer temperatura actual del agua]
  D[Leer nivel de agua]
  E{¿Nivel de agua suficiente?}
  F{¿Temperatura actual < Temperatura objetivo?}
  G[Encender calentador]
  H[Apagar calentador]
  I[/Mostrar advertencia de nivel de agua bajo/]
  J[/Mostrar mensaje de calentador apagado/]
  K[/Mostrar mensaje de calentador encendido/]

  O[ ]:::empty
  
  A --> B
  B --> C
  C --> D
  D --> E
  E == Sí ==> F
  E == No ==> I
  I --> H
  F == Sí ==> G
  G --> K
  K --- O
  F == No ==> H

  H --> J
  J --- O

  O --> C

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef output fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef empty width:0px,height:0px;


  class A start-end
  class B,C,D,G,H process
  class E,F decision
  class I,J,K output
```

:::