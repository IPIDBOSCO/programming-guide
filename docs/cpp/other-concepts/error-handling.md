---
title: Captura y manejo de errores en C++
---

# Captura y manejo de errores en C++

En C++, la captura y manejo de errores se realiza principalmente a través del mecanismo de excepciones. Las excepciones permiten separar el código que maneja los errores del código que realiza las operaciones normales, lo que mejora la legibilidad y mantenibilidad del código.

¿Cómo mejora la legibilidad y mantenibilidad del código al separar el manejo de errores del código normal?

Generalmente, cuando hacemos un programa, debemos anticipar posibles errores que puedan ocurrir durante la ejecución, como errores de entrada/salida, errores de memoria, etc. En lugar de verificar manualmente cada posible error después de cada operación, podemos utilizar excepciones para manejar estos errores de manera más eficiente.

Capturar errores también ayuda a prevenir que el programa se detenga abruptamente debido a un error no manejado, permitiendo que el programa continúe ejecutándose o que se realicen acciones de limpieza antes de finalizar.

## Uso de `try`, `catch` y `throw`

El manejo de excepciones en C++ se realiza utilizando las palabras clave `try`, `catch` y `throw`.

- `try`: Se utiliza para definir un bloque de código en el que pueden ocurrir excepciones.
- `throw`: Se utiliza para lanzar una excepción cuando ocurre un error.
- `catch`: Se utiliza para definir un bloque de código que maneja la excepción lanzada.

Aquí hay un ejemplo básico de cómo usar estas palabras clave para manejar errores:

<code-runner language="cpp" >

```cpp
#include <iostream>
#include <stdexcept>

using namespace std;

int dividir(int a, int b) {
    if (b == 0) {
        throw runtime_error("Error: División por cero");
    }
    return a / b;
}

int main() {
    int x = 10;
    int y = 0;

    try {
        int resultado = dividir(x, y);
        cout << "Resultado: " << resultado << endl;
    } catch (const runtime_error& e) {
        cout << e.what() << endl;
    }

    return 0;
}
```

</code-runner>

En este ejemplo, la función `dividir` lanza una excepción si se intenta dividir por cero. En el bloque `try`, llamamos a la función `dividir`, y si se lanza una excepción, el control se transfiere al bloque `catch`, donde manejamos el error imprimiendo un mensaje.

## Múltiples bloques `catch`
Puedes tener múltiples bloques `catch` para manejar diferentes tipos de excepciones:

```cpp
#include <iostream>
#include <stdexcept>

using namespace std;

void verificarEdad(int edad) {
    if (edad < 0) {
        throw invalid_argument("Error: Edad no puede ser negativa");
    } else if (edad < 18) {
        throw runtime_error("Error: Menor de edad");
    }
}

int main() {
    int edad = -5;

    try {
        verificarEdad(edad);
        cout << "Edad válida." << endl;
    } catch (const invalid_argument& e) {
        cout << e.what() << endl;
    } catch (const runtime_error& e) {
        cout << e.what() << endl;
    }

    return 0;
}
```

## Manejo de errores en operaciones con archivos
Al trabajar con archivos, es crucial manejar posibles errores, como la imposibilidad de abrir un archivo o errores durante la lectura/escritura. Se pueden utilizar las funciones `fail()`, `eof()`, y `bad()` para detectar estos errores.


