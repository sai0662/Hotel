import React, { useEffect,Component,useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

function SigninScreen(props){ 

   /* const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //
    };
  }, []);
*/
/*useEffect(()=>{
  if(user){
    props.history.push("/")
  }
  return()=>{
    //
  }
},[user]);*/

const [user, setUser] = useState({
  email: "",
  password:"",
  
 });

 const [status, setStatus] = useState('');

 function onTextFieldChange(e) {
  setUser({
   ...user,
   [e.target.email]: e.target.value
  })
 }
 /*useEffect(()=>{
  if(user){
    props.history.push("/")
  }
  return()=>{
    //
  }
},[user]);*/

async function submitHandler(e) {
  e.preventDefault()
  try {
   await axios.post('http://localhost:5000/api/users/signin', user)
    status(true);
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
            <li>
                <h3>Signin</h3>
            </li>
          <li>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => onTextFieldChange(e.target.value)}
            ></input>
          </li>
          <li>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => onTextFieldChange(e.target.value)}
            ></input>
          </li>
          <li>
            <Button type="submit" className="button-primary" variant="primary">
              Signin
            </Button>
          </li>
          <li className="tag-signin">
              New to Hotel
          </li>

          <li>
        
              <Link to="/register" className="signin-button">  <Button type="submit" className="button-primary" variant="primary">Create New Account </Button></Link>
              
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SigninScreen;
