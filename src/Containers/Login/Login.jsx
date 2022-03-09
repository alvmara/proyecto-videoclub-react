// import axios from 'axios';
// import { useEffect, useState } from 'react';

import { Button } from '@mantine/core';


const Login = () => {

    // const [postId, setPostId] = useState(1);

    // const [post, setPost] = useState('');
    
    // useEffect(() => {
    //     axios
    //         .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //         .then(response => setPost(JSON.stringify(response.data)));
    // }, [postId]);

    // return <div>
    //     <div>{post}</div>

    //     <button onClick={() => { setPostId(3) }}>Click</button>

    // </div>;

    return <Button component="a">Next link button</Button>;
}

export default Login;