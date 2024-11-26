// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';


// export function show_alert(mensaje, icono, foco) {
//     onfocus(foco);
//     const MySwal = withReactContent(Swal);
//     MySwal.fire({
//         title: mensaje,
//         icon: icono,
//     });
// }

// function onfocus(foco) {
//     if (foco !== '') {
//         document.getElementById(foco).focus();
//     }
// }

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function show_alert(mensaje, icono, foco = '') {
    if (foco) {
        onfocus(foco);
    }
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: mensaje,
        icon: icono,
    });
}

function onfocus(foco) {
    const elemento = document.getElementById(foco);
    if (elemento) {
        elemento.focus();
    } else {
        console.warn(`El elemento con ID '${foco}' no se encontró en el DOM.`);
    }
}
