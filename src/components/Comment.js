import React from 'react';
import './styles/CommentStyle.css';

function Comment(props) {
  return (
    <div className="comments">
      <img src={props.image} className="avatar"/>
        <p><strong>{props.answerName}</strong> {props.answerText}</p>
    </div>  
  );
}

export default Comment;