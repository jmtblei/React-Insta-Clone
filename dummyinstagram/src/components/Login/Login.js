import React, { Component } from "react";
import cameralogo from '../../assets/igcameralogo.png';
import iglogo from '../../assets/iglogo.png';
import styled from 'styled-components';

const LoginPage = styled.div`
background:linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
;`

const LoginWrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 15% 50px;
;`

const LoginForm = styled.form`
    border: 1px solid lightgrey;
    padding: 50% 50px;
    background-color: white;
;`

const LoginIconC = styled.img`
    width: 20%;
;`

const LoginIcon = styled.img`
    width: 70%;
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid black;
;`

const Dummy = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    margin: 10px 0;
;`

const Credentials = styled.input`
    width: 100%;
    text-align: center;
    height: 50px;
    margin: 5px 0;
    font-size: 1.15rem;
;`

const LogButton = styled.button`
    width: 100%;
    text-align: center;
    height: 70px;
    margin: 5px 0;
    font-size: 1.15rem;
    background-color: #4DA4FE;
    color: white;
        &:hover {
        background-color: white;
        color: #4DA4FE;
;`

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        };
    }

    handleLoginInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleLoginSubmit = event => {
        localStorage.setItem('user', this.state.username);
        localStorage.setItem('pw', this.state.username);
        window.location.reload();
    }

    render() {
        return (
            <LoginPage>
                <LoginWrapper>
                    <LoginForm>
                            <LoginIconC src={cameralogo}/>
                            <LoginIcon src={iglogo}/>
                                <Dummy>Dummy Clone</Dummy>
                            <Credentials
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleLoginInput}
                            />
                        <Credentials
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleLoginInput}
                            />
                            <LogButton onClick={this.handleLoginSubmit}>
                                Log In
                            </LogButton>
                    </LoginForm>
                </LoginWrapper>
            </LoginPage>
            // <form>
            //     <h2>Instagram Dummy Clone</h2>
            //     <div>
            //         <input
            //         type="text"
            //         placeholder="Username"
            //         name="username"
            //         value={this.state.username}
            //         onChange={this.handleLoginInput}
            //         />
            //     </div>
            //     <div>
            //     <input
            //         type="text"
            //         placeholder="Password"
            //         name="password"
            //         value={this.state.password}
            //         onChange={this.handleLoginInput}
            //         />
            //         <br />
            //         <button onClick={this.handleLoginSubmit}>
            //             Log In
            //         </button>
            //     </div>
            // </form>
        )
    }
}

export default Login;