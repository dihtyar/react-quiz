import React, { Component } from 'react';
import classes from './Layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';

export default class Layout extends Component {

    state = {
        menu: false
    }
    toggleHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    render () {
        return(
            <div className = {classes.Layout}>
                <MenuToggle
                    onToggle = {this.toggleHandler}
                    isOpen = {this.state.menu}
                />
                <main>
                    { this.props.children }
                </main>
            </div> 
        )
    }
}