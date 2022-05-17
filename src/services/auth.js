export const usuarioAutenticado = () => localStorage.getItem('usuario-login') != null;

export const parseJwt = () => {

    // define a variável base64 que recebe o payload do token do usuário logado
    let base64 = localStorage.getItem('usuario-login').split('.')[1];

    // converte o valor de base64 para string e em seguida para JSON
<<<<<<< HEAD
    return JSON.parse( window.atob(base64) );
};

export const GetItem = () => localStorage.getItem('usuario-login');
=======
    return JSON.parse(window.atob(base64));
};
>>>>>>> b82f873a04cb4be22398ddab73cecdef521f6457
