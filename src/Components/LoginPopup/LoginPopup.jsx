// import React, { useState } from 'react';
// import './LoginPopup.css';
// import { assets } from '../../assets/frontend_assets/assets';

// const LoginPopup = ({ setShowLogin }) => {
//     const [currState, setCurrState] = useState("Login");
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = {
//             username: username,
//             email: email,
//             password: password
//         };

//         // Define correct URLs
//         let url = '';
//         let method = 'POST';

//         if (currState === "Login") {
//             url = '';
//         } else {
//             url = '';
//         }

//         try {
//             const response = await fetch(url, {
//                 method: method,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok.');
//             }

//             const data = await response.json();
//             console.log(data);

//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className='login-popup'>
//             <form className="login-popup-container" onSubmit={handleSubmit}>
//                 <div className="login-popup-tittle">
//                     <h2>{currState}</h2>
//                     <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
//                 </div>
//                 <div className="login-popup-inputs">
//                     {currState === "Login" ? null : <input type="text" placeholder='Your name' required onChange={(e) => setUsername(e.target.value)} />}
//                     <input type="email" placeholder='Your email' required onChange={(e) => setEmail(e.target.value)} />
//                     <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>

//                 <div className="login-popup-condition">
//                     <input type="checkbox" required />
//                     <p>By continuing, I agree to the terms of use & policy.</p>
//                 </div>

//                 {currState === "Login"
//                     ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//                     : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//                 }
//             </form>
//         </div>
//     );
// };

// export default LoginPopup;
