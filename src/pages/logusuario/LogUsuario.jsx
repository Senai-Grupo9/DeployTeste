import fab_logo from "../../assets/fab-logo.png";
import logo from "../../assets/logo.png";
import adicionar from "../../assets/adicionar.png";
import { React, useState, useEffect } from 'react';

import { mock } from "../../services/api";

export default function LogUsuario() {

    return (
        <main className="cam_page_modal">
            <header>
                <div className="container_nav">
                    <nav className="content_logo">
                        <img src={fab_logo} alt="Logo da FabSoluções" />
                        <img src={logo} alt="Logo do Sistema Severino" />
                    </nav>
                    <nav className="content_pages">
                        <a href="" className="usuario_nav">Usuários</a>
                        <a href="" className="registros_nav">Registros</a>
                        <a href="" className="home_nav">Home</a>
                    </nav>
                </div>
            </header>
            <article className="cam_content">
                <span>
                    <img src={adicionar} href="#" alt="Botão de adicionar" />
                    <a href="#">Cadastrar Novo Usuário</a>
                </span>
                <table></table>
            </article>
        </main >
    )
}