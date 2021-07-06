import React from "react";
import "./Card-user.styles.scss";
import Icon from "@mdi/react";
import { mdiHeart, mdiEmail  } from "@mdi/js";
import default_image from '../../assets/images/default_image.jpg';

function CardUser({ user }) {
  const image = user?.picture === undefined ? default_image : user.picture;

  return (
    <React.Fragment>
      <div className="card-user__img">
        <img alt="robots" src={image} />
      </div>
      <div className="card-user__body">
        <h2 className="card-user__title">{user.firstName} {user.lastName} </h2>
      </div>
      <div className="card-user__icon">
        <Icon path={mdiEmail } title="mail" size={1} color="#95dada" />
          <p className="card-user__icon__description">{user.email}</p>
      </div>
      <p className="card-user__description">{user.id}</p>
    </React.Fragment>
  );
}

export default CardUser;
