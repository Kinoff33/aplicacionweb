class Pelicula {
  constructor(titulo, director, anioLanzamiento, genero) {
    this.titulo = titulo;
    this.director = director;
    this.anioLanzamiento = anioLanzamiento;
    this.genero = genero;
  }

  
  mostrarInfo() {
    return `${this.titulo} (${this.anioLanzamiento}), dirigida por ${this.director}. Género: ${this.genero}.`;
  }
}


export { Pelicula };