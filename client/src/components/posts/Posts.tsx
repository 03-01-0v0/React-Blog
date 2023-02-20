import React from 'react';
import './Posts.scss';
import Post from './post/Post';
import api from '../../api';
import {useState, useEffect} from 'react';
import {useQuery} from 'react-query';
import {ClipLoader} from 'react-spinners';

interface Post {
    _id: number;
    title: string;
    summary: string;
    createdAt: Date;
    author: string;
    img: string;
}
export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const fetchData = async () => {
        const res = await api.getAllPost();
        return res.data;
    };
    const PostsQuery = useQuery('Posts', fetchData);
    useEffect(() => {
        if (PostsQuery.data) setPosts(PostsQuery.data);
        else setPosts([]);
    }, [PostsQuery.data]);
    if (PostsQuery.isLoading) return <ClipLoader color={'#427782'} />;
    return (
        <div className='posts'>
            {posts.map((post) => (
                <Post
                    _id={post._id}
                    title={post.title}
                    summary={post.summary}
                    createdAt={post.createdAt}
                    author={post.author}
                    img='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                />
            ))}
        </div>
    );
}
