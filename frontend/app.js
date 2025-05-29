const express = require('express');
const path = require('path');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Frontend corriendo en http://localhost:${PORT}`);
});
