import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
    render() {
        return (
            <>
            <footer className="footer">
                <p className="header__title section-title">Footer</p>
                <p className="footer-message t-footer">
                    <AuthConsumer>
                        {({ isAuthorized }) =>
                        isAuthorized ? (
                            'Вы вошли как test@test.ru'
                        ) : (
                            'Вы гость в этой системе'
                        )}
                    </AuthConsumer>
                </p>
            </footer>
            </>
        );
    }
}

export default Footer;
