function MessageBubble({text, sent}) {
    return (
    <>
    <div style={{width: '100%', height: 'auto', display: 'flex', justifyContent: (sent)? 'right' : 'left'}}>
        <div style={{maxWidth: '100%', minWidth: 'fit-content', height: 'auto', backgroundColor: (sent)? '#72fcbe': '#5fc6fa', borderRadius: '20px', display: 'flex', border: '1px solid white'}}>
            <p style={{width: '100%', height: 'auto', padding: '10px'}}>{text}</p>
        </div>
    </div>
    </>
    )
}

export default MessageBubble