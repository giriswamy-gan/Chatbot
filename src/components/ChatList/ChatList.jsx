//call firebase and get a list of all the chats 
import { useEffect, useState } from 'react';
import db from './../../firebase';
import { Link } from 'react-router-dom';
import './ChatList.css';
import {useParams} from "react-router-dom";

const ChatList = () => {
    const {userid} = useParams();
    // let chatList = [];
    const [chatList, setChatList] = useState([]);
    const [chatList1, setChatList1] = useState([]);
    const [chatListData, setChatListData] = useState([]);
    // let chatList1 = [];
    // const [chatDone, setChatDone] = useState([]);
    let chatDone = [];
    // let username = '';
    const [username, setUserName] = useState('');
    let data_chat = [];
    const [impData, setImpData] = useState([]);
    const [lenny, setLen] = useState(false);

    useEffect(()=>{
        // console.log("This is it", db.collection('user'));
        // db.collection('user').doc(userid).get().then((querySnapshot)=>{
        //     username = querySnapshot.data().username;
        //     // setChatDone(querySnapshot.data().chatDone);
        //     chatDone = querySnapshot.data().chatDone;
        //     console.log("oYEEEE", querySnapshot.data().chats,Date());
        //     // setChatList(querySnapshot.data().chats);
        //     chatList = querySnapshot.data().chats
        //     chatList.map(chat=>{
        //         chatList1.push(chat);
        //     })
        //     console.log("ksjdksjd", chatList1,Date())
        //     // setChatList(data_chat);
        // });
        db.collection('user').doc(userid).onSnapshot((doc) => {
            console.log(doc.data());
            setChatList(doc.data().chats);
            console.log("Hi", chatList, Date());
            setUserName(doc.data().username);
        })
    }, []);


    // chatList.map(chat=>{
    //     db.collection('chat').doc(chat).get().then((querySnapshot1)=>{
    //         console.log("Andar ka chat", username)
    //         let user1 = String(querySnapshot1.data().user1);
    //         let user2 = String(querySnapshot1.data().user2);
    //         console.log("Andar ka chat", user1)
    //         if(String(username)===user1){
    //             data_chat.push({
    //                 username: user2,
    //                 chat_id: chat
    //             });
    //             console.log("Maal", data_chat)
    //             setImpData(data_chat);
    //             console.log("Imp", impData)
    //         }
    //         else{
    //             data_chat.push({
    //                 username: user1,
    //                 chat_id: chat
    //             });
    //             setImpData(data_chat);
    //         }
    //     });
    // });
    // console.log(data_chat)

    const findChats = (e) => {
        e.preventDefault();
        if(chatList.length!==0){
            chatList.map(chat=>{
                db.collection('chat').doc(chat).onSnapshot((doc)=>{
                    console.log(doc.data());
                    let user1 = doc.data().user1;
                    let user2 = doc.data().user2;
                    console.log("Andar ka chat", user1)
                    console.log("Andar ka chat", username)
                    if(username===user1){
                        const info1 = {
                            username: user2,
                            chat_id: chat
                        }
                        setChatList1([...chatList1, info1]);
                        console.log(chatList1, Date())
                    }
                    else{
                        const info1 = {
                            username: user1,
                            chat_id: chat
                        };
                        setChatList1([...chatList1, info1]);
                        console.log(chatList1, Date())
                    }
                })
            });
        }
    }
    return (
        <div className="chatList">
            <button className={'single'} onClick={findChats}>
                Want Other Chats ?
            </button>
            {chatList1.map((chat)=>(
                <Link className={'single'} to={'/chat/'+chat.chat_id+'/'+userid+'/'+username}>
                    {chat.username}
                </Link>
            ))}
            <Link className={'single'} to='/chat'>
                Click for Random Chat
            </Link>
        </div>
    );
}

export default ChatList;