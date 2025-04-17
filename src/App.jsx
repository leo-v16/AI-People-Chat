import { useState, useEffect } from 'react'
import './App.css'
import './components/SendBox/SendBox'
import ChatBox from './components/ChatBox/ChatBox'
import ChatList from './components/ChatList/ChatList'
import { getAllUsers, createUser, sendMessage, getChatList, getMessages, onMessage } from  '../firebase.config.mjs'

const $USER = 'Nistha'

function App() {
  const [count, setCount] = useState(0)
  const [chatList, setChatList] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [currentMessageList, setCurrentMessageList] = useState([]);

  const updateChatList = async () => {
    setChatList((await getChatList($USER)).map(chat => {return {chatName: chat} }))
  }

  const updateCurrentChat = async (chatName) => {
    setCurrentChat(chatName)
    setCurrentMessageList(await getMessages($USER, chatName))
  }

  const sendMessageHandler = async (message) => {
    sendMessage($USER, currentChat, message)
    onMessage($USER, currentChat, setCurrentMessageList)
  }
  
  useEffect(() => {
    updateChatList()
  }, []) 

  // const chatList = [
  //   {chatName: 'Nistha', lastMessage: 'Hi dear!', userIcon: false, sent: false},
  //   {chatName: 'Shravasti', lastMessage: 'Those flowers were dead', userIcon: false, sent: false},
  //   {chatName: 'Alex', lastMessage: 'No Alex you are not Batman', userIcon: false, sent: true},
  // ]

  const messageList = [
    {text: 'Hi', sent: true},
    {text: 'Hi!!', sent: true},
    {text: 'Are you dead!?', sent: true},
    {text: 'Where tf are you bitch?', sent: true},
    {text: 'Hi dear!', sent: false},
  ]

  return (
    <>
    <div style={{width: '100dvw', height:'100dvh', backgroundColor:'#bdebff', display:'flex'}}>
      <div style={{width: '30%', height: '100%'}}>
        <ChatList chatList={chatList} chatSelector={updateCurrentChat}/>
      </div>
      <div style={{width: '70%', height: '100%'}}>
        <ChatBox name={currentChat}  messageList={currentMessageList} sendMessageHandler={sendMessageHandler}/>
      </div>
    </div>
    </>
  )
}

export default App
