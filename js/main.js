// Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Filtro de proyectos (por data-tags)
const chips = document.querySelectorAll(".chip");
const projects = document.querySelectorAll(".project");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");

    const filter = chip.dataset.filter;

    projects.forEach((p) => {
      const tags = (p.dataset.tags || "").split(" ");
      const show = filter === "all" || tags.includes(filter);
      p.style.display = show ? "" : "none";
    });
  });
});

// Formulario (demo sin backend)
const contactForm = document.getElementById("contactForm");
const formHint = document.getElementById("formHint");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  formHint.textContent = "Listo. Aquí iría el envío real (EmailJS, Formspree o tu API).";
  contactForm.reset();
});