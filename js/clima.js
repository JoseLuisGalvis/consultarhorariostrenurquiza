// clima.js - Funcionalidad para la página del clima
const API_KEY = "135c58bcb5237fc560f0ca5f88796f0b";
const API_URL = "https://api.openweathermap.org/data/2.5/";

const estaciones = {
  federicolacroze: { lat: -34.5924, lon: -58.4431, nombre: "Federico Lacroze" },
  joseartigas: { lat: -34.5792, lon: -58.4569, nombre: "José Artigas" },
  pnarata: { lat: -34.585, lon: -58.465, nombre: "PN. Arata" },
  drfcobeiro: { lat: -34.6105, lon: -58.4812, nombre: "Dr. Fco. Beiro" },
  ellibertador: { lat: -34.615, lon: -58.495, nombre: "El Libertador" },
  antoniodevoto: { lat: -34.6003, lon: -58.5101, nombre: "Antonio Devoto" }, // Opcional: ajustar a -34.615
  cnelfcolynch: { lat: -34.6057, lon: -58.5106, nombre: "Cnel. Fco. Lynch" },
  fernandezmoreno: { lat: -34.6089, lon: -58.5234, nombre: "Fernandez Moreno" },
  lourdes: { lat: -34.6123, lon: -58.5321, nombre: "Lourdes" },
  tropezon: { lat: -34.6157, lon: -58.5412, nombre: "Tropezon" },
  josembosch: { lat: -34.6201, lon: -58.5503, nombre: "José M. Bosch" },
  martincoronado: { lat: -34.6254, lon: -58.5601, nombre: "Martin Coronado" },
  pablopodesta: { lat: -34.6302, lon: -58.5703, nombre: "Pablo Podesta" },
  jorgenewberry: { lat: -34.6351, lon: -58.5804, nombre: "Jorge Newberry" },
  rubendario: { lat: -34.6403, lon: -58.5905, nombre: "Ruben Dario" },
  edelosandes: { lat: -34.6452, lon: -58.6006, nombre: "E. de los Andes" },
  juanbdelasalle: {
    lat: -34.6501,
    lon: -58.6107,
    nombre: "Juan B. De La Salle",
  },
  sgtobarruffaldi: {
    lat: -34.6553,
    lon: -58.6208,
    nombre: "Sgto. Barruffaldi",
  },
  capitanlozano: { lat: -34.6602, lon: -58.6309, nombre: "Capitan Lozano" },
  tnteagneta: { lat: -34.6651, lon: -58.641, nombre: "Tnte. Agneta" },
  campodemayo: { lat: -34.67, lon: -58.655, nombre: "Campo de Mayo" },
  sgtocabral: { lat: -34.68, lon: -58.665, nombre: "Sgto. Cabral" },
  generallemos: { lat: -34.69, lon: -58.675, nombre: "General Lemos" },
};

// Variables globales
let estacionSelector;
let temperaturaEl;
let descripcionClimaEl;
let weatherIconEl;
let humedadEl;
let vientoEl;
let presionEl;
let visibilidadEl;
let recomendacionEl;
let ultimaActualizacionEl;
let pronosticoContainer;
let currentWeatherData = null;
let currentStationName = null;

