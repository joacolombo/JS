//ENTRADAS
    //Matricula y 5 calificaciones

//PROCESOS
    //Promedio de las 5 calificaciones

//SALIDAS
    //Matricula y promedio

const btnCalcularPromedio = document.getElementById("btnCalcularPromedio");

btnCalcularPromedio.addEventListener("click", calcularPromedio);

function calcularPromedio(){
    const matricula = document.getElementById("inpMatricula").value;

    const nota1 = Number(document.getElementById("inpNota1").value);
    const nota2 = Number(document.getElementById("inpNota2").value);
    const nota3 = Number(document.getElementById("inpNota3").value);
    const nota4 = Number(document.getElementById("inpNota4").value);
    const nota5 = Number(document.getElementById("inpNota5").value);

    let resultado = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

    const containerResultado = document.getElementById("resultado");

    containerResultado.innerText = `El alumno con matricula: ${matricula}, tiene un promedio de: ${resultado}`
}