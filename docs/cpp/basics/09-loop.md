---
title: Bucles [C++]
---

# Bucles en C++

Los bucles son estructuras de control que permiten repetir un bloque de código varias veces mientras se cumpla una condición determinada. En C++, existen varios tipos de bucles, `for`, `while` y `do-while`.

## Bucle `for`

El bucle `for` se utiliza cuando se conoce de antemano el número de iteraciones que se desean realizar. La sintaxis básica es la siguiente:

```cpp
for (inicialización; condición; incremento) {
    // Código a ejecutar en cada iteración
}
```

Donde:
- **inicialización**: Se ejecuta una vez al inicio del bucle y se utiliza para inicializar variables de control.
- **condición**: Se evalúa antes de cada iteración; si es verdadera, se ejecuta el bloque de código.
- **incremento**: Se ejecuta al final de cada iteración y se utiliza para actualizar las variables de control.

Un ejemplo de un bucle `for` que imprime los números del 1 al 5 es el siguiente:

```cpp
#include <iostream>
int main() {
    for (int i = 1; i <= 5; i++) {
        std::cout << i << std::endl;
    }
    return 0;
}
```

## Bucle `while`

El bucle `while` se utiliza cuando no se conoce de antemano el número de iteraciones y se desea repetir un bloque de código mientras una condición sea verdadera. La sintaxis básica es la siguiente:

```cpp
while (condición) {
    // Código a ejecutar mientras la condición sea verdadera
}
```

Un ejemplo de un bucle `while` que imprime los números del 1 al 5 es el siguiente:

```cpp
#include <iostream>

int main() {
    int i = 1;
    while (i <= 5) {
        std::cout << i << std::endl;
        i++;
    }
    return 0;
}
```

## Bucle `do-while`

El bucle `do-while` es similar al bucle `while`, pero la condición se evalúa después de ejecutar el bloque de código, lo que garantiza que el bloque se ejecute al menos una vez. La sintaxis básica es la siguiente:

```cpp
do {
    // Código a ejecutar al menos una vez
} while (condición);
```

Un ejemplo de un bucle `do-while` que imprime los números del 1 al 5 es el siguiente:

```cpp
#include <iostream>

int main() {
    int i = 1;
    do {
        std::cout << i << std::endl;
        i++;
    } while (i <= 5);
    return 0;
}
```

## Bucles Anidados

Los bucles anidados son bucles que se encuentran dentro de otro bucle. Esto es útil cuando se trabaja con estructuras de datos multidimensionales, como matrices. Un ejemplo de bucles anidados que imprimen una tabla de multiplicar es el siguiente:

```cpp
#include <iostream>

int main() {
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            std::cout << i * j << "\t";
        }
        std::cout << std::endl;
    }
    return 0;
}
```

Este código imprimirá una tabla de multiplicar del 1 al 5.

## Bucle Infinito

Un bucle infinito es un bucle que nunca termina porque la condición siempre es verdadera. Esto puede ser útil en ciertos casos, como en servidores o programas que deben ejecutarse continuamente. Sin embargo, se debe tener cuidado al usar bucles infinitos para evitar que el programa se bloquee.

```cpp
#include <iostream>

int main() {
    while (true) {
        std::cout << "Este bucle se ejecuta indefinidamente." << std::endl;
    }
    return 0;
}
```

También se puede crear un bucle infinito con un bucle `for`:

```cpp
#include <iostream>
int main() {
    for (;;) {
        std::cout << "Este bucle for es infinito." << std::endl;
    }
    return 0;
}
```

::: tip Consejo
En caso de que hayas creado un bucle infinito por error durante el desarrollo, no te preocupes, no crearas un agujero negro en tu ordenador, puedes detener la ejecución del programa presionando `Ctrl + C` en la terminal o consola donde se está ejecutando el programa.
:::

## Control de Bucles

C++ proporciona varias declaraciones para controlar el flujo de los bucles. Esto es útil para salir de un bucle antes de que la condición se vuelva falsa o para saltar a la siguiente iteración. Las declaraciones más comunes son `break` y `continue`, y en algunos casos se utiliza `return` para salir de una función que contiene un bucle.

### Declaración `break`

La declaración `break` se utiliza para salir inmediatamente de un bucle, independientemente de la condición del bucle. Cuando se encuentra una declaración `break`, el control del programa se transfiere a la primera línea de código después del bucle.

```cpp
#include <iostream>
int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 6) {
            break; // Sale del bucle cuando i es 6
        }
        std::cout << i << std::endl;
    }
    return 0;
}
```

### Declaración `continue`

La declaración `continue` se utiliza para saltar a la siguiente iteración del bucle, omitiendo el resto del código dentro del bucle para la iteración actual.

```cpp
#include <iostream>

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            continue; // Salta a la siguiente iteración si i es par
        }
        std::cout << i << std::endl;
    }
    return 0;
}
```

### Declaración `return`

La declaración `return` se utiliza para salir de una función y puede ser utilizada dentro de un bucle para terminar la ejecución de la función cuando se cumple una condición específica.

```cpp
#include <iostream>
void imprimirHasta(int limite) {
    for (int i = 1; i <= 10; i++) {
        if (i > limite) {
            return; // Sale de la función si i supera el límite
        }
        std::cout << i << std::endl;
    }
}
int main() {
    imprimirHasta(5); // Llama a la función con un límite de 5
    return 0;
}
```

::: warning AVISO
Ten cuidado al usar `return` dentro de bucles, ya que terminará la función completa y no solo el bucle. Asegúrate de que este comportamiento es el deseado en tu programa.
:::