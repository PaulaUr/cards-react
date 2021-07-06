import React from "react";
import "./Card.styles.scss";
import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";
import default_image from '../../assets/images/default_image.jpg';

function Card({ post }) {
  const image = post?.image === undefined ? default_image : post.image;
  const date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(Date.parse(post.publishDate)));
  return (
    <React.Fragment>
      <div className="card__img">
        <img alt="robots" src={image} />
      </div>
      <div className="card__body">
        <div className="card__body__img">
          <img alt="robots" src={post.owner.picture} />
        </div>
        <h2 className="card__title">{post.owner.firstName} </h2>
      </div>
      <p className="card__icon-description">{post.text}</p>
      <div className="card__icon">
        <Icon path={mdiHeart} title="heart" size={1} color="#95dada" />
          <p className="card__icon-count">{post.likes}</p>
          <p className="card__icon-date">{date}</p>
      </div>
    </React.Fragment>
  );
}

export default Card;
