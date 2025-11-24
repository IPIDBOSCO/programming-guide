---
title: Encapsulación en C++
---

# Encapsulación en C++

La encapsulación es un principio fundamental de la programación orientada a objetos que consiste en agrupar datos (atributos) y métodos (funciones) que operan sobre esos datos dentro de una misma unidad llamada clase. Además, la encapsulación permite controlar el acceso a los datos, protegiéndolos de modificaciones no autorizadas desde fuera de la clase.

## Modificadores de acceso
En nuestros ejemplos anteriores, hemos utilizado el modificador de acceso `public` para permitir el acceso a los miembros de la clase desde fuera de la clase.

En C++, los Modificadores de acceso (`public`, `private` y `protected`) controlan la visibilidad de los miembros de una clase o estructura.
- `public`: Los miembros declarados como públicos pueden ser accedidos desde cualquier parte del programa.
- `private`: Los miembros declarados como privados solo pueden ser accedidos desde dentro de la propia clase o estructura.
- `protected`: Los miembros declarados como protegidos pueden ser accedidos desde la propia clase y desde las clases derivadas (herencia).

En el ejemplo siguiente se se muestra como dará error el acceso a un miembro privado desde fuera de la clase:

<code-runner language="cpp" showErrorOutput="true" >

```cpp
#include <iostream>
using namespace std;

class MiClase {
private:
    int datoPrivado;
public:
    int datoPublico;
};

int main() {
    MiClase obj;
    obj.datoPublico = 10; // Acceso permitido
    obj.datoPrivado = 20; // Error: 'datoPrivado' es privado // [!code error]

    return 0;
}
```
</code-runner>

En este ejemplo, intentar acceder a `datoPrivado` desde fuera de la clase `MiClase` resultará en un error de compilación, ya que es un miembro privado. En cambio, `datoPublico` puede ser accedido sin problemas.

::: warning Nota
Por defecto los miembros de una clase son `private` si no se especifica ningún modificador de acceso, mientras que en las estructuras son `public` por defecto.
:::

Para permitir el acceso controlado a los miembros privados, se suelen utilizar métodos públicos llamados getters y setters. Los getters permiten obtener el valor de un atributo privado, mientras que los setters permiten modificar su valor de manera controlada.

```cpp
#include <iostream>
using namespace std;

class Persona {
private:
    string nombre;
    int edad;
public:
    // Getter para el nombre
    string getNombre() {
        return nombre;
    }

    // Setter para el nombre
    void setNombre(string n) {
        nombre = n;
    }

    // Getter para la edad
    int getEdad() {
        return edad;
    }

    // Setter para la edad
    void setEdad(int e) {
        if (e >= 0) { // Validación simple
            edad = e;
        }
    }
};

int main() {
    Persona p;
    p.setNombre("Carlos");
    p.setEdad(28);

    cout << "Nombre: " << p.getNombre() << ", Edad: " << p.getEdad() << endl;

    return 0;
}
```

## Beneficios de la encapsulación
La encapsulación ofrece varios beneficios importantes:
- **Protección de datos**: Al restringir el acceso a los atributos de una clase, se evita que el estado interno del objeto sea modificado de manera inapropiada.
- **Mantenimiento**: La encapsulación facilita el mantenimiento del código, ya que los cambios en la implementación interna de una clase no afectan a otras partes del programa que utilizan esa clase.
- **Abstracción**: La encapsulación permite ocultar los detalles de implementación y exponer solo una interfaz pública clara y sencilla para interactuar con los objetos.
- **Control de acceso**: Permite definir métodos específicos (getters y setters) para acceder y modificar los atributos, lo que proporciona un mayor control sobre cómo se manipulan los datos.

En resumen, la encapsulación es una práctica esencial en la programación orientada a objetos que ayuda a proteger los datos, mejorar el mantenimiento del código y promover una mejor organización y estructura en los programas.

Aunque como desventajas podemos mencionar que puede aumentar la complejidad del código y que un uso excesivo de getters y setters puede llevar a un diseño menos eficiente.