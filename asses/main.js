const productcontainer = document.querySelector("#product-conteiner");
const btnCategory = document.querySelectorAll(".boton-category");
const titleProd = document.querySelector("#title-prod");
let btnBuy = document.querySelectorAll(".btn-buy");
const numberCar = document.querySelector("#cart-number");
const barsBtn = document.querySelector(".menu-label");
const barsMenu = document.querySelector(".nav-li");

const products = [
    {
        id:"elect-1",
        title: `SMART TV 45" Full HD`,
        imagen:"./asses/img/products/tv1.webp",
        condition:"NUEVO",
        user:"LIONEL ANDRES MESSI",
        category: {
            id:"electrodomesticos",
            nombre: "Electrodomésticos",
        },
        cost: 249999,
    },
    {
        id:"elect-2",
        title:`SMARTTV 41"Full HD`,
        imagen:"./asses/img/products/tv2.webp",
        condition:"NUEVO",
        user: "JUAN SEBASTIAN VERON",
        category: {
            id:"electrodomesticos",
            nombre: "Electrodomésticos",
        },
        cost: 62999,
    },
    {
        id:"elect-3",
        title:`SMARTTV 42"Full HD`,
        imagen:"./asses/img/products/tv3.webp",
        condition:"NUEVO",
        user: "Jorge Luis Hirschi",
        category: {
            id:"electrodomesticos",
            nombre: "Electrodomésticos",
        },
        cost:47999,
    },
    {
        id:"tech-1",
        title:"Notebook EXO L37e",
        imagen:"./asses/img/products/notebook.webp",
        condition:"USADO",
        user:"JOSE LUIS, 'EL TATA', BROWN  ",
        category: {
            id:"tecnologia",
            nombre: "Tecnología",
        },
        cost:142800,
    },
    {
        id:"tech-2",
        title:"Parlantes",
        imagen:"./asses/img/products/parlantes.webp",
        condition:"NUEVO",
        user:"JUAN RAMON, 'LA BRUJA', VERON",
        category: {
            id:"tecnologia",
            nombre: "Tecnología",
        },
        cost:2150,
    },
    {
        id:"tech-3",
        title:"PC GAMER",
        imagen:"./asses/img/products/pc-gamer.webp",
        condition:"NUEVO",
        user:"RODRIGO, 'CHAPU', BRAÑA",
        category: {
            id:"tecnologia",
            nombre: "Tecnología",
        },
        cost:126215,
    },
    {
        id:"gar-1",
        title:"La innombrable",
        imagen:"./asses/img/products/palaancha.webp",
        condition:"PROMOCION",
        user:"JOSE LUIS, 'CALDERA', CALDERON",
        category: {
            id:"jardineria",
            nombre: "Jardinería",
        },
        cost:00,
    },
    {
        id:"elect-4",
        title: "Lavarropas",
        imagen:"./asses/img/products/lavarropas.webp",
        condition: "USADO",
        user:"MAURO BOSELLI",
        category: {
            id:"electrodomesticos",
            nombre: "Electrodomésticos",
        },
        cost: 139039,
    },
    {
        id:"elect-4",
        title: "Heladera",
        imagen:"./asses/img/products/heladera.webp",
        condition: "NUEVO",
        user:"JUANCITO FOYTH",
        category: {
            id:"electrodomesticos",
            nombre: "Electrodomésticos",
        },
        cost: 659022,
    },
    {
        id:"sport-1",
        title:"Bicicleta Mountain",       
        imagen: "./asses/img/products/bicicleta.webp",
        condition:"NUEVO",
        user:"CARLOS JOAQUIN, 'EL TUCU', CORREA",
        category: {
            id:"deporte",
            nombre: "Deporte",
        },
        cost:107800,
    },
    {
        id:"sport-2",
        title:"Camiseta de EdLP 2023 titular",
        imagen: "./asses/img/products/camisetaedlp-1.webp",
        condition:"NUEVO",
        user:"ALEJANDRO JAVIER, 'PACHORRA' SABELLA",
        category: {
            id:"deporte",
            nombre: "Deporte",
        },
        cost:16499,
    },
    {
        id:"sport-3",
        title:"Camiseta de EdLP 2023 suplente",
        imagen:"./asses/img/products/camisetaedlp-2.webp",
        condition:"NUEVO",
        user:"DON OSVALDO JUAN, 'EL ZORRO ,ZUBELDIA",
        category: {
            id:"deporte",
            nombre: "Deporte",
        },
        cost:16499,
    },
    {
        id:"car-1",
        title:"Volkswagen Vento",
        imagen:"./asses/img/products/vento-1.4.webp",
        condition:"NUEVO",
        user:"CARLOS SALVADOR, 'NARIGON' BILARDO",
        category: {
            id:"autos",
            nombre: "Autos",
        },
        cost:11799000,
    },
    {
        id:"car-2",
        title:"Toyota Corolla",
        imagen:"./asses/img/products/toyota-corolla-cross.webp",
        condition:"NUEVO",
        user: "MARIANO GONZALO ANDUJAR",
        category: {
            id:"autos",
            nombre: "Autos",
        },
        cost:14000000,
    },
    {
        id:"car-3",
        title:"FORD FIESTA",
        imagen:"./asses/img/products/ford-fiesta.webp",
        condition:"USADO",
        user: "OSCAR MIGUEL,'CACHO', MALBERNAT ",
        category: {
            id:"autos",
            nombre: "Autos",
        },
        cost:4089900,
    },
    {
        id:"gar-2",
        title:"Motosierra",
        imagen:"./asses/img/products/motosierra.webp",
        condition:"NUEVO",
        user:"JOSE ERNESTO, 'EL PRICIPITO', SOSA",
        category: {
            id:"jardineria",
            nombre: "Jardinería",
        },
        cost:27750,
    },
    {
        id: "gar-3",
        title:"Desmalezadora",
        imagen:"./asses/img/products/desmalezadora.webp",
        condition:"USADO",
        user: "GASTON NICOLAS, 'LA GATA', FERNANDEZ",
        category: {
            id:"jardineria",
            nombre: "Jardinería",
        },
        cost:19999,
    },
];

