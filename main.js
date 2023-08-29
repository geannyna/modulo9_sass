document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("vehicle-form");
  const coches = []; 
  const cochesListElement = document.getElementById("coches-list"); // Elemento donde se mostrarán los datos

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const year = parseInt(document.getElementById("year").value);
    const color = document.getElementById("color").value;
    const price = parseFloat(document.getElementById("price").value);

    const vehicleData = {
      brand: brand,
      model: model,
      year: year,
      color: color,
      price: price
    };

    coches.push(vehicleData); // Agregamos el objeto al array de coches
    console.log(coches); // el array de coches en la consola

    // Mostramos los datos almacenados en el div coches-list
    cochesListElement.innerHTML = "";
    coches.forEach(coche => {
      cochesListElement.innerHTML += `
        <div>
          <p>Marca: ${coche.brand}</p>
          <p>Modelo: ${coche.model}</p>
          <p>Año: ${coche.year}</p>
          <p>Color: ${coche.color}</p>
          <p>Precio: ${coche.price}</p>
          <hr>
        </div>
      `;
    });

    // Limpiamos el formulario después de enviar los datos
    form.reset();
  });
});

//cambiamos el color de fondo
const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

themeSwitch.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-theme");
    body.classList.remove("default-theme"); 
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("default-theme");
  }
});



