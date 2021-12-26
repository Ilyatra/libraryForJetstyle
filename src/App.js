import React, { useState } from "react";
import './App.css';
import BookList from './BookList';
import Modal from './Modal'

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(true);
  let [title, setTitle] = useState('');
  let [author, setAuthor] = useState('');
  let [cover, setCover] = useState({});

  const handleSubmit = (event) => {
    const id = Math.random() * 1e18;
    let library = JSON.parse(window.localStorage.getItem('library'));
    if (!library) library = [];
    // handleFileInputChange()
    library.push({'title': title, 'author': author, 'id': id, 'cover': cover});
    localStorage.setItem('library', JSON.stringify(library));
  }

  const getBase64 = file => {
    return new Promise(resolve => {
      let baseURL = "";

      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const handleFileInputChange = e => {
    let temp = {};
    let { file } = {file: null,
      base64URL: ""};

    file = e.target.files[0];

    getBase64(file)
      .then(result => {
        file["base64"] = result;
        temp.base64URL = result;        
      })
      .catch(err => {
        console.log(err);
      });

      setCover(temp);
  };

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
        setAuthor={setAuthor}  handleSubmit={handleSubmit} handleFileInputChange={handleFileInputChange}/>
    </div>
  );
}

export default App;
