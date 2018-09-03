import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import propTypes from 'prop-types'
import wrappedWithLoadData from './WrapedWithLoadDate'

class CommentApp extends Component {
    static propsType = {
        data: propTypes.any,
        saveData: propTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            comments: props.data
        }
    }


    handleSubmitContent(comment) {
        if (!comment) return;
        if (!comment.username) return alert('username');
        if (!comment.content) return alert('content');

        const comments = this.state.comments;
        comments.push(comment);
        this.setState({comments});

        this.props.saveData(comments);
    }

    handleDeleteComment(index) {
        const comments = this.state.comments;
        comments.splice(index, 1)
        this.setState({
            comments
        });
        this.props.saveData(comments);
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitContent.bind(this)}/>
                <CommentList onDeleteComment={this.handleDeleteComment.bind(this)} comments={this.state.comments}/>
            </div>
        )
    }
}
CommentApp = wrappedWithLoadData(CommentApp,'comments');
export default CommentApp