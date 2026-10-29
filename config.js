// PLANTILLA DE INVITACIÓN · Todos los datos de esta demostración son ficticios.
// Edita los campos y guarda para adaptar la invitación a cada pareja.
window.WEDDING_CONFIG = {
  novios: ["Novia", "Novio"],
  fotoPortada: "assets/foto-muestra.svg", // Fotografía principal: reemplaza con "assets/foto-portada.jpg"
  fechaISO: "2026-12-31T17:00:00-04:00", // Fecha y hora de la cuenta regresiva (UTC-04)
  fecha: { dia: "31", mes: "DICIEMBRE", anio: "2026", semana: "JUEVES" },
  ceremonia: {
    titulo: "Ceremonia religiosa",
    hora: "17:00",
    lugar: "Lugar de la ceremonia",
    direccion: "Insertar dirección",
    googleMaps: "", // Enlace para abrir Google Maps, ej. https://maps.app.goo.gl/...
    mapaEmbed: "" // URL del iframe de Google Maps: https://www.google.com/maps/embed?pb=...
  },
  recepcion: {
    titulo: "Recepción",
    hora: "19:00",
    lugar: "Lugar de la recepción",
    direccion: "Insertar dirección",
    googleMaps: "",
    mapaEmbed: ""
  },
  cronograma: [
    { hora: "19:30", evento: "Entrada de los novios" },
    { hora: "20:00", evento: "Vals" },
    { hora: "20:30", evento: "Cena" },
    { hora: "21:30", evento: "Corte de torta" },
    { hora: "23:30", evento: "Despedida" }
  ],
  galeria: [
    "assets/foto-muestra.svg",
    "assets/foto-muestra.svg",
    "assets/foto-muestra.svg"
  ],
  regalos: {
    qr: "" // Sube la imagen y escribe "assets/qr-regalos.png"; vacío = ilustración de ejemplo
  },
  zoom: {
    hora: "17:00 (hora de Bolivia)",
    id: "", // ID de reunión
    contrasena: "", // Contraseña de reunión
    enlace: "" // Enlace https:// de Zoom; botón aparecerá solo si se completa
  },
  whatsapp: {
    numero: "", // Ej. 59171234567 sin + ni espacios. Vacío = botón desactivado
    mensaje: "¡Hola! Quisiera confirmar mi asistencia a la boda."
  },
  musica: "assets/musica.mp3" // Música instrumental de fondo, alojada en el repositorio
};