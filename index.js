import {
  agregarProducto,
  crearEstudiante,
  fusionarCatalogos,
  procesarCompra,
  estadisticas,
  configFinal
} from "./tranferencia/index.js";

// Ejercicio 2: Agregar productos a una lista
const productos = ["teclado", "mouse", "pantalla"];
const productosActualizados = agregarProducto(productos, "audifonos", "perros");
console.log("Productos originales", productos);
console.log("Productos agregados", productosActualizados);

// Ejercicio 1: Crear estudiante con notas
const estudiante = crearEstudiante("María", 4.5, 5, 3.8);
const { nombre, primeraNota, promedioResto, totalNotas } = estudiante;
console.log("Estudiante creado", { nombre, primeraNota, promedioResto, totalNotas });

// Ejercicio 2: Fusionar catálogos y ordenar por precio
const catalogoA = [
  { nombre: "teclado", precio: 45 },
  { nombre: "mouse", precio: 20 }
];
const catalogoB = [
  { nombre: "pantalla", precio: 100 },
  { nombre: "auricular", precio: 60 }
];
const catalogoFinal = fusionarCatalogos(catalogoA, catalogoB);
console.log("Catálogo fusionado", catalogoFinal);

// Ejercicio 3: Procesar compra de cliente
const cliente = { nombre: "Carlos", correo: "carlos@mail.com" };
const compraProductos = [
  { nombre: "teclado", precio: 45 },
  { nombre: "mouse", precio: 20 }
];
const compra = procesarCompra(cliente, compraProductos);
const { cliente: clienteComprador, precioTotal, primerProductoAdquirido } = compra;
const { nombre: clienteNombre, correo } = clienteComprador;
const { nombre: primerProductoNombre, precio: primerProductoPrecio } = primerProductoAdquirido;
console.log("Compra procesada", {
  clienteNombre,
  correo,
  precioTotal,
  primerProductoNombre,
  primerProductoPrecio
});

