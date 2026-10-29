# Invitación de boda · Muestra floral 💐

**Vista previa:** https://jostamht.github.io/Muestra-Invitacion/

Esta es una invitación digital de demostración. No es una página comercial: representa cómo podría quedar la web de una pareja real. Los nombres «Novia» y «Novio», la fecha del 31 de diciembre de 2026 y los horarios son ficticios.

## Diseño
La paleta fue seleccionada a partir de una referencia visual de atardecer:
- Azul profundo: `#3C487C`
- Azul lavanda: `#797EBA`
- Lavanda suave: `#A7A0C9`
- Durazno claro: `#F8D4C4`
- Rosa empolvado: `#E5B1B9`

Acentos complementarios: crema `#FFF9F5`, coral `#C87578`, verde salvia `#8A9C90` y dorado suave `#CDA980`.

Incluye ilustración vectorial floral en `assets/floral-vivo.svg`, animación flotante y pulso del sello, pétalos al abrir el sobre, iconos con movimiento suave y alternativas para reducir movimiento según preferencias del navegador.

## Contenido de la invitación
- Portada animada con invitación explícita a tocar el sello.
- Nombres, fecha ficticia y cuenta regresiva.
- Ceremonia religiosa y recepción con **dos direcciones, dos enlaces a Google Maps y dos mapas incrustables**.
- Cronograma de cinco momentos: entrada de los novios, vals, cena, corte de torta y despedida.
- Galería de tres fotografías de relleno, fáciles de reemplazar.
- Nota de regalos con QR no escaneable de ejemplo.
- Zoom (hora, ID, contraseña y enlace).
- RSVP por WhatsApp, inicialmente inactivo.
- Música opcional, inicialmente inactiva hasta subir un MP3.

## Personalización
Para preparar una invitación real, modifica únicamente los datos de [config.js](config.js):

`novios`, `fechaISO`, `fecha`, `ceremonia`, `recepcion`, `cronograma`, `galeria`, `regalos.qr`, `zoom`, `whatsapp`, `musica`.

### Mapas
Busca la ubicación en Google Maps, selecciona Compartir → Insertar un mapa y copia la URL `src` de Google Maps en `mapaEmbed`. Especifica aparte el enlace de ubicación en `googleMaps`. No pegues etiquetas `iframe` completas.

### Fotografías y QR
Sube JPG/PNG/WebP a `assets/` y cambia las rutas en `galeria` o `regalos.qr`. Los archivos de relleno son `assets/foto-muestra.svg` y `assets/qr-muestra.svg`, y el QR de relleno no permite realizar depósitos.

### Audio
Sube un MP3 a `assets/` y cambia `musica: ""` por `musica: "assets/musica.mp3"`. El reproductor intentará iniciarse con el toque del sello; si el navegador lo impide, el invitado puede reproducirlo desde el botón.

### Confirmar asistencia
Completa `whatsapp.numero` en formato internacional, sin el signo `+` (ejemplo ficticio: `59171234567`). El botón permanecerá inactivo hasta configurarlo.

## Publicación
Se puede habilitar GitHub Pages desde [Settings → Pages](https://github.com/Jostamht/Muestra-Invitacion/settings/pages) con Source = Deploy from a branch, Branch = main y Folder = /(root).

**Nota de privacidad:** el proyecto fue clonado de una invitación real. Aunque los archivos de la rama actual son neutros, el historial anterior de Git puede conservar archivos personales. Para distribuir el código como plantilla pública con historial limpio, crea otro repositorio que incluya solo los archivos actuales.
