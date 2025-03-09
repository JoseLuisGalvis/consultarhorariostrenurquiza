/* script.js */
console.log("Script cargado");

// SECCIÓN 5: INTERNACIONALIZACIÓN (Ejecutada inmediatamente)
const translations = {
  es: {
    language: "Español",
    inicio: "Inicio",
    clima: "Clima",
    mapa: "Mapa",
    contacto: "Contacto",
    schedule: "Horarios",
    footer: "© 2025 Consultar Urquiza  - Todos los Derechos Reservados",
    copyright: "© 2025 Consultar Apps. Todos los Derechos Reservados.",
    title: "Horarios de Servicio",
    consulta: "Ir a la Consulta",
    scheduleTitle: "Consulta de Horarios",
    travelDirection: "Sentido del Viaje",
    travelDay: "Día de Viaje",
    ida: "Ida: Lacroze → Gral. Lemos",
    vuelta: "Vuelta: Gral. Lemos → Lacroze",
    lunesViernes: "Lunes a Viernes",
    sabado: "Sábado",
    domingoFeriados: "Domingo y Feriados",
    consultarHorarios: "Consultar",
    atras: "Atrás",
    selectDirectionDay: "Selecciona Dirección y Día de Viaje",
    buscarHorarios: "Buscar Horarios",
    proximosTrenes: "Próximos Trenes",
    estacion: "Estación",
    hora: "Hora",
    verHorarios: "Ver horarios",
    responseHelp:
      "Selecciona una estación y hora para ver los horarios disponibles",
    errorCarga: "Error al cargar los horarios. Por favor, intente nuevamente.",
    errorSeleccion: "Por favor, selecciona una estación y una hora válidas.",
    consultando: "Consultando...",
    noHorarios:
      "No se encontraron horarios disponibles para la hora seleccionada.",
    errorProcesar:
      "Error al procesar los horarios. Por favor, intente nuevamente.",
    tren: "Tren",
    horaSalida: "Hora de salida",
    selectStation: "Selecciona una estación",
    currentWeather: "Clima Actual",
    humidity: "Humedad",
    wind: "Viento",
    pressure: "Presión",
    visibility: "Visibilidad",
    lastUpdate: "Última actualización:",
    forecast: "Pronóstico próximos días",
    stayConnected: "Sigamos en contacto",
    loading: "Cargando...",
    fetchingWeather: "Obteniendo datos del clima",
    loadingRecommendations: "Cargando recomendaciones...",
    loadingForecast: "Cargando pronóstico...",
    forecastError:
      "Error al cargar el pronóstico. Intenta nuevamente más tarde.",
    error: "Error",
    weatherLoadError: "No se pudo cargar el clima.",
    tryAgain: "Intenta nuevamente más tarde.",
    weatherRecommendations: {
      thunderstorms:
        "Tormentas eléctricas: Lleva un paraguas y evita salir si no es necesario.",
      drizzle: "Llovizna: Un impermeable ligero será suficiente.",
      rain: "Lluvia: Usa un paraguas y ropa impermeable.",
      snow: "Nieve: Abrígate bien y ten cuidado con las superficies resbaladizas.",
      fog: "Niebla: Reduce la velocidad y usa luces si conduces.",
      clearHot:
        "Despejado y caluroso: Usa protector solar y mantente hidratado.",
      clearWarm: "Despejado y cálido: Disfruta del día, pero lleva agua.",
      clearCold: "Despejado y frío: Abrígate con capas de ropa.",
      clearNice: "Despejado y agradable: Ideal para viajar sin preocupaciones.",
      fewClouds:
        "Pocas nubes: Día agradable, lleva una chaqueta ligera por si acaso.",
      partlyCloudy:
        "Parcialmente nublado: El clima es variable, prepárate para cambios.",
      mostlyCloudy:
        "Mayormente nublado: Puede que no llueva, pero lleva un paraguas por si acaso.",
    },
    mapTitle: "Comercios Publicados",
    contactTitle: "Contacto", // Título de la sección
    contactname: "Nombre",
    lastname: "Apellidos",
    email: "Correo Electrónico",
    country: "País",
    state: "Estado o Provincia",
    municipality: "Municipio",
    message: "Mensaje",
    messagePlaceholder: "Por favor ingrese su solicitud. Gracias!",
    send: "Enviar",
    backToHome: "Volver al Inicio",
  },
  en: {
    language: "English",
    inicio: "Home",
    clima: "Weather",
    mapa: "Map",
    contacto: "Contact",
    schedule: "Schedules",
    footer: "© 2025 Consultar Urquiza - All Rights Reserved",
    copyright: "© 2025 Consultar Apps. All Rights Reserved.",
    title: "Service Schedules",
    consulta: "Go to Schedule",
    scheduleTitle: "Schedule Inquiry",
    travelDirection: "Travel Direction",
    travelDay: "Travel Day",
    ida: "Outbound: Lacroze → Gral. Lemos",
    vuelta: "Return: Gral. Lemos → Lacroze",
    lunesViernes: "Monday to Friday",
    sabado: "Saturday",
    domingoFeriados: "Sunday and Holidays",
    consultarHorarios: "Check",
    atras: "Back",
    selectDirectionDay: "Select Direction and Travel Day",
    buscarHorarios: "Search Schedules",
    proximosTrenes: "Next Trains",
    estacion: "Station",
    hora: "Time",
    verHorarios: "View Schedules",
    responseHelp: "Select a station and time to view available schedules",
    errorCarga: "Error loading schedules. Please try again.",
    errorSeleccion: "Please select a valid station and time.",
    consultando: "Searching...",
    noHorarios: "No schedules found for the selected time.",
    errorProcesar: "Error processing schedules. Please try again.",
    tren: "Train",
    horaSalida: "Departure Time",
    selectStation: "Select a station",
    currentWeather: "Current Weather",
    humidity: "Humidity",
    wind: "Wind",
    pressure: "Pressure",
    visibility: "Visibility",
    lastUpdate: "Last update:",
    forecast: "Forecast for the next few days",
    stayConnected: "Let's stay in touch",
    loading: "Loading...",
    fetchingWeather: "Fetching weather data",
    loadingRecommendations: "Loading recommendations...",
    loadingForecast: "Loading forecast...",
    forecastError: "Error loading forecast. Please try again later.",
    error: "Error",
    weatherLoadError: "Could not load weather.",
    tryAgain: "Try again later.",
    weatherRecommendations: {
      thunderstorms:
        "Thunderstorms: Bring an umbrella and avoid going out if possible.",
      drizzle: "Drizzle: A light raincoat will suffice.",
      rain: "Rain: Use an umbrella and waterproof clothing.",
      snow: "Snow: Dress warmly and watch for slippery surfaces.",
      fog: "Fog: Slow down and use lights if driving.",
      clearHot: "Clear and hot: Use sunscreen and stay hydrated.",
      clearWarm: "Clear and warm: Enjoy the day, but bring water.",
      clearCold: "Clear and cold: Bundle up with layers.",
      clearNice: "Clear and nice: Perfect for travel with no worries.",
      fewClouds: "Few clouds: Pleasant day, bring a light jacket just in case.",
      partlyCloudy:
        "Partly cloudy: Weather is variable, be prepared for changes.",
      mostlyCloudy:
        "Mostly cloudy: It might not rain, but bring an umbrella just in case.",
    },
    mapTitle: "Published Businesses",
    contactTitle: "Contact", // Título de la sección
    contactname: "Name",
    lastname: "Last Name",
    email: "Email",
    country: "Country",
    state: "State or Province",
    municipality: "Municipality",
    message: "Message",
    messagePlaceholder: "Please enter your request. Thank you!",
    send: "Send",
    backToHome: "Back to Home",
  },
};
window.translations = translations;

