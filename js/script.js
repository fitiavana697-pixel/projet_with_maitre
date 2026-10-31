// Menu mobile, année automatique et formulaire de contact.
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
      document.body.classList.toggle("menu-open", isOpen);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const subject = String(formData.get("subject") || "Demande de contact");
      const message = String(formData.get("message") || "").trim();

      // Remplacez cette adresse par l'adresse e-mail réelle de l'entreprise.
      const recipient = "contact@maitrefabii.example";
      const mailSubject = encodeURIComponent(`[Site Maitre Fabii] ${subject}`);
      const mailBody = encodeURIComponent(
        `Nom : ${name}\nE-mail : ${email}\n\nMessage :\n${message}`
      );

      const feedback = document.querySelector("#form-feedback");
      if (feedback) {
        feedback.textContent = "Votre application e-mail va s'ouvrir avec le message préparé. Vérifiez l'adresse du destinataire avant l'envoi.";
        feedback.classList.add("is-visible");
      }

      window.location.href = `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;
    });
  }
});