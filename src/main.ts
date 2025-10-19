import { series } from "./data.js"; // asegúrate que el archivo compilado esté en dist/data.js

interface Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  link: string;
  image: string;
}

// Elementos del DOM
const tbody = document.getElementById("series-body")!;
const avgContainer = document.getElementById("average-seasons")!;
const detailCard = document.getElementById("series-detail")!;
const detailImg = document.getElementById("detail-image") as HTMLImageElement;
const detailTitle = document.getElementById("detail-title")!;
const detailDesc = document.getElementById("detail-description")!;
const detailLink = document.getElementById("detail-link") as HTMLAnchorElement;

// Función para renderizar la tabla
function renderTable(): void {
  tbody.innerHTML = "";
  let totalSeasons = 0;

  series.forEach((serie) => {
    totalSeasons += serie.seasons;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <th scope="row">${serie.id}</th>
      <td class="text-primary serie-link" style="cursor:pointer">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;

    tr.querySelector(".serie-link")!.addEventListener("click", () => showDetails(serie));
    tbody.appendChild(tr);
  });

  const avg = (totalSeasons / series.length).toFixed(2);
  avgContainer.textContent = `Seasons average: ${avg}`;
}

// Función para mostrar el detalle al lado derecho
function showDetails(serie: Serie): void {
  detailImg.src = serie.image;
  detailTitle.textContent = serie.name;
  detailDesc.textContent = serie.description;
  detailLink.textContent = "See more";
  detailLink.href = serie.link;
  detailCard.style.display = "block";
}

// Renderiza al cargar
renderTable();

