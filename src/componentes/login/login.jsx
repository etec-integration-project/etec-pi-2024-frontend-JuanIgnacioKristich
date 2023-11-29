




import "./login.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function LoginForm() {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al servidor para la validación en el back-end
    console.log('Datos de inicio de sesión:', formData);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="usernameOrEmail">Nombre de Usuario o Email:</label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          
        </div>

        <button type="button" onClick={toggleShowPassword}>
            Mostrar Contraseña
        </button>

        <Link to="/">
        <button type="submit">Iniciar Sesión</button>
        </Link>
        
      </form>
      <p>
        ¿No tienes una cuenta?{' '}
        <Link to="/Register">Regístrate aquí</Link>
      </p>
    </div>
  );
}

export default LoginForm;


// import React, { useState } from "react";
// import "./login.css";
// import {Link} from 'react-router-dom';
// import axios from "axios";



// export default function Login() {
//   const [Email, firstname]=useState("")
//   const [Password, contraseña] =useState("")
//   const login = async (e) =>{
//     e.preventDefault()
//     try {
//       await axios.get("http://localhost:3000/api/users",{Email,Password})
//       alert("inicio de sesion exitoso")
      
      
//     } catch (error) {
//       alert("no se pudo iniciar sesion")
      

      
//     }
//   }

//   return (
//     <div className="login-container">
//       <form className="login-form" action="#" method="post">
//         <h2>Iniciar Sesión</h2>
//         <div className="input-container">
//           <label htmlFor="nombre">Nombre</label>
//           <input type="text" id="nombre" name="nombre" value ={Email} onChange={(e) => firstname (e.target.value)} required />
//         </div>
        
//         <div className="input-container">
//           <label htmlFor="contrasena">Contraseña</label>
//           <input type="password" id="contrasena" name="contrasena" value ={Password} onChange={(e) => contraseña (e.target.value)} required />
//         </div>
        

//         <div className ="botoneslogin">
//           <button type="submit"  onClick ={login}>Iniciar Sesión  </button>
//           <Link to='/register'>
//             <button type="submit">Crear cuenta </button>
          
//           </Link>


//         </div>
        
        
//       </form>
//     </div>
//   );
// }
