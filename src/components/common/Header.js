import React from 'react'

const Header = (props) => {

  return (
    <header className="main-header">
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </header>
	)
}

export default Header;
