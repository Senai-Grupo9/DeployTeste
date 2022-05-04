import fab_logo from "../../assets/fab-logo.png";
import logo from "../../assets/logo.png";
import adicionar from "../../assets/adicionar.png";
import { React, useState, useEffect } from 'react';

export default function CheckIn() {

    return (
        <main className="cam_page_modal">
            <header>
                <div className="container_nav">
                    <nav className="content_logo">
                        <img src={fab_logo} alt="Logo da FabSoluções" />
                        <img src={logo} alt="Logo do Sistema Severino" />
                    </nav>
                    <nav className="content_pages">
                        <a href="" className="">Usuários</a>
                        <a href="" className="marcado_registros">Registros</a>
                        <a href="" className="">Home</a>
                    </nav>
                </div>
            </header>
            <article className="cam_content">
                <table>
                    <th class="tdbordaright">Nome do Jogador</th>
                    <th class="tdbordaleft">Equipe</th>
                    <th></th>
                    <tr>
                        <td id="tdbordaright">Thiago</td>
                        <td id="tdbordaleft">SENAI Cytechs</td>
                    </tr>
                    <tr>
                        <td id="tdbordaright">Odirlei</td>
                        <td id="tdbordaleft">SENAI Cytechs</td>
                    </tr>
                </table>
            </article>
        </main >
    )
}