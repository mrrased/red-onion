import React from 'react';
import { chooseData } from '../../../fakeData/food';
import { useState } from 'react';
import './ChooseTsFood.css';
import ChooseFood from '../ChooseFood/ChooseFood';

const ChooseTsFood = () => {
    const chooseFood = chooseData.slice(0, 3);
   const [choose] = useState(chooseFood);
    return (
        <div className="container">
                <div>
                    <h2>why you choose us</h2>
                    <p>Barton waited twenty always repair in within we do. An delighted offending <br/>
                    curiosity my is dashwoods at. Boy prosperous increasing surrounded </p>
                </div>
            <div className="row">
            

                {
                    choose.map(choose => <ChooseFood
                        key={choose.id} 
                        choose={choose}
                        >

                        </ChooseFood>)
                }
                
            </div>
        </div>
    );
};

export default ChooseTsFood;