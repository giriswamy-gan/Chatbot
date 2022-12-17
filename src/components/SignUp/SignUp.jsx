import './../Login/Login.css';
import {useHistory} from "react-router-dom";
import { useEffect, useState } from 'react';
import db from '../../firebase';

const SignUp = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [gotuser, setGotUser] = useState();


    // useEffect(()=>{
    //     db.collection('user').onSnapshot(snapshot => {
    //         setGotUser(snapshot.docs.map(doc => ({id: doc.id, username: doc.data().username, password: doc.data().password})));
    //         console.log(snapshot.docs.map(doc => ({username: doc.data().username, password: doc.data().password}))[0]);
    //         // console.log(gotuser[0])
    //     });
    // }, [])
    const handleSignUp = (e) => {
        e.preventDefault();
        db.collection("user").add({
            username: username,
            password: password,
            chatDone: [],
            chats: [],
            tag: [],
            rating: 5,
            available: true,
        })
        history.push('/');
    }
    const history = useHistory();
    return (
        <div classname="login">
            <div className="main_text">
                <h1 className="login-text">Sign Up</h1>
                <input id="UserName" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}></input>
                <input type="password" id="Password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}></input>
                <div className="submit" onClick={handleSignUp}>Submit</div>
            </div>
        </div>
    );
}

export default SignUp;
