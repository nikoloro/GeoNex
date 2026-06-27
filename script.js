/*
    This file handles:
    1. Smooth scrolling when clicking navigation links.
    2. Language toggle between English and Spanish.
    3. Updating all text elements that have a data-i18n attribute.
*/

/* 
   Translation data object.
   Each key (like "en" or "es") represents a language.
   Inside each language, we map text IDs to their translations.
*/
const translations = {
    en: {
        companyName: "Company Name",
        navAbout: "About Us",
        navClients: "Clients",
        navContact: "Contact",
        heroTitle: "Company Name",
        heroTagline: "Precision Scanning for Rare Earth & Geological Voids",
        aboutTitle: "About Us",
        aboutText:
            "We specialize in advanced detection of rare minerals such as gold, emerald, copper, and silver, " +
            "as well as identifying underground voids and cavities. Using cutting-edge technology and " +
            "data-driven analysis, we provide clear, reliable insights that help our clients make confident " +
            "decisions in exploration, construction, and risk assessment.",
        clientsTitle: "Clients",
        clientsIntro:
            "Here are a few examples of what our clients say about working with us.",
        client1Name: "Client Name 1",
        client1Comment:
            "“Professional, precise, and reliable. Their mineral detection reports helped us plan our operations with confidence.”",
        client2Name: "Client Name 2",
        client2Comment:
            "“Their underground void analysis was detailed and easy to understand. We highly recommend their services.”",
        client3Name: "Client Name 3",
        client3Comment:
            "“Fast communication, clear results, and a very professional team. We will definitely work with them again.”",
        contactTitle: "Contact",
        contactIntro:
            "Get in touch to discuss your project, request a quote, or learn more about our services.",
        ownerNameLabel: "Owner Name:",
        ownerNameValue: "Nicolas David Sanchez Motta",
        ownerPhoneLabel: "Owner Phone:",
        ownerPhoneValue: "+1 (657) 354-9924",
        ownerEmailLabel: "Owner Email:",
        ownerEmailValue: "nikolasmotta777@gmail.com",
        ownerComment:
            "I’m committed to delivering useful data so you can move forward with confidence."
    },
    es: {
        companyName: "Nombre de la Empresa",
        navAbout: "Sobre Nosotros",
        navClients: "Clientes",
        navContact: "Contacto",
        heroTitle: "Nombre de la Empresa",
        heroTagline: "Escaneo de Precisión para Minerales Raros y Vacíos Geológicos",
        aboutTitle: "Sobre Nosotros",
        aboutText:
            "Nos especializamos en la detección avanzada de minerales raros como oro, esmeralda, cobre y plata, " +
            "además de identificar vacíos y cavidades subterráneas. Utilizando tecnología de vanguardia y " +
            "análisis basado en datos, ofrecemos información clara y confiable que ayuda a nuestros clientes " +
            "a tomar decisiones seguras en exploración, construcción y evaluación de riesgos.",
        clientsTitle: "Clientes",
        clientsIntro:
            "Aquí hay algunos ejemplos de lo que nuestros clientes dicen sobre trabajar con nosotros.",
        client1Name: "Nombre del Cliente 1",
        client1Comment:
            "“Profesionales, precisos y confiables. Sus informes de detección de minerales nos ayudaron a planificar nuestras operaciones con confianza.”",
        client2Name: "Nombre del Cliente 2",
        client2Comment:
            "“Su análisis de vacíos subterráneos fue detallado y fácil de entender. Recomendamos mucho sus servicios.”",
        client3Name: "Nombre del Cliente 3",
        client3Comment:
            "“Comunicación rápida, resultados claros y un equipo muy profesional. Definitivamente volveremos a trabajar con ellos.”",
        contactTitle: "Contacto",
        contactIntro:
            "Ponte en contacto para hablar sobre tu proyecto, solicitar una cotización o conocer más sobre nuestros servicios.",
        ownerNameLabel: "Nombre del Propietario:",
        ownerNameValue: "Nicolas David Sanchez Motta",
        ownerPhoneLabel: "Teléfono del Propietario:",
        ownerPhoneValue: "+1 (657) 354-9924",
        ownerEmailLabel: "Correo del Propietario:",
        ownerEmailValue: "Nikolasmotta777@gmail.com",
        ownerComment:
            "Estoy comprometido a ofrecer datos útiles para que puedas avanzar con seguridad."
    }
};

/*
    Variable to track the current language.
    Default is English ("en").
*/
let currentLanguage = "en";

/*
    Function to update all text elements on the page
    based on the selected language.
*/
function updateLanguage(lang) {
    // Get all elements that have the data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((el) => {
        // Get the translation key from the element
        const key = el.getAttribute("data-i18n");
        // Get the translated text from the translations object
        const translation = translations[lang][key];

        // If a translation exists for this key, update the element's text
        if (translation !== undefined) {
            el.textContent = translation;
        }
    });

    // Update the current language variable
    currentLanguage = lang;
}

/*
    Function to smoothly scroll to a section when a nav link is clicked.
*/
function enableSmoothScroll() {
    // Select all navigation links that start with "#"
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            // Prevent the default jump behavior
            event.preventDefault();

            // Get the target section ID from the href attribute
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            // If the target section exists, scroll to it smoothly
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

/*
    Function to set up the language toggle button behavior.
*/
function setupLanguageToggle() {
    const toggleButton = document.getElementById("lang-toggle");

    // Add click event listener to the toggle button
    toggleButton.addEventListener("click", () => {
        // Switch language: if currently "en", change to "es", otherwise back to "en"
        const newLang = currentLanguage === "en" ? "es" : "en";
        updateLanguage(newLang);
    });
}

/*
    Initialize the page behavior once the DOM is fully loaded.
*/
document.addEventListener("DOMContentLoaded", () => {
    // Set initial language to English
    updateLanguage("en");

    // Enable smooth scrolling for navigation links
    enableSmoothScroll();

    // Set up the language toggle button
    setupLanguageToggle();
});
