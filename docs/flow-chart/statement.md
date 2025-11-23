---
title: Sentencias en diagramas de flujo
---

# Sentencias en diagramas de flujo

## Sentencia `if`

<!-- #region if-statement -->

```mermaid
flowchart TD
  A([Inicio])
  B{Condición}
  C[Acción si es verdadera]
  D[Acción si es falsa]
  E([Fin])

  A ==> B
  B == Sí ==> C
  B == No ==> D
  C ===> E
  D ===> E

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;

  class B decision
  class C,D process
  class A,E start-end
```

<!-- #endregion if-statement -->

## Sentencia `while`

<!-- #region while-statement -->

```mermaid
flowchart TD
  A([Inicio])
  B{Condición de continuación}
  C[Acción dentro del bucle]
  D([Fin])

  A ==> B
  B == Sí ==> C
  C ==> B
  B == No ==> D

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;

  class B decision
  class C process
  class A,D start-end
```
<!-- #endregion while-statement -->

## Sentencia `for`

<!-- #region for-statement -->

```mermaid
flowchart TD
  A([Inicio])
  B[Inicialización]
  C{Condición de continuación}
  D[Acción dentro del bucle]
  E[Incremento/Decremento]
  F([Fin])

  A ==> B
  B ==> C
  C == Sí ==> D
  D ==> E
  E ==> C
  C == No =====> F

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;

  class C decision
  class B,D,E process
  class A,F start-end
```
<!-- #endregion for-statement -->

## Sentencia `switch`

<!-- #region switch-statement -->

```mermaid
flowchart TD
  A([Inicio])
  B{Expresión}
  C1[Acción caso 1]
  C2[Acción caso 2]
  C3[Acción caso n]
  D[Acción por defecto]
  E([Fin])

  A ==> B
  B ==>|Caso 1| C1
  B ==>|Caso 2| C2
  B ==>|Caso n| C3
  B ==>|Por defecto| D
  C1 ===> E
  C2 ===> E
  C3 ===> E
  D ===> E

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;

  class B decision
  class C1,C2,C3,D process
  class A,E start-end
```
<!-- #endregion switch-statement -->

