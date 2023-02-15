import { format } from "date-fns";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import './Message.scss'

export const MessageContext = createContext();
const Message = ({ message, CheckTimeSend, CheckShowAvt }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // eslint-disable-next-line no-unused-expressions 
  const datex = CheckTimeSend !== undefined ? new Date(CheckTimeSend * 1000) : null
  const daysOfWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  if (datex !== null) {
    const dayOfWeek = datex.getDay();
    const abbreviatedDayOfWeek = daysOfWeek[dayOfWeek];
    var showDate = abbreviatedDayOfWeek + " " + datex.getHours() + ":" + datex.getMinutes()
  }
  return (
    <div className="messageWrapper">
      <div className="message__showDate">{showDate !== undefined ? showDate : ''}</div>
      <div
        ref={ref}
        className={`message ${message.senderId === currentUser.uid && "owner"}`}
      >
        <div className="messageInfo">
          {datex === null && CheckShowAvt === false ?
            <img
              src={
                message.senderId === currentUser.uid
                  ? currentUser.photoURL
                  : data.user.photoURL
              }
              alt=""
            />
            : <div style={{
              height: '40px',
              width: '40px'
            }}></div>}
        </div>
        <div className="messageContent">
          {message.text ? <p>{message.text}</p> : undefined}
          {message.img && <img src={message.img} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Message;