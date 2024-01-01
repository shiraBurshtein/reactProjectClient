import {BrowserRouter, Route, Routes, Link, Outlet, useParams} from 'react-router-dom';
import BusinessData from '../admin/BusinessData';
import Services from '../admin/Services';
import AddMeeting from './AddMeeting';
export default function Home(){
return(
<>
  <header style={{
      position: 'sticky',// כדי שהקומפוננטה תישאר בראש הדף
      top: 0 
    }}>
       <nav>     
        <Link to="/admin">לכניסת מנהל</Link>  
      </nav> 
      <h2>ברוך בואך</h2>

      <BusinessData/>
    
 </header>

<br/>

<AddMeeting />
<h3>SERVICES</h3>
<Services/>

 <footer>

 </footer>
</>
)}