// Función para aplicar traducciones estáticas de clima
function applyWeatherStaticTranslations(lang) {
  const t = translations[lang] || translations["es"];
  const currentWeather = document.getElementById("current-weather-title");
  const humidityLabel = document.getElementById("humedad-label");
  const windLabel = document.getElementById("viento-label");
  const pressureLabel = document.getElementById("presion-label");
  const visibilityLabel = document.getElementById("visibilidad-label");

  if (currentWeather) currentWeather.textContent = t.currentWeather;
  if (humidityLabel) humidityLabel.textContent = t.humidity;
  if (windLabel) windLabel.textContent = t.wind;
  if (pressureLabel) pressureLabel.textContent = t.pressure;
  if (visibilityLabel) visibilityLabel.textContent = t.visibility;
}

function updateLanguage(lang) {
  const t = translations[lang] || translations["es"];

  const languageDropdownBtn = document.getElementById("languageDropdown");
  const navInicio = document.getElementById("nav-inicio");
  const navClima = document.getElementById("nav-clima");
  const navMapa = document.getElementById("nav-mapa");
  const navContacto = document.getElementById("nav-contacto");
  const navSchedule = document.getElementById("nav-schedule");
  const btnAtras = document.querySelector(".btn-atras");
  const footerText =
    document.querySelector(".copyright") || document.querySelector("footer p");

  if (languageDropdownBtn) languageDropdownBtn.textContent = t.language;
  if (navInicio) navInicio.textContent = t.inicio;
  if (navClima) navClima.textContent = t.clima;
  if (navMapa) navMapa.textContent = t.mapa;
  if (navContacto) navContacto.textContent = t.contacto;
  if (navSchedule) navSchedule.textContent = t.schedule;
  if (btnAtras) btnAtras.textContent = t.atras;
  if (footerText) footerText.textContent = t.footer;

  // Soporte para map.html
  const mapTitle = document.querySelector(".map-title");
  if (mapTitle) mapTitle.textContent = t.mapTitle;

  // Soporte específico para contact.html
  const contactTitle = document.querySelector(".text-center-contact");
  if (contactTitle)
    contactTitle.innerHTML = `<i class="fas fa-envelope"></i> ${t.contactTitle}`;

  // Aseguramos que las etiquetas del formulario de contacto se actualicen correctamente
  const nameLabel = document.querySelector("label[for='from_name']");
  const lastnameLabel = document.querySelector("label[for='from_lastname']");
  const emailLabel = document.querySelector("label[for='from_email']");
  const countryLabel = document.querySelector("label[for='country']");
  const stateLabel = document.querySelector("label[for='state']");
  const municipalityLabel = document.querySelector("label[for='municipality']");
  const messageLabel = document.querySelector("label[for='message']");
  const messageInput = document.getElementById("message");
  const sendButton = document.querySelector(
    "#contactForm button[type='submit']"
  );
  const backToHomeButton = document.getElementById("backToHomeContact");

  if (nameLabel) nameLabel.textContent = t.contactname; // "Nombre" o "Name"
  if (lastnameLabel) lastnameLabel.textContent = t.lastname;
  if (emailLabel) emailLabel.textContent = t.email;
  if (countryLabel) countryLabel.textContent = t.country;
  if (stateLabel) stateLabel.textContent = t.state;
  if (municipalityLabel) municipalityLabel.textContent = t.municipality;
  if (messageLabel) messageLabel.textContent = t.message;
  if (messageInput) messageInput.placeholder = t.messagePlaceholder;
  if (sendButton) sendButton.textContent = t.send;
  if (backToHomeButton) backToHomeButton.textContent = t.backToHome;

  const homeTitle = document.querySelector(".home-title");
  const consultaBtnIndex = document.querySelector(
    ".btn.bg-consultar:not(#contactForm button):not(#backToHomeContact)"
  );
  if (homeTitle) homeTitle.textContent = t.title;
  if (consultaBtnIndex) consultaBtnIndex.textContent = t.consulta;

  // Traducciones específicas para la página de horarios (evitar interferencia con contact.html)
  const isSchedulePage = window.location.pathname.includes("schedule.html"); // Ajusta según el nombre real de tu página de horarios
  if (isSchedulePage) {
    const travelDirectionLabel = document.querySelector(
      ".form-label:nth-child(1)"
    );
    const travelDayLabel = document.querySelector(".form-label:nth-child(2)");
    const btnIda = document.getElementById("btnIda");
    const btnVuelta = document.getElementById("btnVuelta");
    const btnWeekday = document.getElementById("btnWeekday");
    const btnSaturday = document.getElementById("btnSaturday");
    const btnSunday = document.getElementById("btnSunday");
    const btnConsultar = document.getElementById("btnConsultar");
    const selectDirectionDay = document.querySelector(".card-header-custom p");

    if (travelDirectionLabel)
      travelDirectionLabel.textContent = t.travelDirection;
    if (travelDayLabel) travelDayLabel.textContent = t.travelDay;
    if (btnIda)
      btnIda.innerHTML = `<i class="fas fa-long-arrow-alt-right me-2"></i> ${t.ida}`;
    if (btnVuelta)
      btnVuelta.innerHTML = `<i class="fas fa-long-arrow-alt-left me-2"></i> ${t.vuelta}`;
    if (btnWeekday)
      btnWeekday.innerHTML = `<i class="fas fa-calendar-day me-1"></i> ${t.lunesViernes}`;
    if (btnSaturday)
      btnSaturday.innerHTML = `<i class="fas fa-calendar-day me-1"></i> ${t.sabado}`;
    if (btnSunday)
      btnSunday.innerHTML = `<i class="fas fa-calendar-day me-1"></i> ${t.domingoFeriados}`;
    if (btnConsultar)
      btnConsultar.innerHTML = `<i class="fas fa-search me-2"></i> ${t.consultarHorarios}`;
    if (selectDirectionDay)
      selectDirectionDay.textContent = t.selectDirectionDay;
  }

  const directionDayTitle = document.querySelector("h5.m-0.d-inline.ms-3");
  const buscarHorarios = document.querySelector(".card-title:first-child");
  const proximosTrenesContainer = document.querySelector("#resultados");
  const proximosTrenes = proximosTrenesContainer
    ? proximosTrenesContainer
        .closest(".card-body")
        ?.querySelector(".card-title")
    : null;
  const estacionLabel = document.querySelector("label[for='estacion']");
  const horaLabel = document.querySelector("label[for='hora']");
  const submitBtnHorarios = document.getElementById("submit-btn");
  const responseHelp = document.getElementById("responseHelp");

  if (directionDayTitle) {
    const pageTitle = document.title.toLowerCase();
    if (pageTitle.includes("ida: lunes a viernes")) {
      directionDayTitle.textContent = `${t.ida} - ${t.lunesViernes}`;
    } else if (pageTitle.includes("ida: sábado")) {
      directionDayTitle.textContent = `${t.ida} - ${t.sabado}`;
    } else if (pageTitle.includes("ida: domingo y feriados")) {
      directionDayTitle.textContent = `${t.ida} - ${t.domingoFeriados}`;
    } else if (pageTitle.includes("vuelta: lunes a viernes")) {
      directionDayTitle.textContent = `${t.vuelta} - ${t.lunesViernes}`;
    } else if (pageTitle.includes("vuelta: sábado")) {
      directionDayTitle.textContent = `${t.vuelta} - ${t.sabado}`;
    } else if (pageTitle.includes("vuelta: domingo y feriados")) {
      directionDayTitle.textContent = `${t.vuelta} - ${t.domingoFeriados}`;
    }
  }
  if (buscarHorarios) buscarHorarios.textContent = t.buskarHorarios;
  if (proximosTrenes) proximosTrenes.textContent = t.proximosTrenes;
  if (estacionLabel) estacionLabel.textContent = t.estacion;
  if (horaLabel) horaLabel.textContent = t.hora;
  if (submitBtnHorarios) submitBtnHorarios.textContent = t.verHorarios;
  if (responseHelp) responseHelp.textContent = t.responseHelp;

  // Vista: clima.html
  const weatherTitle = document.querySelector(".weather-title");
  const selectStation = document.querySelector(".card-body .card-title");
  // Actualizar el texto "Última actualización:"
  const lastUpdateLabel = document.getElementById("last-update-label");
  if (lastUpdateLabel) {
    lastUpdateLabel.textContent = t.lastUpdate;
  }
  const forecastTitle = document
    .querySelector("#pronostico-container")
    ?.closest(".card")
    ?.querySelector(".card-title");
  const stayConnected = document.querySelector(".text-center h4");
  const footerClima = document.querySelector("footer p");

  if (weatherTitle) weatherTitle.textContent = t.clima;
  if (selectStation) selectStation.textContent = t.selectStation;
  if (lastUpdateLabel)
    lastUpdateLabel.textContent = `${t.lastUpdate} ${
      document.getElementById("ultima-actualizacion")
        ? document.getElementById("ultima-actualizacion").textContent
        : "--"
    }`;
  if (forecastTitle) forecastTitle.textContent = t.forecast;
  if (stayConnected) stayConnected.textContent = t.stayConnected;
  if (footerClima) footerClima.textContent = t.footer;

  // Recargar clima y luego aplicar traducciones estáticas
  if (
    window.location.pathname.includes("clima.html") &&
    typeof window.cargarClimaActual === "function"
  ) {
    window.cargarClimaActual();
    setTimeout(() => applyWeatherStaticTranslations(lang), 500); // Aumentar retraso para asegurar sincronización
  }

  localStorage.setItem("selectedLanguage", lang);
  document.documentElement.setAttribute("lang", lang);
  console.log(`Idioma actualizado a: ${lang}`);
  window.currentTranslations = t;
}

