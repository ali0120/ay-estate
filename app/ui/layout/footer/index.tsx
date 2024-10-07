import { Box, Divider, Flex, Text } from '@mantine/core';
import Link from 'next/link';
const data = [
    {
        title: 'Pages',
        links: [
            { label: 'Listings', link: '#' },
            { label: 'About us', link: '/about-us' },
            { label: 'Blog', link: '/blog' }
        ],
    },
    {
        title: 'Support',
        links: [
            { label: 'Properties', link: '#' },
            { label: 'FAQ', link: '/faqs' },
            { label: 'Contact Us', link: '/contact-us' }
        ],
    },
    {
        title: 'Webflow Stuff',
        links: [
            { label: 'Style Guide', link: '#' },
            { label: 'Changelog', link: '#' },
            { label: 'Licensing', link: '#' },
            { label: 'Instructions', link: '#' },
        ],
    },
    {
        title: 'Platform',
        links: [
            { label: 'Official Website', link: '#' },
            { label: 'Play Store', link: '#' },
            { label: 'App Store', link: '#' }
        ],
    },
];

export function Footer() {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Link
                rel="alternate"
                hrefLang="en"
                key={index}
                href={link.link}
                className='font-jakartaMedium text-[14px] md:text-[18px] leading-[22.4px] md:leading-[32.4px]'
            >
                {link.label}
            </Link>
        ));

        return (
            <div key={group.title}>
                <Text className='text-White font-jakartaSemiBold text-[16px] md:text-[18px]' >{group.title}</Text>
                <Flex className='text-[18px] mt-[16px] md:mt-[32px] flex-col gap-[12px]' >
                    {links}
                </Flex>
            </div>
        );
    });

    return (
        <div className='text-RomanSilver pt-[50px] pb-[50px] lg:pt-[100px] lg:pb-[32px]' >
            <Flex className='gap-0 md:gap-[50px] flex-col lg:flex-row justify-between pb-[31px]'>
                <div>
                    <h2 className='font-playball text-[32px] capitalize text-White' >AyEstate</h2>
                    <ul className='mt-[16px] md:mt-[32px] flex flex-col gap-[24px] text-[14px] md:text-[18px] font-jakartaMedium ' >
                        <li>hello.ayestate@example.com <br />(+1) 2345 6789</li>
                        <li>4140 Parker Rd. Allentown, <br />New Mexico 31134</li>
                    </ul>
                </div>
                <Divider hiddenFrom='md' color='#2E334B' className='my-[30px]' />
                <Flex visibleFrom='md' className='gap-[80px]' >{groups}</Flex>
                <Box hiddenFrom='md'>
                    <div className="grid grid-cols-2 gap-[30px] md:gap-[60px] mb-[30px]">
                        {groups}
                    </div>
                </Box>
            </Flex>
            <Text visibleFrom='md' c="white" className='text-center text-[18px] font-soraRegular'>
                Copyright © AyEstate | Designed by AY Studio
            </Text>
        </div>
    );
}