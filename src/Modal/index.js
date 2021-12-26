import './css.css';

function Modal(props) {
    if (props.showModal) {
        return (
            <div className="modal__wrapper" 
                onClick={(e) => (e.target.classList.contains('modal__wrapper')) ? props.setShowModal(false) : 0}>
                
                <form className="modal">
                    <label className="modal__label">
                        Title
                        <input type="text" name="title" onChange={(e) => props.setTitle(e.target.value)}
                             className="modal__input"/>   
                    </label>
                    <label className="modal__label">
                        Author
                        <input type="text" name="author" onChange={(e) => props.setAuthor(e.target.value)}
                            className="modal__input"/>
                    </label>
                    <label className="modal__label">
                        Upload cover
                        <input type="file" name="cover" onChange={props.handleFileInputChange}
                            className="modal__input"/>
                    </label>
                    <div className="modal__button-wrapper">
                        <input type="submit" value="submit" onClick={props.handleSubmit} />
                        <button onClick={(e) => props.setTitle(e.target.value)}>cancel</button>
                    </div>   
                </form>
            </div>
        )
    }else {
        return '';
    }
    
}

export default Modal;