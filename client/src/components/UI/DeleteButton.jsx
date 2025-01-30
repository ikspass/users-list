import React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as DeleteIcon } from '../../styles/svg/delete.svg'

const DeleteButton = () => {
    return(
        <Button variant='outline-danger' className="custom-button">
            <DeleteIcon />
        </Button>
    )
}

export default DeleteButton;