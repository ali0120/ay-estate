import { Box, Breadcrumbs, Flex, Select, UnstyledButton } from '@mantine/core'
import Link from 'next/link';
import ArrowRightIcon from '@/public/svg/arrow-right.svg'
import ArrowDownIcon from '@/public/svg/arrow-down.svg';
import LineIcon from '@/public/svg/Line.svg';
import FilterIcon from '@/public/svg/filter.svg';
import GridIcon from '@/public/svg/gridBox.svg';
import ColumnIcon from '@/public/svg/columnBox.svg';

const items = [
    { title: 'Home', href: '#' },
    { title: 'Real Estate', href: '#' },
    { title: 'Villa', href: '#' },
].map((item, index) => (
    <Link href={item.href} key={index} className="text-[16px] font-soraRegular text-ForestGreen">
        {item.title}
    </Link>
));

interface ListingHeaderProps {
    type: string;
    setType: React.Dispatch<React.SetStateAction<string>>;
    open: () => void;
}

const ListingHeader: React.FC<ListingHeaderProps> = ({ type, setType, open }) => {
    return (
        <section className='bg-White' >
            <Box px={{ base: 20, md: 100 }}>
                <Breadcrumbs pt={{ base: 30, md: 48 }} pb={{ base: 18, md: 32 }} separator={<ArrowRightIcon />} separatorMargin="md">
                    {items}
                </Breadcrumbs>
                <Flex gap={20} direction={{ base: 'column', md: 'row' }} justify={'space-between'} mb={{ base: 30, md: 52 }}>
                    <div className='lg:w-[50%] ' >
                        <h2 className='text-[16px] lg:text-[24px] text-DarkJungleGreentwo font-soraBold'>Showing listings properties for “Villa”</h2>
                        <p className='text-[12px] lg:text-[16px] text-RomanSilver font-soraRegular mt-[4px]' >Showing 1 - 60 Properties</p>
                    </div>
                    <Flex justify={{ base: 'space-between', md: 'flex-end' }} align={'center'} gap={{ base: 15, sm: 24 }} className='w-full lg:w-[50%]' >
                        <Flex align='center' gap={4} >
                            <span className='text-[12px] md:text-[16px] text-RomanSilver whitespace-nowrap' >Sort By:</span>
                            <Select
                                h={{ base: 32, sm: 44 }}
                                w={{ base: 170, sm: 180 }}
                                rightSection={<ArrowDownIcon />}
                                data={['Relevant Products', 'Name (A-Z)', 'Name (Z-A)', 'Price(Lowest)', 'Price(Highest)']}
                                defaultValue='Relevant Products'
                                classNames={{
                                    input: 'text-[12px] md:text-[14px] font-soraMedium !bg-transparent !p-[10px] md:!py-[21px] md:!px-[16px] !rounded-[8px] !border-BrightGray md:font-soraSemiBold',
                                    section:'h-[33px] md:h-[42px]'
                                }}
                            />
                        </Flex>
                        <Flex gap={{ base: 4, sm: 8 }} align={'center'}>
                            <LineIcon />
                            <UnstyledButton onClick={() => open()} hiddenFrom='md'>
                                <FilterIcon />
                            </UnstyledButton>
                            <UnstyledButton className={`switch_view p-[6px] rounded-[8px] ${type === 'grid' ? 'bg-[#1E4C2F]' : 'border-[1px] border-solid border-[#E4E9EE]'}`} onClick={() => setType('grid')}>
                                <GridIcon className={`${type === 'grid' ? 'active' : 'not_active'}`} />
                            </UnstyledButton>
                            <UnstyledButton className={`switch_view p-[6px] rounded-[8px] ${type === 'flex' ? 'bg-[#1E4C2F]' : 'border-[1px] border-solid border-[#E4E9EE]'}`} onClick={() => setType('flex')}>
                                <ColumnIcon className={`${type === 'flex' ? 'active' : 'not_active'}`} />
                            </UnstyledButton>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </section>
    )
}

export default ListingHeader