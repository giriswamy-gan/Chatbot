import './Login.css';
import {Link, useHistory} from "react-router-dom";
import { useEffect, useState } from 'react';
import db from '../../firebase';

const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [gotuser, setGotUser] = useState();

    let trial = 0;

    useEffect(()=>{
        db.collection('user').onSnapshot(snapshot => {
            setGotUser(snapshot.docs.map(doc => ({id: doc.id, username: doc.data().username, password: doc.data().password})));
            console.log(snapshot.docs.map(doc => ({username: doc.data().username, password: doc.data().password}))[0]);
            // console.log(gotuser[0])
        });
    }, [])
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("yooo", gotuser)
        gotuser.map((user)=>{
            if(user.password==password && user.username==username){
                history.push('/chatlist/'+user.id);
                trial = -1;
                return;
            }
        });
        if(trial===0)
            alert("Nah try again");
        // e => history.push('/chatlist');
    }
    const history = useHistory();
    return (
        <div classname="login">
            <div className="main_text">
                <h1 className="login-text">Login</h1>
                <input id="UserName" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}></input>
                <input type="password" id="Password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}></input>
                <div className="submit" onClick={handleLogin}>Submit</div>
                <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;
