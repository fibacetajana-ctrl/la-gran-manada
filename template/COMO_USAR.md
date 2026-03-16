# Guía de implementación — Nuevo club

Esta guía te lleva desde cero hasta tener tu plataforma funcionando en una tarde.

---

## Antes de empezar

Necesitas:
- Una cuenta de Google (para Firebase)
- Una cuenta de GitHub (gratuita)
- 2-3 horas la primera vez

No necesitas:
- Saber programar
- Pagar nada
- Instalar software

---

## Paso 1 — Fork del repositorio (5 min)

1. Entra a `github.com/escuela-de-futbol/manada`
2. Clic en **"Fork"** (arriba a la derecha)
3. En "Repository name" escribe el nombre de tu club, por ejemplo: `los-dragones`
4. Clic en **"Create fork"**

Ahora tienes tu propia copia en `github.com/TU-USUARIO/los-dragones`.

---

## Paso 2 — Crear el proyecto Firebase (15 min)

1. Entra a [console.firebase.google.com](https://console.firebase.google.com)
2. **"Agregar proyecto"** → ponle el nombre de tu club
3. Desactiva Google Analytics → **"Crear proyecto"**
4. En el panel, clic en el ícono **`</>`** (Web) → registra la app
5. **Copia el bloque `firebaseConfig`** que aparece — lo necesitarás en el Paso 4
6. Activa **Firestore Database** → modo de prueba → región `southamerica-east1`
7. Activa **Authentication** → Correo electrónico/Contraseña

---

## Paso 3 — Definir tu universo narrativo (30 min)

Antes de tocar código, define tu universo. Responde estas preguntas:

```
Nombre del universo:     ___________________________
Frase del universo:      ___________________________
Cómo se llaman los XP:  ___________________________  (ej: Rugidos, Estrellas, Energía)
Cómo se llaman los participantes: _______________  (ej: Crías, Héroes, Exploradores)
Cómo se llama el monitor:         _______________  (ej: El Anciano, El Capitán, El Guía)
Cómo se llaman los equipos:       _______________  (ej: Manadas, Clanes, Escuadrones)

Rangos (5 niveles, del más básico al más alto):
  1. _____________________________________________
  2. _____________________________________________
  3. _____________________________________________
  4. _____________________________________________
  5. _____________________________________________
```

> **Consejo:** Usa el generador de universos en Claude (claude.ai) si quieres que la IA te ayude a crear todo esto automáticamente.

---

## Paso 4 — Personalizar el código (45 min)

Edita el archivo `template/config.js` con tus datos y luego cópialo en `index.html` y `monitor.html`.

Abre `index.html` en GitHub (clic en el archivo → lápiz ✏️) y reemplaza:

```javascript
// ── BUSCA ESTA SECCIÓN Y REEMPLÁZALA ──────────────────────
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.firebasestorage.app",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};
```

Luego personaliza los textos del universo buscando y reemplazando:

| Buscar | Reemplazar por |
|--------|---------------|
| `La Gran Manada` | Nombre de tu universo |
| `Rugidos` | Tu nombre para los XP |
| `Crías` | Tu nombre para los participantes |
| `El Anciano de la Manada` | Tu nombre para el monitor |
| `#FF6B9D` | Tu color principal (hex) |

Haz lo mismo en `monitor.html`.

---

## Paso 5 — Activar GitHub Pages (5 min)

1. En tu repositorio, ve a **Settings → Pages**
2. En "Branch" selecciona **main** y carpeta **/ (root)**
3. Clic en **Save**
4. En 1-2 minutos tu URL estará activa:
   - App participantes: `TU-USUARIO.github.io/los-dragones`
   - Panel monitor: `TU-USUARIO.github.io/los-dragones/monitor.html`

---

## Paso 6 — Restringir la seguridad (10 min)

**Importante:** Antes de compartir la URL con los participantes, restringe tu clave de Firebase:

1. Entra a [console.cloud.google.com](https://console.cloud.google.com) → tu proyecto
2. **APIs y servicios → Credenciales** → clic en tu clave
3. En "Referentes HTTP" agrega: `https://TU-USUARIO.github.io/*`
4. En Firebase Console → **Authentication → Settings → Dominios autorizados** → agrega: `TU-USUARIO.github.io`

---

## Paso 7 — Crear cuentas para los participantes (10 min)

Para cada participante:
1. Firebase Console → **Authentication → Users → "Añadir usuario"**
2. Correo simple: `nombre@tuclub.com` (no necesita ser real)
3. Contraseña fácil de recordar: `nombre + número`
4. Comparte las credenciales con cada participante o apoderado

---

## ¿Necesitas ayuda?

Abre Claude (claude.ai) y describe tu situación:

```
Estoy implementando la plataforma Escuela de Fútbol.
Hice fork del repositorio en github.com/[TU-USUARIO]/[TU-REPO].
Mi deporte es [DEPORTE], grupo de [EDAD], [N] participantes.
[DESCRIBE TU PROBLEMA O LO QUE QUIERES PERSONALIZAR]
```

---

## Comparte tu implementación

¿Tu plataforma ya está funcionando? Envía un Pull Request agregando tu club a la lista de instancias activas en el README principal. Cada club que comparte su experiencia hace la plataforma mejor para todos.
