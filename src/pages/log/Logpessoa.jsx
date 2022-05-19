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
    const [IdUser, setIdUser] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setconfSenha] = useState('');

    function Cadastrar(event) {
        event.preventDefault();
        setIsLoading(true);

        let usuarioC = {
            IdUser: setIdUser,
            email: setEmail,
            senha: setSenha
        };

        db.post('/Usuarios', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            },
        })

            .then((resposta) => {
                if (resposta.status === 201) {
                    console.log('usuario cadastrado')
                    setIsLoading(false)

                }
            })

            .catch((erro) => {
                console.log(erro)
                setIsLoading(false)

            })
            .then(this.buscarCheckins)
        //         .then(resposta => {
        //             if (resposta === 201) {
        //                 buscarCheckins();
        //                 setIdUser('');
        //                 setIsLoading(false)
        //             }
        //         })
        //         .catch(erro => console.log(erro), setInterval(() => {
        //             setIsLoading(false)
        //         }, 5000))
        // }
    }

    function atualizaStateCampo(campo) {
        this.setState({ [campo.target.name]: campo.target.value })
    };

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

        buscarCheckins();
        carregarCheckIn();
    }

    function AbreModal() {
        setShowModal(true);
        setEmail('');
        setSenha('');
        setconfSenha('');
    }

    function fechaModal() {
        setShowModal(false);
    }

    function carregarCheckIn() {
        return (
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
        )
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

    function modal() {

        if (showModal == true) {
            return (
                <div className="ocupatudo">

                    <form className="oform"
                    // onSubmit={this.Cadastrar}
                    >
                        <div className="titulos">
                            <h2>Novo Usuário</h2>
                            <h4>Cadastre um novo usuário no sistema.</h4>
                        </div>

                        <div className="inputebotao">

                            <div className="inputsreais">

                                <span>Email</span>
                                <input
                                    required
                                    className="inputform"
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={atualizaStateCampo}
                                    placeholder="Insira o email que será cadastrado"
                                />
                            </div>

                            <div className="inputsreais">

                                <span>Senha</span>
                                <input
                                    required
                                    className="inputform"
                                    type="password"
                                    name="senha"
                                    value={senha}
                                    onChange={atualizaStateCampo}
                                    placeholder="Insira a senha que será cadastrada"
                                />
                            </div>

                            <div className="inputsreais">

                                <span>Confirmar senha</span>
                                <input
                                    required
                                    className="inputform"
                                    type="password"
                                    name="confSenha"
                                    value={confSenha}
                                    onChange={atualizaStateCampo}
                                    placeholder="Confirme a senha"
                                />
                            </div>

                            <button className="botaocad" type="submit" onClick={Cadastrar}>Cadastrar</button>
                        </div>

                        <nav className="navfoto">
                            <img className="logodosev" src={logo} alt="Logo do Sistema Severino" />
                            <img className="logodafab" src={fab_logo} alt="Logo da FabSoluções" />
                        </nav>
                    </form>
                </div>
            )
        }
    }

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

                <button onClick={AbreModal} className="botaocadastro" type="submit"><img className="botaoFoto" src={addButton}></img>Cadastrar Novo Usuário</button>

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
                                    carregarCheckIn()
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            {
                modal()
            }

        </main >
    )
}
