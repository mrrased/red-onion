import React from 'react';

const ChooseFood = (props) => {
    const {title, img, description} = props.choose;
    return (
        <div className="col-xl-4">
                <div className="m-4 text-center single-item">
                    <div className="card p-4">
                        <img className="card-img-top" src={img} alt=""/>
                    <div className="card-body">
                        <h6 className="card-title">{title}</h6>
                         <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseFood;