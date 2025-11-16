---
title: Entrada y Salida Básica [C++]
---

# Entrada y Salida Básica en C++

Cuando hablamos de entrada y salida, I/O por sus siglas en inglés (Input/Output), nos referimos a la forma en que un programa interactúa con el mundo exterior, ya sea recibiendo datos (entrada) o mostrando resultados (salida). En C++, la biblioteca estándar proporciona varias herramientas para manejar estas operaciones de manera eficiente.

Los `I/O` son diferentes a una [API]() (Interfaz de Programación de Aplicaciones), que es un conjunto de definiciones y protocolos para construir e integrar software. Mientras que una API define cómo los componentes de software deben interactuar, los I/O se centran en la transferencia de datos entre el programa y el usuario o el sistema.

## Flujo de Entrada y Salida

En C++, los flujos de entrada y salida se manejan principalmente a través de la biblioteca `<iostream>`, que proporciona objetos predefinidos para la entrada y salida estándar:

- `std::cin`: Utilizado para la entrada estándar (generalmente el teclado).
- `std::cout`: Utilizado para la salida estándar (generalmente la pantalla).
- `std::cerr`: Utilizado para la salida de errores estándar.
- `std::clog`: Utilizado para la salida de registro estándar.

## Ejemplo Básico de Entrada y Salida

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;
    int age;

    // Solicitar entrada al usuario
    std::cout << "Ingrese su nombre: ";
    std::cin >> name;

    std::cout << "Ingrese su edad: ";
    std::cin >> age;

    // Mostrar salida al usuario
    std::cout << "Hola, " << name << "! Tienes " << age << " años." << std::endl;

    return 0;
}
```

En este ejemplo, el programa solicita al usuario que ingrese su nombre y edad, y luego muestra un mensaje personalizado utilizando la información proporcionada. La función `std::endl` se utiliza para insertar un salto de línea y vaciar el búfer de salida.

### `printf` y `scanf`

Anteriormente, en C, se utilizaban las funciones `printf` y `scanf` para la entrada y salida de datos. Aunque estas funciones todavía se pueden usar en C++, es más común utilizar los flujos de la biblioteca `<iostream>` por su facilidad de uso y seguridad. Se puede utilizar estas funciones usando la biblioteca `<cstdio>`.

```cpp
#include <cstdio>

int main() {
    char name[50];
    int age;

    // Solicitar entrada al usuario
    printf("Ingrese su nombre: ");
    scanf("%49s", name); // Limitar la entrada para evitar desbordamiento

    printf("Ingrese su edad: ");
    scanf("%d", &age);

    // Mostrar salida al usuario
    printf("Hola, %s! Tienes %d años.\n", name, age);

    return 0;
}
```

Para imprimir variables usando `printf`, se utilizan especificadores de formato como `%s` para cadenas y `%d` para enteros. En `scanf`, es importante usar el operador `&` para pasar la dirección de las variables donde se almacenarán los datos ingresados.

- `%d`: Especificador para enteros.
- `%s`: Especificador para cadenas de caracteres.
- `%f`: Especificador para números de punto flotante.
- `%c`: Especificador para caracteres individuales.
- `%lf`: Especificador para números de punto flotante de doble precisión.
- `%u`: Especificador para enteros sin signo.

## Conclusión

