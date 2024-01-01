import { useState } from "react";
import BusinessData from "./BusinessData"
import BusinessDataEdit from "./BusinessDataEdit";
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import AddService from "./AddService";
import { Link, Outlet } from 'react-router-dom';

export default function homePageAdmin() {
  const [isEdit, setIsEdit] = useState(false);
  const [isplus, setIsPlus] = useState(false);
  const [ismeeting, setismeeting] = useState(false);
  const [isService, setIsService] = useState(false);
  return (
    <>
      {!isplus && (<>
        {!isEdit ?<div > <BusinessData /></div> : <BusinessDataEdit setIsEdit={setIsEdit} />}
        {!isEdit && (
          <Button size="small" color="primary" onClick={() => setIsEdit(true)}>
            edit
          </Button>
        )}</>)}

      <br />
      <br/>
      {!isEdit && !isplus && (<> 
      <Link to="/admin/services" onClick={()=>{setIsService(true) , setismeeting(false)}}>Services  |  </Link>
      <Link to="/admin/meetings" onClick={()=>{setIsService(false) , setismeeting(true)}}>  Meetings</Link>
      <Outlet/>
      </>)}
      <br/>
      {!isEdit && (<>
        {!isplus && !ismeeting && isService && (
        <Button size="small" color="primary" onClick={() => setIsPlus(true)}>
              add service
            </Button>)}         
        {isplus && (<AddService setIsPlus={setIsPlus} />)}
      </>)}

    </>
  )
}
