import React from 'react';

const CardStyle = ({foodList}) => {
    const {img, name, quantity} = foodList;

    console.log(quantity);
    return (
        <>
        <div className="card mb-3" style={{maxWidth: "540px", maxHeight: "100px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                   <div className='d-flex justify-content-center'>
                       <img src={img} className="img-fluid rounded-start p-2" alt="..." />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body ">
                        <div className='d-flex align-items-center'>
                        <div>
                        <p className="card-title" style={{color: 'crimson', fontWeight: 600}}>{name}</p>
                        <p className="card-text" style={{color: 'crimson', marginTop: '-10px'}}>Quantity: {quantity}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CardStyle;