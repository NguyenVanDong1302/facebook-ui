import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '~/firebase';
import './GameHome.scss';
import GameItem from './GameItems/GameItem';
import GameItem2 from './GameItems/GameItem2';

function GameHome() {
    const [listGame, SetListGame] = useState([]);
    const gameCollection = collection(db, 'gaming');
    useEffect(() => {
        const getGame = async () => {
            const data = await getDocs(gameCollection);
            SetListGame(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getGame();
    }, []);

    const allCategory = [
        'Tất cả game',
        'Hành động',
        'Phiêu lưu',
        'Arcade',
        'Chiến đấu',
        'Dùng bàn',
        'Xây dựng',
        'Đánh bài',
        'Sòng bạc',
        'Thiết kế',
        'Xếp hình',
        'Hợp nhất',
        'Câu đố',
        'Chơi nhanh',
        'Đố vui',
        'Đua xe',
        'Nhập vai',
        'Chạy thi',
        'Mô phỏng',
        'Solitaire',
        'Thể thao',
        'Từ vựng'
    ]
    console.log(allCategory);
    return (
        <div className="group-page-content">
            <h1>Game Home</h1>
            <div className="game-topPick-wrapper">
                <h1 className="game-topPick-title">Lựa chọn hàng đầu dành cho bạn</h1>
                <div className="game-topPick-list">
                    {listGame.map((item, index) => {
                        return <GameItem item={item} key={index} />;
                    })}
                </div>
            </div>
            <div className="game-all-game-wrapper">
                <div className="game-all-game__header">
                    <h1 className="game-all-game-title">Tất cả game</h1>
                    <div className="game-all-game__feature">
                        <div className='game-all-game__feature-category'>
                            <span> Hạng mục</span>
                            
                        </div>
                    </div>
                </div>
                <div className="game-all-game-list">
                    {listGame.map((item, index) => {
                        return <GameItem2 item={item} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default GameHome;
