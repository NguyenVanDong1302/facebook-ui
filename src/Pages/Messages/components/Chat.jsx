import React, { useContext } from 'react'
import Cam from '~/Asset/ImgMessages/cam.png'
import Add from '~/Asset/ImgMessages/add.png'
import More from '~/Asset/ImgMessages/more.png'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'


function Chat() {
    const { data } = useContext(ChatContext)


    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat
