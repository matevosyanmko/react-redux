import React, { Fragment } from 'react';
import { Comment, Avatar, Icon, Tooltip, Divider } from 'antd';
const avatar = <Avatar icon='user' />;

// action for comments
const actions = (id, likes, currentReplies, openedReplies, open, close, likeComment) => [
  <span key='comment-basic-like'>
    <Tooltip title='Like'>
      <Icon type='heart' theme='filled' onClick={() => likeComment(id)} />
    </Tooltip>
    <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
  </span>,
  <span
    key='comment-basic-reply-to'
    onClick={openedReplies && openedReplies.length && openedReplies.includes(id) ? () => close(id) : () => open(id)}
    children={currentReplies && currentReplies.length ? (openedReplies.includes(id) ? 'Close replies' : 'Open replies') : ''}
  />
];

// comment section template
const CommentSection = ({ data, openedReplies, open, close, likeComment }) =>
  data.map((com, key) => (
    <Fragment key={key}>
      <Comment
        key={key}
        actions={actions(com.id, com.likes, com.replies, openedReplies, open, close, likeComment)}
        author={com.name}
        avatar={avatar}
        content={<p dangerouslySetInnerHTML={{ __html: com.commentText }} />}
        children={
          com.replies &&
          com.replies.length &&
          openedReplies.includes(com.id) && (
            <CommentSection data={com.replies} openedReplies={openedReplies} open={open} close={close} likeComment={likeComment} />
          )
        }
      />
      <Divider />
    </Fragment>
  ));
export default CommentSection;
