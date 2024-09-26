import { Metadata } from 'next'
import { villaListingsMetadata } from '../metaDataConfig'
import PageContent from '../ui/(components)/listings/PageContent';

export const metadata: Metadata = villaListingsMetadata;

const Page = () => {

    return (
        <>
            <PageContent />
        </>
    )
}

export default Page
