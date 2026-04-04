import React, { useEffect, useState } from "react";
import axios from "axios";

const PracticeSet1 = () => {
  const [apiResData, setApiResData] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    const UserDataApi = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        const { data } = res;

        setApiResData(data);
      } catch (error) {
        console.error("Error Fetching Data From Api." + error);
      }
    };
    UserDataApi();
  }, []);

  return (
    <div className="my-5">
      <hr />
      <h2 className="my-5">Practice Set - 1</h2>
      {fetchData &&
        apiResData.map((element) => {
          return (
            <React.Fragment key={element.id}>
              <hr />
              <p>User-name: {element.username}</p>
              <p>Phone: {element.phone}</p>
              <p>Email: {element.email}</p>
            </React.Fragment>
          );
        })}

      <button
        onClick={() => {
          setFetchData(!fetchData);
        }}
       className="border py-1 px-3 rounded bg-red-500 active:bg-red-600 my-5"
      >
        Fetch Data..
      </button>
      <hr />
    </div>
  );
};

export default PracticeSet1;
