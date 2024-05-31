import React, { useEffect, useRef, useState } from "react";
import "./ChatBox.css";
import Header from "./Header";
import { TiAttachment } from "react-icons/ti";
import { FaRegPaperPlane } from "react-icons/fa";
import { getUser } from "../../../ApiService/Auth/Auth";
import {
  addMessage,
  getMessage,
} from "../../../ApiService/ChatService/ChatService";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
const ChatBox = ({ chat, currentUser, setSendMessage, receiveMessage }) => {
  const userId = chat?.members?.find((id) => id !== currentUser);
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState([]);
  const [text, setText] = useState("");
  const scroll = useRef();
  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat?._id) {
      setMessage(...message, receiveMessage);
    }
  }, [receiveMessage, chat, message]);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat != null) getUserData();
  }, [currentUser, userId, chat]);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await getMessage(chat?._id);
        setMessage(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getMessages();
  });

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const msg = {
      senderId: currentUser,
      message: text,
      chatId: chat?._id,
    };
    console.log(msg);
    try {
      const { data } = await addMessage(msg);
      setMessage([...message, msg]);
      console.log(data);
      setText("");
    } catch (error) {
      console.log(error);
      setText("");
    }
    const receiverId = chat?.members.find((id) => id !== currentUser);
    setSendMessage({ ...message, receiverId });
  };
  useEffect(() => {
    scroll?.current?.scrollIntoView({ behavior: "auto" });
  }, [message]);
  // console.log(chat);

  return (
    <>
      <div className="px-4 py-2 d-flex flex-column h-100 ">
        {!chat ? (
          <h3 className="m-auto">Welcome chat home you can chat here </h3>
        ) : (
          <div className="border rounded-4 rounded-bottom-0 border-bottom-0 h-100">
            <Header userData={userData} />
            <div className="chat-container h-100 d-flex py-3 flex-column justify-content-between">
              <div className="d-flex flex-column mssages ">
                <div className="today text-center my-2 d-flex align-items-center">
                  <hr className="w-100" /> <span>Today </span>{" "}
                  <hr className="w-100" />
                </div>
                {/* you */}
                {/* <Message type="own" />
                <Message type="sender" />
                <Message type="own" />
                <Message type="sender" />
                <Message type="own" /> */}

                {message?.map((msg, key) => (
                  <>
                    <Message
                      message={msg}
                      type={msg?.senderId !== currentUser ? "sender" : "own"}
                      scroll={scroll}
                    />
                  </>
                ))}
              </div>

              <form action="" className="" onSubmit={handleSendMessage}>
                <div className="chat-form d-flex  align-items-center   p-2 pb-0">
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    style={{ outline: "none" }}
                    className="w-100 p-2 rounded border border-2 chat-input"
                  />
                  <span className="mx-3" style={{ cursor: "pointer" }}>
                    <TiAttachment size={30} />
                  </span>
                  <button
                    style={{ cursor: "pointer" }}
                    className="message-btn p-2 rounded text-white"
                  >
                    <FaRegPaperPlane size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatBox;

const Message = ({ message, type, scroll }) => {
  const { data } = useGetAuthByIdQuery(message?.senderId);
  const week = [
    "Sunday",
    "Monday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div
      ref={scroll}
      className={`chat-message w-50 p-4 ${type === "own" && "ms-auto"}`}
    >
      <div className="d-flex flex-column ">
        <div className="d-flex justify-content-between">
          <small className="fw-semibold">
            {type === "own" ? "You" : data?.firstname + " " + data?.lastname}
          </small>
          <small>
            {week[new Date(message?.created).getDay() || 0]}{" "}
            {new Date(message?.created).toLocaleTimeString()}
          </small>
        </div>
        <p
          className={`text-center ${
            type === "own" ? "own" : "sender"
          }-message rounded p-2`}
        >
          {message?.message}
        </p>
      </div>
    </div>
  );
};
