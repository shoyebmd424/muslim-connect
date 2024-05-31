import React from "react";
import "./ChatList.css";
import { MdSearch } from "react-icons/md";
import Conversation from "./Conversation";
import { useAuth } from "../../../context/AuthContext";
const ChatList = ({ chats, onlineUsers, setCurChat }) => {
  const [auth] = useAuth();
  const checkOnlieStatus = (chat) => {
    const chatMemebr = chat?.members?.find(
      (member) => member !== auth?.user?._id
    );
    const online = onlineUsers?.find((user) => user?.userId === chatMemebr);
    return online ? true : false;
  };
  const handleRead = async (chat) => {
    try {
      setCurChat(chat);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-5">
      <div className="border rounded-5 p-1 px-3 d-flex align-items-center gap-2">
        <MdSearch size={30} />
        <input
          type="text"
          className="w-100 border-0"
          placeholder="Search"
          style={{ outline: "none" }}
        />
      </div>
      <div className="conversations  my-4">
        {Array.isArray(chats)
          ? chats?.map((chat) => (
              <div onClick={() => handleRead(chat)}>
                <Conversation
                  data={chat}
                  active={true}
                  curUserId={auth?.user?._id}
                  online={checkOnlieStatus(chat)}
                />
                <hr className="my-2" />
              </div>
            ))
          : ""}
        {/* <Conversation active={true} />
        <hr className="my-2" />
        <Conversation />
        <hr className="my-2" />
        <Conversation />
        <hr className="my-2" />
        <Conversation />
        <hr className="my-2" />
        <Conversation />
        <hr className="my-2" />
        <Conversation /> */}
      </div>
    </div>
  );
};

export default ChatList;
