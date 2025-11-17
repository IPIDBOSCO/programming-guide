---
title: Memoria y Gestión de Memoria [C++]
---

# Memoria y Gestión de Memoria [C++]

En C++, la memoria se gestiona principalmente a través de dos áreas: la pila (stack) y el montón (heap). Comprender cómo funcionan estas áreas es crucial para escribir programas eficientes y evitar problemas como fugas de memoria.

## Pila (Stack)

La pila es una región de memoria que almacena variables locales y datos de función. La gestión de la memoria en la pila es automática; cuando una función se llama, se asigna espacio en la pila para sus variables locales, y cuando la función termina, ese espacio se libera automáticamente.

```cpp
#include <iostream>
void funcionEjemplo() {
    int variableLocal = 10; // Esta variable se almacena en la pila
    std::cout << "Variable local: " << variableLocal << std::endl;
} // Al salir de la función, 'variableLocal' se libera automáticamente

int main() {
    funcionEjemplo();
    return 0;
}
```

## Montón (Heap)

El montón es una región de memoria utilizada para la asignación dinámica de memoria. A diferencia de la pila, la memoria en el montón no se libera automáticamente; el programador debe gestionar esta memoria manualmente utilizando los operadores `new` y `delete`.

```cpp
#include <iostream>
int main() {
    // Asignación dinámica de memoria en el montón
    int* puntero = new int; // Reserva espacio para un entero
    *puntero = 20; // Asigna un valor al entero
    std::cout << "Valor en el montón: " << *puntero << std::endl;

    // Liberar la memoria asignada
    delete puntero; // Evita fugas de memoria
    return 0;
}
```

### Fugas de memoria (Memory Leaks)

Una fuga de memoria ocurre cuando se asigna memoria en el montón pero no se libera adecuadamente, lo que puede llevar a un consumo excesivo de memoria y eventualmente agotar los recursos del sistema.

```cpp
#include <iostream>
void fugaMemoria() {
    int* puntero = new int[100]; // Reserva un arreglo de 100 enteros
    // Olvidamos liberar la memoria con 'delete[] puntero;'
} // Al salir de la función, la memoria no se libera, causando una fuga
int main() {
    fugaMemoria();
    return 0;
}
```

## ¿Cuando usar pila vs montón?

- Usa la pila para variables locales y datos de función que tienen un tiempo de vida corto y conocido.
- Usa el montón para datos que necesitan persistir más allá del alcance de una función o cuando el tamaño de los datos no es conocido en tiempo de compilación.

::: tip 💡 Consejo
No siempre es necesario usar el montón. Siempre que sea posible, prefiere la pila para una gestión de memoria más sencilla y eficiente. El montón es para casos muy específicos donde la flexibilidad es necesaria.

Pero, para evitar fugas de memoria, siempre asegúrate de liberar cualquier memoria asignada dinámicamente con `delete` o `delete[]` cuando ya no la necesites.
:::

::: warning ⚡ Dato importante
C/C++ es un lenguaje que carece de lo que hoy muchos lenguajes modernos tienen: un recolector de basura (`garbage collector`). Por lo tanto, la gestión de memoria es una responsabilidad del programador. Es fundamental entender estos conceptos para escribir código eficiente y seguro en C++.
:::