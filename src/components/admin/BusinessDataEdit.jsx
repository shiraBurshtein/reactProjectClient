import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import BusinessDataStore from '../../stores/BusinessDataStore';

const businessDataEdit=observer(({ setIsEdit })=> {
    const [businessData, setBusinessData] = useState({
        name: '',
        address: '',
        phone: '',
        owner: '',
        logo: '',
        description: ''
    });

      useEffect(() => {
        setBusinessData(BusinessDataStore.business);   // יבצע פעולה רק ברנדור הראשון
      }, []);
    const sendData =() => { 
       BusinessDataStore.business=businessData;
        BusinessDataStore.sendDataToServer(businessData);
        setIsEdit(false);
        console.log(businessData)
    }
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setBusinessData({ ...businessData, [id]: value });
       
      };
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
       
            <TextField fullWidth label="name" id="name" value={businessData.name} onChange={handleInputChange} focused/>
            <br />
            <br />
            <TextField fullWidth label="adress" id="address" value={businessData.address} onChange={handleInputChange}focused/>
            <br />
            <br />
            <TextField fullWidth label="phone" id="phone" value={businessData.phone} onChange={handleInputChange} focused/>
            <br />
            <br />
            <TextField fullWidth label="owner" id="owner" value={businessData.owner} onChange={handleInputChange} focused/>
            <br />
            <br />
            <TextField fullWidth label="logo" id="logo" value={businessData.logo} onChange={handleInputChange} focused/>
            <br />
            <br />
            <TextField fullWidth label="description" id="description" value={businessData.description} onChange={handleInputChange} focused/>
            <br />
            <br />
            <Button size="small" color="primary" onClick={() => sendData()} >
                save
            </Button>
        </Box>
    );

});
export default businessDataEdit;
