import React from 'react';

const Card = () => {
  return (
    <div style={{ marginTop: '100px', padding: '20px' }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 style={{ textAlign: 'start' }}>Card components</h1>
          </div>
        </div>
      </div>
      <div className="container" style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="row">
          <div className="col d-flex align-items-center justify-content-start" style={{ marginTop: '20px', paddingLeft: '0', paddingRight: '0' }}>
            <div className="card" style={{ width: '100%', backgroundColor: 'white', color: 'black', margin: '0' }}>
              <div className="card-body" style={{ textAlign: 'left' }}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div> 

          <div className="col d-flex align-items-center justify-content-start" style={{ marginTop: '20px', paddingLeft: '0', paddingRight: '0' }}>
            <div className="card" style={{ width: '100%', backgroundColor: 'white', color: 'black', margin: '0' }}>
              <div className="card-body" style={{ textAlign: 'left' }}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col d-flex align-items-center justify-content-start" style={{ marginTop: '20px', paddingLeft: '0', paddingRight: '0' }}>
            <div className="card" style={{ width: '100%', backgroundColor: 'white', color: 'black', margin: '0' }}>
              <div className="card-body" style={{ textAlign: 'left' }}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
