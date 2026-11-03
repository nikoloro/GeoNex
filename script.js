/*
    GeoNex Website JavaScript
    -------------------------
*/


/* ============================================================
   TRANSLATION DATA
============================================================ */
const translations = {
    en: {
        skipLink: "Skip to content",
        menuLabel: "Open menu",
        langToggleLabel: "Switch language",

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

        heroTitle: "Advanced Geological Intelligence",
        heroRotate1: "Mineral Exploration",
        heroRotate2: "Groundwater Detection",
        heroRotate3: "Geophysical Surveys",
        heroRotate4: "Remote Sensing",
        heroCta: "Request an Analysis",

        aboutTitle: "About GeoNex",
        aboutText: "GeoNex combines satellite analysis, geophysical methods, geological interpretation, and modern exploration techniques to help clients identify mineral resources, groundwater, underground cavities, and geological structures with precision.",

        whyTitle: "Why Choose GeoNex",
        why1Title: "Satellite Analysis",
        why1Desc: "High-resolution remote sensing for mineral and structural detection.",
        why2Title: "Geological Interpretation",
        why2Desc: "Professional subsurface mapping and structural modeling.",
        why3Title: "Precision Mapping",
        why3Desc: "Accurate geological and geophysical mapping for decision-making.",
        why4Title: "Fast Results",
        why4Desc: "Efficient workflows delivering rapid geological insights.",
        why5Title: "International Projects",
        why5Desc: "Experience across multiple countries and geological environments.",
        why6Title: "Professional Reports",
        why6Desc: "Clear, actionable geological documentation for clients.",

        servicesTitle: "Our Services",
        serviceMineralTitle: "Mineral Exploration",
        serviceMineralDesc: "High-precision detection of gold, copper, emeralds, and rare earth minerals.",
        serviceVoidTitle: "Underground Void Detection",
        serviceVoidDesc: "Identify cavities, tunnels, and structural anomalies with advanced scanning.",
        serviceGeoTitle: "Geological Analysis",
        serviceGeoDesc: "Professional geological interpretation, mapping, and risk assessment.",
        serviceRemoteTitle: "Remote Sensing",
        serviceRemoteDesc: "Satellite-based terrain, mineral, and structural intelligence.",

        industriesTitle: "Industries We Serve",
        industryMining: "Mining",
        industryConstruction: "Construction",
        industryAgriculture: "Agriculture",
        industryWater: "Water Wells",
        industryEngineering: "Engineering",
        industryGovernment: "Government",
        industryOilGas: "Oil & Gas",
        industryUtilities: "Utilities",

        processTitle: "Our Process",
        processStepRequest: "Consultation",
        processStepSatellite: "Data Collection",
        processStepAnalysis: "Geological Analysis",
        processStepReport: "Report",
        processStepRecommendations: "Recommendations",

        galleryTitle: "Project Gallery",
        galleryGold: "Gold Exploration",
        galleryGeoEquip: "Geophysical Survey",
        galleryMap: "Geological Mapping",
        galleryModel: "3D Geological Model",

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

        contactTitle: "Contact Us",
        contactNameLabel: "Name",
        contactEmailLabel: "Email",
        contactMessageLabel: "Message",
        placeholderName: "Your name",
        placeholderEmail: "Your email",
        placeholderMessage: "Tell us about your project...",
        contactSubmit: "Send Message",
        contactStatusOpening: "Opening your email app with your message...",
        contactStatusInvalid: "Please fill in your name, a valid email, and a message.",
        contactMailSubject: "GeoNex project inquiry",
        contactMailName: "Name",
        contactMailEmail: "Email",
        contactCompanyName: "GeoNex Exploration",
        contactEmailTitle: "Email:",
        contactPhoneTitle: "Phone:",
        contactLinkedInTitle: "LinkedIn:",

        footerRights: "All rights reserved.",

        quickCall: "Call",
        quickWhatsApp: "WhatsApp",
        backToTop: "Back to top",
        closeLabel: "Close",
        contactStatusSending: "Sending...",
        contactStatusSent: "Message sent. We will reply soon.",
        contactStatusError: "Something went wrong. Please email us directly.",

        altSatellite: "Satellite analysis",
        altDrone: "Drone geological imaging",
        altGold: "Gold exploration",
        altGeoEquip: "Geophysical equipment",
        altMap: "Geological map",
        altModel: "3D geological model"
    },

    es: {
        skipLink: "Saltar al contenido",
        menuLabel: "Abrir menú",
        langToggleLabel: "Cambiar idioma",

        brandName: "GeoNex",
        navAbout: "Nosotros",
        navWhy: "Por Qué GeoNex",
        navServices: "Servicios",
        navIndustries: "Industrias",
        navProcess: "Proceso",
        navGallery: "Galería",
        navFaq: "Preguntas",
        navContact: "Contacto",
        langToggle: "EN / ES",

        heroTitle: "Inteligencia Geológica Avanzada",
        heroRotate1: "Exploración de Minerales",
        heroRotate2: "Detección de Agua Subterránea",
        heroRotate3: "Estudios Geofísicos",
        heroRotate4: "Teledetección",
        heroCta: "Solicitar Análisis",

        aboutTitle: "Sobre GeoNex",
        aboutText: "GeoNex combina análisis satelital, métodos geofísicos, interpretación geológica y técnicas modernas de exploración para ayudar a identificar recursos minerales, agua subterránea, cavidades y estructuras geológicas con precisión.",

        whyTitle: "Por Qué Elegir GeoNex",
        why1Title: "Análisis Satelital",
        why1Desc: "Teledetección de alta resolución para la detección mineral y estructural.",
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

        servicesTitle: "Nuestros Servicios",
        serviceMineralTitle: "Exploración de Minerales",
        serviceMineralDesc: "Detección de alta precisión de oro, cobre, esmeraldas y tierras raras.",
        serviceVoidTitle: "Detección de Vacíos Subterráneos",
        serviceVoidDesc: "Identifica cavidades, túneles y anomalías estructurales con escaneo avanzado.",
        serviceGeoTitle: "Análisis Geológico",
        serviceGeoDesc: "Interpretación geológica profesional, mapeo y evaluación de riesgos.",
        serviceRemoteTitle: "Teledetección",
        serviceRemoteDesc: "Inteligencia satelital del terreno, minerales y estructuras.",

        industriesTitle: "Industrias que Atendemos",
        industryMining: "Minería",
        industryConstruction: "Construcción",
        industryAgriculture: "Agricultura",
        industryWater: "Pozos de Agua",
        industryEngineering: "Ingeniería",
        industryGovernment: "Gobierno",
        industryOilGas: "Petróleo y Gas",
        industryUtilities: "Servicios Públicos",

        processTitle: "Nuestro Proceso",
        processStepRequest: "Consulta",
        processStepSatellite: "Recolección de Datos",
        processStepAnalysis: "Análisis Geológico",
        processStepReport: "Informe",
        processStepRecommendations: "Recomendaciones",

        galleryTitle: "Galería de Proyectos",
        galleryGold: "Exploración de Oro",
        galleryGeoEquip: "Estudio Geofísico",
        galleryMap: "Mapeo Geológico",
        galleryModel: "Modelo Geológico 3D",

        faqTitle: "Preguntas Frecuentes",
        faq1Q: "¿Qué tan precisos son los estudios?",
        faq1A: "Nuestros métodos combinan datos satelitales, interpretación geológica y validación en campo.",
        faq2Q: "¿Cuánto tiempo tarda un estudio?",
        faq2A: "La mayoría de los estudios se completan en pocos días, dependiendo del tamaño del proyecto.",
        faq3Q: "¿Viajan internacionalmente?",
        faq3A: "Sí, GeoNex opera en múltiples países.",
        faq4Q: "¿Qué minerales pueden detectarse?",
        faq4A: "Oro, cobre, esmeraldas, tierras raras y más.",
        faq5Q: "¿Cómo solicito una cotización?",
        faq5A: "Use el formulario de contacto o envíenos un correo directamente.",

        /* Contact */
        contactTitle: "Contáctenos",
        contactNameLabel: "Nombre",
        contactEmailLabel: "Correo",
        contactMessageLabel: "Mensaje",
        placeholderName: "Su nombre",
        placeholderEmail: "Su correo",
        placeholderMessage: "Cuéntenos sobre su proyecto...",
        contactSubmit: "Enviar Mensaje",
        contactStatusOpening: "Abriendo su aplicación de correo con su mensaje...",
        contactStatusInvalid: "Ingrese su nombre, un correo válido y un mensaje.",
        contactMailSubject: "Consulta de proyecto GeoNex",
        contactMailName: "Nombre",
        contactMailEmail: "Correo",
        contactCompanyName: "GeoNex Exploración",
        contactEmailTitle: "Correo:",
        contactPhoneTitle: "Teléfono:",
        contactLinkedInTitle: "LinkedIn:",

        footerRights: "Todos los derechos reservados.",

        quickCall: "Llamar",
        quickWhatsApp: "WhatsApp",
        backToTop: "Volver arriba",
        closeLabel: "Cerrar",
        contactStatusSending: "Enviando...",
        contactStatusSent: "Mensaje enviado. Le responderemos pronto.",
        contactStatusError: "Algo salió mal. Por favor escríbanos directamente por correo.",

        altSatellite: "Análisis satelital",
        altDrone: "Imágenes geológicas con dron",
        altGold: "Exploración de oro",
        altGeoEquip: "Equipo geofísico",
        altMap: "Mapa geológico",
        altModel: "Modelo geológico 3D"
    }
};


