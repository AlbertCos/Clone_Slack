import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () =>{
  return (
    <ChatEngine
      height= "100vh"
      projectId="f73fca83-dc4c-4f21-8a89-b9c4cf534726"
      username=""
      //Password
      userSecret=""
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps }}
    />
  );
}

export default App

//Project ID:f73fca83-dc4c-4f21-8a89-b9c4cf534726
//Private Key: 52aacd55-7e5b-4db0-8df3-fea49f762f00