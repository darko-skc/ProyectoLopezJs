const card_container = document.getElementById("card-container");
const carrito_container =  document.getElementById("carrito-container");
const price_container = document.getElementById("price-container");
const append_game =  document.getElementById("append-game");

class videojuegos {
    constructor(nombre,precio,plataformas){
        this.nombre = nombre;
        this.precio = precio;
        this.plataformas = plataformas;
    }
}

const GTA_V = new videojuegos("GTA V", 30.99,['PC','PS4','PS5','XBOX']);
const AMONG_US = new videojuegos("AMONG US", 10.99,['PC','ANDROID']);
const WATCH_DOGS = new videojuegos("WATCH DOGS", 49.99,['PC','PS4','PS5','XBOX']);

let listaVideojuegos = [GTA_V,AMONG_US,WATCH_DOGS];


let carritoGeneral = [];



const verVideojuegos = ()=>{
    card_container.innerHTML = ''

    listaVideojuegos.forEach((propiedad) =>{
        const card = document.createElement("div");
        card.classList.add("card");


        const card_image = document.createElement("div");
        card_image.classList.add("card-image")

        const image_src = document.createElement("img");
        image_src.src = "https://www.muycomputer.com/wp-content/uploads/2022/04/Grand-Theft-Auto-V-next-gen-2.jpg"

        card_image.appendChild(image_src);


        const card_box = document.createElement("div");
        card_box.classList.add("card-box")



        const card_info = document.createElement("div");
        card_info.classList.add("card-info");

        const card_name = document.createElement("p");
        card_name.classList.add("card-name");
        card_name.textContent = `${propiedad.nombre}`

        const card_platform = document.createElement("p");
        card_platform.classList.add("card-platform")
        card_platform.textContent = `${propiedad.plataformas}`

        card_info.appendChild(card_name);
        card_info.appendChild(card_platform);


        const card_trolley = document.createElement("div");
        card_trolley.classList.add("card-trolley");

        const card_price = document.createElement("span");
        card_price.classList.add("card-price")
        card_price.innerText = `${propiedad.precio}`

        const card_button = document.createElement("button");
        card_button.classList.add("card-button")
        card_button.innerText = "Carrito"
        card_button.onclick = function() {
            alert(`${propiedad.nombre} fue a??adido al carrito`);
            const carrito = propiedad;
            carritoGeneral.push(carrito);
            let verCarrito = carritoGeneral.slice();
            
            agregar_carrito(verCarrito);

            const precio_carrito = carritoGeneral.map(propiedad => propiedad.precio).reduce((acc, el) => acc + el, 0);
            ver_precio_carrito(precio_carrito);
          }
        
        card_trolley.appendChild(card_price);
        card_trolley.appendChild(card_button);

        card_box.appendChild(card_info);
        card_box.appendChild(card_trolley);

        card.appendChild(card_image);
        card.appendChild(card_box);

        card_container.appendChild(card);
        
    })

    
}

const agregar_carrito = (verCarrito)=> {

    let ultimo_producto = verCarrito.pop();

    const carrito = document.createElement("div");
    carrito.classList.add("carrito");

    const carrito_image = document.createElement("div");
    carrito_image.classList.add("carrito-image");

    const img_src_carrito = document.createElement("img");
    img_src_carrito.src = "https://www.muycomputer.com/wp-content/uploads/2022/04/Grand-Theft-Auto-V-next-gen-2.jpg";

    carrito_image.appendChild(img_src_carrito);


    const carrito_info = document.createElement("div");
    carrito_info.classList.add("carrito-info");

    const carrito_name = document.createElement("p");
    carrito_name.classList.add("carrito-name");
    carrito_name.textContent = `${ultimo_producto.nombre}`

    const carrito_platform =  document.createElement("p");
    carrito_platform.classList.add("carrito-platform")
    carrito_platform.textContent = `${ultimo_producto.plataformas}`

    const carrito_price =  document.createElement("p");
    carrito_price.classList.add("carrito-price");
    carrito_price.textContent = `${ultimo_producto.precio}`

    carrito_info.appendChild(carrito_name);
    carrito_info.appendChild(carrito_platform);
    carrito_info.appendChild(carrito_price);

    carrito.appendChild(carrito_image);
    carrito.appendChild(carrito_info);

    carrito_container.appendChild(carrito);
    
}

const ver_precio_carrito = (precio) =>{
    price_container.innerHTML = ''


    const total_carrito = document.createElement('h3');
    total_carrito.classList.add("total-carrito");
    total_carrito.textContent = `TOTAL: ${precio}`

    const total_button = document.createElement("button");
    total_button.classList.add("total-button");
    total_button.textContent = 'COMPRAR'
    total_button.onclick = function(){
        alert('Felicidades, su compra ha sido exitosa')
    }

    price_container.appendChild(total_carrito);
    price_container.appendChild(total_button)
}




const agregarVideojuegos = (e) =>{
    e.preventDefault();
    let formulario = e.target
    let name = formulario.children[1].value
    let platform = formulario.children[3].value
    let price = formulario.children[5].value
    
    name = name.toUpperCase();
    platform = platform.toUpperCase();
    price = parseFloat(price);
    const nuevo_videojuego = new videojuegos(name,price,platform);
    
    listaVideojuegos = listaVideojuegos.concat(nuevo_videojuego);

    console.log(listaVideojuegos);
    
    verVideojuegos();
}

const nuevo_videojuego = append_game.addEventListener("submit", agregarVideojuegos);

verVideojuegos();