/* ============================================================
   LANGUAGE SYSTEM
============================================================ */

const STORAGE_KEY = "geonex-lang";
let currentLanguage = "en";

function getSavedLanguage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return translations[saved] ? saved : "en";
    } catch (e) {
        return "en";
    }
}

function saveLanguage(lang) {
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
        /* ignore */
    }
}

function t(key) {
    return translations?.[currentLanguage]?.[key] ?? key;
}

function updateLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const translation = translations[lang][key];

        if (translation) {
            el.textContent = translation;
        } else {
            console.warn(`Missing translation for key: "${key}" in language: "${lang}"`);
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const translation = translations[lang][el.getAttribute("data-i18n-placeholder")];
        if (translation) el.setAttribute("placeholder", translation);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
        const translation = translations[lang][el.getAttribute("data-i18n-alt")];
        if (translation) el.setAttribute("alt", translation);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
        const translation = translations[lang][el.getAttribute("data-i18n-aria-label")];
        if (translation) el.setAttribute("aria-label", translation);
    });

    document.documentElement.lang = lang;

    const status = document.getElementById("form-status");
    if (status) {
        status.textContent = "";
        status.classList.remove("error");
    }
}

function setupLanguageToggle() {
    const toggle = document.getElementById("lang-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
        const newLang = currentLanguage === "en" ? "es" : "en";
        updateLanguage(newLang);
        saveLanguage(newLang);
    });
}


