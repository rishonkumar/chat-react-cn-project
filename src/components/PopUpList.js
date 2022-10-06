import { useState } from "react";
import "../css/global.css";
import User from "../Users.json";
import { BiCommentAdd } from "react-icons/bi";

const PopupList = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="add-button">
        <h2>CHATS</h2>
        <BiCommentAdd size={30} onClick={() => setOpen(!open)} />
      </div>

      {/* If open is true show your <div /> */}
      {open && (
        <div className="hide">
          <h2>Contact List</h2>
          {User.map((val) => {
            return (
              <div
                className="hide-list"
                onClick={() => {
                  props.handleAddChat(val);
                  setOpen(false);
                }}
                key={val.id}
              >
                <div>
                  <h2>{val.name}</h2>
                  <p>{val.lastmessage}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PopupList;
