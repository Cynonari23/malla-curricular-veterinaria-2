const materias = [
  { id: "bioq", nombre: "Bioquímica", correlativas: [] },
  { id: "biofis", nombre: "Biofísica", correlativas: [] },
  { id: "biocel", nombre: "Biología Celular y del Desarrollo", correlativas: [] },
  { id: "histo", nombre: "Histología", correlativas: ["biocel"] },
  { id: "micro1", nombre: "Microbiología I", correlativas: ["biocel", "bioq"] },
  { id: "fisio", nombre: "Fisiología", correlativas: ["bioq"] },
];

function crearMalla() {
  const contenedor = document.getElementById("materias-container");
  contenedor.innerHTML = "";

  materias.forEach(m => {
    const div = document.createElement("div");
    div.textContent = m.nombre;
    div.classList.add("materia");
    div.id = m.id;

    if (!puedeDesbloquear(m)) {
      div.classList.add("bloqueada");
    }

    if (materiaAprobada(m.id)) {
      div.classList.add("aprobada");
    }

    div.addEventListener("click", () => {
      toggleMateria(m.id);
    });

    contenedor.appendChild(div);
  });
}

function materiaAprobada(id) {
  const estado = JSON.parse(localStorage.getItem("estado-materias") || "{}");
  return estado[id];
}

function toggleMateria(id) {
  const estado = JSON.parse(localStorage.getItem("estado-materias") || "{}");
  estado[id] = !estado[id];
  localStorage.setItem("estado-materias", JSON.stringify(estado));
  crearMalla();
}

function puedeDesbloquear(m) {
  const estado = JSON.parse(localStorage.getItem("estado-materias") || "{}");
  return m.correlativas.every(c => estado[c]);
}

crearMalla();
