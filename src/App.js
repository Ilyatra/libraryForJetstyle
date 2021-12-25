import React, { useState } from "react";
import './App.css';
import BookList from './BookList';
import Modal from './Modal'

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(true);
  let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [cover, setCover] = useState('');

  const handleSubmit = (event) => {
    const id = Math.random() * 1e18;
    let library = JSON.parse(window.localStorage.getItem('library'));
    if (!library) library = [];
    library.push({'title': title, 'author': author, 'id': id});
    localStorage.setItem('library', JSON.stringify(library));
  }

  let bookList;
  let library = JSON.parse(window.localStorage.getItem('library'))
  
  if (library && library.length >= 1) {
    bookList = <BookList/>
  }else{
    bookList = <span>You haven't added any books yet</span>
  }

  return (

    <div className="App">
      {bookList}
      <i className="add-button fas fa-plus" onClick={handleModal}></i>
      <Modal showModal={showModal} setShowModal={setShowModal} setTitle={setTitle} 
        setAuthor={setAuthor} setCover={setCover} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
