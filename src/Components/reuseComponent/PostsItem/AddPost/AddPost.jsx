import { async } from '@firebase/util';
import { addDoc, arrayUnion, doc, onSnapshot, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { FaceIcon, ImageIcon, StreamIcon } from '~/Asset';
import { db, storage } from '~/firebase';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import AvatarImage from '../../Avatar/Avatar';
import { v4 as uuid } from "uuid";
import './AddPosts.scss';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
function AddPosts() {
    const { currentUser } = useContext(AuthContext)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const checkText = document.querySelector('.input__textContent')
        const file = e.target[0].files[0];
        const textContent = checkText.innerHTML
        // const docData = {
        //     textContent
        // };
        // console.log(file);
        if (file === undefined){
            await updateDoc(doc(db, "testUpdatePosts", '514818e6-2088-4773-8b53-a6533258d31e'), {
                NewsPost: arrayUnion({
                    textContent,
                    usrPosts: currentUser.uid,
                    date: Timestamp.now(),
                })
            });
        } else {

            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
            (error) => {
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateDoc(doc(db, "testUpdatePosts", '514818e6-2088-4773-8b53-a6533258d31e'), {
                        NewsPost: arrayUnion({
                            textContent,
                            usrPosts: currentUser.uid,
                            date: Timestamp.now(),
                            img: downloadURL,
                        })
                    });
                });
            }
            );
        }
            checkText.innerHTML = null
    }

    return (
        <div className={('wrapper')}>
            <div className={('input-content-post')}>
                <div className={('input-posts')}>
                    <div className={('avatar-user')}>
                        <AvatarImage
                            className={('border-avatar-user')}
                            src="https://i.pinimg.com/564x/8c/38/15/8c3815afd8140fdaf5dab76b8e47b86a.jpg"
                        />
                    </div>
                    <div className={('input-post')}>
                        <form className="addPosts__form" onSubmit={handleSubmit}>
                            <span className='input__textContent' contentEditable='true' placeholder='Bạn đang nghĩ gì?'>
                            </span>
                            <input type="file" placeholder="Img" />
                            <button className="button-login login__button">Đăng</button>
                        </form>
                    </div>
                </div>
                {/* <div className={('option')}>
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
                </div> */}
            </div>
        </div>
    );
}

export default AddPosts;
