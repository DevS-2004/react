import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function GitHub() {
    const data = useLoaderData()


    // const [follower, setFollowers] = useState("")
    // const [avatar, setAvatar] = useState(null)
    // const [name, setName] = useState("")
    // const count = 0

    // useEffect => it runs only on first reder (when component mounts)
    // React always re-render the components whenever the state changes but useEffect does not run again (since [] prevents it from running on state changes).
    // Why shouldn’t we call fetch inside the component body(without using useEffect)?

    // It would trigger an API call on every re-render, leading to performance issues or an infinite loop.
    
    // console.log("hello");
    
    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setFollowers(data.followers)
    //         setAvatar(data.avatar_url)
    //         // setName(data.name)
    //     })
    //     .catch((error) =>  console.error(error) )
        
    // },[])

    return (
        <>
        <div className='flex flex-col justify-center items-center text-3xl bg-gray-700 m-4 text-white text-center'>GitHub followers: {data.followers}
        
        <img className='rounded-xl mb-2' src={data.avatar_url} name={data.name} width={300}/>
        </div>
        </>

    )
}

export default GitHub

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/hiteshchoudhary")
    return res.json()

}
