import React, { useState } from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import Dogydog from "./img/yolo.png";

export default function LikePhotoApp() {
  // let like =true ;
  const [like, setLike] = useState(false);
  let [count, setCount] = useState(0);

  let handleClick = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
    }
  };

  return (
    <div className="container text-center shadow-sm">
      <Title text={"Like My Photo"} />
      <Title classes={"subtitle"} text={`${count} likes`} />
      <div
        className="card card-dark m-auto shadow-sm"
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <small>DogyDog</small>
        </div>
        <img
          src={Dogydog}
          alt="dog"
          style={{ height: "fit-content" }}
          onDoubleClick={() => handleClick()}
        />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-around" }}
        >
          <AiOutlineComment />
          {like ? (
            <AiFillHeart
              className="text-danger"
              onClick={() => handleClick()}
            />
          ) : (
            <AiOutlineHeart onClick={() => handleClick()} />
          )}{" "}
        </div>
      </div>
      LikePhotoApp
    </div>
  );
}
