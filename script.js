(() => {
  "use strict";
  const cfg = window.WEDDING_CONFIG || {};
  const byId = id => document.getElementById(id);
  const put = (id, value) => { const node = byId(id); if (node && value !== undefined && value !== null) node.textContent = String(value); };
  const setImage = (id, src) => { if (byId(id) && src) byId(id).src = src; };
  const validHttps = raw => {
    if (typeof raw !== "string") return "";
    try { const url = new URL(raw); return url.protocol === "https:" ? url.href : ""; } catch { return ""; }
  };
  const names = Array.isArray(cfg.novios) ? cfg.novios : ["Novia", "Novio"];
  const bride = names[0] || "Novia", groom = names[1] || "Novio";
  put("nameOne", bride);
  put("nameTwo", groom);
  const shortDate = [cfg.fecha?.dia || "31", cfg.fecha?.mes || "DICIEMBRE", cfg.fecha?.anio || "2026"];
  put("dateDay", shortDate[0]);
  put("dateMonth", shortDate[1]);
  put("dateYear", [shortDate[2], cfg.fecha?.semana || "JUEVES"].join(" · "));
  const monthDigits = /^\d{4}-(\d{2})-\d{2}/.exec(cfg.fechaISO || "")?.[1] || "12";
  put("navDate", [shortDate[0], monthDigits, shortDate[2]].join(" · "));
  put("heroDate", [cfg.fecha?.semana || "JUEVES", shortDate[0] + " DE " + shortDate[1], shortDate[2]].join(" · "));
  put("closingDate", shortDate.join(" · "));
  const closingNames = document.querySelector(".closing-names");
  if (closingNames) {
    closingNames.textContent = "";
    closingNames.append(document.createTextNode(bride + " "));
    const amp = document.createElement("i"); amp.textContent = "&";
    closingNames.append(amp, document.createTextNode(" " + groom));
  }
  const initials = (bride.trim()[0] || "N").toUpperCase() + " & " + (groom.trim()[0] || "N").toUpperCase();
  const smallBrand = document.querySelector(".monogram-small");
  if (smallBrand) smallBrand.textContent = initials;
  const footerBrand = document.querySelector(".footer > span");
  if (footerBrand) footerBrand.textContent = initials;
  const letter = document.querySelector(".letter-initials");
  if (letter) letter.textContent = initials;
  const sealLetters = document.querySelector(".wax-seal > span");
  if (sealLetters) sealLetters.textContent = initials;

  const target = new Date(cfg.fechaISO || "2026-12-31T17:00:00-04:00").getTime();
  const pad = n => String(n).padStart(2, "0");
  function updateCountdown() {
    if (!Number.isFinite(target)) return;
    const diff = target - Date.now();
    const seconds = Math.max(0, Math.floor(diff / 1000));
    put("days", pad(Math.floor(seconds / 86400)));
    put("hours", pad(Math.floor(seconds % 86400 / 3600)));
    put("minutes", pad(Math.floor(seconds % 3600 / 60)));
    put("seconds", pad(seconds % 60));
    byId("countdown").hidden = diff <= 0;
    byId("countdownDone").hidden = diff > 0;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  function configureVenue(data, prefix) {
    const v = data || {};
    put(prefix + "Title", v.titulo);
    put(prefix + "Time", v.hora);
    put(prefix + "Name", v.lugar);
    put(prefix + "Address", v.direccion);
    const mapsUrl = validHttps(v.googleMaps);
    const directions = byId(prefix + "Directions");
    if (mapsUrl) {
      directions.href = mapsUrl;
      directions.hidden = false;
      byId(prefix + "DirectionsPending").hidden = true;
    }
    const embed = validHttps(v.mapaEmbed);
    if (embed) {
      const parsed = new URL(embed);
      const isGoogleMaps = (parsed.hostname === "www.google.com" || parsed.hostname === "maps.google.com")
        && (parsed.pathname.startsWith("/maps/embed") || parsed.pathname.startsWith("/maps"));
      if (isGoogleMaps) {
        const iframe = byId(prefix + "Map");
        iframe.src = embed;
        iframe.hidden = false;
        byId(prefix + "MapPlaceholder").hidden = true;
      }
    }
  }
  configureVenue(cfg.ceremonia, "ceremony");
  configureVenue(cfg.recepcion, "reception");

  if (Array.isArray(cfg.cronograma) && cfg.cronograma.length) {
    const targetList = byId("timeline");
    targetList.replaceChildren();
    cfg.cronograma.forEach((entry) => {
      const item = document.createElement("div"); item.className = "timeline-item";
      const time = document.createElement("time"); time.textContent = entry.hora || "--:--";
      const dot = document.createElement("span"); dot.className = "timeline-dot"; dot.setAttribute("aria-hidden", "true");
      const title = document.createElement("p"); title.textContent = entry.evento || "Evento";
      item.append(time, dot, title);
      targetList.appendChild(item);
    });
  }

  (cfg.galeria || []).slice(0, 3).forEach((path, i) => setImage(["galleryOne", "galleryTwo", "galleryThree"][i], path));
  const giftSrc = cfg.regalos?.qr || "";
  if (giftSrc) {
    setImage("giftQr", giftSrc);
    byId("giftQr").alt = "Código QR para regalos de boda";
    put("qrHint", "ESCANEA EL CÓDIGO PARA ENVIAR UN DETALLE");
  }

  put("zoomTime", cfg.zoom?.hora || "Hora por confirmar");
  put("zoomId", cfg.zoom?.id || "Insertar ID");
  put("zoomPassword", cfg.zoom?.contrasena || "Insertar contraseña");
  const zoomUrl = validHttps(cfg.zoom?.enlace);
  if (zoomUrl) {
    byId("zoomJoin").href = zoomUrl;
    byId("zoomJoin").hidden = false;
    byId("zoomPending").hidden = true;
  }

  const phone = String(cfg.whatsapp?.numero || "").replace(/\D/g, "");
  if (phone.length >= 8 && phone.length <= 15) {
    const message = cfg.whatsapp?.mensaje || "¡Hola! Quisiera confirmar mi asistencia a la boda.";
    const link = byId("whatsappRSVP");
    link.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    link.hidden = false;
    byId("rsvpPending").hidden = true;
  }

  const audio = byId("weddingAudio");
  const musicButton = byId("musicToggle");
  const audioSource = cfg.musica || "";
  const musicLabel = byId("musicLabel");
  if (audioSource) {
    audio.src = audioSource;
    musicButton.disabled = false;
    musicButton.setAttribute("aria-label", "Reproducir música");
    musicLabel.textContent = "Activar música";
    musicButton.addEventListener("click", async () => {
      if (!audio.paused) { audio.pause(); return; }
      try { await audio.play(); }
      catch { musicLabel.textContent = "Audio no disponible"; }
    });
    audio.addEventListener("play", () => {
      musicButton.classList.add("playing");
      musicLabel.textContent = "Pausar música";
      musicButton.setAttribute("aria-label", "Pausar música");
    });
    audio.addEventListener("pause", () => {
      musicButton.classList.remove("playing");
      musicLabel.textContent = "Activar música";
      musicButton.setAttribute("aria-label", "Reproducir música");
    });
  }

  const overlay = byId("envelopeScreen");
  const open = byId("openInvitation");
  open.addEventListener("click", () => {
    if (overlay.classList.contains("is-open")) return;
    overlay.classList.add("is-open");
    document.body.classList.remove("invitation-locked");
    open.disabled = true;
    if (audioSource && !musicButton.disabled && audio.paused) {
      audio.play().catch(() => { musicLabel.textContent = "Toca para escuchar"; });
    }
    setTimeout(() => {
      overlay.hidden = true;
      byId("invitation").removeAttribute("aria-hidden");
      document.querySelector(".monogram-small")?.focus({preventScroll:true});
    }, 1200);
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.09, rootMargin: "0px 0px -25px 0px" });
    document.querySelectorAll(".reveal").forEach(node => observer.observe(node));
  } else {
    document.querySelectorAll(".reveal").forEach(node => node.classList.add("visible"));
  }
})();