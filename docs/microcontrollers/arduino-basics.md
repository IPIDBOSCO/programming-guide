---
title: Introducción al código básico de Arduino
---

# Introducción al código básico de Arduino

Arduino es una plataforma de prototipado electrónico de código abierto que permite a los usuarios crear proyectos interactivos utilizando microcontroladores. El código básico de Arduino se escribe en un lenguaje similar a C/C++ y se carga en la placa Arduino para controlar sus entradas y salidas.

## Estructura básica del código de Arduino

Un programa de Arduino, conocido como "sketch", consta de dos funciones principales: `setup()` y `loop()`.

- `setup()`: Esta función se ejecuta una vez cuando la placa Arduino se enciende o se reinicia. Aquí es donde se configuran las variables, los modos de pin y se inicializan las bibliotecas necesarias.
- `loop()`: Esta función se ejecuta repetidamente después de que `setup()` haya terminado. Aquí es donde se coloca el código que se desea ejecutar continuamente, como leer sensores o controlar actuadores.

```cpp
void setup() {
  // Configuración inicial
}
void loop() {
  // Código que se ejecuta repetidamente
}
```

Dependiendo del IDE de Arduino que se esté utilizando, puede que sea necesario incluir la librería principal de Arduino al inicio del código:

```cpp
#include <Arduino.h>
```

## Funciones comunes

Arduino proporciona una variedad de funciones integradas para facilitar la interacción con el hardware. Algunas de las funciones más comunes incluyen:

- `pinMode(pin, mode)`: Configura un pin específico como entrada o salida.
- `digitalWrite(pin, value)`: Establece un pin digital en alto (HIGH) o bajo (LOW).
- `digitalRead(pin)`: Lee el valor de un pin digital.
- `analogWrite(pin, value)`: Escribe un valor analógico (PWM) en un pin.
- `analogRead(pin)`: Lee el valor de un pin analógico.
- `delay(ms)`: Pausa la ejecución del programa durante un número específico de milisegundos.
- `Serial`: Permite la comunicación serial entre la placa Arduino y el ordenador.
  - `Serial.begin(baudrate)`: Inicializa la comunicación serial a una velocidad específica.
  - `Serial.print(data)`: Envía datos al monitor serial.
  - `Serial.println(data)`: Envía datos al monitor serial con un salto de línea.