document.addEventListener("DOMContentLoaded", function () {
  console.log("Clima.js - DOM cargado");

  // Asignar elementos del DOM
  estacionSelector = document.getElementById("estacion-selector");
  temperaturaEl = document.getElementById("temperatura");
  descripcionClimaEl = document.getElementById("descripcion-clima");
  weatherIconEl = document.getElementById("weather-icon");
  humedadEl = document.getElementById("humedad");
  vientoEl = document.getElementById("viento");
  presionEl = document.getElementById("presion");
  visibilidadEl = document.getElementById("visibilidad");
  recomendacionEl = document.getElementById("recomendacion-texto");
  ultimaActualizacionEl = document.getElementById("ultima-actualizacion");
  pronosticoContainer = document.getElementById("pronostico-container");

  // Depurar qué elementos faltan
  const missingElements = [];
  if (!estacionSelector) missingElements.push("estacion-selector");
  if (!temperaturaEl) missingElements.push("temperatura");
  if (!descripcionClimaEl) missingElements.push("descripcion-clima");
  if (!weatherIconEl) missingElements.push("weather-icon");
  if (!humedadEl) missingElements.push("humedad");
  if (!vientoEl) missingElements.push("viento");
  if (!presionEl) missingElements.push("presion");
  if (!visibilidadEl) missingElements.push("visibilidad");
  if (!recomendacionEl) missingElements.push("recomendacion-texto");
  if (!ultimaActualizacionEl) missingElements.push("ultima-actualizacion");
  if (!pronosticoContainer) missingElements.push("pronostico-container");

  if (missingElements.length > 0) {
    console.error(
      "Elementos del DOM no encontrados:",
      missingElements.join(", ")
    );
  } else {
    console.log("Todos los elementos del DOM están disponibles");
  }

  // Inicializar AOS si está disponible
  if (typeof AOS !== "undefined") {
    AOS.init();
  }

  // Esperar a que las traducciones estén disponibles
  function waitForTranslations() {
    if (window.currentTranslations) {
      console.log("Traducciones disponibles, cargando clima");
      cargarClimaActual();
      if (estacionSelector) {
        estacionSelector.addEventListener("change", cargarClimaActual);
      } else {
        console.warn(
          "No se pudo agregar evento a estacionSelector porque no está disponible"
        );
      }
    } else {
      console.log("Esperando traducciones...");
      setTimeout(waitForTranslations, 100);
    }
  }

  waitForTranslations();
});

function cargarClimaActual() {
  console.log("Cargando clima actual...");

  if (!estacionSelector) {
    console.error("El selector de estaciones no está disponible.");
    return;
  }

  const estacionSeleccionada = estacionSelector.value;
  const { lat, lon, nombre } = estaciones[estacionSeleccionada];
  const t = window.currentTranslations;

  if (weatherIconEl)
    weatherIconEl.innerHTML = '<i class="fas fa-spinner fa-spin fa-3x"></i>';
  if (temperaturaEl) temperaturaEl.textContent = t.loading;
  if (descripcionClimaEl) descripcionClimaEl.textContent = t.fetchingWeather;

  fetch(
    `${API_URL}weather?lat=${lat}&lon=${lon}&units=metric&lang=${
      localStorage.getItem("selectedLanguage") || "es"
    }&appid=${API_KEY}&t=${Date.now()}` // Añadir timestamp para evitar caché
  )
    .then((response) => {
      if (!response.ok) throw new Error("Error al obtener datos del clima");
      return response.json();
    })
    .then((data) => {
      console.log("Datos de clima recibidos:", data);
      mostrarClimaActual(data, nombre);
      cargarPronostico(lat, lon);
    })
    .catch((error) => {
      console.error("Error:", error);
      mostrarError();
    });
}

function mostrarClimaActual(data, nombreEstacion) {
  console.log("Mostrando clima actual para:", nombreEstacion);

  currentWeatherData = data;
  currentStationName = nombreEstacion;
  const lang = localStorage.getItem("selectedLanguage") || "es";
  const t = window.currentTranslations;
  const preposition = lang === "es" ? "en" : "in";

  if (temperaturaEl)
    temperaturaEl.textContent = `${Math.round(data.main.temp)}°C`;
  const descripcion = data.weather[0].description;
  if (descripcionClimaEl) {
    descripcionClimaEl.textContent = `${
      descripcion.charAt(0).toUpperCase() + descripcion.slice(1)
    } ${preposition} ${nombreEstacion}`;
  }

  const weatherId = data.weather[0].id;
  const iconoClima = obtenerIconoClima(weatherId, data.weather[0].icon);
  if (weatherIconEl) weatherIconEl.innerHTML = iconoClima;

  if (humedadEl) humedadEl.textContent = `${data.main.humidity}%`;
  if (vientoEl)
    vientoEl.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
  if (presionEl) presionEl.textContent = `${data.main.pressure} hPa`;
  if (visibilidadEl) {
    visibilidadEl.textContent = data.visibility
      ? `${(data.visibility / 1000).toFixed(1)} km`
      : "N/A";
  }

  if (recomendacionEl)
    recomendacionEl.textContent = generarRecomendacion(
      weatherId,
      data.main.temp
    );

  const ahora = new Date();
  if (ultimaActualizacionEl)
    ultimaActualizacionEl.textContent = ahora.toLocaleString(lang);
}

