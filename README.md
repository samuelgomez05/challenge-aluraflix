<h1 align="center">AluraFlix</h1>

<p align="center">4to challenge de la formación de Alura + Oracle (ONE)</p>

![image](https://github.com/user-attachments/assets/d74dde14-71e7-489c-a100-a7a1471fbeed)

---

## Tecnologías usadas
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)

---

## Funcionalidades del Proyecto

- `Uso de API`:  
  - Se utiliza [MockAPI](https://mockapi.io/) para la gestión de videos a través de una API externa.  
  - URL del proyecto: `https://67870174c4a42c916105610e.mockapi.io/alura/videos`.

- `CRUD de videos`:  
  - Permite `crear`, `leer`, `actualizar` y `eliminar` videos directamente desde la aplicación.

- `Interactividad del DOM en tiempo real`:  
  - Los cambios en los videos (`agregar`, `editar` o `eliminar`) se reflejan automáticamente sin necesidad de recargar la página.

- `SPA con React Router DOM`:  
  - Navegación fluida entre vistas en una aplicación de una sola página.

- `Confirmación para eliminar`:  
  - Antes de eliminar un video, el sistema solicita confirmación, evitando eliminaciones accidentales.

- `Modales interactivos`:  
  - Modales dinámicos para `agregar` y `editar` videos directamente en la página principal.

- `Optimización de videos`:  
  - Uso de [Lite YouTube Embed](https://github.com/paulirish/lite-youtube-embed) para incrustar videos de YouTube de forma optimizada, mejorando el rendimiento de la página.

- `Integración con React Icons`:  
  - Uso de íconos componetizados de [React Icons](https://react-icons.github.io/react-icons/) para mejorar la interfaz.

- `Responsividad`:  
  - Diseño adaptativo (mobile-first), que funciona correctamente en cualquier tamaño de pantalla.

- `Visualización dinámica en el banner`:  
  - Cuando un video `editado` es parte del banner principal, este se actualiza automáticamente.

- `Navegación al banner desde una card`:  
  - Al hacer clic en una `card`, los datos de esa card se visualizan directamente en el banner.

- `Página de error 404`:  
  - Si el usuario ingresa una URL incorrecta, se muestra una página personalizada con el mensaje de error `404`, mejorando la experiencia de navegación.

---

## Enlaces útiles

- [MockAPI](https://mockapi.io/)  
- [Lite YouTube Embed](https://github.com/paulirish/lite-youtube-embed)  
- [React Icons](https://react-icons.github.io/react-icons/)
