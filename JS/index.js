class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.derecha = null;
        this.izquierda = null;
    }
}

class Arbol {
    constructor() {
        this.ruta = null;
    }

    // Verifica si el árbol está vacío
    isEmpty() {
        return this.ruta === null;
    }

    // Método para agregar un nodo al árbol
    add(valor) {
        if (this.isEmpty()) {
            this.ruta = new Nodo(valor);
            return;
        }

        let aux = this.ruta;

        while (aux) {
            if (valor < aux.valor) {
                if (aux.izquierda) {
                    aux = aux.izquierda;
                } else {
                    aux.izquierda = new Nodo(valor);
                    return;
                }
            } else {
                if (aux.derecha) {
                    aux = aux.derecha;
                } else {
                    aux.derecha = new Nodo(valor);
                    return;
                }
            }
        }
    }

    // Método para buscar un nodo
    buscar(valor) {
        let aux = this.ruta;

        while (aux) {
            if (valor === aux.valor) {
                return aux; 
            } else if (valor < aux.valor) {
                aux = aux.izquierda; 
            } else {
                aux = aux.derecha; 
            }
        }

        return null; 
    }

    // Método para eliminar un nodo
    eliminar(valor) {
        this.ruta = this.eliminarNodo(this.ruta, valor);
    }

    // Método auxiliar para eliminar un nodo recursivamente
    eliminarNodo(root, valor) {
        if (!root) return null; 

        
        if (valor < root.valor) {
            root.izquierda = this.eliminarNodo(root.izquierda, valor);
        }
       
        else if (valor > root.valor) {
            root.derecha = this.eliminarNodo(root.derecha, valor);
        }
        
        else {
            
            if (!root.izquierda && !root.derecha) {
                return null;
            }
            
            if (!root.izquierda) {
                return root.derecha;
            }
            if (!root.derecha) {
                return root.izquierda;
            }

            
            let minNode = this.obtenerMinNodo(root.derecha);
            root.valor = minNode.valor; 
            root.derecha = this.eliminarNodo(root.derecha, minNode.valor); 
        }

        return root; 
    }

    // Método para obtener el nodo con el valor mínimo en un subárbol
    obtenerMinNodo(root) {
        while (root.izquierda) {
            root = root.izquierda;
        }
        return root;
    }
}

// Crear un árbol e insertar algunos elementos
let arbol = new Arbol();

arbol.add(50);
arbol.add(30);
arbol.add(60);
arbol.add(20);
arbol.add(40);
arbol.add(70);
arbol.add(55);
arbol.add(15);
arbol.add(25);
arbol.add(45);
arbol.add(52);
arbol.add(62);
arbol.add(75);

// Ver el árbol
console.log("Arbol Completo", arbol);

// Buscar un valor
let nodoBuscado = arbol.buscar(55);
console.log("Nodo buscado ",nodoBuscado);

// Eliminar un valor
arbol.eliminar(45);
console.log("Arbol con eliminacion ",arbol);
