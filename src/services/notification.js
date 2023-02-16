import { toast } from 'react-toastify'

export const notifyError = (message) => {
    toast.error(`${message}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    })
}

export const notifySuccess = (message) => {
    toast.success(`${message}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    })
}

export const notifyProgress = (message) => {
    return toast.loading(`${message}`, {
        position: 'top-center',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: 'light',
    })
}

export const notifyEndProgress = (id, message) => {
    toast.update(id, {
        render: `${message}`,
        type: toast.TYPE.SUCCESS,
        autoClose: 6000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 100,
        theme: 'light',
    })
}
