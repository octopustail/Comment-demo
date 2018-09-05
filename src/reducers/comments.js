//action.type
const INIT_COMMENTS = 'INIT_COMMENTS';
const DELETE_COMMENT = 'DELETE_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';


//reducer

export default function (state, action) {
    //初始化state 这里只需要comments这一个数据，根据需求，将它初始化为数组
    if (!state) {
        state = {
            comments: []
        }
    }

    switch (action.type) {
        case INIT_COMMENTS:
            return {
                comments: action.comments
            };
        case DELETE_COMMENT:
            return {
                comments: [
                    ...state.comments.slice(0, action.commentIndex), ...state.comments.slice(action.commentIndex + 1)
                ]
            };
        case ADD_COMMENT:
            return {
                comments: [...state.comments, action.comment]
            };
        default:
            return state
    }


}

//action creator
export const initComments = (comments) => {
    return {type: 'INIT_COMMENTS', comments: comments}
};

export const addComment = (comment) => {
    return {type: 'ADD_COMMENT', comment: comment}
};

export const deleteComment = (commentIndex) => {
    return {type: 'DELETE_COMMENT', commentIndex: commentIndex}
}
