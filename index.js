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
  let listaDeTareasActualizada = listaDeTareas.map((tarea) => {
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
