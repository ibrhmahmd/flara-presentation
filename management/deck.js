// Flara deck runner. Identical copy in each deck folder.
// Keys: ←/→, space, PageUp/PageDown, Home/End to move; N notes; F fullscreen. URL hash = slide number.
(() => {
  const deck = document.querySelector(".deck");
  const slides = [...deck.querySelectorAll(":scope > section")];
  const name = deck.dataset.name || document.title;
  const notes = document.createElement("div");
  notes.id = "notes";
  document.body.append(notes);

  slides.forEach((s, i) => {
    const f = document.createElement("div");
    f.className = "footer";
    f.innerHTML = `<span>${name}</span><span>${String(i + 1).padStart(2, "0")} / ${slides.length}</span>`;
    s.append(f);
  });

  // A missing media file leaves the slot's placeholder text showing.
  // The error can fire before this script runs, so check the state too.
  deck.querySelectorAll("video").forEach(v => {
    if (v.error || v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) v.remove();
    else v.addEventListener("error", () => v.remove());
  });

  let cur = 0;
  function show(i) {
    cur = Math.max(0, Math.min(slides.length - 1, i));
    slides.forEach((s, j) => s.classList.toggle("active", j === cur));
    deck.querySelectorAll("video").forEach(v => v.pause());
    const aside = slides[cur].querySelector("aside");
    notes.innerHTML = `<b>Notes · slide ${cur + 1}</b>` + (aside ? aside.innerHTML : "No notes.");
    history.replaceState(null, "", "#" + (cur + 1));
  }

  function fit() {
    const k = Math.min(innerWidth / 1920, innerHeight / 1080);
    deck.style.transform = `translate(${(innerWidth - 1920 * k) / 2}px, ${(innerHeight - 1080 * k) / 2}px) scale(${k})`;
  }

  addEventListener("keydown", e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key;
    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(k)) show(cur + 1);
    else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(k)) show(cur - 1);
    else if (k === "Home") show(0);
    else if (k === "End") show(slides.length - 1);
    else if (k === "n" || k === "N") notes.classList.toggle("open");
    else if (k === "f" || k === "F") document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
    else return;
    e.preventDefault();
  });
  deck.addEventListener("click", e => e.target.closest("video") || show(cur + (e.clientX > innerWidth / 2 ? 1 : -1)));
  addEventListener("resize", fit);
  addEventListener("hashchange", () => show(parseInt(location.hash.slice(1), 10) - 1 || 0));

  fit();
  show(parseInt(location.hash.slice(1), 10) - 1 || 0);
})();
