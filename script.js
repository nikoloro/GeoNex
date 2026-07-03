/*
    GeoNex Website JavaScript
    -------------------------
    Handles:

    1. Smooth scrolling for navigation links.
    2. Language toggle (English ↔ Spanish).
    3. Updating all text elements using data-i18n attributes.
    4. Defensive checks for missing translation keys.
*/


/* ============================================================
   TRANSLATION DATA — Updated for new HTML structure
============================================================ */
const translations = {
    en: {
        /* Navigation */
        brandName: "GeoNex",
        navAbout: "About",
        navWhy: "Why Us",
        navServices: "Services",
        navIndustries: "Industries",
        navProcess: "Process",
        navGallery: "Gallery",
        navFaq: "FAQ",
        navContact: "Contact",
        langToggle: "EN / ES",

        /* Hero */
        heroTitle: "Advanced Geological Intelligence",
        heroCta: "Request an Analysis",

        /* About */
        aboutTitle: "About GeoNex",
        aboutText: "GeoNex combines satellite analysis, geophysical methods, geological interpretation, and modern exploration techniques to help clients identify mineral resources, groundwater, underground cavities, and geological structures with precision.",

        /* Why Choose Us */
        whyTitle: "Why Choose GeoNex",
        why1Title: "Satellite Analysis",
        why1Desc: "High‑resolution remote sensing for mineral and structural detection.",
        why2Title: "Geological Interpretation",
        why2Desc: "Professional subsurface mapping and structural modeling.",
        why3Title: "Precision Mapping",
        why3Desc: "Accurate geological and geophysical mapping for decision‑making.",
        why4Title: "Fast Results",
        why4Desc: "Efficient workflows delivering rapid geological insights.",
        why5Title: "International Projects",
        why5Desc: "Experience across multiple countries and geological environments.",
        why6Title: "Professional Reports",
        why6Desc: "Clear, actionable geological documentation for clients.",

        /* Services */
        servicesTitle: "Our Services",
        serviceMineralTitle: "Mineral Exploration",
        serviceMineralDesc: "High‑precision detection of gold, copper, emeralds, and rare earth minerals.",
        serviceVoidTitle: "Underground Void Detection",
        serviceVoidDesc: "Identify cavities, tunnels, and structural anomalies with advanced scanning.",
        serviceGeoTitle: "Geological Analysis",
        serviceGeoDesc: "Professional geological interpretation, mapping, and risk assessment.",
        serviceRemoteTitle: "Remote Sensing",
        serviceRemoteDesc: "Satellite‑based terrain, mineral, and structural intelligence.",

        /* Industries */
        industriesTitle: "Industries We Serve",
        industryMining: "Mining",
        industryConstruction: "Construction",
        industryAgriculture: "Agriculture",
        industryWater: "Water Wells",
        industryEngineering: "Engineering",
        industryGovernment: "Government",
        industryOilGas: "Oil & Gas",
        industryUtilities: "Utilities",

        /* Process */
        processTitle: "Our Process",
        processStepRequest: "Consultation",
        processStepSatellite: "Data Collection",
        processStepAnalysis: "Geological Analysis",
        processStepReport: "Report",
        processStepRecommendations: "Recommendations",

        /* Before / After */
        beforeAfterTitle: "Before & After Interpretation",

        /* Gallery */
        galleryTitle: "Project Gallery",
        galleryGold: "Gold Exploration",
        galleryGeoEquip: "Geophysical Survey",
        galleryMap: "Geological Mapping",
        galleryModel: "3D Geological Model",

        /* FAQ */
        faqTitle: "Frequently Asked Questions",
        faq1Q: "How accurate are the studies?",
        faq1A: "Our methods combine satellite data, geological interpretation, and field validation.",
        faq2Q: "How long does a survey take?",
        faq2A: "Most studies are completed within days depending on project size.",
        faq3Q: "Do you travel internationally?",
        faq3A: "Yes, GeoNex operates across multiple countries.",
        faq4Q: "What minerals can be detected?",
        faq4A: "Gold, copper, emeralds, rare earth minerals, and more.",
        faq5Q: "How do I request a quote?",
        faq5A: "Use the contact form below or email us directly.",

        /* Contact */
        contactTitle: "Contact Us",
        contactNameLabel: "Name",
        contactEmailLabel: "Email",
        contactMessageLabel: "Message",
        contactSubmit: "Send Message",
        contactCompanyName: "GeoNex Exploration",
        contactEmailTitle: "Email:",
        contactPhoneTitle: "Phone:",
        contactLinkedInTitle: "LinkedIn:"
    },

    es: {
        /* Navigation */
        brandName: "GeoNex",
        navAbout: "Sobre Nosotros",
        navWhy: "Por Qué GeoNex",
        navServices: "Servicios",
        navIndustries: "Industrias",
        navProcess: "Proceso",
        navGallery: "Galería",
        navFaq: "Preguntas Frecuentadas",
        navContact: "Contacto",
        langToggle: "EN / ES",

        /* Hero */
        heroTitle: "Inteligencia Geológica Avanzada",
        heroCta: "Solicitar Análisis",

        /* About */
        aboutTitle: "Sobre GeoNex",
        aboutText: "GeoNex combina análisis satelital, métodos geofísicos, interpretación geológica y técnicas modernas de exploración para ayudar a identificar recursos minerales, agua subterránea, cavidades y estructuras geológicas con precisión.",

        /* Why Choose Us */
        whyTitle: "Por Qué Elegir GeoNex",
        why1Title: "Análisis Satelital",
        why1Desc: "Sensores remotos de alta resolución para detección mineral y estructural.",
        why2Title: "Interpretación Geológica",
        why2Desc: "Mapeo profesional del subsuelo y modelado estructural.",
        why3Title: "Mapeo de Precisión",
        why3Desc: "Mapeo geológico y geofísico preciso para decisiones críticas.",
        why4Title: "Resultados Rápidos",
        why4Desc: "Procesos eficientes que entregan información geológica rápidamente.",
        why5Title: "Proyectos Internacionales",
        why5Desc: "Experiencia en múltiples países y ambientes geológicos.",
        why6Title: "Informes Profesionales",
        why6Desc: "Documentación geológica clara y accionable para clientes.",

        /* Services */
        servicesTitle: "Nuestros Servicios",
        serviceMineralTitle: "Exploración de Minerales",
        serviceMineralDesc: "Detección de alta precisión de oro, cobre, esmeraldas y minerales raros.",
        serviceVoidTitle: "Detección de Vacíos Subterráneos",
        serviceVoidDesc: "Identifica cavidades, túneles y anomalías estructurales con escaneo avanzado.",
        serviceGeoTitle: "Análisis Geológico",
        serviceGeoDesc: "Interpretación geológica profesional, mapeo y evaluación de riesgos.",
        serviceRemoteTitle: "Sensores Remotos",
        serviceRemoteDesc: "Inteligencia satelital del terreno, minerales y estructuras.",

        /* Industries */
        industriesTitle: "Industrias que Atendemos",
        industryMining: "Minería",
        industryConstruction: "Construcción",
        industryAgriculture: "Agricultura",
        industryWater: "Pozos de Agua",
        industryEngineering: "Ingeniería",
        industryGovernment: "Gobierno",
        industryOilGas: "Petróleo y Gas",
        industryUtilities: "Servicios Públicos",

        /* Process */
        processTitle: "Nuestro Proceso",
        processStepRequest: "Consulta",
        processStepSatellite: "Recolección de Datos",
        processStepAnalysis: "Análisis Geológico",
        processStepReport: "Informe",
        processStepRecommendations: "Recomendaciones",

        /* Before / After */
        beforeAfterTitle: "Interpretación Antes y Después",

        /* Gallery */
        galleryTitle: "Galería de Proyectos",
        galleryGold: "Exploración de Oro",
        galleryGeoEquip: "Estudio Geofísico",
        galleryMap: "Mapeo Geológico",
        galleryModel: "Modelo Geológico 3D",

        /* FAQ */
        faqTitle: "Preguntas Frecuentadas",
        faq1Q: "¿Qué tan precisos son los estudios?",
        faq1A: "Nuestros métodos combinan datos satelitales, interpretación geológica y validación en campo.",
        faq2Q: "¿Cuánto tiempo tarda un estudio?",
        faq2A: "La mayoría de los estudios se completan en pocos días dependiendo del tamaño del proyecto.",
        faq3Q: "¿Viajan internacionalmente?",
        faq3A: "Sí, GeoNex opera en múltiples países.",
        faq4Q: "¿Qué minerales pueden detectarse?",
        faq4A: "Oro, cobre, esmeraldas, minerales raros y más.",
        faq5Q: "¿Cómo solicito una cotización?",
        faq5A: "Use el formulario de contacto o envíenos un correo directamente.",

        /* Contact */
        contactTitle: "Contáctanos",
        contactNameLabel: "Nombre",
        contactEmailLabel: "Correo",
        contactMessageLabel: "Mensaje",
        contactSubmit: "Enviar Mensaje",
        contactCompanyName: "GeoNex Exploración",
        contactEmailTitle: "Correo:",
        contactPhoneTitle: "Teléfono:",
        contactLinkedInTitle: "LinkedIn:"
    }
};


/* ============================================================
   LANGUAGE SYSTEM
============================================================ */

let currentLanguage = "en";

function updateLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        const translation = translations?.[lang]?.[key];

        if (translation) {
            el.textContent = translation;
        } else {
            console.warn(`Missing translation for key: "${key}" in language: "${lang}"`);
        }
    });

    currentLanguage = lang;
}

function setupLanguageToggle() {
    const toggle = document.getElementById("lang-toggle");
    if (!toggle) return;

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
    updateLanguage("en");
    enableSmoothScroll();
    setupLanguageToggle();
});
