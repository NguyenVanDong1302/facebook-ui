
import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { ArrowIcon, FaceIcon, ImageIcon, StreamIcon } from '~/Asset';
import { db, storage } from '~/firebase';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';
import AvatarImage from '../../../../Avatar/Avatar';
import { v4 as uuid } from "uuid";
import './AddPosts.scss';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import ShowModal from '../../../../Modal/Modal';
import PopperWrapper from '~/Components/reuseComponent/Popper/Popperwrapper';

function AddPosts() {
    const { currentUser } = useContext(AuthContext)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const checkText = document.querySelector('.input__textContent')
        const file = e.target[0].files[0];
        const textContent = checkText.innerHTML

        if (file === undefined) {
            await updateDoc(doc(db, "testUpdatePosts", '514818e6-2088-4773-8b53-a6533258d31e'), {
                NewsPost: arrayUnion({
                    postsId: uuid(),
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

    const handlePlace = () => {
        const xxx = document.querySelector('.add-posts__input__value')
        console.log(xxx.innerHTML.length);

    }


    return (
        <div className='add-posts-wrapper'>
            <PopperWrapper>
                <span className='add-posts__title'>TẠO BÀI VIẾT</span>
                <div className='add-posts__header'>
                    <AvatarImage
                        className={('border-avatar-user')}
                        src="https://i.pinimg.com/564x/8c/38/15/8c3815afd8140fdaf5dab76b8e47b86a.jpg"
                    />
                    <div className='add-posts__header__title'>
                        <span className='add-posts__name__user'>Nguyễn Văn Đông</span>
                        <span className='object__posts'>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/qop9rFQ_Ys1.png" alt="Công khai" height="12" width="12" />
                            Công khai
                            <ArrowIcon />
                        </span>
                    </div>
                </div>

                <div className='add-posts-input'>
                    <div className='add-posts__input'>
                        <span class="badge">
                            <span contenteditable="true" id="new-tag" class="badge alert-info" data-placeholder="Make a new tag" data-focused-advice="Start typing"></span><i class="fa fa-lg fa-plus-circle"></i>
                        </span>
                    </div>
                </div>
            </PopperWrapper>
        </div >
    );
}

export default AddPosts;
