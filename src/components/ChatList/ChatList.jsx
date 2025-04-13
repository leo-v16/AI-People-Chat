import ChatPreview from "../ChatPreview/ChatPreview"

function ChatList({chatList}) {
    const chatListView = chatList.map((chat) => {
        return( 
        <>
        <div style={{padding: '5px'}}>
            <ChatPreview chatName={chat.chatName} lastMessage={chat.lastMessage} userIcon={chat.userIcon} sent={chat.sent}/>
        </div>
        </>
        )
    });

    return (
        <>
        <div style={{width: '100%', height: '100%', border: '1px solid black', overflow: 'scroll', scrollbarWidth: 'none'}}>
            {chatListView}
        </div>
        </>
    )
}

export default ChatList