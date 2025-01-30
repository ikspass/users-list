import React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as UnblockIcon } from '../../styles/svg/unblock.svg'

const UnblockButton = () => {
    return(
        <Button variant="outline-primary" className='custom-button'>
            <UnblockIcon />
        </Button>
    )
}

export default UnblockButton;