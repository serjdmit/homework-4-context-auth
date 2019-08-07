import React, { PureComponent } from 'react';
import './Layout.css';

class Layout extends PureComponent {
    render() {
        const { header, footer, children } = this.props;
        return (
            <>
                {header}
                <main className={`main ${header && 'main--with-header'} ${footer && 'main--with-footer'}`}>
                    <p className="main__title section-title">Main</p>
                    {children}
                </main>
                {footer}
            </>
        );
    }
}

export default Layout;
