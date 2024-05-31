import React, { useEffect, useRef, useState } from "react";
import ChatList from "../ChatList/ChatList";
import "./Chat.css";
import ChatBox from "../ChatBox/ChatBox";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { io } from "socket.io-client";
import RightSideProfile from "../RightSideProfile/RightSideProfile";
import { useAuth } from "../../../context/AuthContext";
import { userChat } from "../../../ApiService/ChatService/ChatService";

const Chat = () => {
  const [rightSlide, setRightSlide] = useState(false);
  const [auth] = useAuth();
  const [chats, setChats] = useState([]);
  const [currentChat, setCurChat] = useState(null);
  const [onlineUsers, setOnlieUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const socket = useRef();
  // console.log(state);
  useEffect(() => {
    socket.current = io("http://localhost:7000");
    socket.current.emit("new-user-add", auth?.user?._id);
    socket.current.on("get-users", (users) => {
      setOnlieUsers(users);
    });
  }, [auth?.user]);

  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceiveMessage(data);
    });
  }, []);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChat(auth?.user?._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [auth?.user]);
  return (
    <div className="chat position-relative" style={{ top: "18vh" }}>
      <div className="container ">
        <div className="row">
          <div className="chat-w-25">
            <ChatList
              chats={chats}
              onlineUsers={onlineUsers}
              setCurChat={setCurChat}
            />
          </div>
          <div className={!rightSlide ? "chat-w-75" : "chat-w-50"}>
            {!rightSlide && (
              <div
                onClick={() => setRightSlide(true)}
                className="text-end mt-4 mb-1"
              >
                <span className="right-chat-icon p-3 rounded-circle">
                  <FaAnglesLeft />
                </span>
              </div>
            )}
            <ChatBox
              chat={currentChat}
              currentUser={auth?.user?._id}
              setSendMessage={setSendMessage}
              receiveMessage={receiveMessage}
            />
          </div>
          <>
            <div
              className={`${!rightSlide ? "right-colse" : "chat-w-25"} mt-4`}
            >
              <span
                onClick={() => setRightSlide(false)}
                className="p-3  rounded-circle right-chat-icon"
              >
                <FaAnglesRight size={20} />
              </span>
              <RightSideProfile
                currentUser={auth?.user?._id}
                currentChat={currentChat}
              />
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Chat;
