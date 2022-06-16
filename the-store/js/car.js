const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
});

const products = [
  {
      name: 'Bicicleta montaña',
      image: './assets/bicicleta.jpg',
      price: 200,
      quantity: 2,
  },
  {
      name: 'Iphone 7',
      image: './assets/celular.jpg',
      price: 500,
      quantity: 4,
  },
  {
      name: 'Gafas de sol',
      image: './assets/lentes.jpg',
      price: 100,
      quantity: 6,
  },
  {
      name: 'Juego comedor',
      image: './assets/mesa.jpg',
      price: 320,
      quantity: 1,
  }
];

buildTable(products);

function buildTable(data){
  var table = document.getElementById('myTable')

  for(var i = 0; i < data.length; i++){
      var row = `<tr>
                      <td><img src="${data[i].image}" width="150px" heigth="150px"></td>
                      <td>${data[i].name}</td>
                      <td align="center">${data[i].price}$</td>
                      <td align="center">${data[i].quantity}</td>
                      <td align="center">${data[i].price*data[i].quantity}$</td>
                 </tr>`
                 table.innerHTML += row
  }
}