// Inicializar idioma cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "es";
  updateLanguage(savedLang);
});

// Manejar el cambio de idioma desde el dropdown
document.querySelectorAll(".dropdown-item[data-lang]").forEach((item) => {
  item.addEventListener("click", () => {
    const lang = item.getAttribute("data-lang");
    updateLanguage(lang);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // SECCIÓN 1: INICIALIZACIÓN DE AOS
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 3000, once: false });
  }

  // SECCIÓN 2: BLOQUEO DE CLIC DERECHO Y TECLAS
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("El clic derecho está deshabilitado en esta página.");
  });
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
      alert("La combinación Ctrl + U está deshabilitada.");
    }
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault();
      alert("El acceso a las herramientas de desarrollo está deshabilitado.");
    }
  });

  // SECCIÓN 3: RELOJ EN TIEMPO REAL
  function updateTime() {
    const now = new Date();
    const timeElement = document.querySelector(".current-time");
    if (timeElement) {
      timeElement.textContent = `Hora: ${String(now.getHours()).padStart(
        2,
        "0"
      )}:${String(now.getMinutes()).padStart(2, "0")}:${String(
        now.getSeconds()
      ).padStart(2, "0")}`;
    }
  }
  setInterval(updateTime, 1000);

  // SECCIÓN 4: MODO OSCURO
  const toggleButton = document.querySelector(".toggle-dark-mode");
  const moonIcon = document.querySelector(".moon-icon");
  const sunIcon = document.querySelector(".sun-icon");
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    if (moonIcon && sunIcon) {
      moonIcon.classList.add("d-none");
      sunIcon.classList.remove("d-none");
    }
  }
  if (toggleButton && moonIcon && sunIcon) {
    toggleButton.addEventListener("click", () => {
      document.body.style.transition =
        "background-color 0.5s ease, color 0.5s ease";
      document.body.classList.toggle("dark-mode");
      localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
      );
      moonIcon.style.transform = "translate(-50%, -50%) rotate(180deg)";
      sunIcon.style.transform = "translate(-50%, -50%) rotate(180deg)";
      setTimeout(() => {
        moonIcon.classList.toggle("d-none");
        sunIcon.classList.toggle("d-none");
        moonIcon.style.transform = "translate(-50%, -50%) rotate(0deg)";
        sunIcon.style.transform = "translate(-50%, -50%) rotate(0deg)";
      }, 150);
    });
  }

  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", () => {
      const lang = item.getAttribute("data-lang");
      updateLanguage(lang);
    });
  });
  /* --------------------------------------- */
  /* CÓDIGOS PARTICULARES */

  // SECCIÓN 2: FUNCIONALIDADES DEL FORMULARIO DE CONTACTO
  // Función para manejar el envío del formulario y compartir en redes
  function setupContactForm() {
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        emailjs.sendForm("service_wmjz6ab", "template_gsd9qm4", form).then(
          () => {
            alert("Mensaje enviado correctamente ✅");
            form.reset();
          },
          (error) => {
            alert("Error al enviar el mensaje ❌");
            console.error(error);
          }
        );
      });
    }

    const backToHomeContact = document.getElementById("backToHomeContact");
    if (backToHomeContact) {
      backToHomeContact.addEventListener("click", () => {
        window.location.href = "/";
      });
    }

    const shareFacebook = document.getElementById("shareFacebook");
    if (shareFacebook) {
      shareFacebook.addEventListener("click", () => {
        window.open(
          "https://www.facebook.com/sharer/sharer.php?u=" +
            encodeURIComponent(window.location.href),
          "_blank"
        );
      });
    }

    const shareInstagram = document.getElementById("shareInstagram");
    if (shareInstagram) {
      shareInstagram.addEventListener("click", () => {
        window.open(
          "https://www.instagram.com/?url=" +
            encodeURIComponent(window.location.href),
          "_blank"
        );
      });
    }
  }

  setupContactForm();

  // SECCIÓN 3: FUNCIONALIDADES DEL MAPA
  // Lista de sitios visitados
  const visitedSites = [
    {
      position: [-34.59696569167834, -58.54140107245756],
      name: "Av Rodríguez Peña, Sáenz Peña, Tres de Febrero",
    },
  ];
  // Función para inicializar el mapa
  function setupMap() {
    const buenosAiresPosition = [-34.6037, -58.3816];
    const map = L.map("leaflet-map", {
      center: buenosAiresPosition,
      zoom: 5,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const violetIcon = new L.Icon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    visitedSites.forEach(({ position, name }) => {
      L.marker(position, { icon: violetIcon }).addTo(map).bindPopup(name);
    });

    console.log("Mapa inicializado con ícono violeta (URL externa):", map);
  }

  setupMap();
});
