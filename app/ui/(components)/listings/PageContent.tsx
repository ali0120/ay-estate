'use client'
import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import ListingHeader from './ListingHeader'
import ListingContent from './ListingContent'

const PageContent  = () => {
    const [type, setType] = useState('grid')
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <ListingHeader type={type} open={open} setType={setType} />
            <ListingContent type={type} opened={opened} close={close}/>
        </>
    )
}

export default PageContent 
