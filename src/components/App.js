import "../index.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useEffect, useState } from "react";
import Data from "../Data.json";

function App() {
  const [id, setId] = useState(1);

  const [chat, setChat] = useState(Data);

  const clickState = (id) => {
    setId(id);
  };
  //set data from json and update on chat state
  useEffect(() => {
    setChat(Data);
  }, [chat]);
  //to update the state with new received array of chat
  const updateChat = (data) => {
    const newData = {
      id: id,
      name: chat[id - 1].name,
      lastMessage: data[0].messages,
      messages: data,
    };
    chat.map((val) => {
      if (val.id === id) {
        val.messages = data;  
        const message = data[data.length - 1].message;
        val.lastMessage = message;
        setChat((prev) => {
          return [...prev];
        });
      }
    });
  };
  //to add chat in left sidebar
  const addNewChat = (val) => {
    let flag = false;
    chat.map((c) => {
      if (c.name === val.name) {
        flag = true;
      }
    });
    if (flag == true) return;
    else {
      const len = chat.length + 1;
      setChat((prev) => {
        const newValObj = {
          id: len,
          name: val.name,
          lastMessage: val.lastMessage,
          messages: [],
        };
        prev.push(newValObj);
        return [...prev];
      });
    }
  };
  return (
    <div className="App">
      <div className="container">
        <Sidebar
          chat={chat}
          handleState={clickState}
          handleAddNewChat={addNewChat}
        />
        <Chat id={id} chat={chat} handleChat={updateChat} />
      </div>
    </div>
  );
}

export default App;
