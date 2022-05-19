const inicio = ()=>{
    let input_usuario = prompt(`Bienvenido a e-game, elije una opcion:\n
                        1.-Ver todos los videojuegos
                        2.-Agregar Producto
                        3.-Ver carrito
                        4.-Salir\n`)
    opcion(input_usuario);
}

        

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
const listaAgregada = [];


let carritoGeneral = [];

const agregarVideojuegos = () =>{
    let nombreAgregar = prompt(`Ingrese el nombre del videojuego`).toUpperCase();

    let precioAgregar = prompt(`Ingrese el precio del videojuego`);
    precioAgregar = parseFloat(precioAgregar);

    while(isNaN(precioAgregar)){
        precioAgregar = prompt('Ingresaste un caracter, por favor ingresa un valor para su producto:')
        precioAgregar = parseFloat(precioAgregar);
    }

    let plataformaAgregar = prompt(`Ingrese la plataforma soportada por el videojuego`).toUpperCase();

    const nuevo_videojuego = new videojuegos(nombreAgregar,precioAgregar,plataformaAgregar);
    alert(`Tu videojuego fue agregado a la lista general!!!!\n
           Puedes verlo con la opcion 1 y agregarlo al carrito`)
    return nuevo_videojuego
}



const verVideojuegos = ()=>{
        let comprar_videojuego = null;
        for (const propiedad of listaVideojuegos){
            comprar_videojuego = prompt(`
                Nombre : ${propiedad.nombre}
                Precio : ${propiedad.precio}
                Plataformas Soportadas : ${propiedad.plataformas}
                1.-Comprar
                2.-Seguir`);
            comprar_videojuego = parseInt(comprar_videojuego);
        
            while(!~[1,2].indexOf(comprar_videojuego)){
                comprar_videojuego = prompt(`
                Nombre : ${propiedad.nombre}
                Precio : ${propiedad.precio}
                Plataformas Soportadas : ${propiedad.plataformas}
                1.-Agregar al carrito
                2.-Seguir
                Por favor ingrese 1 o 2: `);
                comprar_videojuego = parseInt(comprar_videojuego);
            }
            if(comprar_videojuego === 1){
                const carrito = propiedad;
                carritoGeneral.push(carrito);
            }   
        }
        
}

const verCarrito = () => {

    const nombres_de_carrito = [];
    if(carritoGeneral.length === 0){
        alert(`Aun no cuenta con productos agregados`);
    } else {
        carritoGeneral.forEach((propiedad)=>{
            nombres_de_carrito.push(propiedad.nombre);
        })
        const precio_carrito = carritoGeneral.map(propiedad => propiedad.precio).reduce((acc, el) => acc + el, 0);

        alert(nombres_de_carrito.join('\n') + '\n\n' + `TOTAL A PAGAR: ${precio_carrito}`);
    }
        
}


const opcion = (input_usuario)=>{
    input_usuario = parseInt(input_usuario)
    switch(input_usuario){
        case 1:
            verVideojuegos();
            inicio();
            break;
        case 2:
            listaVideojuegos = listaVideojuegos.concat(agregarVideojuegos());
            inicio();
            break;
        case 3:
            verCarrito();
            inicio();
            break;
        case 4:
            break;
        default:
            alert('Elije una opcion valida');
            inicio();
            break;
    }
}

inicio();
