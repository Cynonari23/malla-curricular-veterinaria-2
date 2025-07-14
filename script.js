const materias = [
  { id: "bioq", nombre: "Bioquímica", correlativas: [], anio: 1, cuatri: 1 },
  { id: "biofis", nombre: "Biofísica", correlativas: [], anio: 1, cuatri: 1 },
  { id: "biocel", nombre: "Biología Celular y del Desarrollo", correlativas: [], anio: 1, cuatri: 1 },
  { id: "embrioanat", nombre: "Embriología y Anatomía Sistémica", correlativas: [], anio: 1, cuatri: 1 },
  { id: "bioest", nombre: "Bioestadística", correlativas: [], anio: 1, cuatri: 1 },
  { id: "fisicoq", nombre: "Fisicoquímica Aplicada a la Fisiología Veterinaria", correlativas: ["biofis", "bioq"], anio: 1, cuatri: 2 },
  { id: "histo", nombre: "Histología", correlativas: ["biocel"], anio: 1, cuatri: 2 },
  { id: "micro1", nombre: "Microbiología I", correlativas: ["biocel", "bioq"], anio: 1, cuatri: 2 },
  { id: "fisio", nombre: "Fisiología", correlativas: ["fisicoq", "embrioanat"], anio: 2, cuatri: 1 },
  { id: "anatvet", nombre: "Anatomía Veterinaria", correlativas: ["embrioanat"], anio: 2, cuatri: 1 },
  { id: "micro2", nombre: "Microbiología II", correlativas: ["histo", "micro1"], anio: 2, cuatri: 1 },
  { id: "inmuno", nombre: "Inmunobiología Animal Básica", correlativas: ["bioq", "micro1", "histo"], anio: 2, cuatri: 1 },
  { id: "eco", nombre: "Economía General y Sociología", correlativas: ["bioest"], anio: 2, cuatri: 1 },
  { id: "pato_gral", nombre: "Patología General Veterinaria", correlativas: ["fisicoq", "embrioanat", "histo", "inmuno"], anio: 2, cuatri: 2 },
  { id: "parasito", nombre: "Parasitología", correlativas: ["fisicoq", "bioest", "histo", "micro1"], anio: 2, cuatri: 2 },
  { id: "epidemio", nombre: "Epidemiología y Salud Pública Básica", correlativas: ["bioest"], anio: 2, cuatri: 2 },
  { id: "pato_esp", nombre: "Patología Especial", correlativas: ["fisio", "anatvet", "micro2", "parasito", "pato_gral"], anio: 3, cuatri: 1 },
  { id: "nutri", nombre: "Nutrición Animal y Alimentos", correlativas: ["parasito", "fisio", "anatvet", "eco"], anio: 3, cuatri: 1 },
  { id: "zootecnia", nombre: "Zootecnia General", correlativas: ["fisio", "anatvet", "eco"], anio: 3, cuatri: 1 },
  { id: "farmaco_gral", nombre: "Farmacología General", correlativas: ["fisio", "anatvet", "pato_gral"], anio: 3, cuatri: 1 },
  { id: "genetica", nombre: "Genética General", correlativas: ["pato_gral"], anio: 3, cuatri: 1 },
  { id: "semiologia", nombre: "Semiología", correlativas: ["fisio", "anatvet", "pato_gral"], anio: 3, cuatri: 2 },
  { id: "gen_pob", nombre: "Genética de Población y Mejoramiento Animal", correlativas: ["zootecnia", "genetica"], anio: 3, cuatri: 2 },
  { id: "ingles", nombre: "Inglés Técnico", correlativas: [], anio: 3, cuatri: 2 },
  { id: "farmaco_esp", nombre: "Farmacología Especial y Toxicología", correlativas: ["micro2", "parasito", "farmaco_gral"], anio: 3, cuatri: 2 },
  { id: "prod_aves", nombre: "Producción de Aves y Pilíferos", correlativas: ["nutri", "zootecnia", "gen_pob"], anio: 4, cuatri: 1 },
  { id: "infecto", nombre: "Infectología, Zoonosis y Enf. Exóticas y Emergentes", correlativas: ["semiologia", "pato_esp", "farmaco_esp"], anio: 4, cuatri: 1 },
  { id: "cirugia1", nombre: "Cirugía General I", correlativas: ["farmaco_esp", "semiologia"], anio: 4, cuatri: 1 },
  { id: "prod_bovinos", nombre: "Producción de Bovinos de Carne", correlativas: ["zootecnia", "nutri", "pato_esp", "farmaco_gral", "gen_pob"], anio: 4, cuatri: 1 },
  { id: "epi_apli", nombre: "Epidemiología y Salud Pública Aplicada", correlativas: ["pato_esp", "semiologia", "farmaco_esp", "zootecnia"], anio: 4, cuatri: 1 },
  { id: "prod_porcinos", nombre: "Producción Porcina", correlativas: ["semiologia", "zootecnia", "nutri", "pato_esp", "farmaco_gral", "gen_pob"], anio: 4, cuatri: 2 },
  { id: "prod_equinos", nombre: "Producción Equina", correlativas: ["semiologia", "zootecnia", "nutri", "pato_esp", "farmaco_gral", "gen_pob"], anio: 4, cuatri: 2 },
  { id: "prod_ovinos", nombre: "Producción Ovina y Caprina", correlativas: ["semiologia", "zootecnia", "nutri", "pato_esp", "farmaco_gral", "gen_pob"], anio: 4, cuatri: 2 },
  { id: "enf_rum", nombre: "Enfermedades de los Rumiantes y Cerdos", correlativas: ["zootecnia", "nutri", "semiologia", "farmaco_esp", "infecto", "prod_bovinos", "epi_apli"], anio: 4, cuatri: 2 },
  { id: "prod_leche", nombre: "Producción de Bovinos de Leche", correlativas: ["semiologia", "zootecnia", "nutri", "pato_esp", "farmaco_gral", "gen_pob"], anio: 4, cuatri: 2 },
  { id: "gestion", nombre: "Gestión de Empresa y Economía Agraria", correlativas: ["nutri", "zootecnia", "gen_pob"], anio: 4, cuatri: 2 },
  { id: "enf_peq", nombre: "Enfermedades de Caninos y Felinos Domésticos", correlativas: ["enf_rum"], anio: 5, cuatri: 1 },
  { id: "tecno", nombre: "Tecnología Aplicada a los Productos Alimenticios", correlativas: ["infecto", "enf_rum", "epi_apli", "prod_bovinos", "prod_leche", "prod_aves"], anio: 5, cuatri: 1 },
  { id: "enf_aves", nombre: "Enfermedades de las Aves y los Pilíferos", correlativas: ["prod_aves", "infecto"], anio: 5, cuatri: 1 },
  { id: "enf_equinos", nombre: "Enfermedades de los Equinos", correlativas: ["prod_equinos"], anio: 5, cuatri: 1 },
  { id: "teriogeno", nombre: "Teriogenología", correlativas: ["infecto", "epi_apli", "prod_bovinos", "prod_leche", "prod_porcinos", "prod_ovinos", "enf_rum"], anio: 5, cuatri: 1 },
  { id: "bromato", nombre: "Bromatología, Higiene e Inspección de Productos Alimenticios", correlativas: ["tecno"], anio: 5, cuatri: 2 },
  { id: "analisis", nombre: "Análisis Clínicos Veterinarios", correlativas: ["enf_rum", "enf_equinos", "enf_peq"], anio: 5, cuatri: 2 },
  { id: "inmuno_ap", nombre: "Inmunobiología Animal Aplicada", correlativas: ["enf_rum", "enf_aves", "enf_equinos", "enf_peq", "epi_apli", "infecto"], anio: 5, cuatri: 2 },
  { id: "metodos", nombre: "Métodos Complementarios de Diagnóstico", correlativas: ["enf_equinos", "enf_peq"], anio: 5, cuatri: 2 },
  { id: "intro_lab", nombre: "Introducción a la Ciencia de Animales de Laboratorio", correlativas: ["infecto"], anio: 5, cuatri: 2 },
  { id: "biotec", nombre: "Biotecnología de la Reproducción", correlativas: ["teriogeno"], anio: 5, cuatri: 2 },
  { id: "cirugia2", nombre: "Cirugía II y Anestesiología", correlativas: ["enf_rum", "enf_equinos", "enf_peq", "teriogeno"], anio: 5, cuatri: 2 },
  { id: "clinica_equinos", nombre: "Clínica de Equinos", correlativas: ["enf_equinos", "metodos", "analisis", "inmuno_ap", "biotec", "cirugia2", "teriogeno"], anio: 6, cuatri: 1 },
  { id: "clinica_cerdos", nombre: "Clínica y Sanidad de los Cerdos", correlativas: ["analisis", "inmuno_ap", "biotec", "teriogeno"], anio: 6, cuatri: 1 },
  { id: "clinica_peq", nombre: "Clínica de Caninos y Felinos", correlativas: ["enf_peq", "metodos", "analisis", "teriogeno"], anio: 6, cuatri: 1 },
  { id: "clinica_rumiantes", nombre: "Clínica y Sanidad de los Rumiantes", correlativas: ["enf_rum", "analisis", "inmuno_ap", "teriogeno"], anio: 6, cuatri: 1 },
  { id: "bienestar", nombre: "Bienestar Animal", correlativas: ["enf_rum"], anio: 6, cuatri: 1 },
  { id: "etica", nombre: "Ética y Legislación Veterinaria", correlativas: ["bromato"], anio: 6, cuatri: 1 },
  { id: "electivo1", nombre: "Electivo 1", correlativas: ["clinica_equinos"], anio: 6, cuatri: 2 },
  { id: "electivo2", nombre: "Electivo 2", correlativas: ["clinica_equinos"], anio: 6, cuatri: 2 },
  { id: "electivo3", nombre: "Electivo 3", correlativas: ["clinica_equinos"], anio: 6, cuatri: 2 },
  { id: "ppp", nombre: "Prácticas Pre-Profesionales", correlativas: ["clinica_equinos", "clinica_cerdos", "clinica_peq", "clinica_rumiantes", "bromato", "biotec"], anio: 6, cuatri: 2 },
];

