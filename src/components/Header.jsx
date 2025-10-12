import React, { Component } from 'react'
import "../cssler/Header.css"
class Header extends Component {
  render() {
    return (
        <header className='app-header'>
            <h1 className='logo'> Marka renkleri</h1>
            <p className='subtitle'>
                Markaların renk koleksiyonu , markayı renginden tanırız!
            </p>
        </header>
    )
  }
}
export default Header;
