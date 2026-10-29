# Invitación de boda · Plantilla demostrativa 💜

**Demo:** https://jostamht.github.io/Muestra-Invitacion/

Sitio estático de ejemplo con diseño botánico/editorial, colores lavanda (**#B3AAD3**), ciruela (**#7B587B**), plateado (**#A5B6C0**) y blanco (**#FFFFFF**). Los nombres «Novia y Novio», las fechas, horarios y eventos son ficticios. No es un catálogo de servicios ni una página comercial.

## Qué incluye
- Sobre animado con sello y portada adaptable a móvil.
- Cuenta regresiva a la boda de muestra (jueves **31 de diciembre de 2026**).
- Ceremonia religiosa y recepción, cada una con dirección, enlace a Google Maps y espacio para un mapa incrustado.
- Cronograma editable: entrada de los novios, vals, cena, corte de torta y despedida.
- Galería de tres fotografías de ejemplo, listas para reemplazar.
- Regalos y código QR de ejemplo (el actual NO es escaneable).
- Zoom: hora, ID, contraseña y enlace.
- Botón RSVP por WhatsApp, desactivado hasta configurar el número.
- Música opcional, desactivada hasta añadir un archivo MP3.

## Cómo editar la muestra
Abre [config.js](config.js). **Ahí se cambian todos los datos de la invitación:**
- `novios`, `fechaISO` y `fecha` (mantén ambos campos de fecha sincronizados).
- `ceremonia` y `recepcion`: `hora`, `lugar`, `direccion`, `googleMaps` y `mapaEmbed`.
- `cronograma`: arreglo de objetos con `hora` y `evento`.
- `galeria`: las tres rutas de imágenes (sube JPG, PNG o WebP a `assets/`).
- `regalos.qr`: ruta del QR real si se desea agregar.
- `zoom.hora`, `zoom.id`, `zoom.contrasena` y `zoom.enlace`.
- `whatsapp.numero` (ej.: `59171234567`, sin signo +) y `whatsapp.mensaje`.
- `musica`: ruta del archivo MP3, por ejemplo `assets/musica.mp3`.

Los campos vacíos no generan enlaces falsos: se muestran como pendientes.

### Cómo incrustar los mapas
En Google Maps, busca el lugar → **Compartir** → **Insertar un mapa** → copia el `src` HTTPS del `iframe`. Pégalo en `mapaEmbed`. En `googleMaps`, utiliza el enlace para abrir la ubicación en Google Maps. Las dos ubicaciones se configuran por separado.

### Cómo activar la música
Sube tu MP3 a la carpeta `assets/` y cambia `musica: ""` por `musica: "assets/musica.mp3"`. Al tocar el sello la página intentará reproducirla; si el navegador bloquea el inicio automático, el visitante podrá usar el botón de música.

### Google Pages
Ve a [Settings → Pages](https://github.com/Jostamht/Muestra-Invitacion/settings/pages), selecciona `Deploy from a branch`, `main`, `/(root)` y guarda si todavía no está activo.

## Importante: privacidad y repositorio de demostración
El contenido **actual** ya no contiene fotografías, el QR ni la canción de la boda real. Sin embargo, al tratarse de una copia de otro repositorio, **los commits anteriores pueden conservar esos archivos en el historial Git**, aunque se hayan borrado de la rama actual. Para distribuir públicamente una plantilla sin ese historial, conviene crear un repositorio nuevo y limpio con solo los archivos actuales. Los datos sensibles de Zoom/WhatsApp no deben publicarse sin consentimiento.
