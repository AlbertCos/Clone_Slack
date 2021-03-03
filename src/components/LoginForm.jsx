import { useState } from "react"
import axios from 'axios'

const LoginForm = () =>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefeault();

        const authObject={'Project-ID':"f73fca83-dc4c-4f21-8a89-b9c4cf534726", 'User-Name':  username, 'User-Secret':password}

        try {

            await axios.get('https://api.chatengine.io/chats',{headers:authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch(error){
            setError("Incorrect credentials!")
        }


        //username / password => chatengine --> give messages
        //works out --> logged in
        // error --> try with hew username...
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername (e.target.value)} className="input" placeholder="Username" required/>                   
                    <input type="text" value={password} onChange={(e) => setPassword (e.target.value)} className="input" placeholder="Password" required/>     
                    <div align="center">
                        <button type = "submit" className="button">
                            <span>Start Chatting </span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>              
                </form>
            </div>
        </div>
    )
} 

export default LoginForm;