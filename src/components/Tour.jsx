import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { RiChat1Line, RiChat1Fill } from "react-icons/ri";
import { BsEnvelope, BsEnvelopeOpenFill } from "react-icons/bs";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [send, setSend] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <div className="button-flex">
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
          <div>
            <button onClick={() => setLike(!like)}>
              {like ? <FcLike size={30} /> : <AiOutlineHeart size={30} />}
            </button>
            <button onClick={() => setComment(!comment)}>
              {comment ? <RiChat1Fill size={30} /> : <RiChat1Line size={30} />}
            </button>
            <button onClick={() => setSend(!send)}>
              {send ? (
                <BsEnvelopeOpenFill size={30} />
              ) : (
                <BsEnvelope size={30} />
              )}
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
