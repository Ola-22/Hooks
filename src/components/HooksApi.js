import axios from "axios";
import React, { useEffect, useState } from "react";

function Parent() {
  const [online, setOnline] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setOnline(false);
        }}
      >
        setOffLine
      </button>
      <br />
      <HooksApi online={online} />
    </>
  );
}
function HooksApi(online) {
  const [counter, setCounter] = useState(0);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/trending?api_key=CTSmPgXKyhkgMc1QeZu3I2cfeH91njSk"
      )
      .then((res) => {
        setGifs(res.data.data);
      })
      .catch(console.log);
  }, []);
  // useEffect(() => {
  //   const newGifs = gifs.slice(counter);
  //   setGifs(newGifs);
  // }, [counter]);
  return (
    <div>
      counter: <span>{counter}</span>
      {/* <Parent /> */}
      {/* <button
        onClick={() => {
          setOnline(false);
        }}
      >
        setOffLine
      </button> */}
      {/* <button
        onClick={() => {
          setCounter(counter + 5);
        }}
      >
        add one
      </button> */}
      {online &&
        gifs.map((img) => (
          <img src={img.images.original.url} alt={img.title} />
        ))}
    </div>
  );
}

export default Parent;
