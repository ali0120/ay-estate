import { Divider, Flex } from '@mantine/core';
import Link from 'next/link';
import '@mantine/core/styles/Divider.css';
import '@mantine/core/styles/Text.css';

const data = [
    {
        title: 'Pages',
        links: [
            { label: 'Listings', link: '/luxury-villa-listings', title: 'View our property listings' },
            { label: 'About us', link: '/about-ayestate-creative-team', title: 'Learn more about AyEstate' },
            { label: 'Blog', link: '/blog', title: 'Read our latest blog posts' }
        ],
    },
    {
        title: 'Support',
        links: [
            { label: 'Properties', link: '#', title: 'Browse available properties' },
            { label: 'FAQ', link: '/faqs', title: 'Frequently Asked Questions' },
            { label: 'Contact Us', link: '/contact-ayestate-excellent-customer-service', title: 'Get in touch with us' }
        ],
    },
    {
        title: 'Webflow Stuff',
        links: [
            { label: 'Style Guide', link: '#', title: 'View the style guide' },
            { label: 'Changelog', link: '#', title: 'Read the changelog' },
            { label: 'Licensing', link: '#', title: 'View licensing information' },
            { label: 'Instructions', link: '#', title: 'Find instructions' },
        ],
    },
    {
        title: 'Platform',
        links: [
            { label: 'Official Website', link: '#', title: 'Visit the official website' },
            { label: 'Play Store', link: '#', title: 'Download from Play Store' },
            { label: 'App Store', link: '#', title: 'Download from App Store' }
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
                title={link.title}
                className='font-jakartaMedium text-[14px] md:text-[18px] leading-[22.4px] md:leading-[32.4px]'
            >
                {link.label}
            </Link>
        ));

        return (
            <div key={group.title}>
                <p className='text-White font-jakartaSemiBold text-[16px] md:text-[18px]' >{group.title}</p>
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
                    <h3 className='font-playball text-[32px] capitalize text-White' >AyEstate</h3>
                    <ul className='mt-[16px] md:mt-[32px] flex flex-col gap-[24px] text-[14px] md:text-[18px] font-jakartaMedium ' >
                        <li>hello.ayestate@example.com <br />(+1) 2345 6789</li>
                        <li>4140 Parker Rd. Allentown, <br />New Mexico 31134</li>
                    </ul>
                </div>
                <Divider hiddenFrom='md' color='#2E334B' className='my-[30px]' />
                <Flex visibleFrom='md' className='gap-[80px] justify-between' >{groups}</Flex>
                <div className="block md:hidden">
                    <div className="grid grid-cols-2 gap-[30px] md:gap-[60px] mb-[30px]">
                        {groups}
                    </div>
                </div>
            </Flex>
            <p className='text-center hidden md:block !text-white text-[18px] font-soraRegular'>
                Copyright © AyEstate | Designed by AY Studio
            </p>
        </div>
    );
}