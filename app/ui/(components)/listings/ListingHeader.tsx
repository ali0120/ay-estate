import {  Breadcrumbs, Flex, Select, UnstyledButton } from '@mantine/core'
import Link from 'next/link';
import ArrowRightIcon from '@/public/svg/arrow-right.svg'
import ArrowDownIcon from '@/public/svg/arrow-down.svg';
import LineIcon from '@/public/svg/Line.svg';
import FilterIcon from '@/public/svg/filter.svg';
import GridIcon from '@/public/svg/gridBox.svg';
import ColumnIcon from '@/public/svg/columnBox.svg';
import '@mantine/core/styles/Breadcrumbs.css';

const items = [
    { title: 'Home', href: '#' },
    { title: 'Real Estate', href: '#' },
    { title: 'Villa', href: '#' },
].map((item, index) => (
    <Link href={item.href} key={index} title={`Go to ${item.title}`}  className="text-[16px] font-soraRegular text-ForestGreen">
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
            <div className='px-[24px] xl:px-[120px]'>
                <Breadcrumbs className='pt-[30px] lg:pt-[48px] pb-[24px] lg:pb-[32px]' separator={<ArrowRightIcon />} separatorMargin="md">
                    {items}
                </Breadcrumbs>
                <Flex className='mb-[24px] md:mb-[52px] gap-[24px] md:gap-[20px] flex-col md:flex-row justify-between'>
                    <div className='w-[78.2%] lg:w-[50%] ' >
                        <h1 className='text-[16px] lg:text-[24px] text-DarkJungleGreentwo font-soraBold'>Showing listings properties for “Villa”</h1>
                        <h2 className='text-[12px] lg:text-[16px] text-RomanSilver font-soraRegular mt-[4px]' >Discover Our Selection of Villas</h2>
                    </div>
                    <Flex className='w-full lg:w-[50%] justify-between md:justify-end items-center gap-[15px] md:gap-[24px]'>
                        <Flex className='items-center gap-[4px]' >
                            <span className='text-[12px] md:text-[16px] text-RomanSilver whitespace-nowrap' >Sort By:</span>
                            <Select
                                rightSection={<ArrowDownIcon />}
                                data={['Relevant Products', 'Name (A-Z)', 'Name (Z-A)', 'Price(Lowest)', 'Price(Highest)']}
                                defaultValue='Relevant Products'
                                classNames={{
                                    input: '!h-[32px] md:!h-[44px] !w-[155px] md:!w-[180px] text-[12px] md:text-[14px] font-soraMedium !bg-transparent !p-[10px] md:!px-[16px] !rounded-[8px] !border-BrightGray md:font-soraSemiBold',
                                    section: 'h-[33px] md:h-[42px]'
                                }}
                            />
                        </Flex>
                        <Flex className='gap-[4px] md:gap-[8px] items-center'>
                            <div className="hidden md:block">
                                <LineIcon />
                            </div>
                            <UnstyledButton aria-label="Open filter options" onClick={() => open()} hiddenFrom='md'>
                                <FilterIcon />
                            </UnstyledButton>
                            <div className="block md:hidden">
                                <LineIcon />
                            </div>
                            <UnstyledButton aria-label="Switch to grid view" className={`switch_view p-[6px] lg:p-[12px] rounded-[8px] ${type === 'grid' ? 'bg-[#1E4C2F]' : 'border-[1px] border-solid border-[#E4E9EE]'}`} onClick={() => setType('grid')}>
                                <GridIcon className={`${type === 'grid' ? 'active' : 'not_active'}`} />
                            </UnstyledButton>
                            <UnstyledButton aria-label="Switch to flex view" className={`switch_view p-[6px] lg:p-[12px] rounded-[8px] ${type === 'flex' ? 'bg-[#1E4C2F]' : 'border-[1px] border-solid border-[#E4E9EE]'}`} onClick={() => setType('flex')}>
                                <ColumnIcon className={`${type === 'flex' ? 'active' : 'not_active'}`} />
                            </UnstyledButton>
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        </section>
    )
}

export default ListingHeader