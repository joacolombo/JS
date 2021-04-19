const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularProduccion);

function calcularProduccion(){ 
    let continuar = true;
    let total = 0;
    let empresa = 1;
    
    for(let i=1; i<=12; i++){
      while(continuar == true){
      let produccion = Number(prompt(`Ingrese la produccion del mes ${i} de la empresa ${empresa}`));
        if(isNaN(produccion)==true){
          alert("Ingrese un numero positivo");
        }else if(produccion == null){
          continuar = false;
        }else{
          total = total + produccion;
        }
      }  
      empresa++;
    }
    
      

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
