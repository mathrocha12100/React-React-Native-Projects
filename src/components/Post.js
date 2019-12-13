import React from 'react';
import './styles/PostStyle.css';
import Comment from './Comment';

function Post(props) {
  return (
    <>
    <div className="box">
      <div className="comment">
        <img src={props.avatar} className="avatar"/>
        <ul>
          <li>{props.name}</li>
          <li>{props.date}</li>
        </ul>
      </div>
      <p>{props.text}</p>
      {
        props.amount.map(amount => (
          <Comment key={amount.id} 
          answerName={amount.author.name} answerText={amount.content}
          image={amount.author.avatar}
          />
        ))
      }   
    </div>
    </>
  );
}

export default Post;