/* ============================================================
   MOBILE MENU
============================================================ */

function setupMobileMenu() {
    const button = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");
    if (!button || !nav) return;

    function setOpen(open) {
        nav.classList.toggle("open", open);
        document.body.classList.toggle("menu-open", open);
        button.setAttribute("aria-expanded", String(open));
    }

    button.addEventListener("click", () => {
        setOpen(button.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", event => {
        if (!nav.contains(event.target) && !button.contains(event.target)) setOpen(false);
    });
}


/* ============================================================
   ROTATING HERO PHRASES
============================================================ */

function setupHeroRotation() {
    const container = document.querySelector(".hero-rotate");
    if (!container) return;

    const items = container.querySelectorAll(".rotate-item");
    if (items.length < 2) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    container.classList.add("is-rotating");

    let index = 0;
    items[index].classList.add("active");

    setInterval(() => {
        items[index].classList.remove("active");
        index = (index + 1) % items.length;
        items[index].classList.add("active");
    }, 2800);
}


/* ============================================================
   CONTACT FORM
============================================================ */

function setupContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    if (!form || !status) return;

    form.addEventListener("submit", event => {
        event.preventDefault();

        const name = form.elements["name"].value.trim();
        const email = form.elements["email"].value.trim();
        const message = form.elements["message"].value.trim();

        if (!name || !message || !form.elements["email"].checkValidity() || !email) {
            status.textContent = t("contactStatusInvalid");
            status.classList.add("error");
            return;
        }

        const endpoint = form.dataset.endpoint;
        if (endpoint) {
            status.textContent = t("contactStatusSending");
            status.classList.remove("error");

            fetch(endpoint, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            })
                .then(response => {
                    if (!response.ok) throw new Error("Request failed");
                    form.reset();
                    status.textContent = t("contactStatusSent");
                })
                .catch(() => {
                    status.textContent = t("contactStatusError");
                    status.classList.add("error");
                });
            return;
        }

        const subject = t("contactMailSubject");
        const body = `${t("contactMailName")}: ${name}\n${t("contactMailEmail")}: ${email}\n\n${message}`;
        const recipient = form.dataset.recipient;

        status.textContent = t("contactStatusOpening");
        status.classList.remove("error");

        window.location.href =
            `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}


/* ============================================================
   HIGHLIGHT CURRENT SECTION IN NAV
============================================================ */

function setupActiveNav() {
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    if (!links.length || !("IntersectionObserver" in window)) return;

    const byId = {};
    links.forEach(link => { byId[link.getAttribute("href").slice(1)] = link; });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            links.forEach(l => { l.classList.remove("active"); l.removeAttribute("aria-current"); });
            const link = byId[entry.target.id];
            if (link) {
                link.classList.add("active");
                link.setAttribute("aria-current", "true");
            }
        });
    }, { rootMargin: "-40% 0px -55% 0px" });

    Object.keys(byId).forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
    });
}


/* ============================================================
   BACK-TO-TOP BUTTON
============================================================ */

function setupBackToTop() {
    const button = document.getElementById("back-to-top");
    if (!button) return;

    window.addEventListener("scroll", () => {
        button.classList.toggle("visible", window.scrollY > 700);
    }, { passive: true });

    button.addEventListener("click", () => {
        window.scrollTo({ top: 0 });
    });
}


/* ============================================================
   GALLERY LIGHTBOX
============================================================ */

function setupLightbox() {
    const box = document.getElementById("lightbox");
    if (!box || typeof box.showModal !== "function") return;

    const img = box.querySelector("img");
    const caption = box.querySelector(".lightbox-caption");
    const closeButton = box.querySelector(".lightbox-close");

    document.querySelectorAll(".gallery-item").forEach(item => {
        item.tabIndex = 0;
        item.setAttribute("role", "button");

        const open = () => {
            const thumb = item.querySelector("img");
            // Ask for a larger version when the image URL has a width setting
            img.src = thumb.src.replace(/([?&]w=)\d+/, (m, prefix) => prefix + "1400");
            img.alt = thumb.alt;
            caption.textContent = item.querySelector(".overlay").textContent;
            box.showModal();
        };

        item.addEventListener("click", open);
        item.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                open();
            }
        });
    });

    closeButton.addEventListener("click", () => box.close());
    box.addEventListener("click", event => {
        if (event.target === box) box.close();
    });
}


/* ============================================================
   INITIALIZATION
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    updateLanguage(getSavedLanguage());
    setupLanguageToggle();
    setupMobileMenu();
    setupHeroRotation();
    setupContactForm();
    setupActiveNav();
    setupBackToTop();
    setupLightbox();

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
});
