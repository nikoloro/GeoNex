/* ============================================================
   TRANSLATION DATA
============================================================ */
const translations = {
    en: {
        heroTitle: "Advanced Geological Intelligence",
        heroSubtitle: "Discover. Analyze. Explore.",
        ctaButton: "Request an Analysis",

        servicesTitle: "Our Services",
        service1: "Mineral Exploration",
        service2: "Underground Void Detection",
        service3: "Geological Analysis",
        service4: "Remote Sensing",

        mapTitle: "Interactive Exploration Map",
        mapSubtitle: "Click on a region to view exploration data.",

        processTitle: "Our Process",
        step1: "Client Request",
        step2: "Satellite Data",
        step3: "Analysis",
        step4: "Report",
        step5: "Recommendations",

        galleryTitle: "Project Gallery",

        contactTitle: "Contact Us",
        formName: "Name",
        formEmail: "Email",
        formMessage: "Message",
        formButton: "Send Message",

        contactCompany: "GeoNex Exploration",
        contactEmail: "Email:",
        contactPhone: "Phone:",
        contactLinkedIn: "LinkedIn:"
    },

    es: {
        heroTitle: "Inteligencia Geológica Avanzada",
        heroSubtitle: "Descubre. Analiza. Explora.",
        ctaButton: "Solicitar Análisis",

        servicesTitle: "Nuestros Servicios",
        service1: "Exploración de Minerales",
        service2: "Detección de Vacíos Subterráneos",
        service3: "Análisis Geológico",
        service4: "Sensores Remotos",

        mapTitle: "Mapa Interactivo de Exploración",
        mapSubtitle: "Haz clic en una región para ver los datos.",

        processTitle: "Nuestro Proceso",
        step1: "Solicitud del Cliente",
        step2: "Datos Satelitales",
        step3: "Análisis",
        step4: "Informe",
        step5: "Recomendaciones",

        galleryTitle: "Galería de Proyectos",

        contactTitle: "Contáctanos",
        formName: "Nombre",
        formEmail: "Correo",
        formMessage: "Mensaje",
        formButton: "Enviar Mensaje",

        contactCompany: "GeoNex Exploración",
        contactEmail: "Correo:",
        contactPhone: "Teléfono:",
        contactLinkedIn: "LinkedIn:"
    }
};


/* ============================================================
   LANGUAGE SYSTEM
============================================================ */

let currentLanguage = "en";

/*
    Updates all elements with data-i18n attributes.
*/
function updateLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        const translation = translations[lang][key];

        if (translation) {
            el.textContent = translation;
        }
    });

    currentLanguage = lang;
}

/*
    Language toggle button behavior.
*/
function setupLanguageToggle() {
    const toggle = document.getElementById("lang-toggle");

    toggle.addEventListener("click", () => {
        const newLang = currentLanguage === "en" ? "es" : "en";
        updateLanguage(newLang);
    });
}


/* ============================================================
   SMOOTH SCROLLING
============================================================ */

function enableSmoothScroll() {
    const links = document.querySelectorAll('.nav-links a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}


/* ============================================================
   INITIALIZATION
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    updateLanguage("en");      // Set default language
    enableSmoothScroll();      // Enable smooth scrolling
    setupLanguageToggle();     // Enable language toggle
});
