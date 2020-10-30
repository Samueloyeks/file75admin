import React, { Component, useState } from 'react';
import './index.css'


// svg 
import UploadBlack from '../../assets/svg/UploadBlack.svg'

const Upload = ({
    ...rest
}) => {

    return (
        <div>
            <div className='uploadContainer'>
                <UploadBlack />
                <p className='file-text-bold'>Drag and Drop here</p>
                <p className='file-text-bold'>or</p>
                <p className='file-text-bold file-primary clickable clickable'>Browse files</p>
            </div>
        </div>
    )
}

export default Upload;