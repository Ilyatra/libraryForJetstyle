import BookCard from '../BookCard';
import React, { useState } from "react";
import './css.css';

function BookList(props) {

    const [library, setLibrary] = useState(JSON.parse(window.localStorage.getItem('library')));

    const listItems = library.map((val) => {
        
        return <BookCard key={val.id} title={val.title} author={val.author} id={val.id} cover={val.cover}
            setLibrary={setLibrary}/>
    })
    
    return (
        <div className="book-list">
            {listItems}
        </div>
    )
}

export default BookList;