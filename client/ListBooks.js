import React from 'react'
import './ListBooks.scss'

class ListBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div className="list_books_container">
            <h2>Recent Books</h2>
            </div>
        )
    }
}

export default ListBooks;