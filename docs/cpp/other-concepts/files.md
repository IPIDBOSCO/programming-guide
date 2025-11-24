---
title: Manejo de ficheros en C++
---

# Manejo de ficheros en C++

En C++, el manejo de ficheros se realiza principalmente a través de la biblioteca estándar `<fstream>`, que proporciona clases para trabajar con archivos de texto y binarios. Las clases más comunes son `std::ifstream` para lectura de archivos, `std::ofstream` para escritura de archivos y `std::fstream` para operaciones de lectura y escritura.

## Abrir un archivo

Para abrir un archivo, se crea un objeto de la clase correspondiente y se especifica el nombre del archivo junto con el modo de apertura (lectura, escritura, etc.). Aquí hay un ejemplo de cómo abrir un archivo para escritura:

```cpp
#include <fstream>
#include <iostream>

using namespace std;

int main(){
    // Abrir un archivo para escritura
    ofstream outFile("ejemplo.txt");

    // Escribir en el archivo
    outFile << "Hola, mundo!" << endl;
    
    // Cerrar el archivo
    outFile.close();
    
    return 0;
}
```

Es necesario cerrar el archivo después de terminar las operaciones para asegurarse de que todos los datos se escriban correctamente y liberar los recursos asociados.

Luego, ese archivo puede abrirse para lectura, se puede usar el método `getline` para leer línea por línea y el uso de un bucle para procesar cada línea:

```cpp
#include <fstream>
#include <iostream>

using namespace std;

int main(){
    // Abrir un archivo para lectura
    ifstream inFile("ejemplo.txt");
    string linea;

    // Leer del archivo línea por línea
    while (getline(inFile, linea)){
        cout << linea << endl;
    }
    
    // Cerrar el archivo
    inFile.close();
    
    return 0;
}
```

## Modos de apertura de archivos

Al abrir un archivo, se pueden especificar diferentes modos de apertura utilizando banderas. Algunos de los modos más comunes son:
- `ios::in`: Abrir para lectura.
- `ios::out`: Abrir para escritura.
- `ios::app`: Abrir para añadir al final del archivo.
- `ios::binary`: Abrir en modo binario.
Estos modos se pueden combinar utilizando el operador OR (`|`). Por ejemplo, para abrir un archivo para lectura y escritura en modo binario:

```cpp
fstream file("datos.bin", ios::in | ios::out | ios::binary);
```

## Comprobar si un archivo se abrió correctamente
Es importante verificar si un archivo se abrió correctamente antes de intentar leer o escribir en él. Esto se puede hacer utilizando el método `is_open()` o comprobando el estado del flujo:

```cpp
ifstream inFile("no_existe.txt");
if (!inFile.is_open()){
    cerr << "Error al abrir el archivo." << endl;
    return 1;
}
```

## Manejo de errores
Al trabajar con archivos, es crucial manejar posibles errores, como la imposibilidad de abrir un archivo o errores durante la lectura/escritura. Se pueden utilizar las funciones `fail()`, `eof()`, y `bad()` para detectar estos errores.

```cpp
ifstream inFile("ejemplo.txt");
if (inFile.fail()){
    cerr << "Error al abrir el archivo." << endl;
    return 1;
}
string linea;
while (getline(inFile, linea)){
    if (inFile.bad()){
        cerr << "Error durante la lectura del archivo." << endl;
        break;
    }
    cout << linea << endl;
}
```

::: tip ✅ Consejo
También puedes hacer uso de [excepciones](error-handling.md) para manejar los errores. 
:::

## Ejemplo completo

<code-runner language="cpp">

```cpp
#include <fstream>
#include <iostream>

using namespace std;

int main(){
    // Crear y escribir en un archivo
    ofstream outFile("/tmp/ejemplo.txt");
    if (!outFile){
        cerr << "Error al crear el archivo." << endl;
        return 1;
    }
    outFile << "Hola, mundo!" << endl;
    outFile.close();

    // Leer del archivo
    ifstream inFile("/tmp/ejemplo.txt");
    if (!inFile){
        cerr << "Error al abrir el archivo." << endl;
        return 1;
    }
    string linea;
    while (getline(inFile, linea)){
        cout << linea << endl;
    }
    inFile.close();

    return 0;
}
```

</code-runner>

Este programa crea un archivo llamado `ejemplo.txt`, escribe una línea de texto en él, luego lo abre para lectura y muestra su contenido en la consola. Además, maneja posibles errores al abrir los archivos.
