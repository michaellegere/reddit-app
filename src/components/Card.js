function Card(props) {
    return (
        <div className="card m-3" style={{ width: '12rem' }}>
            <img className="card-img-top" src="../pics/library.avif" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">{props.btn}</a>
            </div>
        </div>
    );
  }
  
  export default Card;