import React from 'react'
import { useParams } from 'react-router'

export function BlogPost() {
    let { id } = useParams()
    return (
        <div>
            Now showing post { id }
        </div>
    )
}

