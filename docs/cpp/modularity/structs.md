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

## Diferencias entre estructuras y clases

Aunque las estructuras y las clases son muy similares en C++, hay algunas diferencias clave:
- **Visibilidad por defecto**: En las estructuras, los miembros son públicos por defecto, mientras que en las clases son privados.
- **Uso convencional**: Las estructuras se utilizan comúnmente para agrupar datos simples, mientras que las clases se utilizan para definir objetos con comportamientos más complejos.
Aquí hay un ejemplo que ilustra la diferencia en la visibilidad por defecto:

```cpp
#include <iostream>
using namespace std;

struct MiEstructura {
    int x; // Público por defecto
};

class MiClase {
    int y; // Privado por defecto
public:
    void setY(int valor) {
        y = valor;
    }
    int getY() {
        return y;
    }
};

int main() {
    MiEstructura e;
    e.x = 10; // Acceso directo permitido

    MiClase c;
    // c.y = 20; // Error: 'y' es privado
    c.setY(20); // Acceso a través de métodos públicos
    cout << "x: " << e.x << ", y: " << c.getY() << endl;

    return 0;
}
```

En resumen, las estructuras en C++ son una forma útil de agrupar datos relacionados y pueden contener funciones miembro al igual que las clases. La elección entre usar una estructura o una clase depende del contexto y de las convenciones de codificación.

