# ⚙️ Just in Time "GIT GUD" Physics Laboratory Suite

> **Interactive Web-Based & Standalone Offline Physics Simulation Engine**  
> Developed under the **CNHS Creative Technologies Platform** and **rpithon.com**.

---

## 👨‍💻 Developer Attribution & Licensing

* **Author & Lead Creator:** **Jorge Victor M. Sales** (`swordeye` / `thearbiter`)
* **Platform:** CNHS Creative Technologies / [rpithon.com](https://rpithon.com)
* **License:** Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (**CC BY-NC-SA 4.0**)

---

## 📌 Framework Origin & Pedigree

> **Note on Architecture:** The automated GitHub version checker engine, modular multi-tab category interface, COPPA safety buffer margins, and dual Catppuccin light/dark theme persistence engine utilized in this sub-suite were **directly adapted and refined from the architectural framework established in the earlier `rpithon.com` (RP2040 MicroPython Laboratory Suite) project**.

This modular design isolates all standalone assets, offline PWA manifests, and icons within the `./physics/` directory to facilitate seamless bundling into independent Android APK packages or standalone PWAs.

---

## 🚀 Key Features

* **Modular 4-Part Layout:** Standardized interface across all optics and kinematics engines featuring real-time visual canvas viewports, parameter control sliders, dynamic vector outputs, and step-by-step physics inspectors.
* **Catppuccin Dual-Theme System:** Instant toggling between **Mocha Dark Mode** and **Latte Light Mode** with persistent `localStorage` synchronization across all module pages.
* **Automated GitHub Version Checker:** Built-in modal dialog engine that polls `version_physics.json` with cache-busting request parameters (`?t=Date.now()`) to inform users of new releases and direct APK downloads.
* **Standalone PWA & APK Ready:** Completely self-contained asset structure (`manifest.json`, `icon-512.png`) enabling offline installation via Web App or Android APK wrappers.
* **COPPA Layout Safety:** Integrated `120px` bottom padding buffers across all views to prevent interface overlap with mobile navigation bars and display cutouts.

---

## 📚 Module Overview

| Category | Module Title | Description | Status |
| :--- | :--- | :--- | :--- |
| **🔍 Optics** | `lens.html` | **Single Thin Lens Engine** — Biconvex, Plano-Convex, Biconcave, and Plano-Concave geometries with real-time ray tracing and Lens Maker formula calculation. | **ACTIVE** |
| **🔍 Optics** | `double_lens.html` | **Compound Optics & Telescopes** — Astronomical Refracting Telescopes, Galilean Telescopes, Compound Microscopes, and Relay Lenses with multi-stage magnification. | **ACTIVE** |
| **🚀 Kinematics** | `projectile.html` | **2D Projectile Trajectories** — Ballistic flight simulator with live graph overlays ($y-x$, $V_y-t$, $V_x-t$), quadratic air drag coefficient ($k$), and solution highlighting. | **ACTIVE** |
| **🌊 Harmonics** | `pendulum.html` | **Simple Harmonic Motion** — Simple, physical, and damped pendulum oscillators with phase-space diagrams and live energy conservation tracking. | **ROADMAP** |
| **🌊 Waves** | `waves.html` | **Ripple Tank & Wave Interference** — 2D wave tank simulating Young's double-slit interference, superposition, diffraction, and nodal lines. | **ROADMAP** |
| **⚡ Circuits** | `circuits.html` | **DC Circuit Dynamics** — Schematic builder with resistor networks, voltage dividers, dynamic current flow vectors, and Kirchhoff mesh analysis. | **ROADMAP** |

---

## 📁 Repository & Directory Architecture

```text
physics/
├── index.html            # Main Physics Suite Hub & Category Navigation
├── lens.html             # Single Thin Lens Simulator Engine
├── double_lens.html       # Compound Optics & Telescope Simulator
├── projectile.html        # 2D Ballistics & Trajectory Engine
├── pendulum.html          # Simple Harmonic Motion Simulator (Upcoming)
├── waves.html             # Ripple Tank & Wave Interference (Upcoming)
├── circuits.html          # DC Circuit Dynamics Engine (Upcoming)
├── version_physics.json   # Remote GitHub Versioning & Update Manifest
├── manifest.json          # PWA Web App Manifest
├── icon-512.png           # High-Contrast "GG / JIT" 512x512 App Icon
└── README.md              # Suite Documentation & Developer Attribution
