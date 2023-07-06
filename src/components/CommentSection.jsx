import useApi from "../useApi"

const CommentSection = ({objectId}) => {

    const { data:comments } = useApi("/comments")
    if (!comments) {return <h3>Loading Comments</h3>}

    const filteredComments = comments.filter(comment => comment.object === objectId)

    return (
        <div className="comments-div">
            {filteredComments.map((comment) => (
                <div className="single-comment">
                    <p className="comment-sender">{comment.sender}</p>
                    <p className="comment-content">{comment.content}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentSection