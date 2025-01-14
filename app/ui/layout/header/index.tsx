import {
    Group,
    Button,
    Divider,
    Burger,
    Drawer,
    Flex,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';

export function Header() {
    const showDrawer = useMediaQuery('(max-width: 992px)');
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    return (
        <div className='w-full'>
            <Group className='h-full justify-between' >
                <Link href="/" >
                    <span className='font-playball text-[32px] capitalize' >AyEstate</span>
                </Link>
                <Group visibleFrom="md" className='h-full gap-[50px]'>
                    <Link href="/" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' >
                        Home
                    </Link>
                    <Link href="/luxury-villa-listings" title="View our property listings" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' >
                        Listings
                    </Link>
                    <Link href="/" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' >
                        Company
                    </Link>
                    <Link href="/blog" title="Read our latest blog posts" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' >
                        Blog
                    </Link>
                    <Link href="/about-ayestate-creative-team" title="Learn more about AyEstate" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' >
                        About Us
                    </Link>
                </Group>
                <Button component={Link} href={'/contact-ayestate-excellent-customer-service'} title="Get in touch with us" visibleFrom="md" className='h-[56px] font-soraSemiBold text-[16px] leading-[20px] py-[17px] px-[34px]' >Contact Us</Button>
                {showDrawer ? <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" /> : null}
            </Group>
            {showDrawer && (
                <Drawer
                    opened={drawerOpened}
                    onClose={closeDrawer}
                    size="100%"
                    padding="md"
                    title={
                        <Link href="/" onClick={closeDrawer} >
                            <span className='font-playball text-[32px] capitalize' >AyEstate</span>
                        </Link>
                    }
                    hiddenFrom="md"
                    zIndex={1000000}
                >
                    <div className="h-[calc(100vh-80px)] overflow-y-auto">
                        <Divider my="sm" />
                        <Flex
                            px={'20px'}
                            py={'md'}
                            gap="md"
                            justify="flex-start"
                            align="flex-start"
                            direction="column"
                        >
                            <Link href="/" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' onClick={closeDrawer} >
                                Home
                            </Link>
                            <Link href="/luxury-villa-listings" title="View our property listings" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' onClick={closeDrawer} >
                                Listings
                            </Link>
                            <Link href="/" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' onClick={closeDrawer} >
                                Company
                            </Link>
                            <Link href="/blog" title="Read our latest blog posts" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' onClick={closeDrawer} >
                                Blog
                            </Link>
                            <Link href="/about-ayestate-creative-team" title="Learn more about AyEstate" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' onClick={closeDrawer} >
                                About Us
                            </Link>
                        </Flex>
                        <Button component={Link} href={'/contact-ayestate-excellent-customer-service'} title="Get in touch with us" onClick={closeDrawer} className=' h-[56px] mt-[30px] font-soraSemiBold w-full max-w-[95%] m-auto block text-[16px] leading-[20px] py-[17px] px-[34px]' >Contact Us</Button>
                    </div>
                </Drawer>
            )}
        </div>
    );
}