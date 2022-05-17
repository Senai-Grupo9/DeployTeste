import fab_logo from "../../assets/fab-logo.png";
import logo from "../../assets/logo.png";
import { React, useState, useEffect } from 'react';
import axios from "axios";
import { db } from '../../services/api'



export default function CheckIn() {

    const [listaCheckin, setListaCheckin] = useState([]);

    function buscarCheckins() {
        db.get('/RegistroPessoas')
            .then(resposta => {
                if (resposta.status === 200) {
                    setListaCheckin(resposta.data)
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
                        <a href="/log" className="">Usuários</a>
                        <a href="/checkin" className="marcado_registros">Registros</a>
                        <a href="/home" className="">Home</a>
                    </nav>
                </div>
            </header>
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
                                    return (
                                        <tr key={meucheckin.idRegistroPessoa}>
                                            <td className="tdobjetos">{meucheckin.idPessoa}</td>
                                            <td className="tdobjetos">{meucheckin.checkIn}</td>
                                            <td className="tdobjetos">10:29 04/05/2022</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        {/* <th className="thobjetos">Objeto</th>
                        <th className="thobjetos thobjetos_centro">Entrada</th>
                        <th className="thobjetos">Saída</th>
                        <tr className="item_registro">
                            <td className="tdobjetos">Cadeira</td>
                            <td className="tdobjetos">10:26 04/05/2022</td>
                            <td className="tdobjetos">10:29 04/05/2022</td>
                        </tr> */}
                    </table>
                </div>
            </section>
        </main >
    )
}