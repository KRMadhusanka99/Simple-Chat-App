import { useState } from 'react';
import './App.css';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if(username !== "" && room !== ""){
      socket.emit("join_room", room);
    }
  };

  return (
    <div className="App">
      <h3>Join a Chat</h3>
      <input type='text' placeholder='Ramesh...' 
        onChange={(event)=>{
          setUsername(event.target.value)
        }}
      />
      <input type='text' placeholder='Room Id...'
        onChange={(event)=>{
          setRoom(event.target.value)
        }}
      />
      <button onClick={joinRoom}>Join A Room</button>
    </div>
  );
}

export default App;
