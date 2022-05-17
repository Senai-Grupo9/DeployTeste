import fab_logo from "../../assets/fab-logo.png";
import logo from "../../assets/logo.png";
import { React, useState, useEffect } from 'react';

export default function Log() {

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
            <article className="cam_content">
                <span>
                <a href="#"><img href="#" alt="Botão de adicionar" />Cadastrar Novo Usuário</a>
                </span>
                <table></table>
            </article>
            
        </main >
    )
}