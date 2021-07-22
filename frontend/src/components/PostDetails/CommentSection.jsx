import React, {useState, useRef} from 'react'
import {Typography, TextField, Button} from '@material-ui/core';
import useStyles from './styles.js';
import {useDispatch,useSelector} from 'react-redux';
import {createComment} from '../../actions/posts';

export default function CommentSection({post}) {
    console.log(post);
    const [user, setUser]=useState( JSON.parse(localStorage.getItem('profile')));
    const classes=useStyles();
    const [comments, setComments]=useState(post?.comments);
    const [comment, setComment]=useState('');
    const dispatch=useDispatch();
    const commentsRef=useRef();
    const handleSubmitComment=async()=>{
        const finalComment=`${user?.result?.name}:  ${comment}`;
        const newComments=await dispatch(createComment(post._id, finalComment));
        setComments(newComments);
        setComment('');
        commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant="h6">Comments</Typography>
                    {comments.map((comment, index)=>(
                        <Typography key={index} gutterBottom variant="subtitle1">
                          <strong>{comment.split(': ')[0]}</strong>
                        {comment.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                <div style={{width:'70%'}}>
                    <Typography gutterBottom variant="h6">Write a Comment</Typography>
                    <TextField 
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        label="comment"
                        value={comment}
                        onChange={(e)=>setComment(e.target.value)}
                    />
                    <Button 
                        style={{marginTop:'10px'}} 
                        fullWidth color="primary"
                        variant="contained"
                        disabled={!comment}
                        onClick={handleSubmitComment}
                         >
                             Comment
                    </Button>     
                </div>)}
            </div>           
        </div>
    )
}
