import { Avatar } from "@mui/material";
import "../css/global.css";

const SidebarChat = (props) => {
  return (
    <div
      className="sidebar-chat"
      onClick={() => {
        props.handleclick(props.id);
      }}
    >
      <Avatar>{props.name}</Avatar>
      <div className="sidebar-chat-info">
        <h2>{props.name}</h2>
        <p>{props.lastmessage}</p>
      </div>
    </div>
  );
};
export default SidebarChat;
