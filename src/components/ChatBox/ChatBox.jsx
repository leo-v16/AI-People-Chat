import SendBox from "../SendBox/SendBox"
import MessageBubble from "../MessageBubble/MessageBubble"

function ChatBox({name, messageList}) {

    const messageListView = messageList.map( (msg) => {
        return (
            <>
                <div>
                    <MessageBubble text={msg.text} send={msg.send} />
                </div>
            </>
        )
    })

    return (
        <>
        <div  style={{width: '100%', height: '100%', backgroundColor: '#bdebff', border: '1px solid black', display:'flex', flexDirection: 'column'}}>
            <div style={{width: '100%', height: '70px', backgroundColor: '#07aff7', display: 'flex', justifyContent: 'left', padding: '10px', fontSize: '1.4rem'}}>
                {name}
            </div>
            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '10px'}}>
                <div>
                    {messageListView}
                    {/* <MessageBubble text={'Hello'} send={false} /> */}
                </div>
                <div style={{marginTop: 'auto'}}>
                    <SendBox/>
                </div>
            </div>
        </div>

        </>
    )
}

export default ChatBox