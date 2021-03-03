import {useState} from 'react';
import {sendMessage, isTyping} from 'react-chat-engine';
import {SendOutlined, PictureOutlined, EnterOutlined} from '@ant-design/icons';

const MessageForm = (props)=>{
    const [value, setValue] = useState("");
    const {chatID, creds} = props;

    const handleSubmit = (event) =>{
        event.preventDefault();

        const text = value.trim();

        if(text.length >0) sendMessage (creds,chatID, {text});

        //Clean Message from the inputbar
        setValue("");
    }

    const handleChange = (event) =>{
        setValue(event.target.value);
        isTyping (props,chatID);

    }

    //images message
    const handleUpload = (event) =>{
        sendMessage(creds,chatID,{files: EnterOutlined.target.value, text:""})
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
                className = "message-input"
                placeholder="send a message"
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className ="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>
            </label>
                <input
                    type = "file"
                    multiple = { false}
                    id = "upload-button"
                    style={{display: 'none'}}
                    onChange={handleUpload}
                />
            <button type = "submit" className = "send-button">
                    <SendOutlined className= "send-icon" />
            </button>
        </form>
    );
}

export default MessageForm;