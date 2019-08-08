import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
    state = {
        isAuthorized: false,
        authorizeError: '',
        email: ''
    }
    authorize = (email, password) => {
        if (email === 'stu@dent.com' && password === '123') {
            this.setState({isAuthorized: true,authorizeError: '', email: email})
        } else {
            this.setState({authorizeError: 'Email или пароль введён не верно'})
        }
    }
    logout = () => {
        this.setState({isAuthorized: false, email: ''})
    }
    render() {
        const {children} = this.props;
        const { isAuthorized, authorizeError, email } = this.state
        return <Provider value={{isAuthorized: isAuthorized, authorize: this.authorize, logout: this.logout, authorizeError: authorizeError, email: email}}>{children}</Provider>;
    }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
