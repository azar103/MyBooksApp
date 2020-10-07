import React from 'react'
import  './Header.scss'
const Header =() => (
    <div>
       
    <div className="header_container header_container_border_bottom">
    <div className="search-bar">
        <i className="fa fa-search fa-2x" aria-hidden="true"></i>
       </div>
        <h1>BooksForMe</h1>
        <div className="new-book">
            Add New Book
        </div>
        <p>" Gabriel.s small cottage was lit by a single candle that 
            cast light on a collection of weapons along one wall and a few books on a bookshelf on another "</p>
    </div>
    </div>
)


export default Header