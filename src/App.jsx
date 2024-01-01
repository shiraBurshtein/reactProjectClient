import './App.css'
import Login from './components/admin/Login'
import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';
import Home from './components/user/Home';
import Services from './components/admin/Services';
import Meetings from './components/admin/Meetings';
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"admin"} element={<Login />}>
              <Route path={"services"} element={<Services />} />
              <Route path={"meetings"} element={<Meetings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}


export default App
