import { Routes, Route, useLocation } from 'react-router-dom';
import GamePage from '~/Pages/Game/Game';
import GroupPage from '~/Pages/Group/Group';
import HomePage from '~/Pages/Home/Home';
import MarketPlacePage from '~/Pages/Market/Market';
import Mailbox from '~/Pages/Market/MarketPageItem/Mailbox';
import WatchPage from '~/Pages/Watch/Watch';
import BroadcastsWatch from '~/Pages/Watch/WatchPageItem/BroadcastsWatch';
import HomeWatch from '~/Pages/Watch/WatchPageItem/HomeWatch';
import LiveWatch from '~/Pages/Watch/WatchPageItem/LiveWatch';
import VideoSavedWatch from '~/Pages/Watch/WatchPageItem/Videosaved';

function Content() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/watch" element={<WatchPage />}>
                <Route path="/watch" element={<HomeWatch />} />
                <Route path="/watch/live" element={<LiveWatch />} />
                <Route path="/watch/broadcasts" element={<BroadcastsWatch />} />
                <Route path="/watch/saved" element={<VideoSavedWatch />} />
            </Route>
            <Route path="/market" element={<MarketPlacePage />}>
                <Route path='/market' element={<HomeWatch />} />
                <Route path='/market/notification' element={<LiveWatch />} />
                <Route path='/market/mailbox' element={<Mailbox />} />

            </Route>
            <Route path="/group" element={<GroupPage />} />
            <Route path="/gaming" element={<GamePage />} />
        </Routes>
    );
}

export default Content;
