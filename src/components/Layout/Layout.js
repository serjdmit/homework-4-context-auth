import React, { PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
    render() {
        const { header, footer, children } = this.props;
        return (
            <>
                {header}
                <main className={`main ${header && 'main--with-header'} ${footer && 'main--with-footer'}`}>
                    <SectionTitle className="main__title">Main</SectionTitle>
                    {children}
                </main>
                {footer}
            </>
        );
    }
}

export default Layout;
