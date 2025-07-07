import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function User() {

    const {id} = useParams();
    const [searchParams] = useSearchParams();
    const nameQuery = searchParams.get("name");
    const ageQuery = searchParams.get("age")
    return (
        <>
        <div className='flex flex-col text-white bg-gray-700 text-3xl p-4 items-center'>
        User id: {id}
        {/* User age: {ageQuery} 
        Username: {nameQuery} */}
        </div>
        
        </>
    
    )
}

export default User
