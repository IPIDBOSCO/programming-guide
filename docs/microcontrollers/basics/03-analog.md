---
title: Entrada y salida analógica en microcontroladores
---

# Entrada y salida analógica en microcontroladores

Los microcontroladores suelen tener la capacidad de manejar señales analógicas a través de sus pines de entrada y salida analógica. A diferencia de las señales digitales, que solo pueden tener dos estados (alto o bajo), las señales analógicas pueden representar una gama continua de valores, lo que permite una mayor precisión en la medición y control de variables como voltaje, temperatura, luz, entre otros.

## Entrada analógica

La entrada analógica se utiliza para leer señales que varían continuamente. Los microcontroladores suelen contar con convertidores analógico-digitales (ADC, por sus siglas en inglés) que convierten la señal analógica en un valor digital que el microcontrolador puede procesar.

::: tabs

=== Arduino

```cpp
int sensorPin = A0; // Pin analógico donde está conectado el sensor
int sensorValue = 0; // Variable para almacenar el valor leído

void setup() {
  Serial.begin(9600); // Inicia la comunicación serial
}

void loop() {
  sensorValue = analogRead(sensorPin); // Lee el valor analógico
  Serial.println(sensorValue); // Envía el valor al monitor serial
  delay(1000); // Espera 1 segundo antes de la siguiente lectura
}
```

=== ESP-IDF

```c
#include "driver/adc.h"
#include "esp_log.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#define ADC_CHANNEL ADC1_CHANNEL_0

void app_main(void)
{
    adc1_config_width(ADC_WIDTH_BIT_12);
    adc1_config_channel_atten(ADC_CHANNEL, ADC_ATTEN_DB_11);

    while (1) {
        int val = adc1_get_raw(ADC_CHANNEL);
        ESP_LOGI("ADC", "Valor leído: %d", val);
        vTaskDelay(pdMS_TO_TICKS(1000)); // Espera 1 segundo
    }
}
```

:::

## Salida analógica

La salida analógica se utiliza para generar señales que varían continuamente. Muchos microcontroladores no tienen salidas analógicas verdaderas, pero pueden simularlas utilizando modulación por ancho de pulso (PWM, por sus siglas en inglés). La señal PWM alterna rápidamente entre alto y bajo, y la proporción de tiempo que la señal está en alto determina el valor promedio percibido como una señal analógica.

::: tabs

=== Arduino

```cpp
int ledPin = 9; // Pin donde está conectado el LED
int brightness = 0; // Variable para almacenar el brillo

void setup() {
  pinMode(ledPin, OUTPUT); // Configura el pin como salida
}

void loop() {
  for (brightness = 0; brightness <= 255; brightness++) {
    analogWrite(ledPin, brightness); // Ajusta el brillo del LED
    delay(10); // Espera 10 ms
  }
  for (brightness = 255; brightness >= 0; brightness--) {
    analogWrite(ledPin, brightness); // Ajusta el brillo del LED
    delay(10); // Espera 10 ms
  }
}
```

=== ESP-IDF

```c
#include "driver/ledc.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#define LEDC_CHANNEL LEDC_CHANNEL_0
#define LEDC_TIMER LEDC_TIMER_0
#define LEDC_FREQUENCY 5000 // Frecuencia PWM en Hz

void app_main(void)
{
    ledc_timer_config_t ledc_timer = {
        .speed_mode = LEDC_HIGH_SPEED_MODE,
        .timer_num = LEDC_TIMER,
        .duty_resolution = LEDC_TIMER_8_BIT,
        .freq_hz = LEDC_FREQUENCY,
        .clk_cfg = LEDC_AUTO_CLK
    };
    ledc_timer_config(&ledc_timer);

    ledc_channel_config_t ledc_channel = {
        .speed_mode = LEDC_HIGH_SPEED_MODE,
        .channel = LEDC_CHANNEL,
        .timer_sel = LEDC_TIMER,
        .intr_type = LEDC_INTR_DISABLE,
        .gpio_num = 18, // Pin donde está conectado el LED
        .duty = 0,
        .hpoint = 0
    };
    ledc_channel_config(&ledc_channel);

    while (1) {
        for (int duty = 0; duty <= 255; duty++) {
            ledc_set_duty(LEDC_HIGH_SPEED_MODE, LEDC_CHANNEL, duty);
            ledc_update_duty(LEDC_HIGH_SPEED_MODE, LEDC_CHANNEL);
            vTaskDelay(pdMS_TO_TICKS(10)); // Espera 10 ms
        }
        for (int duty = 255; duty >= 0; duty--) {
            ledc_set_duty(LEDC_HIGH_SPEED_MODE, LEDC_CHANNEL, duty);
            ledc_update_duty(LEDC_HIGH_SPEED_MODE, LEDC_CHANNEL);
            vTaskDelay(pdMS_TO_TICKS(10)); // Espera 10 ms
        }
    }
}
```

:::

## Resolución y rango

La resolución del ADC y del PWM determina cuántos niveles discretos pueden representarse. Por ejemplo, un ADC de 10 bits puede representar 1024 niveles (0 a 1023), mientras que un ADC de 12 bits puede representar 4096 niveles (0 a 4095). El rango de voltaje que el ADC puede medir o que el PWM puede simular también es importante y varía según el microcontrolador.

Supongamos que un microcontrolador tiene un ADC de 10 bits con un rango de voltaje de 0 a 5V. Un valor leído de 512 correspondería a un voltaje de aproximadamente 2.5V (512/1023 * 5V). También afecta la precisión de las mediciones, si tienes una regla que mide en centímetros y milímetros, el error será de tan solo un milímetro, pero si solo mide en centímetros, el error será de un centímetro. En este caso, un ADC de 10 bits tiene una resolución de aproximadamente 4.88 mV por nivel (5V/1024 niveles).

$$
Resolución\ por\ nivel = \frac{Rango\ de\ voltaje}{Número\ de\ niveles} = \frac{5V}{1024} \approx 4.88mV
$$