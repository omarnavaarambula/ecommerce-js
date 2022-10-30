'use strict'


const product = [

  { id: 1, productImg: '<img src="./images/product-1.png" class="product-img"  ></img>', categor: 'sudadera', productImage: 'image1', productItem: 'Sudadera Academlo', productColor: 'Logo rojo, color gris', productPrice: 12000, divNro: 'div1' },
  { id: 2, productImg: '<img src="./images/product-2.png" class ="product-img"></img>', categor: 'camisa',productImage: 'image2', productItem: 'Camisa Academlo', productColor: 'Logo blanco, color rojo', productPrice: 2000, divNro: 'div2' },
  { id: 3, productImg: '<img src="./images/product-3.png" class ="product-img"></img>', categor: 'sudadera',productImage: 'image3', productItem: 'Sudadera Academlo', productColor: 'Logo rojo, color blanco', productPrice: 12000, divNro: 'div3' },
  { id: 4, productImg: '<img src="./images/product-4.png" class ="product-img"></img>', categor: 'sudadera',productImage: 'image4', productItem: 'Sudadera Academlo', productColor: 'Logo blanco, color rojo', productPrice: 12000, divNro: 'div4' },
  { id: 5, productImg: '<img src="./images/product-5.png" class ="product-img"></img>', categor: 'camisa',productImage: 'image5', productItem: 'Camisa Academlo', productColor: 'Logo blanco, color negro', productPrice: 2000, divNro: 'div5' },
  { id: 6, productImg: '<img src="./images/product-5.png" class ="product-img"></img>', categor: 'camisa',productImage: 'image6', productItem: 'Camisa Academlo', productColor: 'Logo blanco, color negro', productPrice: 2000, divNro: 'div6' },
  { id: 7, productImg: '<img src="./images/product-4.png" class ="product-img"></img>', categor: 'sudadera',productImage: 'image7', productItem: 'Sudadera Academlo', productColor: 'Logo blanco, color rojo', productPrice: 12000, divNro: 'div7' },
  { id: 8, productImg: '<img src="./images/product-6.png" class ="product-img"></img>', categor: 'sudadera',productImage: 'image8', productItem: 'Sudadera Academlo', productColor: 'Logo negro, color gris', productPrice: 12000, divNro: 'div8' },
  { id: 9, productImg: '<img src="./images/product-7.png" class ="product-img"></img>', categor: 'camisa',productImage: 'image9', productItem: 'Camisa Academlo', productColor: 'Logo rojo, color blanco', productPrice: 2000, divNro: 'div9' },
  { id: 10, productImg: '<img src="./images/product-8.png" class ="product-img"></img>', categor: 'sudadera',productImage: 'image10', productItem: 'Sudadera Academlo', productColor: 'Logo blanco, color negro', productPrice: 12000, divNro: 'div10' },
  { id: 11, productImg: '<img src="./images/product-1.png" class ="product-img"></img>', categor: 'sudadera',productImage: 'image11', productItem: 'Sudadera Academlo', productColor: 'Logo rojo, color gris', productPrice: 12000, divNro: 'div11' },
  { id: 12, productImg: '<img src="./images/product-2.png" class ="product-img"></img>', categor: 'camisa',productImage: 'image12', productItem: 'Camisa Academlo', productColor: 'Logo blanco, color rojo', productPrice: 2000, divNro: 'div12' },
  { id: 13, productImg: '<img src="./images/product-3.png" class ="product-img"></img>', categor: 'sudadera',productImage: 'image13', productItem: 'Sudadera Academlo', productColor: 'Logo rojo, color blanco', productPrice: 12000, divNro: 'div13' },
  { id: 14, productImg: '<img src="./images/product-4.png" class ="product-img"></img>', categor: 'sudadera',productImage: 'image14', productItem: 'Sudadera Academlo', productColor: 'Logo blanco, color rojo', productPrice: 12000, divNro: 'div14' },
  { id: 15, productImg: '<img src="./images/product-5.png" class ="product-img"></img>', categor: 'camisa',productImage: 'image15', productItem: 'Camisa Academlo', productColor: 'Logo blanco, color negro', productPrice: 2000, divNro: 'div15' }


]
let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || []
// let shoppingCart = []

// -----------------------------------------------------------------------------------------------------------------------------------//

// carrito

const carrito = []
const precio = '$'
const items = document.querySelector('#items')
const talla = document.querySelector('#talla')
const color = document.querySelector('#color')
const acarrito = document.querySelector('#carrito')
const image = document.querySelector('#productImg')
const total = document.querySelector('#total')
const botonVaciar = document.querySelector('#boton-basurero')
const miLocalStorage = window.localStorage

// Menu- carrito de compras

function toggleMenu () {
  const nav = document.getElementById('nav')
  nav.classList.toggle('hidden')
}

