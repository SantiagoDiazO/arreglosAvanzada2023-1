let estudiantes = [
    {
        id: 1,
        nombre: "Juan",
        equipo: "NACIONAL"
    },
    {
        id: 2,
        nombre: "Francia",
        equipo: "MEDELLIN"
    },
    {
        id: 3,
        nombre: "Ana",
        equipo: "MEDELLIN"
    }
]

//mapeando el arreglo de estudiantes
let mapa = estudiantes.map(estudiante =>{
    estudiante.equipo = "NACIONL"
    estudiante.nota = 4,0
    .nota = 4,0
    return estudiante
})

console.log(mapa)