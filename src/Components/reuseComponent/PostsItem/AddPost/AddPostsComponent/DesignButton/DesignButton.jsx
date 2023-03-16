import React, { useContext } from 'react'
import { FaceIcon, ImageIcon, StreamIcon } from '~/Asset'
import AvatarImage from '~/Components/reuseComponent/Avatar/Avatar'
import ShowModal from '~/Components/reuseComponent/Modal/Modal'
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper'
import { AuthContext } from '~/Pages/Messages/context/AuthContext'
import './DesignButton.scss'

function DesignButton() {
    const { currentUser } = useContext(AuthContext)
    return (
        <PopperWrapper>
            <div className='design-button-wrapper'>
                <div className='d-btn__header'>
                    <div className={('avatar-user')}>
                        <AvatarImage
                            className={('border-avatar-user')}
                            src="https://i.pinimg.com/564x/8c/38/15/8c3815afd8140fdaf5dab76b8e47b86a.jpg"
                        />
                    </div>
                    <div className='b-btn__title'>
                        <span>{currentUser.displayName} ơi, bạn đang nghĩ gì thế?</span>
                    </div>
                </div>
                <div className={('option')}>
                    <div>
                        <StreamIcon />
                        <span>Video trực tiếp</span>
                    </div>
                    <div>
                        <ImageIcon />
                        <span>Ảnh/video</span>
                    </div>
                    <div>
                        <FaceIcon />
                        <span>Feeling/activity</span>
                    </div>
                </div>

            </div>
        </PopperWrapper>
    )
}

export default DesignButton
