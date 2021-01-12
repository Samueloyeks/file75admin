import React, { Component, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone'

import './index.css'


// svg 
import UploadBlack from '../../assets/svg/UploadBlack.svg'
import Close from '../../assets/svg/Close.svg';


const Upload = ({
    updateFiles,
    ...rest
}) => {
    const [myFiles, setMyFiles] = useState([])

    const onDrop = useCallback(acceptedFiles => {
        setMyFiles([...myFiles, ...acceptedFiles])
        updateFiles([...myFiles, ...acceptedFiles])
    }, [myFiles])

    const { getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        acceptedFiles,
        rejectedFiles } = useDropzone({ onDrop })

    const files = myFiles.map(file => (
        <li key={file.path} className="list-group-item list-group-item-success">
            {file.name} <Close className='clickable float-right' onClick={() => remove(file)} />
        </li>
    ));

    const remove = file => {
        const newFiles = [...myFiles]
        newFiles.splice(newFiles.indexOf(file), 1)
        setMyFiles(newFiles)
        updateFiles(newFiles)
    };

    return (
        <div>
            <div
                className={`uploadContainer clickable ${isDragActive ? 'uploadActive' : ''}`}
                {...getRootProps()}>
                <input
                    type="file"
                    multiple=""
                    autoComplete="off"
                    className="inp-file"
                    multiple
                    {...getInputProps()} />
                <UploadBlack />
                <p className='file-text-bold'>Drag and Drop here</p>
                <p className='file-text-bold'>or</p>
                <p className='file-text-bold file-primary clickable clickable'>Browse files</p>
            </div>

            <ul className="list-group mt-2 mh-2">
                {files}
            </ul>

        </div>
    )
}

export default Upload;