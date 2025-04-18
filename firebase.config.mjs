// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, update, push, onValue, off } from "firebase/database";
import { sendAdam } from "./bots.config.mjs"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKEK,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
1

export const getAllUsers = async () => {
    try {
        const usersRef = ref(database, 'users')
        const userslist =  await get(usersRef)
        if (userslist.exists()) {
            return Object.keys(userslist.val());
        }
    } catch (error) {
        console.log(error);
    }
    return []
}

export const getChatList = async (username) => {
    try {
        const targetUserRef = ref(database, `users/${username}/chatList`)
        const chatList = await get(targetUserRef)
        if (chatList.exists()) {
            const chatListArray = Object.entries(chatList.val())
            const chatListObj = chatListArray.map((chat) => ({
                chatName: chat[0], 
                lastMessage: (chat[1])? Object.entries(chat[1]).at(-1)[1].text : '',
                sent: (chat[1])? Object.entries(chat[1]).at(-1)[1].sent : null,
            }))
            return chatListObj;
        }
    } catch (error) {
        console.log(error);
    }
    return []
}


export const createUser = async (username) => {
    try {
        const usersRef = ref(database, 'users')
        const newUser = {name: username};
        return update(usersRef, {[username]: newUser});
    } catch (error) {
        console.log(error);
    }
    console.log('Could Not Create User');
}

export const sendMessage = async (from_user, to_user, message) => {
    try {
        const sentNewMessage = {text: message, time: new Date().getTime(), sent: true}
        const receivedNewMessage = {text: message, time: new Date().getTime(), sent: false}
        const senderChatListRef = ref(database, `users/${from_user}/chatList/${to_user}`)
        const receiverChatListRef = ref(database, `users/${to_user}/chatList/${from_user}`)
        const senderNewMessageRef = await push(senderChatListRef)
        const receiverNewMessageRef = await push(receiverChatListRef)
        set(senderNewMessageRef, sentNewMessage)
        set(receiverNewMessageRef, receivedNewMessage)
        return true
    } catch (error) {
        console.log(error);
    }
    console.log('Could Not Send Message');
}

export const getMessages = async (from_user, to_user) => {
    try {
        const messageListRef = ref(database, `users/${from_user}/chatList/${to_user}`)
        const messageObj = await (await get(messageListRef))
        if (messageObj.exists()) {
            const messageObjList = Object.entries(messageObj.val()).map(([key, value]) => ({id: key, ...value})).sort((m1, m2) => m1.time - m2.time)
            return messageObjList
        }
    } catch (error) {
        console.log(error);
    }
    return []
}


export const onMessage = (from_user, to_user, method) => {
    try {
        const messageListRef = ref(database, `users/${from_user}/chatList/${to_user}`)
        const routine = (snapshot) => {
            if (snapshot.exists()) {
                const messageObjList = Object.entries(snapshot.val()).map(([key, value]) => ({id: key, ...value})).sort((m1, m2) => m1.time - m2.time)
                const lastMessage = messageObjList.at(-1)
                if (to_user == 'Adam' && lastMessage.sent == true) {
                    const history = messageObjList.map((msg) => ({role: (msg.sent)? "user" : "model", parts: [{text: msg.text}]}))
                    history.pop();
                    (async () => {
                        if (lastMessage.sent == true) {
                            console.log('API-TRIGERRED');
                            const response = await sendAdam(history, lastMessage.text)
                            sendMessage(to_user, from_user, response)
                            setTimeout(()=>{off(messageListRef, 'value', routine)}, 1000); // due to async or somwthing, onValue lister was stacking, so one is removed while other is added to make it constant, I don't understand it well but if i do I will it later
                            console.log(lastMessage);
                        }
                    })()
                }
                method(messageObjList)
            } else {
                method([])
            }
        }
        onValue(messageListRef, routine)
    } catch (error) {
        console.log(error);
    }
} 