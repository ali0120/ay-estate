import { useState } from 'react'
import { Flex, Pagination, UnstyledButton } from '@mantine/core'
import Link from 'next/link';
import { properties } from '../../data/properties'
import LikeIcon from '@/public/svg/heart.svg'
import HeartIcon from '@/public/svg/l-heart.svg'
import HomeIcon from '@/public/svg/home.svg'
import BathIcon from '@/public/svg/bath.svg'
import BedIcon from '@/public/svg/bed.svg'
import AreaIcon from '@/public/svg/area.svg'
import MhomeIcon from '@/public/svg/m-home.svg'
import MbathIcon from '@/public/svg/m-bath.svg'
import MbedIcon from '@/public/svg/m-bed.svg'
import MareaIcon from '@/public/svg/m-area.svg'
import '@mantine/core/styles/Pagination.css';
import '@mantine/core/styles/BackgroundImage.css';
import Image from 'next/image';

interface ListingContentProps {
    type: string;
}

export const ListingData: React.FC<ListingContentProps> = ({ type }) => {
    const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
    const [activePage, setPage] = useState(1);

    const handleLikeClick = (id: number) => {
        setLiked((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <>
            <section className='bg-White flex-1' >
                <div className={`grid gap-[16px] md:gap-[24px] ${type === 'grid' ? 'grid-cols-2' : 'grid-cols-1'}`} >
                    {properties.map((property, index) => {
                        const isLiked = liked[property.id] || false;
                        return (
                            <div key={property.id} className='lg:pb-[17px]'>
                                <div className='relative'>
                                    <Link href={`luxury-villa-listings/${property.details.type}`} title={`View details for ${property.details.type}`} >
                                        <Image
                                            src={property.image?.src}
                                            className="!h-[130px] md:!h-[400px]"
                                            alt={property.details.type}
                                            priority={index === 0}
                                            width={429}
                                            height={400}
                                        />
                                    </Link>
                                    <div className="text-White absolute w-full px-[8px] py-[12px] lg:px-[24px] lg:py-[16px] top-0">
                                        <Flex className='justify-between items-center'>
                                            <UnstyledButton aria-label="Featured property" className='text-[8px] md:text-[14px] text-White font-soraSemiBold
                                         bg-[#111111BF] py-[2px] lg:py-[8px] px-[4px] md:px-[20px] rounded-[24px]'>
                                                Featured
                                            </UnstyledButton>
                                            <UnstyledButton aria-label={isLiked ? 'Unlike this property' : 'Like this property'} onClick={() => handleLikeClick(property.id)} className='bg-[#FFFFFFBF] rounded-full p-[4px] md:p-[8px]'>
                                                <LikeIcon className={`block md:hidden ${isLiked ? 'icon_liked' : 'icon'}`} />
                                                <HeartIcon className={`hidden md:block ${isLiked ? 'icon_liked' : 'icon'}`} />
                                            </UnstyledButton>
                                        </Flex>
                                    </div>
                                </div>
                                <div className='mt-[16px]' >
                                    <h3 className='max-w-[90%] md:max-w-full text-[12px] md:text-[22px] font-soraSemiBold leading-[18px] md:leading-[33px] whitespace-nowrap overflow-hidden text-ellipsis' >{property.price}</h3>
                                    <p className='text-[10px] md:text-[18px] font-soraSemiBold leading-[15px] md:leading-[27px] mt-[8px] mb-[4px]' >{property.title}</p>
                                    <span className='text-[8px] md:text-[14px] font-soraRegular leading-[21px] mb-[8px] text-[#333333]' >{property.location}</span>
                                    <Flex className='gap-[4px] gap-y-[8px] md:gap-y-[14px] md:gap-[14px] items-center flex-wrap'>
                                        <Flex className='gap-[2px] md:gap-[8px] items-center'>
                                            <MhomeIcon className='block md:hidden' />
                                            <HomeIcon className='hidden md:block' />
                                            <span className='capitalize text-[10px] md:text-[14px] font-soraRegular text-[#A9A9A9] ' >{property.details.type}</span>
                                        </Flex>
                                        <Flex className='gap-[4px]  md:gap-[8px] items-center'>
                                            <MbathIcon className='block md:hidden' />
                                            <BathIcon className='hidden md:block' />
                                            <span className='text-[10px] md:text-[14px] font-soraRegular text-[#A9A9A9] ' >{property.details.baths}</span>
                                        </Flex>
                                        <Flex className='gap-[4px]  md:gap-[8px] items-center'>
                                            <MbedIcon className='block md:hidden' />
                                            <BedIcon className='hidden md:block' />
                                            <span className='text-[10px] md:text-[14px] font-soraRegular text-[#A9A9A9] ' >{property.details.beds}</span>
                                        </Flex>
                                        <Flex className='gap-[4px]  md:gap-[8px] items-center'>
                                            <MareaIcon className='block md:hidden' />
                                            <AreaIcon className='hidden md:block' />
                                            <span className='text-[10px] md:text-[14px] font-soraRegular text-[#A9A9A9] ' >{property.details.area}</span>
                                        </Flex>
                                        <Flex className='gap-[4px]  md:gap-[8px] items-center'>
                                            <MbedIcon className='block md:hidden' />
                                            <BedIcon className='hidden md:block' />
                                            <span className='text-[10px] md:text-[14px] font-soraRegular text-[#A9A9A9] ' >{property.details.beds}</span>
                                        </Flex>
                                    </Flex>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Flex className='justify-center py-[33px] lg:py-[66px]'>
                    <Pagination
                        total={64}
                        gap={5}
                        boundaries={1}
                        siblings={1}
                        value={activePage}
                        onChange={setPage}
                        defaultValue={1}
                        radius={8}
                        color="#B7E08A"
                        className='text-[14px] text-RomanSilver font-soraSemiBold '
                        classNames={{
                            control: 'border-none text-RomanSilver bg-GhostWhite data-[active]:bg-YellowGreen data-[active]:!text-ChineseBlack',
                        }}
                    />
                </Flex>
            </section>
        </>
    )
}
