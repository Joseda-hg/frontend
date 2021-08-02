import React from 'react'
import { useParams } from 'react-router'

export function Post() {
    let { id } = useParams()
    return (
        <div>
            Now showing post { id }
        </div>
    )
}

