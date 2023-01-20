/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '~/firebase';
import PostsItem from '~/Components/reuseComponent/PostsItem/PostsItem';

function PostsNews() {
    const [posts, setPosts] = useState([]);
    const postsCollectionRef = collection(db, 'posts-home');
    const listUsers = collection(db, 'users');
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(postsCollectionRef);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        const getListUser = async () => {
            const users = await getDocs(listUsers);
            setListUser(users.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getListUser();
        getUsers();
    }, []);

    return (
        <div>
            {posts.map((user, index) => {
                const dbUser = listUser.find((user2) => user2.idUser === user.idUser);
                return (
                    <div key={index}>
                        <PostsItem items={user} dataUser={dbUser} />
                    </div>
                );
            })}
        </div>
    );
}

export default PostsNews;
