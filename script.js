const materias = [
  { id: "bioq", nombre: "Bioquímica", correlativas: [] },
  { id: "biofis", nombre: "Biofísica", correlativas: [] },
  { id: "biocel", nombre: "Biología Celular y del Desarrollo", correlativas: [] },
  { id: "embrioanat", nombre: "Embriología y Anatomía Sistémica", correlativas: [] },
  { id: "bioest", nombre: "Bioestadística", correlativas: [] },
  { id: "fisicoq", nombre: "Fisicoquímica Aplicada a la Fisiología Veterinaria", correlativas: ["biofis", "bioq"] },
  { id: "histo", nombre: "Histología", correlativas: ["biocel"] },
  { id: "micro1", nombre: "Microbiología I", correlativas: ["biocel", "bioq"] },
  { id: "fisio", nombre: "Fisiología", correlativas: ["fisicoq", "embrioanat"] },
  { id: "anatvet", nombre: "Anatomía Veterinaria", correlativas: ["embrioanat"] },
  { id: "micro2", nombre: "Microbiología II", correlativas: ["histo", "micro1"] },
  { id: "inmuno", nombre: "Inmunobiología Animal Básica", correlativas: ["bioq", "micro1", "histo"] },
  { id: "eco", nombre: "Economía General y Sociología", correlativas: ["bioest"] },
  { id: "pato_gral", nombre: "Patología General Veterinaria", correlativas: ["fisicoq", "embrioanat", "histo", "inmuno"] },
  { id: "parasito", nombre: "Parasitología", correlativas: ["fisicoq", "bioest", "histo", "micro1"] },
  { id: "epidemio", nombre: "Epidemiología y Salud Pública Básica", correlativas: ["bioest"] },
  { id: "pato_esp", nombre: "Patología Especial", correlativas: ["fisio", "anatvet", "micro2", "parasito", "pato_gral"] },
  { id: "nutri", nombre: "Nutrición Animal y Alimentos", correlativas: ["parasito", "fisio", "anatvet", "eco"] },
  { id: "zootecnia", nombre: "Zootecnia General", correlativas: ["fisio", "anatvet", "eco"] },
  { id: "farmaco_gral", nombre: "Farmacología General", correlativas: ["fisio", "anatvet", "pato_gral"] },
  { id: "genetica", nombre: "Genética General", correlativas: ["pato_gral"] },
  { id: "semiologia", nombre: "Semiología", correlativas: ["fisio", "anatvet", "pato_gral"] },
  { id: "gen_pob", nombre: "Genética de Población y Mejoramiento Animal", correlativas: ["zootecnia", "genetica"] },
  { id: "ingles", nombre: "Inglés Técnico", correlativas: [] },
  { id: "farmaco_esp", nombre: "Farmacología Especial y Toxicología", correlativas: ["micro2", "parasito", "farmaco_gral"] },
  { id: "prod_aves", nombre: "Producción de Aves y Pilíferos", correlativas: ["nutri", "zootecnia", "gen_pob"] },
  { id: "infecto", nombre: "Infectología, Zoonosis y Enf. Exóticas y Emergentes", correlativas: ["semiologia", "pato_esp", "farmaco_esp"] },
  { id: "cirugia1", nombre: "Cirugía General I", correlativas: ["farmaco_esp", "semiologia"] },
  { id: "prod_bovinos", nombre: "Producción de Bovinos de Carne", correlativas: ["zootecnia", "nutri", "pato_esp", "farmaco_gral", "gen_pob"] },
  { id: "epi_apli", nombre: "Epidemiología y Salud Pública Aplicada", correlativas: ["pato_esp", "semiologia", "farmaco_esp", "zootecnia"] },
  { id: "prod_porcinos", nombre: "Producción Porcina", correlativas: ["semiologia", "zootecnia", "nutri", "pato_esp", "farmaco_gral", "gen_pob"] },
  { id: "prod_equinos", nombre: "Producción Equina", correlativas: ["semiologia", "zootecnia", "nutri", "pato_esp", "farmaco_gral", "gen_pob"] },
  { id: "prod_ovinos", nombre: "Producción Ovina y Caprina", correlativas: ["semiologia", "zootecnia", "nutri", "pato_esp", "farmaco_gral", "gen_pob"] },
  { id: "enf_rum", nombre: "Enfermedades de los Rumiantes y Cerdos", correlativas: ["zootecnia", "nutri", "semiologia", "farmaco_esp", "infecto", "prod_bovinos", "epi_apli"] },
  { id: "prod_leche", nombre: "Producción de Bovinos de Leche", correlativas: ["semiologia", "zootecnia", "nutri", "pato_esp", "farmaco_gral", "gen_pob"] },
  { id: "gestion", nombre: "Gestión de Empresa y Economía Agraria", correlativas: ["nutri", "zootecnia", "gen_pob"] },
  { id: "enf_peq", nombre: "Enfermedades de Caninos y Felinos Domésticos", correlativas: ["enf_rum"] },
  { id: "tecno", nombre: "Tecnología Aplicada a los Productos Alimenticios", correlativas: ["infecto", "enf_rum", "epi_apli", "prod_bovinos", "prod_leche", "prod_aves"] },
  { id: "enf_aves", nombre: "Enfermedades de las Aves y los Pilíferos", correlativas: ["prod_aves", "infecto"] },
  { id: "enf_equinos", nombre: "Enfermedades de los Equinos", correlativas: ["prod_equinos"] },
  { id: "teriogeno", nombre: "Teriogenología", correlativas: ["infecto", "epi_apli", "prod_bovinos", "prod_leche", "prod_porcinos", "prod_ovinos", "enf_rum"] },
  { id: "bromato", nombre: "Bromatología, Higiene e Inspección de Productos Alimenticios", correlativas: ["tecno"] },
  { id: "analisis", nombre: "Análisis Clínicos Veterinarios", correlativas: ["enf_rum", "enf_equinos", "enf_peq"] },
  { id: "inmuno_ap", nombre: "Inmunobiología Animal Aplicada", correlativas: ["enf_rum", "enf_aves", "enf_equinos", "enf_peq", "epi_apli", "infecto"] },
  { id: "metodos", nombre: "Métodos Complementarios de Diagnóstico", correlativas: ["enf_equinos", "enf_peq"] },
  { id: "intro_lab", nombre: "Introducción a la Ciencia de Animales de Laboratorio", correlativas: ["infecto"] },
  { id: "biotec", nombre: "Biotecnología de la Reproducción", correlativas: ["teriogeno"] },
  { id: "cirugia2", nombre: "Cirugía II y Anestesiología", correlativas: ["enf_rum", "enf_equinos", "enf_peq", "teriogeno"] },
  { id: "clinica_equinos", nombre: "Clínica de Equinos", correlativas: ["enf_equinos", "metodos", "analisis", "inmuno_ap", "biotec", "cirugia2", "teriogeno"] },
  { id: "clinica_cerdos", nombre: "Clínica y Sanidad de los Cerdos", correlativas: ["analisis", "inmuno_ap", "biotec", "teriogeno"] },
  { id: "clinica_peq", nombre: "Clínica de Caninos y Felinos", correlativas: ["enf_peq", "metodos", "analisis", "teriogeno"] },
  { id: "clinica_rumiantes", nombre: "Clínica y Sanidad de los Rumiantes", correlativas: ["enf_rum", "analisis", "inmuno_ap", "teriogeno"] },
  { id: "bienestar", nombre: "Bienestar Animal", correlativas: ["enf_rum"] },
  { id: "etica", nombre: "Ética y Legislación Veterinaria", correlativas: ["bromato"] },
  { id: "electivo1", nombre: "Electivo 1", correlativas: ["clinica_equinos"] },
  { id: "electivo2", nombre: "Electivo 2", correlativas: ["clinica_equinos"] },
  { id: "electivo3", nombre: "Electivo 3", correlativas: ["clinica_equinos"] },
  { id: "ppp", nombre: "Prácticas Pre-Profesionales", correlativas: ["clinica_equinos", "clinica_cerdos", "clinica_peq", "clinica_rumiantes", "bromato", "biotec"] },
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
