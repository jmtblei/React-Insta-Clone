import React from "react";

const withAuthenticate = PostPage => Login => 
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem('user') && localStorage.getItem('pw')) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        }

        handleLogOut = event => {
            localStorage.clear()
            this.setState({ loggedIn: false });
            window.location.reload();
        }

        render() {
            if (this.state.loggedIn) {
                return <PostPage />
            }
            return <Login />
        }
    }
export default withAuthenticate; 