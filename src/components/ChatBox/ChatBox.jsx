import SendBox from "../SendBox/SendBox"
import MessageBubble from "../MessageBubble/MessageBubble"
import dustBin from "../../../public/dustBin.png"

function ChatBox({name, messageList, sendMessageHandler, clearTargetChat}) {
    const messageListView = messageList.map( (msg, idx) => {
        return (
            <div key={idx} style={{padding: '5px'}}>
                    <MessageBubble text={msg.text} sent={msg.sent} />
            </div>
        )
    })

    return (
        <>
        <div style={{width: '100%', height: '100%', backgroundColor: '#bdebff', border: '1px solid black', display:'flex', flexDirection: 'column'}}>
            <div style={{width: '100%', height: '70px', backgroundColor: '#07aff7', display: 'flex', justifyContent: 'left', padding: '10px', fontSize: '1.8rem', fontWeight: '800'}}>
                {name}
                <div style={{height: '100%', width: '100px', marginLeft: 'auto'}}>
                    <img onClick={clearTargetChat} style={{width: '100%', height: '100%', objectFit: 'contain'}} src={dustBin} />
                </div>
            </div>
            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '10px', overflow: 'hidden', scrollbarWidth: 'none'}}>
                <div style={{overflow: 'scroll', scrollbarWidth: 'none', display: 'flex', flexDirection: 'column-reverse'}}>
                    {messageListView.reverse()}
                </div>
                <div style={{marginTop: 'auto'}}>
                    <SendBox sendMessageHandler={sendMessageHandler}/>
                </div>
            </div>
        </div>

        </>
    )
}

export default ChatBox