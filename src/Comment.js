import React, {Component} from 'react'
import propTypes from 'prop-types'

class Comment extends Component {
    static porpTypes = {
        comment: propTypes.object.isRequired,
        index:propTypes.number
    };

    constructor() {
        super();
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this._updateTimeString()
    }

    _updateTimeString() {
        const comment = this.props.comment;
        const date = Date.now();

        const duration = (date - comment.createDate) / 1000;
        console.log('duration',duration);
        this.setState({
            timeString: duration > 60 ?
                `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    handleClickDelete() {
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)
        }
    }


    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}</span>:
                </div>
                <p>{this.props.comment.content}</p>
                <span className="comment-createdtime">
                    {this.state.timeString}
                </span>
                <span className="comment-delete"
                onClick={this.handleClickDelete.bind(this)}
                >删除</span>
            </div>

        )
    }
}

export default Comment
