import React, {useState} from 'react'
import useStyles from './styles.js';
import {Card, CardActions , CardContent, CardMedia, Button, Typography, ButtonBase} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {deletePost, likePost} from '../../../actions/posts';
import { useDispatch } from 'react-redux';
import {useHistory} from "react-router-dom";


export default function PostItem({post, setCurrentId}) {
    const classes=useStyles();
    const dispatch=useDispatch();
    const [user, ]=useState( JSON.parse(localStorage.getItem('profile')));
    const history=useHistory();
    const [likes, setLikes]=useState(post?.likes);
    const userId=user?.result?._id || user?.result?.googleId;
    const hasLikePost=likes.find((like)=>like===userId);
    const handleLike=()=>{
        dispatch(likePost(post._id));
        if(hasLikePost){
            setLikes(post?.likes.filter((id)=>id!==userId));
        }
        else{
            setLikes([...post?.likes, userId]);
        }
    }

    const Like=()=>{
        // if(likes.length>0){
        //     return (likes.find((like) => like === userId))
        //     ? (
        //         <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        //       ) : (
        //         <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        //       );
        // }
        // return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
        if(likes.length>0){
            console.log("has like found:",likes.find((like) => like === userId));
            return likes.find((like) => like === userId)
            ? (
                 <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            )
            :(
            <>
                <ThumbUpAltIcon fontSize='small'/>&nbsp; {post.likes?.length} {post.likes?.length>1 ? "likes" :"like"}
            </>
            )
        }
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    }
    const openPost=()=>{
        history.push(`/posts/${post._id}`);
    }
    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase className={classes.cardAction} onClick={openPost}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6" >{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
            { (user?.result?._id===post.creator || user?.result?.googleId ===post.creator) &&
                <Button style={{color: 'white'}} size='small' onClick={()=>setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            }
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag}, `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" >{post.message}</Typography>
            </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size='small' color="primary" onClick={handleLike}>
                    <Like />
                </Button>
                { (user?.result?._id===post.creator || user?.result?.googleId ===post.creator) &&
                    <Button size='small' color="primary" onClick={()=>dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize='small'/>
                        Delete
                    </Button>
                }
            </CardActions>
        </Card>
    )
}
