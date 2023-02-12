import React, { useContext } from 'react'
import Cam from '~/Asset/ImgMessages/cam.png'
import Add from '~/Asset/ImgMessages/add.png'
import More from '~/Asset/ImgMessages/more.png'
import Messages from './Message/Messages'
import Input from './Message/Input'
import { ChatContext } from '../../context/ChatContext'
import AvatarUser from '~/Components/reuseComponent/Avatar/User/AvatarUser'

import './Chat.scss'
import { CallIconMessages, DetailIconMessages, VideoCallIconMessages } from '~/Asset'

function Chat() {
    const { data } = useContext(ChatContext)


    return (
        <div className='chat'>

            <div className="chatInfo">
                {data.user.displayName ?
                    <>
                        <div className='chatInfo__info'>
                            <AvatarUser src={data.user?.photoURL} alt='avatar user' height='40px' width='40px' online={true} />
                            <div className='chatInfo__info__detail'>
                                <span>{data.user?.displayName}</span>
                                <span className='chatInfo__info__status'>Đang hoạt động</span>
                            </div>
                        </div>
                        <div className="chatIcons">
                            <ul>
                                <li>
                                    <CallIconMessages />
                                </li>

                                <li>
                                    <VideoCallIconMessages />
                                </li>
                                <li>
                                    <DetailIconMessages />
                                </li>
                            </ul>
                        </div>
                    </>
                    : null
                }
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat
