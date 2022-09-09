import '../css/componentes.css'
import '../css/texto.css'
import webPackLogo from '../img/webpack-logo.svg'
// componente que exporto en el template de desarrollo
export const saludar = ( nombre ) => {

    console.log( 'Creando H1..' );

    const h1 = document.createElement( 'h1' );
    h1.innerText = `Hola, ${nombre}!!!`;
    document.body.append( h1 );


    console.log( webPackLogo );
    const img = document.createElement( 'img' );
    img.src = webPackLogo;
    img.title = nombre;
    document.body.append( img );
    
}; 