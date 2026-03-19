import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";

const App = () => {
  return (
    <>
      <div className="Cards-Display">
        <Card
          userName="Huzaif Tarazi"
          age={23}
          img="https://plus.unsplash.com/premium_photo-1679728036460-742c48d6c3b2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          userName="Zukhruf Tarazi"
          age={34}
          img="https://plus.unsplash.com/premium_photo-1682125258376-d6bc46f183c7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          userName="Ruffaf Tarazi"
          age={55}
          img="https://plus.unsplash.com/premium_photo-1682125258376-d6bc46f183c7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          userName="Kiran Asif"
          age={53}
          img="https://plus.unsplash.com/premium_photo-1722824508363-1ad0240a58c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          userName="Osaf Tarazi"
          age={32}
          img="https://images.unsplash.com/photo-1771924310799-930349452c76?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          userName="Moeez Khan"
          age={32}
          img="https://images.unsplash.com/photo-1722080826167-4ea87368cbc5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          userName="Malik Furqan"
          age={23}
          img="https://images.unsplash.com/photo-1763198461799-1b9a719f7c3d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          userName="Haseeb Zafar"
          age={22}
          img="https://plus.unsplash.com/premium_photo-1764691305643-81bffa53e848?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  );
};

export default App;
