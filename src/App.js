import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

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
      {online && <App online={online} />}
    </>
  );
}
function App({ online }) {
  const [counter, setCounter] = useState(0);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    let mount = true;
    axios
      .get(
        "https://api.giphy.com/v1/gifs/trending?api_key=CTSmPgXKyhkgMc1QeZu3I2cfeH91njSk"
      )
      .then((res) => {
        if (mount) {
          setGifs(res.data.data);
        }
      })
      .catch(console.log);
    return () => {
      console.log("unmount");
      mount = false;
    };
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
