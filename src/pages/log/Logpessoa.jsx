import fab_logo from "../../assets/fab-logo.png";
import logo from "../../assets/logo.png";
import addButton from "../../assets/adicionar.png";
import excluirbtn from "../../assets/lixeira.png";
import { React, useState, useEffect, Component } from 'react';
import { db } from '../../services/api'
import axios from "axios";


export default function Log() {
    var state = {
        users: []
    }

    const [listaUser, setListaUser] = useState([]);
    const [ IdUser, setIdUser ] = useState( '' );
    const [isLoading, setIsLoading] = useState(false);


    function Cadastrar(usuario) {
        usuario.preventDefault();
        setIsLoading(true);
        if (listaUser) {

        }

        db.post('/Usuarios', {
            idUser: IdUser
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
            if (resposta === 201) {
                buscarCheckins();
                setIdUser('');
                setIsLoading(false)
            }
        })
        .catch(erro => console.log(erro), setInterval(() => {
            setIsLoading(false)
        }, 5000))
    }

        function componentDidMount() {
            db.get('/Usuarios')
                .then(res => {
                    const usuarios = res.data;
                    this.setState({ usuarios })
                })
        }

        function excluir(id, e) {
            db.delete('/Usuarios/' + id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
                }
            })
                .then(res => {
                    if (res === 200) {
                        console.log(res);
                        console.log(res.data);

                        const users = this.state.users.filter(item => item.id !== id)
                        this.setState({ users })
                    }
                })
                .catch(erro => console.log(erro))
        }


        function buscarCheckins() {
            db.get('/Usuarios')
                .then(resposta => {
                    if (resposta.status === 200) {
                        setListaUser(resposta.data)
                    }
                })
                .catch(erro => console.log(erro));
        };


        useEffect(buscarCheckins, []);



        return (

            <main className="cam_page_modal">
                <header>
                    <div className="container_nav">
                        <nav className="content_logo">
                            <img src={fab_logo} alt="Logo da FabSoluções" />
                            <img src={logo} alt="Logo do Sistema Severino" />
                        </nav>
                        <nav className="content_pages">
                            <a href="/log" className="marcado_usuarios">Usuários</a>
                            <a href="/checkin" className="">Registros</a>
                            <a href="/home" className="">Home</a>
                        </nav>
                    </div>
                </header>
                <div className="divmae">
                    
                    <button onClick={Cadastrar} className="botaocadastro" type="submit"><img className="botaoFoto" src={addButton}></img>Cadastrar Novo Usuário</button>

                    <section>
                        <div className="container_table_registro">
                            <table className="table_registro">

                                <thead>
                                    <tr>
                                        <th className="thobjetos">Id</th>
                                        <th className="thobjetos thobjetos_centro">E-mail</th>
                                        <th className="thobjetos">Excluir</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        listaUser.map((user) => {
                                            return (
                                                <tr key={user.idUser}>
                                                    <td className="tdobjetos">{user.idUser}</td>
                                                    <td className="tdobjetos">{user.email}</td>
                                                    <td className="tdobjetos">
                                                        <button onClick={(e) => excluir(user.idUser, e)} className="botaolixo"><img className="botaolixo" src={excluirbtn}></img></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main >
        )
    }
