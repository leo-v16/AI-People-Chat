import sendIcon from '../../../public/paper-plane.png'

function SendBox() {

    return (
        <>
        <div style={{width: '100%', height: '50px', backgroundColor: "white", display: 'flex'}}>
            <input style={{width: '100%', height: '100%', fontSize: '1.5rem', padding: '5px'}} type="text" />
            <button style={{width: '50px', height: '100%'}} type="button"><img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={sendIcon}/></button>
        </div>
        </>
    )
}

export default SendBox