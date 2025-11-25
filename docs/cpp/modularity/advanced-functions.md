---
title: Funciones avanzadas [C++]
---

# Funciones avanzadas en C++

El lenguaje C++ incorpora varias maneras de extender las capacidades de las funciones, más allá de sus capacidades de básicas.

## Funciones en línea

Las funciones en línea son una característica que permite al compilador insertar el código de la función directamente en el lugar donde se llama, en lugar de realizar una llamada tradicional a la función. Esto puede mejorar el rendimiento al reducir la sobrecarga de la llamada a la función, especialmente para funciones pequeñas y frecuentemente llamadas.

```cpp
inline int square(int x) {
    return x * x;
}
```

No obstante, el uso excesivo de funciones en línea puede aumentar el tamaño del código generado, lo que podría afectar negativamente al rendimiento de la caché. No debe reemplazar todas las funciones con funciones en línea indiscriminadamente, en especial aquellas que son grandes o complejas.

## Funciones con parámetros predeterminados

Las funciones con parámetros predeterminados permiten definir valores por defecto para uno o más parámetros de una función. Si el llamador no proporciona un valor para esos parámetros, se utilizarán los valores predeterminados.

```cpp
void greet(std::string name = "Guest") {
    std::cout << "Hello, " << name << "!" << std::endl;
}

greet(); // Imprime: Hello, Guest!
greet("Alice"); // Imprime: Hello, Alice!
```

## Funciones lambda

Las funciones lambda son funciones anónimas que se pueden definir en línea dentro de otra función. Son útiles para operaciones cortas y específicas, como en algoritmos de la biblioteca estándar (STL).

La sintaxis básica de una función lambda es la siguiente:

```cpp
[captura](parámetros) -> tipo_de_retorno {
    // cuerpo de la función
};
```

Por ejemplo, una función lambda que suma dos números podría definirse así:

```cpp
auto sum = [](int a, int b) -> int {
    return a + b;
};

int result = sum(3, 4); // result es 7
```

### Clausura de captura

Las funciones lambda pueden capturar variables del entorno circundante. La captura puede ser por valor o por referencia. Cuando es por valor, se crea una copia de la variable; cuando es por referencia, se utiliza la variable original.

```cpp
for (int i = 0; i < 5; ++i) {
    auto print = [i]() { std::cout << i << std::endl; }; // captura el valor de i
    print();
}
```

la captura por referencia se realiza utilizando el símbolo `&`:

```cpp
int factor = 2;
auto multiply = [&factor](int x) { return x * factor; };
int result = multiply(5); // result es 10

factor = 3;
result = multiply(5); // result es 15
```

## Funciones variádicas

Las funciones variádicas son funciones que pueden aceptar un número variable de argumentos. En C++, esto se puede lograr utilizando la biblioteca `<cstdarg>` o, de manera más moderna, utilizando plantillas de variadic.

### Usando `<cstdarg>`

```cpp
#include <cstdarg>
#include <iostream>

void printNumbers(int count, ...) {
    va_list args;
    va_start(args, count);
    for (int i = 0; i < count; ++i) {
        int num = va_arg(args, int);
        std::cout << num << " ";
    }
    va_end(args);
    std::cout << std::endl;
}

printNumbers(3, 1, 2, 3); // Imprime: 1 2 3
```

## Funciones recursivas

Las funciones recursivas son aquellas que se llaman a sí mismas para resolver un problema dividiéndolo en subproblemas más pequeños. Un ejemplo clásico es la función para calcular el factorial de un número:

```cpp
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```

Estas son algunas de las funciones avanzadas que C++ ofrece para mejorar la modularidad y la eficiencia del código. Utilizarlas adecuadamente puede llevar a un código más limpio, eficiente y fácil de mantener.

## Sobrecarga de funciones

La sobrecarga de funciones permite definir múltiples funciones con el mismo nombre, pero con diferentes listas de parámetros. El compilador selecciona la función adecuada en función de los argumentos proporcionados en la llamada.

```cpp
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int main() {
    int intResult = add(2, 3); // Llama a la función que acepta enteros
    double doubleResult = add(2.5, 3.5); // Llama a la función que acepta dobles
    return 0;
}
```
