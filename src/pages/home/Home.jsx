import fab_logo from "../../assets/fab-logo.png";
import logo from "../../assets/logo.png";
import { React, useState, useEffect } from 'react';

import xis from "../../assets/x-1.png";
import addButton from "../../assets/adicionar.png";
import excluirbtn from "../../assets/lixeira.png";

import VideoFeed from "../../components/video-feed.tsx";
import { mock, db } from "../../services/api";
import axios from "axios";

export default function Home() {

    // this.myRef = React.createRef();
    const [listaUser, setListaUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [erroMensagem, setErroMensagem] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setconfSenha] = useState('');
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    const [detectedObjects, setDetectedObjects] = useState([]);
    const [snapshot, SetSnapshot] = useState([]);
    const [valor, setValor] = useState(0);
    const [listaCheckin, setListaCheckin] = useState([]);

    const [css1, set1] = useState(true);
    const [css2, set2] = useState(false);
    const [css3, set3] = useState(false);
    // const camElement = useRef(null);

    function comparaswitch() {
        switch (valor) {
            case 1:
                return (mostratelaCamera())
                break;
            case 2:
                return (mostratelaUsuarios())
                break;

            case 3:
                return (mostratelaRegistros())
                break;
            default:
                setValor(1)
                break;
        }
    }

    function mostratelaCamera() {
        return (
            <div className="cam_content">
                <section className="search">
                    <input type="text" placeholder="O que você procura...?" onChange={onChange} />
                    <div className="list">
                        {
                            toList()
                        }
                    </div>
                </section>

                <section className="camera"
                // ref={(camElement) => { this.camElement = camElement }}
                >
                    {/* <VideoFeed src="http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8" />

                    {
                        //toListDetectedObject()
                    } */}
                    <iframe autoplay width="100%" height="100%" src="https://rtsp.me/embed/3TNKTEtE/" frameborder="0" allowfullscreen></iframe>
                </section>
            </div>
        )
    }

    function mostratelaUsuarios() {
        return (
            <div className="divmae">
                <button onClick={AbreModal} className="botaocadastro" type="submit"><img className="botaoFoto" src={addButton}></img>Cadastrar Novo Usuário</button>

                <section className="desculpa_section">
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
                                    carregarUser()
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
                {
                    modal()
                }
            </div>
        )
    }

    function mostratelaRegistros() {
        return (
            <div className="divmae">
                <section className="switchregistro">
                    <table className="containerswitchregistro">
                        <th className="switchth">Registros</th>
                    </table>
                </section>

                <section className="registro_content">
                    <div className="container_table_registro">
                        <table className="table_registro">

                            <thead>
                                <tr>
                                    <th className="thobjetos">Objeto</th>
                                    <th className="thobjetos thobjetos_centro">Entrada</th>
                                    <th className="thobjetos">Saída</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    listaCheckin.map((meucheckin) => {
                                        let dateIn = dataAtualFormatada(meucheckin.checkIn);
                                        let dateOut = dataAtualFormatada(meucheckin.checkOut);
                                        return (
                                            <tr key={meucheckin.idRegistroObj}>
                                                <td className="tdobjetos">{meucheckin.idTipoObjNavigation.nome}</td>
                                                <td className="tdobjetos">{dateIn}</td>{ }
                                                {
                                                    (meucheckin.checkOut != null) ?
                                                        <td className="tdobjetos">{dateOut}</td>
                                                        : <td className="tdobjetos"></td>
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }

    function excluir(id, e) {
        db.delete('/Usuarios/' + id, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(res => {
                if (res.status === 204) {
                    buscarUsuarios()
                }
            })
            .catch(erro => console.log(erro))
    }

    function buscarUsuarios() {
        db.get('/Usuarios')
            .then(resposta => {
                if (resposta.status === 200) {
                    setListaUser(resposta.data)
                }
            })
            .catch(erro => console.log(erro));
    };

    useEffect(buscarUsuarios, []);

    function buscarCheckins() {
        db.get('/RegistroObjetoes')
            .then(resposta => {
                if (resposta.status === 200) {
                    setListaCheckin(resposta.data)
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
                    >
                        <div className="coisadoxis">

                            <div className="titulos">
                                <h2>Novo Usuário</h2>
                                <h4>Cadastre um novo usuário no sistema.</h4>
                            </div>
                            <div className="oxis">
                                <button className="btnfecha" onClick={fechaModal}>
                                    <img className="xizinho" src={xis} alt="xis"></img>
                                </button>
                            </div>
                        </div>


                        <div className="inputebotao">

                            <div className="inputsreais">
                                <span className="spandeerro">{erroMensagem}</span>
                                <span>Email</span>
                                <input
                                    required
                                    className="inputform"
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
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
                                    onChange={e => setSenha(e.target.value)}
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
                                    onChange={e => setconfSenha(e.target.value)}
                                    placeholder="Confirme a senha"
                                />
                            </div>

                            <div className="divbtn">

                                <button className="botaocad" type="submit" onClick={Cadastrar}>Cadastrar</button>
                            </div>
                        </div>

                        <nav className="navfoto">
                            <img className="logodafab" src={fab_logo} alt="Logo da FabSoluções" />
                            <img className="logodosev" src={logo} alt="Logo do Sistema Severino" />
                        </nav>
                    </form>
                </div>
            )
        }
    }

    function AbreModal() {
        setShowModal(true);
        setErroMensagem('');
        setEmail('');
        setSenha('');
        setconfSenha('');
    }

    function fechaModal() {
        setShowModal(false);
    }

    function Cadastrar(event) {

        event.preventDefault();
        setIsLoading(true);

        let usuarioC = {
            idUser: 0,
            email: email,
            senha: senha
        };


        if (usuarioC.senha === confSenha) {

            db.post('/Usuarios', usuarioC, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
                },
            })
                .then((resposta) => {
                    if (resposta.status === 201) {
                        buscarUsuarios();
                    }
                })
                .catch((erro) => {
                    console.log(erro)
                    setIsLoading(false)
                })
                .then(
                    setIsLoading(false),
                    setShowModal(false),
                    setErroMensagem('')
                )
        } else {
            setErroMensagem('Confira sua senha e tente novamente')
        }
    }

    function carregarUser() {
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

    function getObjects() {
        db.get('/RegistroObjetoes/Now')
            .then(resposta => {
                if (resposta.status === 200) {
                    setList(resposta.data)
                };
            })
            .catch(erro => console.log(erro));
        console.log(list)
    }

    useEffect(getObjects, []);

    function getDetectedObjects() {
        db.post('/Camera/MakeRegisters/Camera')
            .then(resposta => {
                console.log(resposta);
                if (resposta.status === 200) {
                    // setDetectedObjects(resposta.data);
                    console.log("funfou!!")
                };
            })
            .catch(erro => console.log('não funfou'));
    }

    useEffect(getDetectedObjects, []);

    function toList() {
        var r = new RegExp(search.toLowerCase(), "g")

        return (
            list.map(o =>
                r.test(o.idTipoObjNavigation.nome.toLowerCase()) ?
                    <div className="object">{o.idTipoObjNavigation.nome}</div>
                    : null
            )
        )
    }

    // function toListDetectedObject() {
    //     var tw = camElement.clientWidth
    //     var th = camElement.clientHeight

    //     // detectedObjects.forEach(element => {
    //     //     element.x = (element.x * tw) / 1920;
    //     //     element.y = (element.y * th) / 1080;
    //     //     element.w = (element.w * tw) / 1920;
    //     //     element.h = (element.h * th) / 1080;
    //     // });

    //     return (
    //         detectedObjects.map(d => <div className="detected" style={{ width: (d.w * tw) / 1920, height: d.h * th / 1080, top: (d.y * th) / 1080, left: (d.x * tw) / 1920 }}></div>)
    //     )
    // }

    function onChange(event) {
        setSearch(event.target.value)
    }

    function changeScreen(event) {

        set1(false)
        set2(false)
        set3(false)

        let num = parseInt(event.target.value)

        switch (num) {
            case 1:
                set1(true);
                break;

            case 2:
                set2(true);
                break;

            case 3:
                set3(true);
                break;

            default:
                break;
        }

        setValor(num)

    }

    function dataAtualFormatada(texto) {
        let data = new Date(texto);

        var dia = data.getDate().toString().padStart(2, '0')
        var mes = (data.getMonth() + 1).toString().padStart(2, '0')
        var ano = data.getFullYear()
        var hora = data.getHours()
        var minutos = data.getMinutes()
        var segundos = data.getSeconds()
        let novoDia = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
        return novoDia;
    }

    var btn_1 = css1 ? "marcado" : "";
    var btn_2 = css2 ? "marcado" : "";
    var btn_3 = css3 ? "marcado" : "";

    return (
        <main className="cam_page_modal">
            <header>
                <div className="container_nav">
                    <nav className="content_logo">
                        <div className="popovercontainer">
                            <img src={fab_logo} alt="logo da fab soluções" className="" />
                            <span className="popover">
                                FabSoluções<br />
                                ID 509103<br />
                                CheckIN 8:15<br />
                            </span>
                        </div>
                        <img src={logo} alt="Logo do Sistema Severino" />
                    </nav>
                    <nav className="content_pages">
                        <button onClick={changeScreen} value={2} id={btn_2}>Usuários</button>
                        <button onClick={changeScreen} value={3} id={btn_3}>Registros</button>
                        <button onClick={changeScreen} value={1} id={btn_1}>Home</button>
                        {/* <button onClick={SetValor(2)} className="">Usuários</button> */}
                    </nav>
                </div>
            </header>
            {
                comparaswitch()
            }
        </main >
    )
}