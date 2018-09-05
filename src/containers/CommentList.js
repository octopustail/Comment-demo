import React, {Component} from 'react';
import CommentList from '../components/CommentList';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteComment, initComments} from "../reducers/comments";


class CommentListContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func,
        initComments: PropTypes.func
    };

    componentWillMount() {
        this._loadComment()
    }

    _loadComment() {
        let comments = localStorage.getItem('comments');
        console.log('comments-container',typeof(comments))


        comments = comments ? JSON.parse(comments) : [];

        this.props.initComments(comments)
    }

    handleDeleteComment(index) {
        const comments = this.props.comments;
        const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
        localStorage.setItem('comments', JSON.stringify(newComments));
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render() {
        return (
            <CommentList onDeleteComment={this.handleDeleteComment.bind(this)} comments={this.props.comments}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initComments: (comments) => {
            dispatch(initComments(comments))
        },
        onDeleteComment: (commentIndex) => {
            dispatch(deleteComment(commentIndex))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CommentListContainer)

