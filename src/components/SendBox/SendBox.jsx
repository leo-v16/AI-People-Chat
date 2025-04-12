import sendIcon from '../../../public/paper-plane.png'

function SendBox() {

    return (
        <>
        <div style={{width: '100%', height: '50px', backgroundColor: "white", display: 'flex', borderRadius: '20px'}}>
            <input style={{width: '100%', height: '100%', fontSize: '1.5rem', padding: '10px', borderRadius: '20px 0px 0px 20px', outline: 'none'}} type="text" />
            <button style={{width: '50px', height: '100%', borderRadius: '0px 20px 20px 0px', padding: '5px', outline: 'none'}} type="button"><img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={sendIcon}/></button>
        </div>
        </>
    )
}

export default SendBox