import React, { useEffect, useState } from 'react'
import './Chat.css';
import {useParams} from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Message from './Message';
import db from "./firebase";
import Chatinput from "./Chatinput";



function Chat () {
    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    const [noMessages, setNoMessages] = useState(false);

    useEffect (()=>{
        if (roomId){
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) =>
                setRoomDetails(snapshot.data())
            )
        }

        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot( (snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data())
            )
        )

    },[roomId]);

    useEffect(() => {
		if (!roomMessages.length) setNoMessages(true)
		else setNoMessages(false)
	}, [roomMessages])

	const chatMessages = noMessages ? (
		<Message noMessages={noMessages} />
	) : (
		roomMessages.map(({ message, timestamp, user, userImage }) => (
			<Message
				message={message}
				timestamp={timestamp}
				user={user}
				userImage={userImage}
				key={timestamp}
			/>
		))
	)


    return (
            <div className = "chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className = "Chat__channelName">
                        <span>#{roomDetails?.name}</span>
                        <StarBorderOutlinedIcon/>
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages"> {chatMessages} </div>
                <Chatinput channelName={roomDetails?.name} channelId={roomId} />
            </div>)
}

export default Chat