import { useState } from 'react'
import { BackgroundImage, Box, Flex, Pagination, UnstyledButton } from '@mantine/core'
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
        <section className='bg-White flex-1' >
            <Box className={`grid gap-[16px] md:gap-[24px] ${type === 'grid' ? 'grid-cols-2' : 'grid-cols-1'}`} >
                {properties.map((property) => {
                    const isLiked = liked[property.id] || false;
                    return (
                        <Box key={property.id} pb={{ base: 0, sm: 17 }} >
                            <Box pos={"relative"}>
                                <Link href={`listings/${property.details.type}`} >
                                    <BackgroundImage
                                        src={property.image?.src}
                                        radius={12}
                                        h={{ base: 130, sm: 400 }}
                                        className="!h-[130px] md:!h-[400px]"
                                    >
                                    </BackgroundImage>
                                </Link>
                                <Box className="text-White absolute w-full p-[12px] md:p-[24px] top-0">
                                    <Flex justify={'space-between'} align={"center"}>
                                        <UnstyledButton className='text-[8px] md:text-[14px] text-White font-soraSemiBold
                                         bg-[#111111BF] py-[2px] md:py-[8px] px-[4px] md:px-[20px] rounded-[24px]'>
                                            Featured
                                        </UnstyledButton>
                                        <UnstyledButton onClick={() => handleLikeClick(property.id)} className='bg-[#FFFFFFBF] rounded-full p-[4px] md:p-[8px]'>
                                            <LikeIcon className={`block md:hidden ${isLiked ? 'icon_liked' : 'icon'}`} />
                                            <HeartIcon className={`hidden md:block ${isLiked ? 'icon_liked' : 'icon'}`} />
                                        </UnstyledButton>
                                    </Flex>
                                </Box>
                            </Box>
                            <Box className='mt-[16px]' >
                                <h3 className='text-[12px] md:text-[22px] font-soraSemiBold leading-[18px] md:leading-[33px] whitespace-nowrap overflow-hidden text-ellipsis' >{property.price}</h3>
                                <p className='text-[10px] md:text-[18px] font-soraSemiBold leading-[15px] md:leading-[27px] mt-[8px] mb-[4px]' >{property.title}</p>
                                <span className='text-[8px] md:text-[14px] font-soraRegular leading-[21px] mb-[8px] text-[#333333]' >{property.location}</span>
                                <Flex gap={{ base: 4, sm: 14 }} align={'center'} wrap={'wrap'} >
                                    <Flex gap={{ base: 2, sm: 8 }} align={'center'}>
                                        <MhomeIcon className='block md:hidden' />
                                        <HomeIcon className='hidden md:block' />
                                        <span className='capitalize text-[10px] md:text-[14px] font-soraRegular text-[#A9A9A9] ' >{property.details.type}</span>
                                    </Flex>
                                    <Flex gap={8} align={'center'}>
                                        <MbathIcon className='block md:hidden' />
                                        <BathIcon className='hidden md:block' />
                                        <span className='text-[10px] md:text-[14px] font-soraRegular text-[#A9A9A9] ' >{property.details.baths}</span>
                                    </Flex>
                                    <Flex gap={8} align={'center'}>
                                        <MbedIcon className='block md:hidden' />
                                        <BedIcon className='hidden md:block' />
                                        <span className='text-[10px] md:text-[14px] font-soraRegular text-[#A9A9A9] ' >{property.details.beds}</span>
                                    </Flex>
                                    <Flex gap={8} align={'center'}>
                                        <MareaIcon className='block md:hidden' />
                                        <AreaIcon className='hidden md:block' />
                                        <span className='text-[10px] md:text-[14px] font-soraRegular text-[#A9A9A9] ' >{property.details.area}</span>
                                    </Flex>
                                    <Flex gap={8} align={'center'}>
                                        <MbedIcon className='block md:hidden' />
                                        <BedIcon className='hidden md:block' />
                                        <span className='text-[10px] md:text-[14px] font-soraRegular text-[#A9A9A9] ' >{property.details.beds}</span>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
            <Flex justify='center' py={{ base: 33, md: 66 }}>
                <Pagination
                    total={64}
                    boundaries={1}
                    siblings={1}
                    value={activePage}
                    onChange={setPage}
                    defaultValue={1}
                    radius={8}
                    color="#B7E08A"
                    className='text-[14px] text-RomanSilver font-soraSemiBold '
                    classNames={{
                        root: '!gap-[4px]',
                        control: 'border-none text-RomanSilver bg-GhostWhite data-[active]:bg-YellowGreen data-[active]:!text-ChineseBlack',
                    }}
                />
            </Flex>
        </section>
    )
}