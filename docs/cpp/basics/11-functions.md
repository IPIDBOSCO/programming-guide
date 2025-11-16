---
title: Funciones [C++]
---

# Funciones en C++

Las funciones en C++ son bloques de código reutilizables que realizan tareas específicas. Permiten organizar el código, mejorar su legibilidad y facilitar el mantenimiento. Una función puede recibir parámetros de entrada, realizar operaciones y devolver un valor.

La sintaxis básica para definir una función en C++ es la siguiente:

```cpp
tipo_de_retorno nombre_de_funcion(tipo_parametro1 parametro1, tipo_parametro2 parametro2, ...) {
    // Cuerpo de la función
    // Código que realiza la tarea
    return valor; // Opcional, dependiendo del tipo de retorno
}
```

Podemos ver una función de la siguiente manera, tienes una máquina que toma algunas entradas, realiza una tarea y luego devuelve una salida. Por ejemplo, una función que suma dos números enteros:

```cpp
int sumar(int a, int b) {
    return a + b;
}
```

Esta función `sumar` toma dos parámetros enteros `a` y `b`, y devuelve su suma.

## Llamar a una función

Para utilizar una función, simplemente la llamamos por su nombre y le pasamos los argumentos necesarios. Por ejemplo:

```cpp
#include <iostream>

int sumar(int a, int b) {
    return a + b;
}

int main() {
    int resultado = sumar(5, 3);
    std::cout << "La suma es: " << resultado << std::endl;
    return 0;
}
```

En este ejemplo, llamamos a la función `sumar` con los argumentos `5` y `3`, y almacenamos el resultado en la variable `resultado`.

## Funciones con diferentes tipos de retorno

Las funciones pueden devolver diferentes tipos de datos, como `int`, `char`, `bool`, aunque dijimos que son como una máquina que recibe entradas y devuelve una salida, también pueden no devolver nada. En ese caso, usamos el tipo de retorno `void`. Por ejemplo:

```cpp
void imprimirMensaje() {
    std::cout << "Hola, este es un mensaje!" << std::endl;
}
```

Esta función `imprimirMensaje` no devuelve ningún valor, simplemente imprime un mensaje en la consola. También esta función no recibe parámetros. Simplemente realiza una acción.

Si intentamos devolver un valor que no coincide con el tipo de retorno declarado, el compilador generará un error.

```cpp
int obtenerNumero() {
    return "texto"; // Error: tipo de retorno no coincide // [!code error]
}
```


