const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularVotos);

function calcularVotos(){ 
    let continuar = true;
    let total = 0;

    let tv1 = 0;
    let tv2 = 0;
    let tv3 = 0;
    let tv4 = 0;

    let pv1 = 0;
    let pv2 = 0;
    let pv3 = 0;
    let pv4 = 0;
    
    while(continuar == true){
        let numero = Number(prompt(`Ingrese los votos`));

        if(isNaN(numero)==true || numero>4 || numero<0 || numero%1!==0){
            alert("Ingrese un numero entero entre 1 y 4");
        }else if(numero == null || numero == 0){
            continuar = false;
        }else{
            if (numero == 1){
                tv1++;
            }else if(numero == 2){
                tv2++;
            }else if(numero == 3){
                tv3++;
            }else{
                tv4++;
            }
        }
    }

    total = (tv1 + tv2 + tv3 + tv4)

    pv1 = ((tv1 / total)*100).toFixed(2);
    pv2 = ((tv2 / total)*100).toFixed(2);
    pv3 = ((tv3 / total)*100).toFixed(2);
    pv4 = ((tv4 / total)*100).toFixed(2);

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `
    <table class="table">
    <thead>
      <tr>
        <th>Candidato</th>
        <th>Votos</th>
        <th>Porcentaje</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row">"1"</td>
        <td>${tv1}</td>
        <td>${pv1}%</td>
      </tr>
      <tr>
        <td scope="row">"2"</td>
        <td>${tv2}</td>
        <td>${pv2}%</td>
      </tr>
      <tr>
        <td scope="row">"3"</td>
        <td>${tv3}</td>
        <td>${pv3}%</td>
      </tr>
      <tr>
        <td scope="row">"4"</td>
        <td>${tv4}</td>
        <td>${pv4}%</td>
      </tr>
    </tbody>
  </table>`;
}
