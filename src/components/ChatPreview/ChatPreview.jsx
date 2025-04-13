import defaultUserIcon from '../../../public/user.png'

function ChatPreview({chatName, lastMessage, userIcon, sent}) {
    return (
        <>
        <div style={{width: '100%', height: '75px', display: 'flex', borderRadius: '20px', overflow: 'hidden', border: '2px solid black'}}>
            <div style={{width: '20%', height: '100%', backgroundColor: 'white', padding: '5px'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={(userIcon)? userIcon : defaultUserIcon} alt="" />
            </div>
            <div style={{width: '80%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                <div style={{width: '100%', height: '60px', backgroundColor: 'white', padding: '5px'}}>
                    <p style={{fontSize: '1.2rem', fontWeight: '600'}}>{chatName}</p>
                </div>
                <div style={{width: '100%', height: '100%', backgroundColor: 'white', padding: '5px'}}>
                    <p style={{fontSize: '0.9rem', fontWeight: '100', color: (sent)? 'black':'#3deb34', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{((sent)? 'You: ': '') + lastMessage}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ChatPreview