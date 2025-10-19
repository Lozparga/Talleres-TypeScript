// src/main.ts
import { series } from "./data.js";
// Referencias a elementos del HTML
const seriesTbody = document.getElementById('series-body');
const averageSeasonsEl = document.getElementById('average-seasons');
/**
 * Función para renderizar el listado de series en la tabla.
 */
function renderSeriesInTable(series) {
    series.forEach(serie => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="${serie.web}" target="_blank">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(tr);
    });
}
/**
 * Función para calcular y mostrar el promedio de temporadas (Punto No. 2).
 */
function displayAverageSeasons(series) {
    let totalSeasons = 0;
    series.forEach(serie => {
        totalSeasons += serie.seasons;
    });
    const average = totalSeasons / series.length;
    // Inyecta el texto del promedio en el contenedor HTML
    averageSeasonsEl.innerHTML = `
        <p class="font-weight-bold">
            Promedio de temporadas: ${average.toFixed(2)}
        </p>`;
}
// ----------------------------------------------------------------
// Ejecución principal
// ----------------------------------------------------------------
renderSeriesInTable(series); // Pinta la tabla (Punto No. 1)
displayAverageSeasons(series); // Muestra el promedio (Punto No. 2)
