# Tarea Vue — Enol

Proyecto de ejemplo para la práctica de DWEC.

Features
- Vue 3 + Vite scaffold
- AbstractFactory pattern for data adapters (`local` and `json`)
- At least two views: `Home` and `Inventory`
- Interactivity: add and remove items; data persists in LocalStorage

Quick start

1. Instalar dependencias:

```powershell
cd "c:\Users\enola\OneDrive\Escritorio\TareaVueEnol"
npm install
```

2. Ejecutar en desarrollo:

```powershell
npm run dev
```

3. Generar build de producción:

```powershell
npm run build
```

Despliegue (opciones)
- Netlify: conectar repo y usar `npm run build` como comando de build. Subir la carpeta `dist`.
- Vercel: importar el proyecto y usar `vite` preset; la carpeta de salida es `dist`.
- GitHub Pages: usar `gh-pages` o publicar `dist` en la rama `gh-pages`.

Documentación requerida
- `docs/Documentacion.md` contiene el título, funciones, instrucciones y espacio para la URL desplegada.

Siguientes pasos (recomendado)
- Inicializar un repo Git y subirlo a GitHub.
- Conectar el repo a Netlify/Vercel para desplegar.
