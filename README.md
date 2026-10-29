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
- Portada con fotografía grande, degradado inferior y nombres superpuestos en alto contraste.
- Calendario mensual con el día de la boda destacado, sincronizado con `fechaISO`, más cuenta regresiva.
- Padres de la novia y del novio, con cuatro campos editables.
- Código de vestimenta formal separado para mujeres y hombres, con recomendaciones e ilustraciones.
- Botón de música flotante y siempre visible al navegar, con acciones claras para reproducir y pausar.
- Ceremonia religiosa y recepción con **dos direcciones, dos enlaces a Google Maps y dos mapas incrustables**.
- Cronograma de cinco momentos: entrada de los novios, vals, cena, corte de torta y despedida.
- Fotografía principal de los novios en la portada; galería de tres fotografías de relleno, fáciles de reemplazar.
- Nota de regalos con QR no escaneable de ejemplo.
- Zoom (hora, ID, contraseña y enlace).
- RSVP por WhatsApp, inicialmente inactivo.
- Música de fondo incorporada: `assets/musica.mp3`, con reproducción al tocar el sello y control de pausa en la invitación.

## Personalización
Para preparar una invitación real, modifica únicamente los datos de [config.js](config.js):

`novios`, `fotoPortada`, `padres`, `vestimenta`, `fechaISO`, `fecha`, `ceremonia`, `recepcion`, `cronograma`, `galeria`, `regalos.qr`, `zoom`, `whatsapp`, `musica`.

### Padres y vestimenta
En `config.js`, completa los cuatro campos de `padres.novia` y `padres.novio`, y edita el objeto `vestimenta` (tipo de vestimenta y recomendaciones para mujeres y hombres). Los valores actuales son ejemplos; no representan personas reales.

El control de música queda visible en la esquina inferior mientras los visitantes recorren la página, con el estado «Pausar música» cuando está sonando y «Reproducir música» cuando se detiene.

### Mapas
Busca la ubicación en Google Maps, selecciona Compartir → Insertar un mapa y copia la URL `src` de Google Maps en `mapaEmbed`. Especifica aparte el enlace de ubicación en `googleMaps`. No pegues etiquetas `iframe` completas.

### Fotografías y QR
Sube JPG/PNG/WebP a `assets/` y cambia las rutas en `fotoPortada`, `galeria` o `regalos.qr`. La foto de portada grande puede reemplazarse sin editar HTML, usando `fotoPortada: "assets/foto-portada.jpg"`; el marcador actual es `assets/foto-portada-muestra.svg`. Los nombres aparecen automáticamente en la parte inferior de la imagen con un degradado para mantener su legibilidad. Los archivos de relleno son `assets/foto-muestra.svg` y `assets/qr-muestra.svg`; el QR de relleno no permite realizar depósitos.

### Audio
El MP3 cargado está en `assets/musica.mp3` y la opción `musica` de `config.js` ya apunta a ese archivo. Al tocar el sello la página intentará reproducirlo; si el navegador lo impide, el invitado podrá tocar el botón superior. Para reemplazar el audio, sube tu propio MP3 a `assets/` y cambia la ruta en `config.js`. Si vas a publicar la invitación comercialmente, comprueba que cuentas con los derechos o licencia necesarios para compartir esa grabación.

### Confirmar asistencia
Completa `whatsapp.numero` en formato internacional, sin el signo `+` (ejemplo ficticio: `59171234567`). El botón permanecerá inactivo hasta configurarlo.

## Publicación
Se puede habilitar GitHub Pages desde [Settings → Pages](https://github.com/Jostamht/Muestra-Invitacion/settings/pages) con Source = Deploy from a branch, Branch = main y Folder = /(root).

**Nota de privacidad:** el proyecto fue clonado de una invitación real. Aunque los archivos de la rama actual son neutros, el historial anterior de Git puede conservar archivos personales. Para distribuir el código como plantilla pública con historial limpio, crea otro repositorio que incluya solo los archivos actuales.
