const inicio = ()=>{
    let input_usuario = prompt(`Bienvenido a e-game, elije una opcion:\n
                        1.-Ver todos los videojuegos
                        2.-Ver carrito
                        3.-Salir\n`)
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
const WATCH_DOGS = new videojuegos("WATCH_DOGS", 49.99,['PC','PS4','PS5','XBOX']);

const listaVideojuegos = [GTA_V,AMONG_US,WATCH_DOGS];



const verVideojuegos = ()=>{
        for (const propiedad of listaVideojuegos){
            alert(`
                Nombre : ${propiedad.nombre}
                Precio : ${propiedad.precio}
                Plataformas Soportadas : ${propiedad.plataformas}`)
        }
}


const opcion = (input_usuario)=>{
    input_usuario = parseInt(input_usuario)
    switch(input_usuario){
        case 1:
            verVideojuegos();
            break;
        case 2:
            alert('Aun se encuentra en desarrollo');
            break;
        case 3:
            break;
        default:
            alert('Elije una opcion valida');
            inicio();
            break;
    }
}

inicio();
