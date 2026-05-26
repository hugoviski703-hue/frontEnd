
import "./Alerta.css"
import Swal from "sweetalert2"

export const Alerta = ({
     title, 
     text, 
     icon, 
     showCancelButton = null,
     confirmButtonText = null,
     cancelButtonText = null,
     cancelButtonColor = "#d33",
    confirmButtonColor = "#d6a100ff",

    }) => {
    return Swal.fire({
        title,
        text,
        icon,
        showCancelButton: showCancelButton != null ? showCancelButton : undefined,
        confirmButtonText: confirmButtonText != null ? confirmButtonText : undefined,
        cancelButtonText: cancelButtonText != null ? cancelButtonText : undefined,
        confirmButtonColor,
        cancelButtonColor,
     })
    
}