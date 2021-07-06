import React from "react";
import "./Card-list.styles.scss";
import {Loading} from '../loading/Loading.component';
import Card from '../card/Card.component';

export const CardList = (props) => {
  const posts = props.postList.posts.map((post) => {
    return (
      <article key={post.id.toString()} className="card">
          <Card post={post}/>
      </article>
    )
  });

  if (props.postList.isLoading) {
    return (
      <div className="conatiner">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.postList.errMess) {
    return (
      <div className="conatiner">
        <div className="row">
          <h4>{props.postList.errMess}</h4>
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
