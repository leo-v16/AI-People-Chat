import { useState } from 'react'
import './App.css'
import './components/SendBox/SendBox'
import SendBox from './components/SendBox/SendBox'
import MessageBubble from './components/MessageBubble/MessageBubble'
import ChatBox from './components/ChatBox/ChatBox'
import ChatPreview from './components/ChatPreview/ChatPreview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{width: '100dvw', height:'100dvh', backgroundColor:'#bdebff', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <ChatPreview/>
    </div>
    </>
  )
}

export default App
