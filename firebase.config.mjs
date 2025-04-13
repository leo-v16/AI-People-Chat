// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, update, push } from "firebase/database";
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
            return Object.keys(chatList.val());
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