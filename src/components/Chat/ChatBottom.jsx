import { TextField } from "@mui/material";
import './Chat.css';

const ChatBottom = ({input, setInput, sendButton}) => {
    return (
        <div className="chatBottom">
            <button className="chatBottom__button" onClick={sendButton}>Cancel</button>
            <form className="chatBottom__form">
                <TextField 
                    id="outlined-basic" 
                    label="Text" 
                    variant="outlined"  
                    className="chatBottom__text"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                />
                <button className="chatBottom__button" onClick={sendButton}>Send</button>
            </form>
        </div>
    );
}

export default ChatBottom;