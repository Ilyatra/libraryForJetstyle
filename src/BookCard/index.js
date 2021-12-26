import './css.css';
import React, { useState } from "react";



function BookCard(props) {
const [edit, setEdit] = useState(false);

function TextField(props) {
    const [text, setText] = useState(props.text);
    function handleBlur() {
        const library = JSON.parse(window.localStorage.getItem('library'));
        library.forEach(element => {
            if (element.id === props.id) {
                element[props.type] = text;
            }
        });
        localStorage.setItem('library', JSON.stringify(library));
        props.setLibrary(library);
        setEdit('');
    }

    if (edit == props.type) {
        return <textarea type="text" value={text} autoFocus
        onChange={(e) =>  setText(e.target.value)}
        onBlur={handleBlur}
        />;
    }else{
        return <span>{props.text}</span>;
    }
}

const handleDelete = () => {
    const library = JSON.parse(window.localStorage.getItem('library'));
    library.forEach((val, index) => {
        if (val.id === props.id) {
            library.splice(index, 1);
        }
    });
    props.setLibrary(library);
    localStorage.setItem('library', JSON.stringify(library));
}
function Img() {
    console.log(props.cover)
    if (props.cover.base64URL){
        return <img className="book-card__img" src={props.cover.base64URL} alt="book cover"></img>
    }else{
        return <div className="book-card__img">img</div>
    }
}

    return (
        <div className="book-card">
            <Img/>
            <div className="book-card__main">
                <div className="book-card__item">
                    <TextField text={props.title} id={props.id} type='title' setLibrary={props.setLibrary}/>
                    <i className="far fa-edit book-card__button" onClick={() => setEdit('title')}></i>
                </div>
                <div className="book-card__item">
                    <TextField text={props.author} id={props.id}  type='author' setLibrary={props.setLibrary}/>
                    <i className="far fa-edit book-card__button" onClick={() => setEdit('author')}></i>
                </div>
                <i className="fas fa-trash-alt book-card__button book-card__button_bottom-pos" 
                    onClick={handleDelete}>
                </i>
            </div>
        </div>
    )
}

export default BookCard;