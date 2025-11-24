---
title: Estructuras [C++]
---

# Estructuras en C++

En C++, una estructura (struct) es un tipo de dato compuesto que permite agrupar variables bajo un mismo nombre. Las estructuras son similares a las clases, pero por defecto, los miembros de una estructura son públicos, mientras que en las clases son privados. Más adelante, veremos las diferencias entre estructuras y clases.

## Definición de una estructura

Para definir una estructura, se utiliza la palabra clave `struct` seguida del nombre de la estructura y un bloque de llaves que contiene los miembros de la estructura. Aquí hay un ejemplo básico:

```cpp
#include <iostream>
using namespace std;

struct Persona {
    string nombre;
    int edad;
};

int main() {
    // Crear una instancia de la estructura Persona
    Persona p1;
    p1.nombre = "Juan";
    p1.edad = 30;

    cout << "Nombre: " << p1.nombre << ", Edad: " << p1.edad << endl;

    return 0;
}
```

## Estructuras con funciones miembro

Las estructuras también pueden contener funciones miembro, al igual que las clases. Aquí hay un ejemplo de una estructura con una función miembro:

```cpp
#include <iostream>
using namespace std;

struct Rectangulo {
    int ancho;
    int alto;

    int area() {
        return ancho * alto;
    }
};

int main() {
    Rectangulo rect;
    rect.ancho = 5;
    rect.alto = 10;

    cout << "Área del rectángulo: " << rect.area() << endl;

    return 0;
}
```

