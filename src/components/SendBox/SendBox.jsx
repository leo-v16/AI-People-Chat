import sendIcon from '../../../public/paper-plane.png'
import { useRef } from 'react'

function SendBox({sendMessageHandler}) {
    const inputRef = useRef()
    const buttonRef = useRef()

    const messageValiationSender = async (message) => {
        
        if (message.trim()) {
            sendMessageHandler(message)
            inputRef.current.value = ''
        }
        await setTimeout(() => buttonRef.current.disable = true, 1000)
    }

    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            buttonRef.current.disable = true; 
            messageValiationSender(inputRef.current.value)
        }
    };

    return (
        <>
        <div style={{width: '100%', height: '50px', backgroundColor: "white", display: 'flex', borderRadius: '20px'}}>
            <input ref={inputRef} onKeyDown={handleKeyDown} style={{width: '100%', height: '100%', fontSize: '1.5rem', padding: '10px', borderRadius: '20px 0px 0px 20px', outline: 'none'}} type="text"/>
            <button ref={buttonRef}  onClick={() => { buttonRef.current.disable = true; messageValiationSender(inputRef.current.value); }} style={{width: '50px', height: '100%', borderRadius: '0px 20px 20px 0px', padding: '5px', outline: 'none'}} type="button"><img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={sendIcon}/></button>
        </div>
        </>
    )
}

export default SendBox