---
title: Ejercicios de diagramas de flujo #1
---

# Ejercicios de diagramas de flujo #1

En esta sección, encontrarás una serie de ejercicios diseñados para practicar y mejorar tus habilidades en la creación y comprensión de diagramas de flujo. Cada ejercicio presenta un problema específico que deberás resolver utilizando un diagrama de flujo adecuado.

Además, se proporcionan soluciones detalladas para cada ejercicio, permitiéndote comparar tu enfoque con el presentado y aprender de las diferentes maneras de representar procesos mediante diagramas de flujo.

## Ejercicio 1: Cálculo del área de un rectángulo

Crea un diagrama de flujo que calcule el área de un rectángulo. El diagrama debe solicitar al usuario que ingrese la longitud y el ancho del rectángulo, y luego calcular y mostrar el área.

::: details Problema resuelto

Este es un problema sencillo que implica la entrada de datos, un cálculo básico y la salida del resultado. Lo primero es pedir al usuario que ingrese la longitud y el ancho del rectángulo. Luego, se calcula el área multiplicando la longitud por el ancho. Finalmente, se muestra el resultado al usuario.

```mermaid
flowchart TD
    A([Inicio]) --> B[/Ingresar longitud/]
    B --> C[/Ingresar ancho/]
    C --> D[Calcular área: Área = longitud * ancho]
    D --> E[/Mostrar área/]
    E --> F([Fin])

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef input fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef output fill:inherit,stroke:inherit,stroke-width:inherit;

  class A,F start-end
  class B,C input
  class D process
  class E output
```

:::

## Ejercicio 2: Determinar cual es el número mayor de dos números

Crea un diagrama de flujo que compare dos números ingresados por el usuario y determine cuál es el mayor. El diagrama debe solicitar al usuario que ingrese los dos números, comparar los valores y mostrar cuál es el mayor.

::: details Problema resuelto

Para este ejercicio, el diagrama de flujo debe comenzar solicitando al usuario que ingrese dos números. Luego, se utiliza una decisión para comparar los dos números. Si el primer número es mayor que el segundo, se muestra un mensaje indicando que el primer número es mayor. De lo contrario, se muestra un mensaje indicando que el segundo número es mayor.

```mermaid
flowchart TD
    A([Inicio]) --> B[/Ingresar primer número/]
    B --> C[/Ingresar segundo número/]
    C --> D{¿Primer número > Segundo número?}
    D -- Sí --> E[/Mostrar "El primer número es mayor"/]
    D -- No --> G[/Mostrar "El segundo número es mayor"/]
    E --> I([Fin])
    G --> I

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef input fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef output fill:inherit,stroke:inherit,stroke-width:inherit;

  class A,I start-end
  class B,C input
  class D decision
  class E,G output
```

:::

## Ejercicio 3: El mayor de dos números con manejo de igualdad

En el diagrama de flujo anterior solo pide mostrar cuál es el número mayor, pero no maneja el caso en que ambos números son iguales. Modifica el diagrama de flujo para que también maneje este caso, mostrando un mensaje adecuado cuando los números sean iguales.

::: details Problema resuelto

Este problema sigue la misma lógica que el ejercicio anterior, pero añade una verificación adicional para el caso en que ambos números sean iguales. Después de comparar si el primer número es mayor que el segundo, se añade otra decisión para verificar si el primer número es menor que el segundo. Si ninguna de estas condiciones se cumple, significa que ambos números son iguales.

```mermaid
flowchart TD
    A([Inicio]) --> B[/Ingresar primer número/]
    B --> C[/Ingresar segundo número/]
    C --> D{¿Primer número > Segundo número?}
    D -- Sí --> E[/Mostrar "El primer número es mayor"/]
    D -- No --> F{¿Primer número < Segundo número?}
    F -- Sí --> G[/Mostrar "El segundo número es mayor"/]
    F -- No --> H[/Mostrar "Ambos números son iguales"/]
    E --> I([Fin])
    G --> I
    H --> I

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef input fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef output fill:inherit,stroke:inherit,stroke-width:inherit;

  class A,I start-end
  class B,C input
  class D,F decision
  class E,G,H output
```

:::

## Ejercicio 4: Cálculo de $2^4$

Crea un diagrama de flujo que calcule el valor de $2^4$ utilizando un bucle. El diagrama debe inicializar una variable para el resultado, luego multiplicar por 2 en cada iteración del bucle hasta alcanzar la potencia deseada, y finalmente mostrar el resultado.

::: details Problema resuelto

Este ejercicio es muy lineal, ya que el valor de $2^4$ se puede calcular simplemente multiplicando 2 por si mismo cuatro veces.

```mermaid
flowchart TD
    A([Inicio]) --> B[Inicializar base a 2]
    B --> C[Base = base * 2]
    C --> D[Base = base * 2]
    D --> E[Base = base * 2]
    E --> F[Base = base * 2]
    F --> G[/Mostrar base/]
    G --> H([Fin])

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef input fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef output fill:inherit,stroke:inherit,stroke-width:inherit;

  class A,H start-end
  class B,C,D,E,F process
  class G output
```

:::

## Ejercicio 5: Cálculo de $2^4$ usando un bucle

Realiza un diagrama de flujo que calcule el valor de $2^4$ utilizando un bucle. El diagrama debe inicializar una variable para el resultado, luego utilizar un bucle para multiplicar por 2 en cada iteración hasta alcanzar la potencia deseada, y finalmente mostrar el resultado.

::: details Problema resuelto

