import Chat from "../components/Chat/Chat"
import Sidebar from "../components/Sidebar/Sidebar"

function HomeMessages() {
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default HomeMessages