// -----------------------------------------------------------------------------------------------------------------------------------//

function cardGenerator (array) {
  // 1. Generar el codigo Html que voy a poenr en la pagina
  // 2. Identificar el contenedor donde pondré mi código
  // 3. Poner mi código


  let html = ''

  for (let i = 0; i < array.length; i++) {
    html += `


  

            <div  category="${array[i].categor}" class = "${array[i].divNro} product-item col-2 card-style" >
           
                <div class="product-img-div">
                    ${array[i].productImg}
                </div>
                <p>${array[i].productItem}</p>
                <p>${array[i].productColor}</p>
                <p>ID: ${array[i].id}</p>
                <span>$${array[i].productPrice}</span>
                <button class="card-buttom" type="button" onclick="addCart(${array[i].id})">agregar al carrito</button>
            </div>
         </div>
        `
  }

  const container = document.getElementById('products-container')
  container.innerHTML = html
}

// let data_a = [...];
// let daba_b = [...];

// let dataFinal = data_a.concat(data_b)

cardGenerator(product)
// cardGenerator(OtherData)

// -----------------------------------------------------------------------------------------------------------------------------------//

// funciones principales para callbacks.

function filter (array, cb) {
  const filteredData = []
  for (let i = 0; i < array.length; i++) {
    const result = cb(array[i])
    if (result) {
      filteredData.push(array[i])
    }
  }
  return filteredData
}

function find (array, cb) {
  for (let i = 0; i < array.length; i++) {
    const result = cb(array[i])
    if (result === true) {
      return array[i]
    }
  }
}

// -----------------------------------------------------------------------------------------------------------------------------------//

let contador = 0

function addCart (id) {
  function cbFindId (product) {
    return product.id === id
  }

  const productFinded = find(product, cbFindId)

  shoppingCart.push(productFinded)


  // console.log('shoppingCart')
  // console.log(shoppingCart)

  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))


  generateShoppingCartList()
}

function ContadorItems () {
  contador++
//   console.log(contador)
}

function generateShoppingCartList () {
  const shoppingCartTemporal = JSON.parse(localStorage.getItem('shoppingCart')) || []
  console.log(shoppingCartTemporal)

  // let totalPrice = 0

  let html = ''

  for (let i = 0; i < shoppingCartTemporal.length; i++) {
    html += `

        <div class="card-sp">
            <div class="div-img-sp">
            ${shoppingCartTemporal[i].productImg}
            </div>
            
            <div class="data-sp">
            
            <p>${shoppingCartTemporal[i].productItem}</p>
            <p>${shoppingCartTemporal[i].productColor}</p>
            <p>ID: ${shoppingCartTemporal[i].id}</p>
            <p>$${shoppingCartTemporal[i].productPrice}</p>
            <button class ="buttom-delete" onclick="deleteItem(${shoppingCartTemporal[i].id})">&times;</button>

            </div>
        
        </div>

        `
    // totalPrice = totalPrice + shoppingCartTemporal[i].productPrice
    // console.log(totalPrice)

    // let totalPriceHtml = getElementById("total")
    // totalPriceHtml.innerHTML
  }

  totalPrice()


  hiddenBottom()

  const container = document.getElementById('generate-card-shoping')
  container.innerHTML = html
}

function totalPrice () {
  let resultado = 0

    const shoppingCartTemporal = JSON.parse(localStorage.getItem('shoppingCart')) || []


  // console.log("TotalPrice.log")
  // console.log(shoppingCartTemporal)

  for (let i = 0; i < shoppingCartTemporal.length; i++) {
    resultado = resultado + shoppingCartTemporal[i].productPrice
    // console.log(resultado)
  }

  const container = document.getElementById('total-price')
  container.innerHTML = resultado

  localStorage.setItem('total-price-ls', JSON.stringify(resultado))
}

function deleteItem (id) {
  const shoppingCartTemporal = JSON.parse(localStorage.getItem('shoppingCart')) || []
  for (let i = 0; i < shoppingCartTemporal.length; i++) {
    if (id === shoppingCartTemporal[i].id) {
      shoppingCartTemporal.splice(i, 1)
    }
  }

  shoppingCart = shoppingCartTemporal
  // console.log(shoppingCart)

  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))

  generateShoppingCartList(shoppingCart)
}

function hiddenBottom(){

  let globalPrice = localStorage.getItem("total-price-ls") || null

  if(globalPrice == 0){
    document.getElementById("boton-ir").style.display = "none";



  }


  else if(globalPrice != 0){
    document.getElementById("boton-ir").style.display = "block";



  }
}


  // console.log(globalPrice)

window.addCart = addCart

window.generateShoppingCartList = generateShoppingCartList


totalPrice()


//-------

const loader = document.querySelector(".preloader");

window.addEventListener("load", function() {
  loader.style.display = "none";
})