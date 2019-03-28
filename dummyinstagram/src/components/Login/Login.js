import React, { Component } from "react";
import iglogo from '../../assets/iglogo.png';
import styled from 'styled-components';

const LoginPage = styled.div`
background:linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
;`

const LoginWrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 20% 50px;
;`

const LoginForm = styled.form`
    border: 1px solid lightgrey;
    padding: 50% 50px;
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
                        <h2>Instagram Dummy Clone</h2>
                        <div>
                            <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleLoginInput}
                            />
                        </div>
                        <div>
                        <input
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleLoginInput}
                            />
                            <br />
                            <button onClick={this.handleLoginSubmit}>
                                Log In
                            </button>
                        </div>
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