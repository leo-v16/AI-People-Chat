import { useState } from 'react'
import './App.css'
import './components/SendBox/SendBox'
import ChatBox from './components/ChatBox/ChatBox'
import ChatList from './components/ChatList/ChatList'

function App() {
  const [count, setCount] = useState(0)

  const chatList = [
    {chatName: 'Nistha', lastMessage: 'Hi dear!', userIcon: false, sent: false},
    {chatName: 'Shravasti', lastMessage: 'Those flowers were dead', userIcon: false, sent: false},
    {chatName: 'Alex', lastMessage: 'No Alex you are not Batman', userIcon: false, sent: true},
  ]

  const messageList = [
    {text: 'Hi', send: true},
    {text: 'Hi!!', send: true},
    {text: 'Are you dead!?', send: true},
    {text: 'Where tf are you bitch?', send: true},
    {text: 'Hi dear!', send: false},
  ]

  return (
    <>
    <div style={{width: '100dvw', height:'100dvh', backgroundColor:'#bdebff', display:'flex'}}>
      <div style={{width: '30%', height: '100%'}}>
        <ChatList chatList={chatList}/>
      </div>
      <div style={{width: '70%', height: '100%'}}>
        <ChatBox name={'Nistha'}  messageList={messageList}/>
      </div>
    </div>
    </>
  )
}

export default App
