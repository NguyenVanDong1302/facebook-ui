import React, { useContext, useState } from "react";
import Attach from "~/Asset/ImgMessages/attach.png";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import {
    arrayUnion,
    doc,
    serverTimestamp,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import { db, storage } from "~/firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { LikeIconMessages, OtherActionIconMessages, SendIconIconMessages, UploadGifIconMessages, UpLoadImageIconMessages, UpLoadStickerIconMessages } from "~/Asset/Messages/Index";
import { LikeIcon } from "~/Asset";

const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
                senderId: currentUser.uid,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
                // senderId: currentUser.uid,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("");
        setImg(null);
    };
    return (
        <div className="input">
            <div className="input__option">
                <ul>
                    <li>
                        <OtherActionIconMessages />
                    </li>
                    <li>
                       <div>
                            <input
                                type="file"
                                style={{ display: "none" }}
                                id="file"
                                onChange={(e) => setImg(e.target.files[0])}
                            />
                            <label htmlFor="file">
                                <UpLoadImageIconMessages />
                            </label>
                       </div>
                    </li>
                    <li>
                        <UpLoadStickerIconMessages />
                    </li>
                    <li>
                        <UploadGifIconMessages />
                    </li>
                </ul>
            </div>
            <div className="input__text__message">
                <input
                    type="text"
                    placeholder="Aa"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <SendIconIconMessages />
            </div>
            <div className="send">
                <button onClick={handleSend}>
                    <LikeIconMessages />
                </button>
            </div>
        </div>
    );
};

export default Input;