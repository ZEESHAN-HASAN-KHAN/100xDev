import { useEffect, useState } from "react";

// export function usePostTitle()
// {
//     const [post, setPost] = useState({})
    
//     async function getPosts()
//     {
//         const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const json = await data.json();

//         setPost(json);
//     }
//     useEffect(() => {
//         getPosts()
//     }, [])
    
//     return post.title;
// }
export function useFetch(url)
{
    const [finalData, setFinalData] = useState({});

    async function getDetails() {
        console.log('Its coming inside');
        const response = await fetch(url);
        const data = await response.json();
        setFinalData(data)
    }
    useEffect(() => {
        getDetails();
    }, [])
    return {
        finalData:finalData

    }
    ;
}