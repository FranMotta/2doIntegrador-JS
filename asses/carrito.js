    let productInCar = localStorage.getItem("Product.In.Car");
    productInCar = JSON.parse(productInCar)

    const ContainerCardEmpty = document.querySelector("#cart-empty");
    const ContainerCartProducts = document.querySelector("#cart-conteiner");
    const ContainerCarts = document.querySelector("#cart-card");
    const ContainerBuy = document.querySelector("#cart-buy");
    let btnQuit = document.querySelectorAll(".cart-quit");
    const btnEmpty = document.querySelector("#empty-all");
    const TotalToPay = document.querySelector("#total")
    const btnContinue = document.querySelector("#continue");
    const barsBtn = document.querySelector(".menu-label");
    const barsMenu = document.querySelector(".nav-li"); 

    function loadProductsCart() {
        if (productInCar && productInCar.length > 0) {

        ContainerCardEmpty.classList.add("disabled");
        ContainerCartProducts.classList.remove("disabled");
        ContainerCarts.classList.remove("disabled");
        ContainerBuy.classList.add("disabled");
        
        ContainerCartProducts.innerHTML = "";

        productInCar.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("cart-product");
            div.innerHTML = 
                `
                <img src="${product.imagen}" alt="${product.title}" class="prod-img">
                <div class="carrito-titulo">
                    <small>Producto</small>
                    <h3>${product.title}</h3>
                </div>
                <div class="cantidad">
                    <small>Cantidad</small>
                    <h3>${product.cantidad}</h3>
                </div>
                <div class="costos">
                    <small>Precio</small>
                    <h3>${product.cost}</h3>
                </div>
                <div class="subtotal">
                    <small>Subtotal</small>
                    <h3>${product.cost*product.cantidad}</h3>
                </div>
                <button class="cart-quit" id="${product.id}">
                    <img src="./asses/img/icono/icono-basura.png" alt="basura" >
                </button>
                ` ;
            ContainerCartProducts.append(div);
        })
        
        } else {
        ContainerCardEmpty.classList.remove("disabled");
        ContainerCartProducts.classList.add("disabled");
        ContainerCarts.classList.add("disabled");
        ContainerBuy.classList.add("disabled");

    }
    UpdateBtnQuit();
    UpdatePay();
    }
    loadProductsCart();


    function UpdateBtnQuit (){
        btnQuit = document.querySelectorAll(".cart-quit");

        btnQuit.forEach(boton => {
            boton.addEventListener ("click", quitToCar);
        });
    }

    function quitToCar(e) {
        const idbtn = e.currentTarget.id;

        const index = productInCar.findIndex(product => product.id === idbtn);

        productInCar.splice(index, 1);
        loadProductsCart();
        localStorage.setItem ("Product.In.Car", JSON.stringify(productInCar));
    }

    btnEmpty.addEventListener("click", emptyCar);

    function emptyCar() {
        productInCar.length = 0;
        localStorage.setItem("Product.In.Car", JSON.stringify(productInCar));
        loadProductsCart();
    }

    function UpdatePay(){
        const totalPay = productInCar.reduce((acc, product) => acc + (product.cost*product.cantidad), 0);
        total.innerText = `$${totalPay}`;
    }

    btnContinue.addEventListener("click", BuyCart);

    function BuyCart() {
        productInCar.length = 0;
        localStorage.setItem("Product.In.Car", JSON.stringify(productInCar));

        ContainerCardEmpty.classList.add("disabled");
        ContainerCartProducts.classList.add("disabled");
        ContainerCarts.classList.add("disabled");
        ContainerBuy.classList.remove("disabled");

    };
    const toggleMenu = () => {
        barsMenu.classList.toggle("open-menu");
    }
    
    const init = () => {
        barsBtn.addEventListener("click", toggleMenu);
    };
    
    init ();
    
    
    