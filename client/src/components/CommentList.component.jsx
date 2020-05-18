import React from 'react';

export default ({ comments }) => {
  const renderedComments = comments.map(comment => {
    let content;

    switch (comment.status) {
      case 'approved':
        content = comment.content;
        break;
      case 'pending':
        content = 'This is comment is awaiting moderation';
        break;
      case 'rejected':
        content = 'This is comment has been rejected';
        break;
      default:
        content = comment.content;
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
