import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
// import "../css/chat.css";
import "../css/global.css";
import { useEffect, useState } from "react";

const Chat = (props) => {
  const [name, setName] = useState("him");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setName(props.chat[props.id - 1].name);
    setMessages(props.chat[props.id - 1].messages);
  }, [props.id]);
  //on pressing enter
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const data = {
      message: event.target[0].value,
      date: 13,
      user: 1,
    };
    props.chat[props.id - 1].messages.push(data);
    props.handleChat(messages);
    event.target[0].value = "";
  };
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />
        <div className="chat-header-info">
          <h3>{name}</h3>
          <p>Last Seen..</p>
        </div>
        <div className="header-right">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        {messages.map((val, index) => {
          return val.user === 1 ? (
            <p className="chat-message chat-reciever" key={`id${index}`}>
              <span className="chat-name">you</span>
              <span>{val.message}</span>
              <span className="chat-time">12:40 PM</span>
            </p>
          ) : (
            <p className="chat-message" key={`id${index}`}>
              <span className="chat-name">{name}</span>
              <span>{val.message}</span>
              <span className="chat-time">12:40 PM</span>
            </p>
          );
        })}
      </div>
      <div className="chat-footer">
        <EmojiEmotionsIcon />
        <AttachFileIcon />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Type your message here..." />
          <input type="submit" />
        </form>
        <MicIcon />
      </div>
    </div>
  );
};
export default Chat;
