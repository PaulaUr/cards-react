import React from "react";
import "./Card-list.styles.scss";
import {Loading} from '../loading/Loading.component';
import CardPost from '../card-post/Card-post.component';
import CardUser from '../card-user/Card-user.component';

export const CardList = (props) => {
  const posts = props?.list.map((item) => {
    if (item.owner) {
      return (
        <article key={item.id.toString()} className="card">
            <CardPost post={item}/>
        </article>
      )
    } else if (item.email) {
      return (
        <article key={item.id.toString()} className="card">
            <CardUser user={item}/>
        </article>
      )
    }
  });

  if (props.isLoading) {
    return (
      <div className="conatiner">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="conatiner">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else
        return (
          <div className="card-list">
            {posts}
          </div>
        );
};
