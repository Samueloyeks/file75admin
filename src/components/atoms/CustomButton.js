import React from 'react';
import {  Button, Spinner } from 'reactstrap';
import './index.css'


const CustomButton = ({
    title,
    buttonType,
    loading = false,
    onclick,
    ...rest
}) => (
        <Button
            {...rest}
            className='custom-button'
            type={buttonType}
            onClick={onclick}
        >
            {
                loading ?
                    <Spinner size='sm'/>
                    :
                    title
            }
        </Button>
    )


export default CustomButton