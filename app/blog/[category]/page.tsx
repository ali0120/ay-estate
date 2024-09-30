import { Metadata } from 'next'
import BlogPage from './../BlogPage'
import { blogPageMetadata } from '../../metaDataConfig'

export const metadata: Metadata = blogPageMetadata;

export default async function Home() {
    return (
        <>
        <BlogPage />
        </>
    )
}