function crearMalla() {
  const contenedor = document.getElementById("materias-container");
  contenedor.innerHTML = "";

  // Agrupar materias por año y cuatrimestre
  const agrupadas = {};

  materias.forEach(m => {
    const key = `Año ${m.anio} - Cuat. ${m.cuatri}`;
    if (!agrupadas[key]) agrupadas[key] = [];
    agrupadas[key].push(m);
  });

  // Mostrar por bloques
  Object.keys(agrupadas).sort().forEach(bloque => {
    const titulo = document.createElement("h2");
    titulo.textContent = bloque;
    contenedor.appendChild(titulo);

    const fila = document.createElement("div");
    fila.classList.add("bloque");

    agrupadas[bloque].forEach(m => {
      const div = document.createElement("div");
      div.textContent = m.nombre;
      div.classList.add("materia");
      div.id = m.id;

      if (!puedeDesbloquear(m)) div.classList.add("bloqueada");
      if (materiaAprobada(m.id)) div.classList.add("aprobada");

      div.addEventListener("click", () => toggleMateria(m.id));
      fila.appendChild(div);
    });

    contenedor.appendChild(fila);
  });
}
function resetearProgreso() {
  if (confirm("¿Estás segura de que querés reiniciar tu malla?")) {
    localStorage.removeItem("estado-materias");
    crearMalla();
  }function resetearProgreso() {
  if (confirm("¿Estás segura de que querés reiniciar tu malla?")) {
    localStorage.removeItem("estado-materias");
    crearMalla();
  }
}
