import { useEffect, useState } from 'react';
import "./App.css";
import socket from './server';

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    askUserName();
  },[]);

  const askUserName = () => {
    const userName = prompt("당신의 이름을 입력하세요.");
    console.log("유저이름 :", userName);

    socket.emit("login", userName, (res) => {
      if (res?.ok) {
        setUser(res.data);
        console.log(user);
      }
      console.log("Res",res);
    });
  };

  return (
    <div>
      <div className="App"></div>
    </div>
  );
}

export default App;
