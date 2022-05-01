import axios from "axios";
import { useState } from "react";

const newComment = ({ postId }) => {
    const [comment, setComment] = useState();

    const onSubmit = () => {
        console.log({
            comment
        });
        const data = {
            "NewEntry": comment
        }

        axios
            .post(`http://localhost:3002/post/${postId}/comment`, data)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    }

    return (<div>
        <div>
            <input type="text" placeholder="comment" value={comment} onChange={e => setComment(e.target.value)} />
        </div>
        <button style={{ marginTop: '4px' }} onClick={onSubmit}>
            Submit
        </button>
    </div>)
}

export default newComment;