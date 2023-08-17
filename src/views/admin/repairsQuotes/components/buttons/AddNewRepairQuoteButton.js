import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { MdOutlineAdd } from 'react-icons/md';
import { CUSTOM_ROUTES } from '../../../../../settings/CUSTOM_ROUTES.js';

const AddNewRepairQuoteButton = ({ text="Add New Repair Quote" }) => {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push(`${CUSTOM_ROUTES.REPAIRS_QUOTES.ACTION}?mode=add`);
    };

    return (
        <Button variant='brand' fontWeight='500' onClick={handleButtonClick}>
            <Icon as={MdOutlineAdd} color='white' w='24px' h='24px' />
            {text}
        </Button>
    );
};

export default AddNewRepairQuoteButton;
