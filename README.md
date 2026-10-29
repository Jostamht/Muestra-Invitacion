# Invitación de boda · Hedria y Joselito 🌿

Invitación digital botánica en verde salvia y marfil, con sobre animado y ceremonia virtual.

**Boda: domingo 13 de diciembre de 2026.** Bolivia: 2:30 p. m. · Brasil (horario de Brasilia): 3:30 p. m.

## Publicar
En [Settings → Pages](https://github.com/Jostamht/Boda-Prueba/settings/pages), selecciona **Deploy from a branch → main → /(root)** y guarda. Cuando GitHub Pages esté activo: https://jostamht.github.io/Boda-Prueba/

## Personalización (config.js)
El texto oficial, Mateo 19:6, fecha y horarios se muestran en `index.html`. El archivo `config.js` contiene los nombres, la cuenta regresiva, el enlace de Zoom, la fotografía, el QR y la música.

### Código QR pendiente
Ahora se muestra un **marcador de posición** (`assets/qr-pendiente.svg`), sin inventar ningún código ni datos bancarios.
1. Sube tu imagen a la carpeta `assets/`, por ejemplo `assets/qr-deposito.png`.
2. Cambia `qrRegalos` a `"assets/qr-deposito.png"` y `qrConfirmado` a `true`.
3. Guarda el cambio.

### Enlace de Zoom
Todavía no se publica ningún enlace. Se muestra el mensaje «El enlace para acompañarnos será enviado días antes». Si deseas habilitar también un botón, rellena `zoom.enlace` con una URL https://. Si prefieres enviar el enlace privadamente, déjalo vacío.

### Fotografía y música
La foto principal se configura en `fotos.principal`. Para cambiarla, sube otra imagen a `assets/` y cambia la ruta. La música es opcional: sube `assets/musica.mp3` y establece `musica: "assets/musica.mp3"`.

## Importante
El repositorio y GitHub Pages son públicos. Evita subir IDs/contraseñas privados de Zoom o datos personales sensibles al código.
