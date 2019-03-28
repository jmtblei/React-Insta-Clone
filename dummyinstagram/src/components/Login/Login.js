import React, { Component } from "react";

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
            <form>
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
            </form>
        )
    }
}

export default Login;