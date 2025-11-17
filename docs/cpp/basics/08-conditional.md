---
title: Condicionales [C++]
---

# Condicionales en C++

En programación, las estructuras condicionales permiten que el flujo de ejecución del programa tome diferentes caminos basados en ciertas condiciones. En C++, las estructuras condicionales más comunes son `if`, `else if`, `else` y `switch`.

## Estructura `if`

La estructura `if` evalúa una condición y ejecuta un bloque de código si la condición es verdadera.

La sintaxis básica es la siguiente:
```cpp
if (condición) {
    // Código a ejecutar si la condición es verdadera
}
```

Un ejemplo simple de uso de `if` es el siguiente:

```cpp
#include <iostream>

int main() {
    int numero = 10;
    if (numero > 5) {
        std::cout << "El número es mayor que 5" << std::endl;
    }
    return 0;
}
```

## Estructura `if-else`
La estructura `if-else` permite ejecutar un bloque de código si la condición es verdadera y otro bloque si la condición es falsa.

La sintaxis básica es la siguiente:
```cpp
if (condición) {
    // Código a ejecutar si la condición es verdadera
} else {
    // Código a ejecutar si la condición es falsa
}
```

Un ejemplo de uso de `if-else` es el siguiente:

```cpp
#include <iostream>

int main() {
    int numero = 3;
    if (numero > 5) {
        std::cout << "El número es mayor que 5" << std::endl;
    } else {
        std::cout << "El número es 5 o menor" << std::endl;
    }
    return 0;
}
```

## Estructura `else if`

La estructura `else if` permite evaluar múltiples condiciones secuencialmente.

La sintaxis básica es la siguiente:
```cpp
if (condición1) {
    // Código a ejecutar si la condición1 es verdadera
} else if (condición2) {
    // Código a ejecutar si la condición2 es verdadera
} else {
    // Código a ejecutar si ninguna condición es verdadera
}
```

Un ejemplo de uso de `else if` es el siguiente:

```cpp
#include <iostream>

int main() {
    int numero = 5;
    if (numero > 5) {
        std::cout << "El número es mayor que 5" << std::endl;
    } else if (numero == 5) {
        std::cout << "El número es igual a 5" << std::endl;
    } else {
        std::cout << "El número es menor que 5" << std::endl;
    }
    return 0;
}
```

Ya vimos en la sección de [Operadores](./04-operators#operadores-de-comparacion) cómo usar operadores de comparación para evaluar condiciones.

## Estructura `switch`
La estructura `switch` permite seleccionar entre múltiples opciones basadas en el valor de una variable.

La sintaxis básica es la siguiente:
```cpp
switch (variable) {
    case valor1:
        // Código a ejecutar si variable == valor1
        break;
    case valor2:
        // Código a ejecutar si variable == valor2
        break;
    ...
    default:
        // Código a ejecutar si ninguna condición coincide
        break;
}
```

Un ejemplo de uso de `switch` es el siguiente:

```cpp
#include <iostream>

int main() {
    int dia = 3;
    switch (dia) {
        case 1:
            std::cout << "Lunes" << std::endl;
            break;
        case 2:
            std::cout << "Martes" << std::endl;
            break;
        case 3:
            std::cout << "Miércoles" << std::endl;
            break;
        default:
            std::cout << "Otro día" << std::endl;
            break;
    }
    return 0;
}
```

En este ejemplo, dependiendo del valor de `dia`, se imprimirá el nombre correspondiente del día de la semana. La palabra clave `break` se utiliza para salir del bloque `switch` una vez que se ha ejecutado un caso.

::: tip
Es posible hacer que varios casos compartan el mismo bloque de código omitiendo la instrucción `break` entre ellos.

```cpp
switch (dia) {
    case 1:
    case 2:
    case 3:
        std::cout << "Día laborable" << std::endl;
        break;
    default:
        std::cout << "Fin de semana" << std::endl;
        break;
}
```
:::

## Condiciones Compuestas

Las condiciones compuestas permiten combinar múltiples condiciones utilizando operadores lógicos como `&&` (AND) y `||` (OR).

```cpp
if (condición1 && condición2) {
    // Código a ejecutar si ambas condiciones son verdaderas
}
if (condición1 || condición2) {
    // Código a ejecutar si al menos una condición es verdadera
}
```
Un ejemplo de condiciones compuestas es el siguiente:

```cpp
#include <iostream>

int main() {
    int edad = 20;
    bool tieneLicencia = true;

    if (edad >= 18 && tieneLicencia) {
        std::cout << "Puede conducir" << std::endl;
    } else {
        std::cout << "No puede conducir" << std::endl;
    }
    return 0;
}
```

En este ejemplo, la persona solo puede conducir si tiene al menos 18 años y posee una licencia de conducir.

## Condicional Ternario

El operador condicional ternario, también conocido como "inline if" (condicional en línea), es una forma abreviada de escribir una estructura `if-else`. Su sintaxis es la siguiente:

```cpp
condición ? expresión_si_verdadero : expresión_si_falso;
```

Un ejemplo de uso del operador ternario es el siguiente:

```cpp
#include <iostream>

int main() {
    int numero = 7;
    std::string resultado = (numero % 2 == 0) ? "Par" : "Impar";
    std::cout << "El número es " << resultado << std::endl;
    return 0;
}
```