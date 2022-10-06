import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
// import "../css/sidebar.css";
import "../css/global.css";
import SidebarChat from "./SidebarChat";
import { useEffect, useState } from "react";
import PopupList from "./PopUpList";

const Sidebar = (props) => {
  const [lastMessage, setLastMessage] = useState("dfd");

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const message = props.chat.at(-1).name;
    setLastMessage(message);
  }, []);
  const click = (id) => {
    props.handleState(id);
  };
  // to set search value in search bar
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  // to add new chat item in sidebar chat list
  const addNewChat = (val) => {
    props.handleAddNewChat(val);
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <Avatar />
        <div className="sidebar-header-right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-container">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search/Start a new Chat"
            onChange={(e) => {
              handleSearch(e);
            }}
          />
        </div>
      </div>
      <div className="sidebar-chats">
        <PopupList handleAddChat={addNewChat} />
        {props.chat
          .filter((val) => {
            if (val.name.includes(searchText)) return val;
          })
          .map((val) => {
            return (
              <SidebarChat
                name={val.name}
                lastmessage={val.lastmessage}
                handleclick={click}
                key={val.id}
                id={val.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
