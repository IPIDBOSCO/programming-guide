---
title: Punteros [C++]
---

# Punteros

Aquí es cuando la cosa se pone complicada. Los punteros son variables que almacenan direcciones de memoria. En C++, los punteros se utilizan para acceder y manipular datos en memoria de manera eficiente.

## Declaración de punteros

Para declarar un puntero, se utiliza el operador asterisco (`*`) antes del nombre de la variable. Esto indica que la variable es un puntero a un tipo de dato específico.

```cpp
#include <iostream>
int main() {
    int variable = 42; // Una variable entera normal
    int* puntero = &variable; // Un puntero que almacena la dirección de 'variable'

    std::cout << "Valor de la variable: " << variable << std::endl;
    std::cout << "Dirección de la variable: " << &variable << std::endl;
    std::cout << "Valor del puntero (dirección almacenada): " << puntero << std::endl;
    std::cout << "Valor al que apunta el puntero: " << *puntero << std::endl;

    return 0;
}
```

::: info 📌 Nota
Modificar el valor al que apunta un puntero también modifica el valor original de la variable.

```cpp
#include <iostream>

int main() {
    int variable = 42;
    int* puntero = &variable;

    *puntero = 100; // Modifica el valor al que apunta el puntero

    std::cout << "Nuevo valor de la variable: " << variable << std::endl; // Ahora es 100

    return 0;
}
```
:::

Notarás que usamos `&` y `*` en los ejemplos anteriores. Una de las partes complicadas de los punteros es entender estos dos operadores:

- `&` (operador de dirección): Se utiliza para obtener la dirección de memoria de una variable.
- `*` (operador de desreferenciación): Se utiliza para acceder al valor almacenado en la dirección de memoria a la que apunta el puntero.

Tenemos que usar ambos operadores para trabajar con punteros correctamente. Modificar el valor de un puntero sin usar `*` dará lugar a errores de compilación o comportamiento inesperado.

```cpp
#include <iostream>
int main() {
    int variable = 42;
    int* puntero = &variable;

    // Incorrecto: Esto no modifica el valor de 'variable'
    puntero = 100; // Error de compilación // [!code error]

    return 0;
}
```
Puede ser confuso ver tantos símbolos juntos. Hacer mucho uso de punteros puede hacer que el código sea difícil de leer y mantener. Por eso, es importante usarlos con cuidado y solo cuando sea necesario.

::: warning ⚠️ Advertencia
Trabajar con punteros puede ser peligroso si no se hace correctamente. Asegúrate de que un puntero apunta a una dirección válida antes de desreferenciarlo. Desreferenciar un puntero nulo o no inicializado puede causar fallos en el programa.

Pueden que no den errores de compilación, pero sí pueden causar comportamientos inesperados en tiempo de ejecución.
```cpp
#include <iostream>
int main() {
    int* punteroNulo = nullptr; // Puntero nulo

    // Incorrecto: Desreferenciar un puntero nulo
    std::cout << *punteroNulo << std::endl; // Comportamiento indefinido // [!code error]

    return 0;
}
```
:::

## Punteros y arreglos
En C++, los arreglos y los punteros están estrechamente relacionados. El nombre de un arreglo actúa como un puntero al primer elemento del arreglo.

```cpp
#include <iostream>

int main() {
    int arreglo[] = {10, 20, 30, 40, 50};
    int* puntero = arreglo; // El nombre del arreglo es un puntero al primer elemento

    for (int i = 0; i < 5; ++i) {
        std::cout << "Elemento " << i << ": " << *(puntero + i) << std::endl; // Acceso mediante aritmética de punteros
    }

    return 0;
}
```

Los arreglos están ordenados secuencialmente en memoria, por lo que podemos usar aritmética de punteros para recorrerlos. Al sumar un entero a un puntero, avanzamos esa cantidad de elementos en el arreglo.

## Punteros y funciones
Los punteros también se pueden pasar a funciones para permitir que la función modifique el valor original de una variable.

```cpp
#include <iostream>

void modificarValor(int* puntero) {
    *puntero = 99; // Modifica el valor al que apunta el puntero
}

int main() {
    int variable = 42;
    std::cout << "Valor antes de la función: " << variable << std::endl;

    modificarValor(&variable); // Pasamos la dirección de 'variable'

    std::cout << "Valor después de la función: " << variable << std::endl; // Ahora es 99

    return 0;
}
```
En este ejemplo, la función `modificarValor` recibe un puntero a un entero y modifica el valor al que apunta. Al pasar la dirección de `variable` usando `&`, la función puede cambiar su valor original.

## ¿Cuando usar punteros?
Los punteros pueden ser muy peligrosos si no se usan correctamente, pero también son una herramienta poderosa en C++. Úsalos cuando necesites:
- Manipular arreglos o estructuras de datos dinámicas.
- Pasar grandes estructuras a funciones sin copiar todo el contenido.
- Implementar estructuras de datos como listas enlazadas, árboles, etc.

Pero recuerda siempre manejar los punteros con cuidado para evitar errores y comportamientos inesperados en tu código.

