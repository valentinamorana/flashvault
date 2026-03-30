const SUPABASE_URL = 'https://xpfsheezlsqyuxwnesvj.supabase.co'
const SUPABASE_KEY = 'sb_publishable_3vkc57Y8Qu9H5hb4JnViIw_NSlp410q'

// Inicializar cliente
const { createClient } = supabase
const db = createClient(SUPABASE_URL, SUPABASE_KEY)

// ─── Estructura de las tablas ─────────────────────────────────────────────────
//
// tabla: eventos
//   id, nombre, tipo, fecha, color_primario, color_secundario,
//   marca_de_agua, texto_marca, moderacion, password,
//   foto_count, activo, creado_en
//
// tabla: fotos
//   id, evento_id, url, nombre, aprobada, creado_en,
//   reaccion_corazon, reaccion_aplauso, reaccion_fuego
//
// storage bucket: fotos
//   path: fotos/{evento_id}/{timestamp_nombre.jpg}
