import fab_logo from "../../assets/fab-logo.png";
import logo from "../../assets/logo.png";
import { React, useState, useEffect } from 'react';

import VideoFeed from "../../components/video-feed.tsx";
import { mock, db } from "../../services/api";
import axios from "axios";

export default function Home() {

    // this.myRef = React.createRef();
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    const [detectedObjects, setDetectedObjects] = useState([]);
    const [snapshot, SetSnapshot] = useState([]);
    // const camElement = useRef(null);

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

    useEffect(getObjects, []);
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
                    <VideoFeed src="http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8" />

                    {
                        //toListDetectedObject()
                    }
                </section>
            </div>
        </main >
    )
}