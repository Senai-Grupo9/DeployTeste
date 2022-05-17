import fab_logo from "../../assets/fab-logo.png";
import logo from "../../assets/logo.png";
import { React, useState, useEffect } from 'react';
import axios from "axios";
import { db } from '../../services/api'


export default function CheckIn() {

    function buscarCheckins() {
        db.get('/RegistroPessoas')
        .then()
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
                        <a href="/logusuarios" className="">Usuários</a>
                        <a href="/checkin" className="marcado_registros">Registros</a>
                        <a href="/home" className="">Home</a>
                    </nav>
                </div>
            </header>
            {/* <article className="registro_content">
                <table className="table_registro">
                    <th>Pessoa</th>
                    <th>Entrada</th>
                    <th>Saída</th>
                    <tr className="item_registro">
                        <td>Thiago</td>
                        <td>10:26 04/05/2022</td>
                        <td>10:29 04/05/2022</td>
                    </tr>
                    <tr className="item_registros">
                        <td>Odirlei</td>
                        <td>10:26 04/05/2022</td>
                        <td>10:29 04/05/2022</td>
                    </tr>
                </table>
            </article> */}
        </main >
    )
}