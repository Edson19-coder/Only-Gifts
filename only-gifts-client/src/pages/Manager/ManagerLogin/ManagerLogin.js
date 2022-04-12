import React,{useState,useContext} from "react";
import imgLogo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import ContextAdmin from "./../../context/AdminContext";

const AdminLogin = () => {

  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const {logIn} = useContext(ContextAdmin);

  const handleForm = (e)=>{
    e.preventDefault();
    //implementar con service/api
    logIn(user);
    navigate("/admin")
  }

  return (
    <>
      <div className="bg-light w-screen h-screen m_bg">
        <div className="d-flex flex-column full align-items-center justify-content-center">
          <div className="shadow-sm bg-white rounded-3 p-4">
            <div className="text-center " >
            <img src={imgLogo} alt="logo" className="w-logo mb-3" ></img>
            <div className="h5 mb-0 "> ¡Bienvenido de nuevo!</div>
            <div style={{fontSize:"0.7rem"}} className="text-muted mb-3" >Entra con tu cuenta de TECH MARKET </div>
            </div>
            <form onSubmit={handleForm} className="form-admin" >
              <div className="mb-3">
                <label className="form-label" htmlFor="form1Example1">
                  Usuario
                </label>
                <input onChange={(e)=>setUser(e.target.value)} name="user" value={user} type="text" id="user" className="form-control" />
                
              </div>

              <div className="mb-3">
              <label className="form-label" htmlFor="form1Example2">
                  Contraseña
                </label>
                <input
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                  type="password"
                  id="password" name="password"
                  className="form-control"
                />
               
              </div>

              <div className="d-grid">
              <button type="submit" className="btn btn-primary  ">
                Entrar
              </button>
              </div>
            </form>
          </div>
          <a href="" > ¿Olvidaste tu contraseña?  </a>
         
        </div>
      </div>
    </>
  );
};

export default AdminLogin;