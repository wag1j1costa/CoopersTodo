import Swal from 'sweetalert2';
import './Home.css'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true
  })

export function toastSuccess(title) {
    Toast.fire({
        text: title,
        icon: "success",
      });
}

export function toastError(title) {
    Toast.fire({
        text: title,
        icon: "error",
      });
}