function updateRecommendation() {
  if (currentWeatherData && currentStationName && recomendacionEl) {
    const weatherId = currentWeatherData.weather[0].id;
    const temperatura = currentWeatherData.main.temp;
    recomendacionEl.textContent = generarRecomendacion(weatherId, temperatura);
  }
}

window.updateRecommendation = updateRecommendation;

function cargarPronostico(lat, lon) {
  console.log("Cargando pronóstico para coordenadas:", lat, lon);

  const t = window.currentTranslations;
  if (pronosticoContainer) {
    pronosticoContainer.innerHTML = `<div class="col-12 text-center"><i class="fas fa-spinner fa-spin fa-3x"></i><p>${t.loadingForecast}</p></div>`;
  }

  fetch(
    `${API_URL}forecast?lat=${lat}&lon=${lon}&units=metric&lang=${
      localStorage.getItem("selectedLanguage") || "es"
    }&appid=${API_KEY}&t=${Date.now()}` // Añadir timestamp para evitar caché
  )
    .then((response) => {
      if (!response.ok) throw new Error("Error al obtener pronóstico");
      return response.json();
    })
    .then((data) => {
      console.log("Datos de pronóstico recibidos");
      mostrarPronostico(data);
    })
    .catch((error) => {
      console.error("Error en pronóstico:", error);
      if (pronosticoContainer) {
        pronosticoContainer.innerHTML = `<div class="col-12 text-center"><div class="alert alert-danger"><i class="fas fa-exclamation-triangle me-2"></i>${t.forecastError}</div></div>`;
      }
    });
}

function mostrarPronostico(data) {
  console.log("Mostrando pronóstico");

  if (!pronosticoContainer) {
    console.error("El contenedor de pronóstico no está disponible");
    return;
  }

  pronosticoContainer.innerHTML = "";
  const pronosticoPorDia = {};
  const lang = localStorage.getItem("selectedLanguage") || "es";

  data.list.forEach((item) => {
    const fecha = new Date(item.dt * 1000);
    const dia = fecha.toLocaleDateString(lang, {
      weekday: "long",
      day: "numeric",
    });

    if (!pronosticoPorDia[dia]) {
      pronosticoPorDia[dia] = {
        temperaturaMin: item.main.temp_min,
        temperaturaMax: item.main.temp_max,
        descripcion: item.weather[0].description,
        icon: item.weather[0].icon,
        id: item.weather[0].id,
      };
    } else {
      pronosticoPorDia[dia].temperaturaMin = Math.min(
        pronosticoPorDia[dia].temperaturaMin,
        item.main.temp_min
      );
      pronosticoPorDia[dia].temperaturaMax = Math.max(
        pronosticoPorDia[dia].temperaturaMax,
        item.main.temp_max
      );
    }
  });

  const dias = Object.keys(pronosticoPorDia).slice(0, 5);
  dias.forEach((dia) => {
    const pronostico = pronosticoPorDia[dia];
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-6 col-lg-4 mb-3";
    colDiv.setAttribute("data-aos", "fade-up");

    colDiv.innerHTML = `
      <div class="card forecast-card d-flex flex-column text-center mx-auto py-2">
        <div class="forecast-day">${dia}</div>
        <div class="forecast-icon">${obtenerIconoClima(
          pronostico.id,
          pronostico.icon
        )}</div>
        <div class="forecast-temp">
          <span class="max-temp">${Math.round(
            pronostico.temperaturaMax
          )}°C</span> / 
          <span class="min-temp">${Math.round(
            pronostico.temperaturaMin
          )}°C</span>
        </div>
        <div class="forecast-desc">${
          pronostico.descripcion.charAt(0).toUpperCase() +
          pronostico.descripcion.slice(1)
        }</div>
      </div>
    `;
    pronosticoContainer.appendChild(colDiv);
  });
}

