import HomePageAdmin from './HomePageAdmin';
import Adminstore from '../../stores/AdminStore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);


  const handleLogin = async () => {
    const response = await fetch("http://localhost:8787/login", {
      method: "POST",
      body: JSON.stringify({
        name: userName, password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status)
    if (response.status === 200) {
      Adminstore.setIsAdmin(true);
      setUserName("");
      setPassword("");
    }
    else {
      setIsInvalid(true);
      setUserName("");
      setPassword("");
    }
  }
  useEffect(() => {
    Adminstore.setIsAdmin(Adminstore.isAdmin);
  }, [Adminstore.isAdmin]);
  return (
    <>
      <header>
        <nav>
          <Link to="/" onClick={()=>Adminstore.setIsAdmin(false)} >חזרה ללקוחות</Link>
        </nav>
      </header>
      {Adminstore.isAdmin ? <HomePageAdmin /> : <Box>
        {isInvalid &&
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Name or password are invalid !
          </Alert>}
        <br />
        <br />


        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          type='text'
          value={userName}
          onChange={(e) => { setUserName(e.target.value), setIsInvalid(false) }}
        />
        <br />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => { setPassword(event.target.value), setIsInvalid(false) }}
        />
        <br />
        <br />
        <Button onClick={handleLogin} variant="contained" >login</Button>
      </Box>
      }

    </>
  )
}




