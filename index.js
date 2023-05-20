let readlineSync = require("readline-sync");

let listaDeTareas = [];

//Función para imprimir en consola las tareas presentes en la lista
function imprimirListaDeTareas() {
  console.table(listaDeTareas);
}

//Función para retornar el último id
function retornarUltimoId() {
  const ultimoId = listaDeTareas.reduce((max, objeto) => {
    if (objeto.id > max) {
      return objeto.id;
    }
    return max;
  }, 0);
  return ultimoId;
}

//Función para añadir una nueva tarea a la lista(array)
function agregarTarea(nombre) {
  let tareaNueva = {
    id: retornarUltimoId() + 1,
    nombre: nombre,
    estado: false,
  };
  listaDeTareas.push(tareaNueva);
}

//Función para eliminar una tarea(objeto) existente de la lista(array)
function eliminarTarea(id) {
  let indice = listaDeTareas.findIndex((objeto) => objeto.id === id);

  if (indice >= 0) {
    listaDeTareas.splice(indice, 1);
  } else {
    console.log(`No se encontró la tarea, por favor verifica`);
  }
}

//Función para cambiar el estado de la tarea
function cambiarEstadoTarea(id) {
  listaDeTareas = listaDeTareas.map((tarea) => {
    if (tarea.id === id) {
      return {
        ...tarea,
        estado: !tarea.estado,
      };
    } else {
      return tarea;
    }
  });
}

function preguntarAlUsuario() {
  let opciones = [
    "Imprimir lista de tareas",
    "Agregar una tarea",
    "Eliminar una tarea",
    "Cambiar estado de una tarea",
  ];
  let index = readlineSync.keyInSelect(opciones, "Selecciona una opción", {
    cancel: "Salir",
  });

  let tareas, indexTarea;
  switch (index) {
    case 0:
      if (listaDeTareas.length > 0) {
        imprimirListaDeTareas();
      } else {
        console.log("En este momento tu lista de tareas está vacía");
      }
      preguntarAlUsuario();
      break;
    case 1:
      let nuevaTarea = readlineSync.question("Cual es el nombre de la tarea? ");
      agregarTarea(nuevaTarea);
      console.log(
        `Se ha agregado la tarea ${nuevaTarea} a la lista de tareas.`
      );
      imprimirListaDeTareas();
      preguntarAlUsuario();
      break;
    case 2:
      if (listaDeTareas.length > 0) {
        tareas = listaDeTareas.map((tarea) => tarea.nombre);
        indexTarea = readlineSync.keyInSelect(
          tareas,
          "Selecciona cual tarea quieres eliminar",
          { cancel: "Retroceder" }
        );
        if (indexTarea >= 0) {
          let nombreTareaEliminar = listaDeTareas[indexTarea].nombre;
          eliminarTarea(listaDeTareas[indexTarea].id);
          console.log(
            `Se ha eliminado la tarea ${nombreTareaEliminar} de la lista de tareas.`
          );
          imprimirListaDeTareas();
        }
      } else {
        console.log("No tienes tareas para eliminar");
      }
      preguntarAlUsuario();
      break;
    case 3:
      if (listaDeTareas.length > 0) {
        tareas = listaDeTareas.map((tarea) => tarea.nombre);
        indexTarea = readlineSync.keyInSelect(
          tareas,
          "Selecciona a cual tarea le quieres cambiar el estado:",
          { cancel: "Retroceder" }
        );
        if (indexTarea >= 0) {
          let nombreTareaEliminar = listaDeTareas[indexTarea].nombre;
          cambiarEstadoTarea(listaDeTareas[indexTarea].id);
          console.log(
            `Se ha cambiado el estado de la tarea ${nombreTareaEliminar} satisfactoriamente.`
          );
          imprimirListaDeTareas();
        }
      } else {
        console.log("No tienes tareas para cambiar el estado");
      }
      preguntarAlUsuario();
      break;

    default:
      console.log("El programa ha finalizado");
      break;
  }
}

preguntarAlUsuario();
