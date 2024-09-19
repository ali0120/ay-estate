import {
    Group,
    Button,
    Divider,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    Flex,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    return (
        <div className='w-full'>
            <Group justify="space-between" h="100%">
                <Link href="/" >
                    <h2 className='font-playball text-[32px] capitalize' >AyEstate</h2>
                </Link>
                <Group h="100%" gap={50} visibleFrom="md">
                    <Link href="/" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' >
                        Home
                    </Link>
                    <Link href="/listings" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' >
                        Listings
                    </Link>
                    <Link href="/" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' >
                        Company
                    </Link>
                    <Link href="/blog" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' >
                        Blog
                    </Link>
                    <Link href="/about" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' >
                        About Us
                    </Link>
                </Group>
                <Link href={'/contact-us'}>
                    <Button h={56} visibleFrom="md" className='font-soraSemiBold text-[16px] leading-[20px] py-[17px] px-[34px]' >Contact Us</Button>
                </Link>
                <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />
            </Group>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title={
                    <Link href="/" onClick={closeDrawer} >
                        <h2 className='font-playball text-[32px] capitalize' >AyEstate</h2>
                    </Link>
                }
                hiddenFrom="md"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
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
                        <Link href="/listings" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' onClick={closeDrawer} >
                            Listings
                        </Link>
                        <Link href="/" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' onClick={closeDrawer} >
                            Company
                        </Link>
                        <Link href="/blog" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' onClick={closeDrawer} >
                            Blog
                        </Link>
                        <Link href="/about" className='capitalize md:text-[18px] font-soraSemiBold text-RomanSilver ' onClick={closeDrawer} >
                            About Us
                        </Link>
                    </Flex>
                    <Link href={'/contact-us'} onClick={closeDrawer}>
                        <Button h={56} mt={'sm'} className='font-soraSemiBold w-full max-w-[95%] m-auto block text-[16px] leading-[20px] py-[17px] px-[34px]' >Contact Us</Button>
                    </Link>
                </ScrollArea>
            </Drawer>
        </div>
    );
}