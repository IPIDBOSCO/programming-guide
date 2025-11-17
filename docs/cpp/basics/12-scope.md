---
title: Scope [C++]
---

# Scope en C++

El scope (alcance) en C++ se refiere a la visibilidad y el tiempo de vida de las variables y funciones dentro del código. Determina dónde se pueden acceder a las variables y funciones, y cuándo dejan de existir.

## Tipos de scope
Existen varios tipos de scope en C++:
1. **Scope global**: Las variables y funciones definidas fuera de cualquier función o clase tienen scope global. Son accesibles desde cualquier parte del programa después de su declaración.

```cpp
#include <iostream>
int globalVar = 10; // Variable global
void mostrarGlobal() {
    std::cout << "Variable global: " << globalVar << std::endl;
}
```

2. **Scope local**: Las variables definidas dentro de una función o bloque tienen scope local. Solo son accesibles dentro de ese bloque o función.

```cpp
void funcionLocal() {
    int localVar = 20; // Variable local
    std::cout << "Variable local: " << localVar << std::endl;
}
```
Si intentamos acceder a `localVar` fuera de `funcionLocal`, obtendremos un error de compilación.
```cpp
void funcionLocal() {
    int localVar = 20; // Variable local
}

int main() {
    std::cout << localVar << std::endl; // Error: localVar no está definido aquí // [!code error]
    return 0;
}
```

3. **Scope de bloque**: Las variables definidas dentro de un bloque (delimitado por llaves `{}`) tienen scope limitado a ese bloque.

```cpp
void funcionBloque() {
    {
        int bloqueVar = 30; // Variable de bloque
        std::cout << "Variable de bloque: " << bloqueVar << std::endl;
    }
    // std::cout << bloqueVar << std::endl; // Error: bloqueVar no está definido aquí // [!code error]
}
```

4. **Scope de clase**: Las variables y funciones definidas dentro de una clase tienen scope limitado a esa clase. Pueden ser accedidas mediante objetos de la clase o funciones miembro.

```cpp
class MiClase {
public:
    int atributo;
    void mostrarAtributo() {
        std::cout << "Atributo de la clase: " << atributo << std::endl;
    }
};
```

## Tiempo de vida de las variables
El tiempo de vida de una variable se refiere al período durante el cual la variable existe en la memoria. Las variables locales y de bloque existen solo mientras se ejecuta el bloque o función en la que fueron definidas. Las variables globales existen durante toda la ejecución del programa.

```cpp
#include <iostream>

void funcion() {
    int localVar = 50; // Variable local
    std::cout << "Dentro de la función: " << localVar << std::endl;
} // localVar deja de existir aquí

int main() {
    funcion();
    // std::cout << localVar << std::endl; // Error: localVar no está definido aquí // [!code error]
    return 0;
}
```

::: danger Importante
Recuerda siempre declarar tus variables en el scope adecuado para evitar errores de acceso y asegurar un buen manejo de la memoria en tu programa.
:::

