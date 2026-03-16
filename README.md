# ⚽ Escuela de Fútbol — Plataforma de Gamificación Deportiva

> **Convierte cada entrenamiento en una aventura.** Motor de gamificación narrativa para escuelas de fútbol, clubes deportivos y colegios que quieren conectar con las nuevas generaciones.

---

## ¿Qué es esto?

**Escuela de Fútbol** es una plataforma de código abierto que permite a entrenadores y coordinadores deportivos implementar mecánicas de videojuego (gamificación) en sus entrenamientos diarios — sin necesidad de conocimientos técnicos avanzados.

El núcleo del sistema es un **generador de universos narrativos**: cada escuela crea su propia historia (los participantes no solo entrenan, sino que *suben de nivel* en su propio viaje del héroe).

### ¿Cómo funciona en la práctica?

Cada participante tiene un **perfil con niveles de logro** a tres escalas:

| Escala | Nombre | Descripción |
|--------|--------|-------------|
| **Macro** | Temporada completa | Progresión de rangos a lo largo del año |
| **Meso** | Bloques temáticos | Objetivos por unidad de 3-4 semanas |
| **Micro** | Sesión individual | Logros específicos de cada entrenamiento |

Los logros se registran en una **cartola personal** que equilibra dos dimensiones:
- **Técnico-deportiva**: fundamentos, habilidades motrices, táctica
- **Lúdico-socio-recreativa**: trabajo en equipo, valores, bienestar emocional

---

## Piloto activo: La Gran Manada 🦁

Este repositorio aloja la primera instancia del sistema, aplicada a un **taller de fútbol femenino en Reñaca, Chile** (niñas de 10 años, nivel 5ème/4ème).

**Universo narrativo:** Mundo animal — las participantes son "Crías" que escalan desde `🐾 Cría de la Sabana` hasta `🦅 Leyenda de la Gran Manada`.

**Demo en vivo:**
- 🐾 App participantes → [escuela-de-futbol.github.io/manada](https://escuela-de-futbol.github.io/manada)
- 🦁 Panel del monitor → [escuela-de-futbol.github.io/manada/monitor.html](https://escuela-de-futbol.github.io/manada/monitor.html)

---

## Funcionalidades principales

### Para participantes
- Perfil personal con rango, puntos de experiencia (Rugidos/XP) y barra de progreso
- Cartola macro: progresión de temporada con 5 rangos desbloqueables
- Cartola meso: objetivos por bloque con checkboxes interactivos
- Colección de insignias (Marcas de Instinto) que se desbloquean automáticamente
- Hub de material: videos, artículos, historias inspiradoras y ejercicios publicados por el monitor
- Celebración visual (confetti) al completar objetivos

### Para el monitor (entrenador)
- Panel de resumen del grupo: estado de todas las participantes en tiempo real
- Marcado de objetivos directamente desde tablet durante el entrenamiento
- Registro de asistencia por sesión con historial
- Gestión de cuentas de participantes
- Publicación de material educativo (videos YouTube, artículos, casos exitosos)

### Motor de narrativa (generador)
- Wizard de 3 pasos para definir el universo narrativo de cualquier grupo
- Diagnóstico de intereses del grupo (modo pantalla proyectada o modo monitor)
- Generación automática con IA: nombre, rangos, vocabulario, insignias, misión de apertura
- 8 tonos narrativos disponibles: aventura épica, mundo animal, espacio, naturaleza, fantasía, civilización, ciencia, academia élite

---

## Stack tecnológico

### Piloto actual (HTML + Firebase)
```
Frontend:   HTML5 + CSS3 + JavaScript vanilla
Base datos: Firebase Firestore (tiempo real)
Auth:       Firebase Authentication
Hosting:    GitHub Pages (gratuito)
IA:         API Anthropic Claude (generador narrativo)
```

### Stack recomendado para escalar (v2.0)
```
Frontend:   React / Next.js
Backend:    Supabase o Firebase
IA Engine:  API Anthropic Claude (desafíos dinámicos + narrativa)
Hosting:    Vercel (gratuito en plan hobby)
```

---

## Estructura del repositorio

```
manada/
├── index.html          # App web de participantes
├── monitor.html        # Panel del entrenador/monitor
├── README.md           # Este archivo
│
├── piloto/
│   └── universo.md     # Documentación de La Gran Manada
│
└── template/
    ├── COMO_USAR.md    # Guía paso a paso para nuevos clubes
    └── config.js       # Archivo de configuración vacío (personalizable)
```

---

## Cómo usar esto en tu club

### Opción A — Sin código (recomendada para empezar)

1. Haz **fork** de este repositorio en tu cuenta de GitHub
2. Lee `template/COMO_USAR.md`
3. Crea tu proyecto en [Firebase](https://console.firebase.google.com) (gratuito)
4. Edita `template/config.js` con tus datos
5. Activa GitHub Pages en Settings → Pages
6. Tu plataforma estará en `tu-usuario.github.io/manada`

### Opción B — Con asistencia de IA

Abre una conversación con Claude (claude.ai) y pega este prompt:

```
Quiero implementar la plataforma Escuela de Fútbol en mi club.
Mi contexto: [deporte], [edad del grupo], [nombre del club], [ciudad].
Ayúdame a: 1) generar el universo narrativo, 2) configurar Firebase,
3) personalizar el index.html con mis colores y datos.
```

---

## Evidencia científica detrás del modelo

La metodología se basa en revisiones sistemáticas sobre gamificación en educación física:

- **Ferriz-Valero et al. (2023)** — La gamificación aumenta la motivación intrínseca de manera estadísticamente significativa (p < 0,001) en edades 8-14 años
- **Arufe-Giráldez et al. (2022)** — Revisión de 26 estudios: las sesiones gamificadas son más motivadoras y fomentan el trabajo colaborativo
- **Molina Heredia et al. (2025)** — Aumento significativo en niveles de actividad física y cohesión social en grupos con gamificación digital

El modelo PBL (Puntos-Insignias-Clasificaciones) se combina con el modelo MDA (Mecánicas-Dinámicas-Estética) para lograr motivación sostenida a largo plazo.

---

## Roadmap

- [x] Motor de generación de universos narrativos
- [x] App de participantes (perfil, cartola macro/meso, insignias, material)
- [x] Panel del monitor (resumen, asistencia, contenido)
- [x] Integración Firebase (Auth + Firestore)
- [x] Piloto activo: La Gran Manada (Reñaca, Chile)
- [ ] Cartola de sesión (micro) con indicadores específicos por objetivo
- [ ] Visor de fichas para apoderados
- [ ] Notificaciones push al desbloquear logros
- [ ] Panel multi-grupo (varios equipos en un mismo club)
- [ ] Stack React/Next.js para escalabilidad
- [ ] Dashboard analítico para coordinadores deportivos

---

## Contribuir

¿Tu club quiere usar esta plataforma? ¿Tienes una mejora que proponer?

1. Haz fork del repositorio
2. Crea una rama con tu mejora: `git checkout -b feature/nombre-de-tu-mejora`
3. Envía un Pull Request describiendo qué hiciste y en qué contexto lo probaste

Cada Pull Request aceptado hace la plataforma mejor para todas las escuelas del mundo.

---

## Licencia

MIT — libre para uso personal, educativo y comercial con atribución.

---

## Contacto

Proyecto iniciado en colaboración con Claude (Anthropic) como herramienta de desarrollo asistido por IA.

> *"En la sabana, los que corren juntos llegan más lejos."*
> — La Gran Manada, Reñaca 2025
