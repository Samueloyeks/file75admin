import React from 'react';
import './index.css'


const ListBox = ({
    list
}) => (
        <div className='copy-box'>
            <div>
                <ul>
                    {
                        list.map((item,index) => {
                            return(
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )


export default ListBox