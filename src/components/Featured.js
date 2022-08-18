function Featured(props) {
    return (
        <div className="card m-3" style={{width: '10rem'}}>
            <div className="card-header">
                Featured
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    );
  }
  
  export default Featured;