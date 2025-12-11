# Documentación — Tarea Vue (Enol)

Título: Inventario Simple — Tarea Vue

Descripción resumida:
Aplicación web para gestionar un inventario pequeño. Implementada con Vue 3 y Vite. Los datos pueden persistir en `localStorage` o leerse desde un JSON de muestra mediante un patrón AbstractFactory que selecciona el adaptador de almacenamiento.

Funcionalidades principales:
- Visualizar un listado de elementos (nombre y descripción).
- Añadir nuevos elementos mediante un formulario simple.
- Eliminar elementos del listado.
- Persistencia local en `localStorage` (por defecto).

Instrucciones básicas de uso:
1. Abrir la aplicación en el navegador.
2. Ir a la sección "Inventario".
3. Rellenar el formulario para añadir un elemento.
4. Usar "Eliminar" para borrar un elemento.

Enlace a la aplicación desplegada:
- URL pública: (añadir aquí la URL una vez desplegada)

Notas técnicas (breve):
- Patrón AbstractFactory en `src/services/dataFactory.js`.
- Componentes principales: `ItemForm`, `ItemList`, vistas `Home` y `Inventory`.
- Proyecto generado con Vite + Vue 3.
