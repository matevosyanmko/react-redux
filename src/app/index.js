import React, { Fragment, useEffect } from 'react';
import { List, Spin } from 'antd';
import { connect } from 'react-redux';
import { Comments, Articles, OpenedComments } from '../store/selectors';
import { LikeComment, OpenCommentReplies, CloseCommentReplies, GetArticles, GetComments } from '../store/actions';
import CommentSection from './comments';
import ArticleSection from './articles';

class App extends React.Component {
  componentDidMount = () => {
    const { GetArticles, GetComments } = this.props;
    GetArticles();
    GetComments();
  };

  render() {
    const { Comments, Articles, likeComment, OpenedComments, openCommentReplies, closeCommentReplies } = this.props;

    return (
      <Spin spinning={!(Comments.loaded || Articles.loaded)}>
        <ArticleSection data={Articles.data}>
          <List header={`${Comments.data.length} comments`}>
            <CommentSection
              data={Comments.data}
              openedReplies={OpenedComments}
              open={openCommentReplies}
              close={closeCommentReplies}
              likeComment={likeComment}
            />
          </List>
        </ArticleSection>
      </Spin>
    );
  }
}

const mapStateToProps = state => ({
  Articles: Articles(state),
  Comments: Comments(state),
  OpenedComments: OpenedComments(state)
});

const mapDispatchToProps = dispatch => ({
  likeComment: id => dispatch(LikeComment(id)),
  closeCommentReplies: id => dispatch(CloseCommentReplies(id)),
  openCommentReplies: id => dispatch(OpenCommentReplies(id)),
  GetArticles: () => dispatch(GetArticles),
  GetComments: () => dispatch(GetComments)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
