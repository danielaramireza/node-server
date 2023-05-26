## Lista de tareas asíncrona en Node

1. ¿Qué sucedió al usar async y await?

Se agregó la palabra clave async antes de la función, quedando así: async function preguntarAlUsuario(). Esto se hizo debido a que la función preguntarAlUsuario llamaba a la función cambiarEstadoTarea. Al llamar a la función cambiarEstadoTarea(), se utilizó la palabra clave await. Esto hizo que la ejecución del código se pausara hasta que la promesa retornada por cambiarEstadoTarea se cumpliera y se resolviera, es decir, hasta que el estado de la tarea se cambiara correctamente. Una vez que la promesa se cumplió, se continuó con la ejecución del código y se mostró un mensaje indicando que el estado de la tarea se había cambiado satisfactoriamente. Luego, se mostró la lista actualizada de tareas.

2. ¿Qué sucedió al usar el método then()?

Se resolvió la promesa utilizando el método then() en la función agregarTarea(nuevaTarea). Sin embargo, se notó que las funciones imprimirListaDeTareas() y preguntarAlUsuario() se estaban ejecutando antes de que la promesa se cumpliera, ya que estaban puestas fuera del then(). Lo anterior generaba un problema, ya que estas funciones acceden a datos que dependen de que la tarea se haya agregado correctamente. Por lo tanto, fue necesario ubicar estas funciones dentro del then(), de modo que se ejecuten después de que la promesa se cumpla y se agregué la tarea con éxito.

3. ¿Qué diferencias encontraste entre async, await y el método then()?

- En el método then(), se pueden seguir ejecutando otras funciones o código mientras se espera que la promesa se resuelva. En cambio, en el async-await la ejecución del código se pausa en la línea donde se utiliza await para esperar a que la promesa se resuelva.

- En el método then() se debe encadenar varias llamadas para manejar los resultados y los errores de la promesa. En cambio, en el async-await puedes escribir tu código de forma más secuencial y similar a la programación síncrona. Solo usas la palabra clave await antes de una promesa para esperar a que se resuelva o se rechace.

- En el método then() el código es un poco más largo y menos legible, porque utiliza una sintaxis mas encadenada. En cambio, en el async-await el código puede ser más legible y fácil de entender, porque utiliza una sintaxis mas secuencial.

- En el método then() los errores se manejan utilizando el método catch() o agregando otro callback de then() para manejar el rechazo de la promesa.En cambio en async-await los errores se manejan utilizando bloques try-catch normales dentro de la función asincrónica.
