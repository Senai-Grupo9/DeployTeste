import erro from '../../assets/error-404.png'
import logo from '../../assets/fab-logo.png'


export default function CheckIn() {
    return (
        <main className="cam_page_modal">

            <div className='arrumatudo'>
                <div className='conteudo'>
                    <h1 className='titulo_erro'>404 - página não encontrada :/</h1>
                    <div className="content">
                        <h3>Existem diversos motivos para isso:</h3>
                        <div className='spans'>
                            <span>A URL pode estar incorreta</span>
                            <span>O serviço pode não estar disponível</span>
                            <span>Você está sem conexão com a internet</span>
                        </div>
                    </div>
                </div>
                <div className="imagem_erro">
                    <img src={erro} className="imagemerro" alt="Logo do projeto"></img>
                </div>
            </div>
                <div className='divlogo'>
                    <img src={logo} className="logopequeno" alt="Logo do projeto"></img>
                </div>
        </main>
    )
}