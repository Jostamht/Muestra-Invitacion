(() => {
  "use strict";
  const c = window.WEDDING_CONFIG || {};
  const el = id => document.getElementById(id);
  const label = (id, value) => { if(el(id)) el(id).textContent = value; };
  const photo = (id, value) => { if(el(id) && value) el(id).src = value; };
  const url = value => /^https:\/\/[^\s]+$/i.test(value || "") ? value : "";
  label("nameOne", c.nombres?.[0] || "Joselito");
  label("nameTwo", c.nombres?.[1] || "Hedria");
  photo("mainPhoto", c.fotos?.principal);
  photo("giftQr", c.fotos?.qrRegalos);
  if (c.qrConfirmado) {
    label("giftQrLabel", "CÓDIGO QR DE DEPÓSITO");
    el("giftQr").alt = "Código QR para enviar un detalle a los novios";
  }

  const zoomLink = url(c.zoom?.enlace);
  if (zoomLink) {
    el("zoomLink").href = zoomLink;
    el("zoomLink").hidden = false;
    el("zoomPending").hidden = true;
  }

  const target = new Date(c.fecha || "2026-12-13T14:30:00-04:00").getTime();
  const pad = n => String(n).padStart(2, "0");
  function countdown() {
    if (!Number.isFinite(target)) return;
    const diff = target - Date.now();
    const total = Math.max(0, Math.floor(diff / 1000));
    label("days", String(Math.floor(total / 86400)).padStart(2, "0"));
    label("hours", pad(Math.floor(total % 86400 / 3600)));
    label("minutes", pad(Math.floor(total % 3600 / 60)));
    label("seconds", pad(total % 60));
    el("countdown").hidden = diff <= 0;
    el("countdownDone").hidden = diff > 0;
  }
  countdown();
  setInterval(countdown, 1000);

  const overlay = el("envelopeScreen");
  const open = el("openInvitation");
  el("invitation").setAttribute("aria-hidden", "true");
  function reveal() {
    if (overlay.classList.contains("is-open")) return;
    overlay.classList.add("is-open");
    // El clic en el sello también sirve para iniciar el audio (si el navegador lo permite).
    if (c.musica && !musicToggle.disabled && audio.paused) musicToggle.click();
    document.body.classList.remove("invitation-locked");
    open.disabled = true;
    setTimeout(() => {
      overlay.hidden = true;
      el("invitation").removeAttribute("aria-hidden");
      document.querySelector(".brand")?.focus?.({preventScroll:true});
    }, 1500);
  }
  open.addEventListener("click", reveal);

  const audio = el("weddingAudio");
  const musicToggle = el("musicToggle");
  if (c.musica) {
    audio.src = c.musica;
    musicToggle.disabled = false;
    label("musicLabel", "Activar música");
    musicToggle.setAttribute("aria-label", "Reproducir música");
    musicToggle.addEventListener("click", async () => {
      if(audio.paused) {
        try {
          await audio.play();
          musicToggle.classList.add("music-playing");
          label("musicLabel", "Pausar música");
          musicToggle.setAttribute("aria-label", "Pausar música");
        } catch { label("musicLabel", "Audio no disponible"); }
      } else {
        audio.pause();
        musicToggle.classList.remove("music-playing");
        label("musicLabel", "Activar música");
        musicToggle.setAttribute("aria-label", "Reproducir música");
      }
    });
  }
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      for(const e of entries) if(e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
    }, {threshold: .08, rootMargin: "0px 0px -20px 0px"});
    document.querySelectorAll(".reveal").forEach(node => observer.observe(node));
  } else document.querySelectorAll(".reveal").forEach(node => node.classList.add("visible"));
})();