import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '~/firebase'
import { ChatContext } from '../../../context/ChatContext'
import Message from './Message'

const Messages = () => {
    const [messages, setMessages] = useState([])
    const { data } = useContext(ChatContext)



    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
        })
        return () => {
            unSub()
        }
    }, [data.chatId])


    return (
        <div className="messages">
            {messages.map((m, index, array) => {
                if (index > 0) {
                    const previousValue = array[index - 1];
                    const CompTime = (m.date.seconds - previousValue.date.seconds) / 60 > 5
                    var CheckTimeSend = CompTime === true ? m.date.seconds : undefined
                    var CheckShowAvt = m.senderId === previousValue.senderId ? false : true
                    console.log(CheckShowAvt);

                }
                return <Message message={m} key={m.id}
                    CheckTimeSend={CheckTimeSend}
                    CheckShowAvt={CheckShowAvt}
                />
            }
            )}
        </div>
    )
}

export default Messages
