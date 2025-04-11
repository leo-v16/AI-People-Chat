import SendBox from "../SendBox/SendBox"
import MessageBubble from "../MessageBubble/MessageBubble"

function ChatBox({name}) {

    return (
        <>
        <div  style={{width: '100%', height: '100%', backgroundColor: 'rgba(203, 242, 242, 0.3)', backdropFilter: 'blur(10px)', border: '1px solid black', display:'flex', flexDirection: 'column'}}>
            <div style={{width: '100%', height: '50px', backgroundColor: '#07aff7', display: 'flex', justifyContent: 'left', padding: '10px', fontSize: '1.4rem', border: '1px solid white'}}>
                {name}
            </div>
            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '10px'}}>
                <div>
                    <MessageBubble text='Hi How Are You?' send={false}/>
                    <MessageBubble text='Hi I am doing Great! How are You!?' send={true}/>
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