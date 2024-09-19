'use client'
import React, { useState } from 'react'
import ListingHeader from '../ui/(components)/listings/ListingHeader'
import ListingContent from '../ui/(components)/listings/ListingContent'
import { useDisclosure } from '@mantine/hooks'

const Page = () => {
    const [type, setType] = useState('grid')
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <ListingHeader type={type} open={open} setType={setType} />
            <ListingContent type={type} opened={opened} close={close}/>
        </>
    )
}

export default Page
