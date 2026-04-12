import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState("");
  const [like, setlike] = useState(false);
  const [obj, setObj] = useState({
    firstname: "Huzaif",
    lastname: " Tarazi",
    email: "huzaiftarazi14@gmail.com",
  });

  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://react.dev/images/docs/scientists/Sd1AgUOm.jpg",
    },
  });

  const usernameValue = (e) => {
    setUsername(e.target.value);
  };

  const likeSystem = (e) => {
    setlike(e.target.checked);
  };

  // NESTED OBJECT HANDLING IN REACT USESTATE

  const personName = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const personTitle = (e) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, title: e.target.value },
    });
    console.log(e.target.value);
  };

  const personCity = (e) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, city: e.target.value },
    });
  };

  const personEmail = (e) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, email: e.target.value },
    });
  };
  return (
    <>
      <h1>React.Dev (docs) UseState</h1>
      <hr />
      <br />
      <h2>Example - 1</h2>
      <br />
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        CLICK ME - {counter}
      </button>
      <br />
      <hr />
      <br />
      <h2>Expample - 2</h2>
      <input type="text" value={username} onChange={usernameValue} />
      <h3>TEXT: {username}</h3>
      <button
        onClick={() => {
          setUsername((prev) => (prev = ""));
        }}
      >
        Reset Feild
      </button>
      <br />
      <hr />
      <br />
      <h2>Expample - 3</h2>
      <input type="checkbox" checked={like} onChange={likeSystem} />
      <h3>{like ? "You Like This." : "You Did Not Liked it."}</h3>
      <br />
      <hr />
      <br />
      <h2>Expample - 4</h2>
      <input type="text" value={username} onChange={usernameValue} />
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Click me
      </button>
      <h3>
        {username} {counter}
      </h3>
      <hr />
      <br />
      <h2>Expample - 5</h2>
      <input
        type="text"
        value={obj.firstname}
        onChange={(e) => {
          setObj({ ...obj, firstname: e.target.value });
        }}
      />
      <input
        type="text"
        value={obj.lastname}
        onChange={(e) => {
          setObj({ ...obj, lastname: e.target.value });
        }}
      />
      <input
        type="email"
        value={obj.email}
        onChange={(e) => {
          setObj({ ...obj, email: e.target.value });
        }}
      />
      <br />
      <br />
      Firstname: {obj.firstname}
      <br />
      Lastname: {obj.lastname}
      <br />
      Email: {obj.email}
      <hr />
      <br />
      <h2>Expample - 6</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" value={person.name} onChange={personName} id="name" />
      <br />
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        value={person.artwork.title}
        onChange={personTitle}
        id="title"
      />
      <br />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        value={person.artwork.city}
        onChange={personCity}
        id="city"
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={person.artwork.email}
        onChange={personEmail}
        id="email"
      />
      <br />
      <label htmlFor="image">Image Link:</label>
      <input type="text" value={person.artwork.image} id="image" />
      <br />
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
        (Email: {person.artwork.email})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
};

export default App;
