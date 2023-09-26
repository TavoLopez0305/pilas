function tomarElementos(pila, numero) {
    const elementosTomados = [];
    for (let i = 0; i < numero; i++) {
      if (pila.length > 0) {
        elementosTomados.push(pila.pop());
      } else {
        break;
      }
    }
    return elementosTomados.reverse(); // Invertir el orden para que coincida con el ejemplo de salida
  }
  
  const pilaEjemplo = ['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'];
  const numeroElementos = 4;
  const resultado = tomarElementos(pilaEjemplo, numeroElementos);
  console.log(resultado); // Salida: ['Manzana', 'Cebolla', 'Apio', 'Naranja']

  function reemplazar(pila, nuevo, viejo) {
    const nuevaPila = [];
    let reemplazado = false;
  
    while (pila.length > 0) {
      const elemento = pila.pop();
      if (elemento === viejo && !reemplazado) {
        nuevaPila.push(nuevo);
        reemplazado = true;
      } else {
        nuevaPila.push(elemento);
      }
    }
  
    return nuevaPila.reverse(); // Invertir el orden para mantener el orden original
  }
  
  const pilaNumeros = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
  const nuevoValor = 7;
  const valorViejo = 2;
  const resultadoReemplazo = reemplazar(pilaNumeros, nuevoValor, valorViejo);
  console.log(resultadoReemplazo); // Salida: [3, 2, 3, 4, 6, 8, 1, 7]

  
  function mostrarCamino(origen, destinos) {
    const caminoIda = [origen, ...destinos, 'destino'];
    const caminoVuelta = ['destino', ...destinos.reverse(), origen];
    
    console.log("Camino de Ida:", caminoIda.join(' → '));
    console.log("Camino de Vuelta:", caminoVuelta.join(' → '));
  }
  
  const puebloOrigen = 'Pueblo Origen';
  const destinos = ['Pueblo 1', 'Pueblo 2', 'Destino'];
  mostrarCamino(puebloOrigen, destinos);

  class Almacen {
    constructor() {
      this.pilaContenedores = [];
    }
  
    agregarContenedor(id) {
      this.pilaContenedores.push(id);
    }
  
    retirarContenedor(id) {
      const pilaTemporal = [];
  
      while (this.pilaContenedores.length > 0) {
        const contenedor = this.pilaContenedores.pop();
        if (contenedor === id) {
          break; // Se encontró el contenedor a retirar
        }
        pilaTemporal.push(contenedor);
      }
  
      while (pilaTemporal.length > 0) {
        this.pilaContenedores.push(pilaTemporal.pop());
      }
    }
  
    mostrarContenedores() {
      console.log(this.pilaContenedores.reverse()); // Invertir el orden para mostrar en el orden correcto
    }
  }
  
  const almacen = new Almacen();
  almacen.agregarContenedor(1);
  almacen.agregarContenedor(2);
  almacen.agregarContenedor(3);
  almacen.agregarContenedor(4);
  almacen.retirarContenedor(2);
  almacen.mostrarContenedores(); // Debe mostrar [1, 3, 4]
  