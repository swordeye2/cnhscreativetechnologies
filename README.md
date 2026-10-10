# ⚡ RP2040 MicroPython Interactive Physics & Hardware Curriculum

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Platform](https://img.shields.io/badge/Platform-RP2040%20%2F%20MicroPython-blue.svg)](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html)

> **Author & Legal Creator:** Jorge Victor M. Sales (*swordeye / thearbiter*)  
> **Copyright:** © 2026 Jorge Victor M. Sales. All Rights Reserved.  
> **Platform:** Web-based Interactive Physics & Embedded Hardware Simulations  

Welcome to the **RP2040 Interactive Hardware & Physics Simulation Hub**. This curriculum bridges the gap between low-level MicroPython register code (`duty_u16`, `IRQ_RISING`, `I2C`) and real-world physical dynamics (torque, force vectors, pulse-width timing, and PID feedback stabilization loops).

---

## 🚀 Live Interactive Modules

All modules are self-contained web applications executable directly in modern browsers or via static hosting (e.g., GitHub Pages):

### 🚁 Flight Dynamics & Feedback Control
* **`drone_sim.html`** — **Quadcopter Motor Physics & PID Simulator:** Explores total thrust vector resolutions ($\vec{T}_{\text{total}}$ vs $\vec{F}_g$), pitch torque moments ($\tau_y$), motor thrust scaling ($F \propto \text{RPM}^2$), and $500\text{Hz}$ closed-loop PID auto-stabilization against wind gusts and human control delays.

### ⚙️ PWM, Actuators & Motors
* **`pwm_visualizer.html`** — **PWM Signal & Bit Resolution Converter:** Oscilloscope visualization of PWM duty cycles, live bit-shift conversion scaling (`u16 >> 8` for 16-bit to 8-bit/10-bit hardware mapping), and RP2040 bidirectional GPIO PWM capture/output demonstration.
* **`dc-motor.html`** — **DC Motor H-Bridge Control:** H-bridge directional switching logic (IN1/IN2), PWM duty cycle speed scaling, back-EMF, and mechanical load dynamics.
* **`2WD_motor.html`** — **2WD Differential Drive Robot:** Dual-wheel differential thrust vectoring, turn steering radius equations, and skid-steer MicroPython navigation logic.
* **`servo.html`** — **Servo Motor Pulse Width Physics:** $50\text{Hz}$ PWM pulse width control ($0.5\text{ms} \to 2.5\text{ms}$) and $180^\circ$ horn angular positioning calculations.
* **`servo_voltage.html`** — **Servo Supply Voltage Impact:** Demonstrates how supply voltage ($V_s$: $4.8\text{V}$ vs $6.0\text{V}$) impacts motor horn transit speed, current draw, and stall torque.
* **`stepper.html`** — **Stepper Motor Phase Excitation:** 4-phase 2-coil full-step excitation sequence matrices, electromagnetic vector addition, and step rotation timing.

### 📡 Sensors, Hardware Interrupts & Protocols
* **`pir_interrupt.html`** — **PIR Hardware Interrupts:** Asynchronous event handling using MicroPython `Pin.IRQ_RISING` callbacks for zero-polling CPU efficiency.
* **`i2c_sensor.html`** — **I2C Sensor Register Protocol:** Traces SDA/SCL serial timing, start/stop conditions, 7-bit device addressing, and register byte reading.
* **`i2c_interrupt.html`** — **I2C Communication with Interrupt Alerts:** Asynchronous sensor alert pin interrupts on the RP2040 triggering targeted I2C register polling.

---

## 🛠️ Architecture & Vibe Coding Methodology

This project was architected through **AI-assisted collaborative engineering ("Vibe Coding")**, pairing domain-specific physical concepts, educational progression, and curriculum design by **Jorge Victor M. Sales** with rapid AI execution and technical implementation.

### Flat File Deployment Structure
To ensure zero build steps, simple maintenance, and frictionless static hosting (e.g., GitHub Pages), all files reside flatly at the project root:

```text
├── index.html            # Branded Hub Launcher & IP Attribution Page
├── drone_sim.html        # Quadcopter PID Physics Simulator
├── pwm_visualizer.html   # PWM & Bit-Conversion Visualizer
├── dc-motor.html         # H-Bridge DC Motor Module
├── 2WD_motor.html        # 2WD Skid-Steer Robot Module
├── servo.html            # Standard Servo Module
├── servo_voltage.html    # Voltage Impact Servo Module
├── stepper.html          # Stepper Phase Excitation Module
├── pir_interrupt.html    # Hardware Interrupt Module
├── i2c_sensor.html       # I2C Protocol Visualizer
├── i2c_interrupt.html    # Integrated I2C + IRQ Visualizer
└── LICENSE               # Creative Commons Legal Text
