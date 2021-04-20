const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularVentas);

function calcularVentas(){
  let totalCiudad = 0;
  let totalTienda = 0;
  let totalEmpresa = 0;

  let totalEmpleadoTxt = "";
  let totalTiendaTxt = "";
  let totalCiudadTxt = "";

  let cantCiudad = parseInt(prompt("Ingrese el numero ciudades en las que hay tiendas"));

  if(isNaN(cantCiudad)==true || cantCiudad%1!=0){
    alert("Ingrese un numero entero positivo")
    let cantCiudad = parseInt(prompt("Ingrese el numero ciudades en las que hay tiendas"));
  }

  for(let i=1; i<=cantCiudad; i++){
    let cantTienda = parseInt(prompt(`Ingrese el numero de tiendas de la ciudad ${i}`));
    if(isNaN(cantTienda)==true || cantTienda%1!=0 || cantTienda<0){
      alert("Ingrese un numero entero positivo")
      i = i-1;
    }
    totalCiudad = 0;
    for(let j=1; j<=cantTienda; j++){
      let cantEmpleado = parseInt(prompt(`Ingrese el numero de empleados de la tienda ${j} de la ciudad ${i}`));
      if(isNaN(cantEmpleado)==true || cantEmpleado%1!=0 || cantEmpleado<0){
        alert("Ingrese un numero entero positivo")
        j = j-1;
      }
      totalTienda = 0;
      for(let k=1; k<=cantEmpleado; k++){
        let ventaEmpleado = parseInt(prompt(`Ingrese la venta del empleado ${k} de la tienda ${j} de la ciudad ${i}`));
        if(isNaN(ventaEmpleado)==true || ventaEmpleado<0){
          alert("Ingrese un numero entero positivo")
          k = k-1;
        }
        totalEmpleadoTxt += `<br>Ciudad: <b>${i}</b>. Tienda: <b>${j}</b>. Empleado: <b>${k}</b>. Venta: <b>$${ventaEmpleado}</b>`;
        totalTienda += ventaEmpleado;
      }
      totalTiendaTxt += `<br>Ciudad: <b>${i}</b>. Tienda: <b>${j}</b>. Venta total de la tienda: <b>$${totalTienda}</b>`;
      totalCiudad += totalTienda;
    }
    totalCiudadTxt += `
    <br>Ciudad: <b>${i}</b>. Venta total de la ciudad: <b>$${totalCiudad}</b>`;
    totalEmpresa += totalCiudad;
  }

  let resultContainer = document.getElementById("resultContainer");

  resultContainer.innerHTML = `
  <br>Ventas por empleado:
  <br>${totalEmpleadoTxt}
  <br>
  <br>Ventas por tienda:
  <br>${totalTiendaTxt}
  <br>
  <br>Ventas por ciudad:
  <br>${totalCiudadTxt}
  <br>
  <br>Ventas totalales de la empresa: <b>$${totalEmpresa}</b>`;
}