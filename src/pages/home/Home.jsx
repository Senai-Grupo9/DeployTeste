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
    // const camElement = useRef(null);


    function getObjects() {
        mock.get('/object')
            .then(resposta => {
                if (resposta.status === 200) {
                    setList(resposta.data)
                };
            })
            .catch(erro => console.log(erro));
        console.log('peguei objeto')
    }

    function getDetectedObjects() {
        db.get('/Camera/CameraAnalyse')
            .then(resposta => {
                console.log(resposta);
                if (resposta.status === 200) {
                    setDetectedObjects(resposta.data);
                };
            })
            .catch(erro => console.log('não funcionou...'));
        
        console.log(detectedObjects);
    }

    useEffect(getObjects, []);

    useEffect(getDetectedObjects, []);

    function toList() {
        var r = new RegExp(search.toLowerCase(), "g")

        return (
            list.map(o =>
                r.test(o.name.toLowerCase()) ?
                    <div className="object">{o.name}</div>
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
                <img src={fab_logo} alt="" />
                <img src={logo} alt="" />
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