"use client"; 

import { useParams } from 'next/navigation';
import React from 'react'

const DetailPage = () => {
    const { id } = useParams();
    
    return (
        <div>DetailPage for the id = {id}</div>
    )
}

export default DetailPage