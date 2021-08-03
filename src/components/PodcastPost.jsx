import React from 'react'
import { useParams } from 'react-router'

export function PodcastPost() {
    let { id } = useParams()
    return (
        <div>
            Now showing Podcast Nº { id }
        </div>
    )
}