```mermaid
flowchart TD
    A([Inicio]) --> B[Inicializar resultado a 1]
    B --> C[Inicializar contador a 0]
    C --> D{¿Contador < 4?}
    D -- Sí --> E[Multiplicar resultado por 2]
    E --> F[Incrementar contador en 1]
    F --> D
    D -- No --> G[/Mostrar resultado/]
    G --> H([Fin])

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef input fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef output fill:inherit,stroke:inherit,stroke-width:inherit;

  class A,H start-end
  class B,C,E,F process
  class D decision
  class G output
```

:::

## Ejercicio 6: Cálculo de la suma de los primeros N números naturales

Crea un diagrama de flujo que calcule la suma de los primeros N números naturales. El diagrama debe solicitar al usuario que ingrese el valor de N, luego calcular la suma desde 1 hasta N y mostrar el resultado.

::: details Problema resuelto

```mermaid
flowchart TD
    A([Inicio]) --> B[/Ingresar valor de N/]
    B --> C[Inicializar suma a 0]
    C --> D[Inicializar contador a 1]
    D --> E{¿Contador <= N?}
    E -- Sí --> F[Sumar contador a suma]
    F --> G[Incrementar contador en 1]
    G --> E
    E -- No --> H[/Mostrar suma/]
    H --> I([Fin])

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef input fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef output fill:inherit,stroke:inherit,stroke-width:inherit;

  class A,I start-end
  class B input
  class C,D,F,G process
  class E decision
  class H output
```

:::

## Ejercicio 6: Verificar si un número es par o impar

Crea un diagrama de flujo que verifique si un número ingresado por el usuario es par o impar. El diagrama debe solicitar al usuario que ingrese un número, realizar la verificación y mostrar un mensaje indicando si el número es par o impar.

::: details Problema resuelto

Nótese que aquí usamos el operador módulo `%` para determinar si un número es par o impar. Este operador devuelve el resto de la división del número entre 2. Si el resto es 0, el número es par; de lo contrario, es impar.

```mermaid
flowchart TD
    A([Inicio]) --> B[/Ingresar un número/]
    B --> C{¿Número % 2 == 0?}
    C -- Sí --> D[/Mostrar "El número es par"/]
    C -- No --> E[/Mostrar "El número es impar"/]
    D --> F([Fin])
    E --> F

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef input fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef output fill:inherit,stroke:inherit,stroke-width:inherit;

  class A,F start-end
  class B input
  class C decision
  class D,E output
```

:::

## Ejercicio 7: Factorial de un número

Crea un diagrama de flujo que calcule el factorial de un número ingresado por el usuario. El diagrama debe solicitar al usuario que ingrese un número, calcular su factorial y mostrar el resultado.

::: details Problema resuelto

```mermaid
flowchart TD
    A([Inicio]) --> B[/Ingresar un número/]
    B --> C[Inicializar factorial a 1]
    C --> D[Inicializar contador a 1]
    D --> E{¿Contador <= Número?}
    E -- Sí --> F[Multiplicar factorial por contador]
    F --> G[Incrementar contador en 1]
    G --> E
    E -- No --> H[/Mostrar factorial/]
    H --> I([Fin])

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef input fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef output fill:inherit,stroke:inherit,stroke-width:inherit;

  class A,I start-end
  class B input
  class C,D,F,G process
  class E decision
  class H output
```

:::

## Ejercicio 8: Valores de la función seno para ángulos de 0 a 360 grados

Crea un diagrama de flujo que calcule y muestre los valores de la función seno para ángulos desde 0 hasta 360 grados en incrementos de 10 grados.

::: details Problema resuelto

```mermaid
flowchart TD
    A([Inicio]) --> B[Inicializar ángulo a 0]
    B --> C{¿Ángulo <= 360?}
    C -- Sí --> D[Calcular seno del ángulo]
    D --> E[/Mostrar seno del ángulo/]
    E --> F[Incrementar ángulo en 10]
    F --> C
    C -- No --> G([Fin])

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef input fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef output fill:inherit,stroke:inherit,stroke-width:inherit;

  class A,G start-end
  class B,F process
  class C decision
  class D process
  class E output
```

:::

## Ejercicio 9: Suma de números pares hasta un número dado

Crea un diagrama de flujo que calcule la suma de todos los números pares desde 1 hasta un número N ingresado por el usuario.

::: details Problema resuelto

```mermaid
flowchart TD
    A([Inicio]) --> B[/Ingresar valor de N/]
    B --> C[Inicializar suma a 0]
    C --> D[Inicializar contador a 2]
    D --> E{¿Contador <= N?}
    E -- Sí --> F[Sumar contador a suma]
    F --> G[Incrementar contador en 2]
    G --> E
    E -- No --> H[/Mostrar suma/]
    H --> I([Fin])

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef input fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef output fill:inherit,stroke:inherit,stroke-width:inherit;

  class A,I start-end
  class B input
  class C,D,F,G process
  class E decision
  class H output
```

:::

## Ejercicio 10: Suma de números hasta un número negativo

Crea un diagrama de flujo que sume números ingresados por el usuario hasta que se ingrese un número negativo. El diagrama debe solicitar al usuario que ingrese números, sumar los números positivos y mostrar la suma total cuando se ingrese un número negativo.

::: details Problema resuelto

```mermaid
flowchart TD
    A([Inicio]) --> B[Inicializar suma a 0]
    B --> C[/Ingresar un número/]
    C --> D{¿Número < 0?}
    D -- Sí --> E[/Mostrar suma/]
    D -- No --> F[Sumar número a suma]
    F --> C
    E --> G([Fin])

  classDef start-end fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef process fill: inherit,stroke:inherit,stroke-width:inherit;
  classDef input fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef decision fill:inherit,stroke:inherit,stroke-width:inherit;
  classDef output fill:inherit,stroke:inherit,stroke-width:inherit;

  class A,G start-end
  class B,F process
  class C input
  class D decision
  class E output
```

:::