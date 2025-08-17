import { Pelicula } from './modelo.js';

const formulario = document.getElementById('formulario-pelicula');
const listaPeliculasUI = document.getElementById('lista-peliculas');


const peliculas = [];


function renderizarLista() {
    listaPeliculasUI.innerHTML = ''; 
    peliculas.forEach((pelicula, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${pelicula.mostrarInfo()} 
            <button class="btn-eliminar" data-index="${index}">Eliminar</button>
        `;
        listaPeliculasUI.appendChild(li);
    });
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const titulo = document.getElementById('titulo').value;
    const director = document.getElementById('director').value;
    const anio = document.getElementById('anio').value;
    const genero = document.getElementById('genero').value;

    
    const nuevaPelicula = new Pelicula(titulo, director, anio, genero);
    
    
    peliculas.push(nuevaPelicula);

    
    renderizarLista();

   
    formulario.reset();
});


listaPeliculasUI.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-eliminar')) {
        const index = e.target.getAttribute('data-index');
        
        peliculas.splice(index, 1);
        renderizarLista();
    }
});