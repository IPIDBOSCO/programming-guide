---
title: Cadenas de texto en C++
slug: cpp-modularity-strings
tags: cpp,modularity,strings
---

# Cadenas de texto en C++

Usualmente cuando queremos trabajar con texto en C, utilizamos arreglos de caracteres (`char`). Sin embargo, C++ ofrece una clase llamada `std::string` que facilita el manejo de cadenas de texto.

Los string son cadenas de caracteres que pueden crecer y reducir su tamaño dinámicamente, lo que los hace más flexibles que los arreglos de caracteres tradicionales.

## Introducción a `std::string`

Para utilizar `std::string`, primero debes incluir la cabecera `<string>`. Los strings se declaran utilizando la clase `std::string`.

```cpp
#include <string>
#include <iostream>

int main() {
    std::string saludo = "Hola, mundo!";
    std::cout << saludo << std::endl;

    return 0;
}
```

Al ser parte de la biblioteca estándar, los strings se encuentran en el espacio de nombres `std`, por lo que es común utilizar la directiva `using namespace std;` para evitar tener que escribir `std::` antes de cada uso.

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string saludo = "Hola, mundo!";
    cout << saludo << endl;

    return 0;
} 
```

## Operaciones básicas con strings

Los strings ofrecen varias operaciones útiles, como concatenar, obtener la longitud y acceder a caracteres individuales.

### Concatenar strings

Puedes concatenar strings utilizando el operador `+` o el método `append()`.

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string saludo = "Hola, ";
    string nombre = "Juan";

    // Concatenación usando el operador +
    string mensaje1 = saludo + nombre;
    cout << mensaje1 << endl;

    // Concatenación usando el método append()
    string mensaje2 = saludo;
    mensaje2.append(nombre);
    cout << mensaje2 << endl;

    return 0;
}
```
### Obtener la longitud de un string

Puedes obtener la longitud de un string utilizando el método `length()` o `size()`.

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string saludo = "Hola, mundo!";
    
    cout << "Longitud del saludo: " << saludo.length() << endl;
    cout << "Tamaño del saludo: " << saludo.size() << endl;

    return 0;
}
```
### Acceder a caracteres individuales

Puedes acceder a caracteres individuales de un string utilizando el operador de subíndice `[]` o el método `at()`.

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string saludo = "Hola, mundo!";
    
    // Acceder a caracteres usando []
    cout << "Primer carácter: " << saludo[0] << endl;
    
    // Acceder a caracteres usando at()
    cout << "Segundo carácter: " << saludo.at(1) << endl;

    return 0;
}
```

## Caracteres especiales

En los strings, puedes utilizar caracteres especiales como `\n` para nueva línea, `\t` para tabulación, y `\\` para una barra invertida. También puedes usar comillas dobles dentro de un string utilizando `\"`. Al `\` también se le conoce como carácter de escape.

<code-runner language="cpp" >

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string mensaje = "Hola,\n\tMundo! \"C++ es genial!\" \\";
    cout << mensaje << endl;

    return 0;
}
```

</code-runner>

## Métodos útiles de `std::string`

Aquí hay algunos métodos útiles que puedes utilizar con `std::string`:
- `substr(pos, len)`: Devuelve una subcadena que comienza en la posición `pos` y tiene una longitud de `len`.
- `find(sub)`: Busca la subcadena `sub` y devuelve la posición de la primera aparición.
- `replace(pos, len, sub)`: Reemplaza la parte del string que comienza en `pos` y tiene una longitud de `len` con la subcadena `sub`.
