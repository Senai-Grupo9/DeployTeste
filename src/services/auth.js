export const usuarioAutenticado = () => localStorage.getItem('usuario-login') != null;

export const parseJwt = () => {

    // define a variável base64 que recebe o payload do token do usuário logado
    let base64 = localStorage.getItem('usuario-login').split('.')[1];

    // converte o valor de base64 para string e em seguida para JSON
    return JSON.parse( window.atob(base64) );
};

export const GetItem = () => localStorage.getItem('usuario-login');
<<<<<<< HEAD
=======

>>>>>>> 18e3cafe6be33231b2dad29f4823c4916fbaf838
