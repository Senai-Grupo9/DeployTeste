import { Component } from "react"
import { db } from '../../services/api'
import { parseJwt, usuarioAutenticado } from "../../services/auth"
import logo from '../../assets/logosev.png'
import FabLogo from '../../assets/fab-logo.png'
import IconSenha from '../../assets/eye.png'
import imagemLogin from '../../assets/fotoescritorio.png'



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false,
        };
    };

    efetuaLogin = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        db.post('/login', {
            email: this.state.email,
            senha: this.state.senha
        })

            .then(resposta => {
                if (resposta.status === 200) {

                    localStorage.setItem('usuario-login', resposta.data.token);
                    this.setState({ isLoading: false });

                    let base64 = localStorage.getItem('usuario-login').split('.')[1];
                    console.log(base64);

                    this.props.history.push('/home');
                }
            })
            .catch(() => {
                this.setState({ erroMensagem: 'E-mail e/ou senha inválidos!', isLoading: false })
            })
    };

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    };

    render() {
        return (

            <main className="login_modal">
                <form className="login_form">
                    <h1>Bem Vindo</h1>
                    <span>Seja bem-vindo, digite suas credenciais.</span>
                    <div className="item">
                        <div className="labels">
                            <label>Email</label>
                            <label className="invalidlogin">Login ou Senha inválidos!</label>
                        </div>
                        <input
                            className="input__login"
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.atualizaStateCampo}
                            placeholder="Insira seu e-mail"
                        />
                    </div>
                    <div className="item">
                        <label>Senha</label>
                        <input
                            className="input__login"
                            type="password"
                            name="senha"
                            value={this.state.senha}
                            onChange={this.atualizaStateCampo}
                            placeholder="Insira sua senha"
                        />
                        <button className="eye-pass" src={IconSenha} />
                    </div>
                    <button className="pass-forgor">Esqueci minha senha</button>
                    <button className="Do-Login" onClick={this.efetuaLogin}>Entrar</button>

                    <div className="fotos_login">
                        <img src={logo} className="foto_logo" alt="Logo do projeto"></img>
                        <img src={FabLogo} className="foto_logo_fab" alt="Logo da Fab Soluções"></img>
                    </div>
                </form>
                    <img src={imagemLogin} className="fotoLogin" alt=""></img>
            </main>
        );
    }
};