function obtenerIconoClima(id, icon) {
  let iconClass = "";
  const esNoche = icon.includes("n");

  if (id >= 200 && id < 300) iconClass = esNoche ? "fa-bolt" : "fa-bolt";
  else if (id >= 300 && id < 500)
    iconClass = esNoche ? "fa-cloud-rain" : "fa-cloud-rain";
  else if (id >= 500 && id < 600)
    iconClass = esNoche ? "fa-cloud-showers-heavy" : "fa-cloud-showers-heavy";
  else if (id >= 600 && id < 700) iconClass = "fa-snowflake";
  else if (id >= 700 && id < 800) iconClass = "fa-smog";
  else if (id === 800) iconClass = esNoche ? "fa-moon" : "fa-sun";
  else if (id > 800) {
    if (id === 801) iconClass = esNoche ? "fa-cloud-moon" : "fa-cloud-sun";
    else iconClass = "fa-cloud";
  }

  let iconColor = "#007bff";
  if (id === 800) iconColor = esNoche ? "#5c6bc0" : "#ffd700";
  else if (id >= 200 && id < 300) iconColor = "#6c757d";
  else if ((id >= 300 && id < 600) || (id >= 700 && id < 800))
    iconColor = "#17a2b8";
  else if (id >= 600 && id < 700) iconColor = "#adb5bd";

  return `<i class="fas ${iconClass}" style="color: ${iconColor}; font-size: 3rem;"></i>`;
}

function generarRecomendacion(weatherId, temperatura) {
  const lang = localStorage.getItem("selectedLanguage") || "es";
  const t = window.translations[lang].weatherRecommendations;

  if (weatherId >= 200 && weatherId < 300) return t.thunderstorms;
  else if (
    (weatherId >= 300 && weatherId < 500) ||
    (weatherId >= 520 && weatherId < 600)
  )
    return t.drizzle;
  else if (weatherId >= 500 && weatherId < 520) return t.rain;
  else if (weatherId >= 600 && weatherId < 700) return t.snow;
  else if (weatherId >= 700 && weatherId < 800) return t.fog;
  else if (weatherId === 800) {
    if (temperatura > 30) return t.clearHot;
    else if (temperatura > 25) return t.clearWarm;
    else if (temperatura < 10) return t.clearCold;
    else return t.clearNice;
  } else if (weatherId > 800 && weatherId <= 804) {
    if (weatherId === 801) return t.fewClouds;
    else if (weatherId === 802) return t.partlyCloudy;
    else return t.mostlyCloudy;
  }
}

function mostrarError() {
  const t = window.currentTranslations;
  if (temperaturaEl) temperaturaEl.textContent = t.error;
  if (descripcionClimaEl) descripcionClimaEl.textContent = t.weatherLoadError;
  if (weatherIconEl) {
    weatherIconEl.innerHTML =
      '<i class="fas fa-exclamation-triangle" style="color: #dc3545; font-size: 3rem;"></i>';
  }
  if (humedadEl) humedadEl.textContent = "N/A";
  if (vientoEl) vientoEl.textContent = "N/A";
  if (presionEl) presionEl.textContent = "N/A";
  if (visibilidadEl) visibilidadEl.textContent = "N/A";
  if (recomendacionEl) recomendacionEl.textContent = t.tryAgain;
}

// Hacer la función global para que sea accesible desde script.js
window.cargarClimaActual = cargarClimaActual;
