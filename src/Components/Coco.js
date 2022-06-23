import React from 'react';
import oil from "../images/products/coco.png"

const Coco = () => {
    return (
        <div>
            <div className='bg-slate-50 flex justify-center'>
                <img src={oil} alt=""  className='w-72'/>
            </div>
        </div>
    );
};

export default Coco;