import fab_logo from "../../assets/fab-logo.png";
import logo from "../../assets/logo.png";
import { React, useState, useEffect } from 'react';

import { mock } from "../../services/api";

export default function Home() {

    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');

    function getObjects() {
        mock.get('/object')
            .then(resposta => {
                if (resposta.status === 200) {
                    setList(resposta.data)
                };
            })
            .catch(erro => console.log(erro));
    }

    useEffect(getObjects, []);

    function toList() {

        var r = new RegExp(search.toLowerCase(), "g")

        return (
            list.map(o =>
                r.test(o.name.toLowerCase()) ?
                    <div class="object">{o.name}</div>
                    : null
            )
        )
    }

    function onChange(event) {
        setSearch(event.target.value)
    }

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
                        <a href="/log" className="">Usuários</a>
                        <a href="/checkin" className="">Registros</a>
                        <a href="/home" className="marcado_home">Home</a>
                    </nav>
                </div>
            </header>
        </main >
    )
}