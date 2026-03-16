/**
 * config.js — Configuración del universo narrativo
 *
 * Instrucciones:
 * 1. Rellena todos los campos marcados con TODO
 * 2. Copia este archivo completo dentro de index.html y monitor.html
 *    reemplazando la sección equivalente en cada uno
 * 3. No elimines ninguna clave — solo cambia los valores
 */

// ── FIREBASE ────────────────────────────────────────────────
// Copia estos valores desde Firebase Console → Configuración del proyecto
const firebaseConfig = {
  apiKey:            "TODO: tu_api_key",
  authDomain:        "TODO: tu-proyecto.firebaseapp.com",
  projectId:         "TODO: tu-proyecto",
  storageBucket:     "TODO: tu-proyecto.firebasestorage.app",
  messagingSenderId: "TODO: tu_sender_id",
  appId:             "TODO: tu_app_id"
};

// ── IDENTIDAD DEL UNIVERSO ───────────────────────────────────
const UNIVERSO = {
  nombre:   "TODO: nombre de tu universo",          // ej: "Los Guardianes del Campo"
  tagline:  "TODO: frase corta del universo",        // ej: "El campo nos une"
  emoji:    "TODO: emoji representativo",            // ej: "⚽" o "🦁" o "🚀"
};

// ── VOCABULARIO ──────────────────────────────────────────────
const VOCAB = {
  xp:           "TODO: nombre de los puntos",        // ej: "Rugidos" / "Estrellas" / "XP"
  participante: "TODO: nombre del participante",     // ej: "Cría" / "Héroe" / "Jugadora"
  monitor:      "TODO: nombre del monitor",          // ej: "El Anciano" / "El Capitán"
  equipo:       "TODO: nombre del equipo",           // ej: "Manada" / "Clan" / "Escuadrón"
  sesion:       "TODO: nombre de la sesión",         // ej: "Ritual" / "Misión" / "Entrenamiento"
  reto:         "TODO: nombre del reto",             // ej: "Cacería" / "Desafío" / "Prueba"
};

// ── COLORES ──────────────────────────────────────────────────
// Cambia estos valores por los colores de tu club
const COLORES = {
  principal:    "#FF6B9D",   // TODO: color principal (rosa por defecto)
  secundario:   "#FF9A3C",   // TODO: color secundario (naranja por defecto)
  acento:       "#FFD93D",   // TODO: color de acento (amarillo por defecto)
  fondo:        "#FFF5F8",   // TODO: color de fondo
};

// ── RANGOS (5 niveles) ───────────────────────────────────────
// Desde el más básico (1) hasta el más avanzado (5)
const RANGOS = [
  { nivel: 1, nombre: "TODO: rango básico",    emoji: "🐾", rugidos_min: 0   },
  { nivel: 2, nombre: "TODO: rango 2",         emoji: "🦊", rugidos_min: 80  },
  { nivel: 3, nombre: "TODO: rango 3",         emoji: "🐆", rugidos_min: 200 },
  { nivel: 4, nombre: "TODO: rango 4",         emoji: "🦁", rugidos_min: 350 },
  { nivel: 5, nombre: "TODO: rango legendario",emoji: "🦅", rugidos_min: 480 },
];

// ── INSIGNIAS ────────────────────────────────────────────────
const INSIGNIAS = [
  { id: "ins1", nombre: "TODO: insignia técnica 1",  emoji: "🏅", tipo: "tecnico" },
  { id: "ins2", nombre: "TODO: insignia técnica 2",  emoji: "🏅", tipo: "tecnico" },
  { id: "ins3", nombre: "TODO: insignia técnica 3",  emoji: "🏅", tipo: "tecnico" },
  { id: "ins4", nombre: "TODO: insignia social 1",   emoji: "🏅", tipo: "social"  },
  { id: "ins5", nombre: "TODO: insignia social 2",   emoji: "🏅", tipo: "social"  },
  { id: "ins6", nombre: "TODO: insignia esfuerzo",   emoji: "🏅", tipo: "esfuerzo"},
];

// ── BLOQUES MESO (4 bloques) ─────────────────────────────────
// Cada bloque tiene objetivos técnicos, sociales y de esfuerzo
const BLOQUES = [
  {
    id: "b1",
    nombre: "TODO: nombre bloque 1",
    emoji:  "🌅",
    tema:   "TODO: descripción breve del bloque",
    insignia_id: "ins1",
    objetivos: [
      { tipo: "tecnico",  texto: "TODO: objetivo técnico 1",  xp: 10 },
      { tipo: "tecnico",  texto: "TODO: objetivo técnico 2",  xp: 10 },
      { tipo: "social",   texto: "TODO: objetivo social 1",   xp: 5  },
      { tipo: "esfuerzo", texto: "TODO: objetivo esfuerzo 1", xp: 8  },
    ]
  },
  {
    id: "b2",
    nombre: "TODO: nombre bloque 2",
    emoji:  "🌿",
    tema:   "TODO: descripción breve del bloque",
    insignia_id: "ins2",
    objetivos: [
      { tipo: "tecnico",  texto: "TODO: objetivo técnico 1",  xp: 12 },
      { tipo: "social",   texto: "TODO: objetivo social 1",   xp: 8  },
      { tipo: "esfuerzo", texto: "TODO: objetivo esfuerzo 1", xp: 8  },
    ]
  },
  {
    id: "b3",
    nombre: "TODO: nombre bloque 3",
    emoji:  "⚡",
    tema:   "TODO: descripción breve del bloque",
    insignia_id: "ins3",
    objetivos: [
      { tipo: "tecnico",  texto: "TODO: objetivo técnico 1",  xp: 15 },
      { tipo: "social",   texto: "TODO: objetivo social 1",   xp: 10 },
      { tipo: "esfuerzo", texto: "TODO: objetivo esfuerzo 1", xp: 10 },
    ]
  },
  {
    id: "b4",
    nombre: "TODO: nombre bloque 4",
    emoji:  "🏆",
    tema:   "TODO: descripción breve del bloque",
    insignia_id: "ins4",
    objetivos: [
      { tipo: "tecnico",  texto: "TODO: objetivo técnico 1",  xp: 15 },
      { tipo: "social",   texto: "TODO: objetivo social 1",   xp: 10 },
      { tipo: "esfuerzo", texto: "TODO: objetivo esfuerzo 1", xp: 10 },
    ]
  },
];

// ── MISIÓN DE APERTURA ───────────────────────────────────────
// Texto que el monitor lee en la primera sesión
const MISION_APERTURA = `TODO: escribe aquí el texto de bienvenida al universo.
Debe estar en segunda persona, ser emocionante y apropiado para la edad del grupo.
Entre 4 y 6 oraciones. Termina con una pregunta que invite al grupo a responder.`;

// Exportar todo (no modificar esta línea)
if (typeof module !== 'undefined') {
  module.exports = { firebaseConfig, UNIVERSO, VOCAB, COLORES, RANGOS, INSIGNIAS, BLOQUES, MISION_APERTURA };
}
