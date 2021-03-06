import React, {Component} from 'react';
import classes from './Layout.module.css';
import Aux from '../AuxComponent/AuxComponent';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        );
    }
}

export default Layout;