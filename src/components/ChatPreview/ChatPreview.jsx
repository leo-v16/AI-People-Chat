import defaultUserIcon from '../../../public/user.png'

function ChatPreview({chatName, lastMessage, userIcon}) {
    return (
        <>
        <div style={{width: '100%', height: '100px', display: 'flex', borderRadius: '20px', overflow: 'hidden'}}>
            <div style={{width: '30%', height: '100%', backgroundColor: 'white', padding: '5px'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={defaultUserIcon} alt="" />
            </div>
            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '100%', height: '60px', backgroundColor: 'white', padding: '15px'}}>
                    <p style={{fontSize: '1.2rem', fontWeight: '600'}}>{chatName}</p>
                </div>
                <div style={{width: '100%', height: '100%', backgroundColor: 'white', padding: '10px'}}>
                    <p style={{fontSize: '0.8rem', fontWeight: '50'}}>{'You: Hello World'}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ChatPreview