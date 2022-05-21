import swal from 'sweetalert';

export const createNotification = (status, messages, redirect, route) => {
    switch (status) {
        case 200:
            if(redirect) {
                swal({
                    title: "Bien hecho!",
                    text: messages,
                    icon: "success",
                    button: "Ok",
                }).then((result) => {
                    if (result) {
                        window.location = route;
                    }
                })
            } else {
                swal({
                    title: "Bien hecho!",
                    text: messages,
                    icon: "success",
                    button: "Ok",
                });
            }
        break;
        case 201:
            swal({
                title: "Info!",
                text: messages,
                icon: "info",
                button: "Ok",
            });
        break;
        case 204:
            swal({
                title: "Alerta!",
                text: messages,
                icon: "warning",
                button: "Ok",
            });
        break;
        case 500:
            swal({
                title: "Error!",
                text: messages,
                icon: "error",
                button: "Ok",
            });
        break;
    }    
    
};