function loadProducts(selectionProduct){

    productcontainer.innerHTML = "";

    selectionProduct.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.imagen}" alt="${product.title}" class="product-img">
            <div class="product-text">
                <h3 class="name-product">${product.title}</h3>
                <p>$${product.cost}</p>
                <button class="btn-buy" id="${product.id}">COMPRAR</button>
            </div>
            `;
            productcontainer.append(div);
    })
    UpdatebtnBuy();
}
loadProducts(products);

btnCategory.forEach(boton => {
    boton.addEventListener("click", (e) =>{
        if(e.currentTarget.id != "alls"){
            const productCategory = products.find(product => product.category.id === e.currentTarget.id);
            titleProd.innerText = productCategory.category.nombre;
            const productBoton = products.filter(product => product.category.id === e.currentTarget.id);
        loadProducts(productBoton);
        } else {
            titleProd.innerText = "Te ofrecemos algunos de estos productos.";
            loadProducts(products);
        }
        

    })
});
function UpdatebtnBuy (){
    btnBuy = document.querySelectorAll(".btn-buy");
    btnBuy.forEach(boton => {
        boton.addEventListener ("click", addtoCar);
    });
}

let productInCar;
let productInCarLS = localStorage.getItem("Product.In.Car");

if (productInCarLS) {
    productInCar = JSON.parse(productInCarLS);
    UpdateNumber();
}else {
    productInCar = [];
}

function addtoCar(e) {
    const idbtn = e.currentTarget.id;
    const productAddCar = products.find(product => product.id === idbtn);

    if(productInCar.some(product => product.id === idbtn)) {
        const index = productInCar.findIndex(product => product.id === idbtn);

        productInCar[index].cantidad++;

    }else{
        productAddCar.cantidad = 1;
        productInCar.push(productAddCar);
    }
    UpdateNumber();

    localStorage.setItem("Product.In.Car", JSON.stringify(productInCar));
};
function UpdateNumber() {
    let newnumberCar = productInCar.reduce((acc, product) => acc + product.cantidad, 0);
    numberCar.innerText= newnumberCar;
};
const toggleMenu = () => {
	barsMenu.classList.toggle("open-menu");

}

const init = () => {
    barsBtn.addEventListener("click", toggleMenu);
};

init ();
