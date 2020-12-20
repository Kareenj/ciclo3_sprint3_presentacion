import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout
};

function login(username, password) {
    var data = new FormData();
    data.append('username', username);
    data.append('password', password);
    const requestOptions = {
        method: 'POST',
        body: data,
    };

    return fetch(`http://127.0.0.1:8000/token`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // El logueo es exitoso si el token jwt esta presente en el response
            if (user.access_token) {
                // Almacenar los detalles del usuario y el token jwt en el localstorage para que el usuario siga autenticado aun cuando actualice la pagina
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function logout() {
    // Eliminar el usuario del localstorage para hacer logout
    alert("logout");
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}