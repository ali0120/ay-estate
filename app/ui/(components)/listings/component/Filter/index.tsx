"use client"
import { Box, Checkbox, Collapse, Divider, Flex, NumberInput, Select, UnstyledButton } from '@mantine/core'
import { useRouter, useSearchParams } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import ArrowUpIcon from '@/public/svg/arrow-up.svg'
import StarIcon from '@/public/svg/star.svg'
import LineIcon from '@/public/svg/Line.svg';
const Filter = () => {
  const [bestFilterOpened, { toggle: toggleBestFilter }] = useDisclosure(true);
  const [locationOpened, { toggle: toggleLocation }] = useDisclosure(true);
  const [categoryOpened, { toggle: toggleCategory }] = useDisclosure(true);
  const [priceOpened, { toggle: togglePrice }] = useDisclosure(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Handle checkbox change and update URL
  const handleCheckboxChange = (checked: boolean, filterKey: string, filterValue: string) => {
    const params = new URLSearchParams(searchParams);

    if (checked) {
      params.append(filterKey, filterValue);
    } else {
      params.delete(filterKey);
    }

    const queryString = params.toString();
    router.push(`/listings?${queryString}`, { scroll: false });
  };


  return (
    <Box className='w-[278px] p-[24px] border-[1px] rounded-[12px] border-BrightGray h-fit' >
      <h6 className='text-[20px] font-soraSemiBold leading-[28px]' >Filter Option</h6>
      <Divider className='mt-[16px] mb-[24px]' />
      <UnstyledButton onClick={toggleBestFilter} className=' w-full text-[16px] font-bold ' >
        <Box component='span' className='flex items-center justify-between w-full'>
          <strong >Best Filter</strong>
          <ArrowUpIcon className={`transition-transform ${!bestFilterOpened ? 'rotate-180' : 'rotate-0'}`} />
        </Box>
      </UnstyledButton>
      <Collapse in={bestFilterOpened} className='mt-[12px] mb-[24px]'>
        <Flex className='flex-col gap-[13px]'>
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "rating", "4-stars")}
            label={<Box component='span' className='flex gap-[4px]'>
              <StarIcon />
              <span>4 stars or upper</span>
            </Box>}
            classNames={{
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }} />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "type", "luxury")}
            label="Luxury Building"
            classNames={{
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }}
          />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "type", "best-seller")}
            label="Best Seller"
            classNames={{
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }}
          />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "type", "discount")}
            label="Discount"
            classNames={{
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }}
          />
        </Flex>
      </Collapse>
      <Divider className='my-[24px]' />
      <UnstyledButton onClick={toggleLocation} className='text-[16px] font-bold  w-full' >
        <Box component='span' className='flex items-center justify-between'>
          <strong >Location</strong>
          <ArrowUpIcon className={`transition-transform ${!locationOpened ? 'rotate-180' : 'rotate-0'}`} />
        </Box>
      </UnstyledButton>
      <Collapse in={locationOpened} className='mt-[12px] mb-[24px]'>
        <Flex className='flex-col gap-[13px]' >
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "location", "bandung")}
            label={"Bandung"}
            classNames={{
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }} />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "location", "jakrata")}
            label="Jakarta"
            classNames={{
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }}
          />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "location", "bali")}
            label="Bali"
            classNames={{
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }}
          />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "location", "medan")}
            label="Medan"
            classNames={{
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }}
          />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "location", "surabaya")}
            label="Surabaya"
            classNames={{
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }}
          />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "location", "jogja")}
            label="Jogja"
            classNames={{
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }}
          />
          <UnstyledButton className='text-[16px] font-soraMedium text-ForestGreen' >
            Show All
          </UnstyledButton>
        </Flex>
      </Collapse>

      <Divider className='my-[24px]' />
      <UnstyledButton onClick={toggleCategory} className='text-[16px] font-bold w-full ' >
        <Box component='span' className='flex items-center justify-between'>
          <strong >Category</strong>
          <ArrowUpIcon className={`transition-transform ${!categoryOpened ? 'rotate-180' : 'rotate-0'}`} />
        </Box>
      </UnstyledButton>
      <Collapse in={categoryOpened} className='mt-[12px] mb-[24px]'>
        <Flex className='flex-col gap-[13px]' >
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "category", "house")}
            label={
              <Box component='span' className='flex justify-between'>
                <span>House</span>
                <ArrowUpIcon className='gray_stroke' />
              </Box>
            }
            classNames={{
              labelWrapper: 'w-full',
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }} />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "category", "villa")}
            label={
              <Box component='span' className='flex justify-between'>
                <span>Villa</span>
                <ArrowUpIcon className='gray_stroke' />
              </Box>
            }
            classNames={{
              labelWrapper: 'w-full',
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }}
          />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "category", "apartment")}
            label={
              <Box component='span' className='flex justify-between'>
                <span>Apartment</span>
                <ArrowUpIcon className='gray_stroke' />
              </Box>
            }
            classNames={{
              labelWrapper: 'w-full',
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }}
          />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "category", "hotel")}
            label={
              <Box component='span' className='flex justify-between'>
                <span>Hotel</span>
                <ArrowUpIcon className='gray_stroke' />
              </Box>
            }
            classNames={{
              labelWrapper: 'w-full',
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }}
          />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "category", "real-estate")}
            label={
              <Box component='span' className='flex justify-between'>
                <span>Real Estate</span>
                <ArrowUpIcon className='gray_stroke' />
              </Box>
            }
            classNames={{
              labelWrapper: 'w-full',
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }}
          />
          <UnstyledButton className='text-[16px] font-soraMedium text-ForestGreen' >
            Show All Categories
          </UnstyledButton>
        </Flex>
      </Collapse>

      <Divider my={24} />
      <UnstyledButton onClick={togglePrice} className='text-[16px] font-bold w-full' >
        <Box component='span' className='flex items-center justify-between'>
          <strong >Price Range</strong>
          <ArrowUpIcon className={`transition-transform ${!priceOpened ? 'rotate-180' : 'rotate-0'}`} />
        </Box>
      </UnstyledButton>
      <Collapse in={priceOpened} className='mt-[12px] mb-[24px]'>
        <Flex className='flex-col gap-[13px]' >
          <Flex className='items-center' >
            <Select
              rightSection={<ArrowUpIcon className='rotate-180' />}
              w={125}
              h={44}
              data={['USD', 'EGP']}
              defaultValue={'USD'}
              classNames={{
                input: 'text-[16px] !bg-transparent !rounded-[12px] border-r-[0] !rounded-tr-[0] !rounded-br-[0] round !border-BrightGray font-soraRegular'
              }}
            />
            <NumberInput h={44} allowNegative={false} min={1} hideControls
              placeholder="Minimum price"
              leftSection={<LineIcon />}
              rightSection={null}
              classNames={{
                input: '!pl-[2px] text-[16px] !bg-transparent !rounded-[12px] border-l-[0] !rounded-tl-[0] !rounded-bl-[0] !border-BrightGray font-soraRegular',
                section: 'left-[-20px]'
              }}
            />
          </Flex>
          <Flex className='items-center' >
            <Select
              rightSection={<ArrowUpIcon className='rotate-180' />}
              w={125}
              h={44}
              data={['USD', 'EGP']}
              defaultValue={'USD'}
              classNames={{
                input: 'text-[16px] !bg-transparent !rounded-[12px] border-r-[0] !rounded-tr-[0] !rounded-br-[0] round !border-BrightGray font-soraRegular'
              }}
            />
            <NumberInput h={44} allowNegative={false} min={1} hideControls
              placeholder="Maximum price"
              leftSection={<LineIcon />}
              rightSection={null}
              classNames={{
                input: '!pl-[2px] text-[16px] !bg-transparent !rounded-[12px] border-l-[0] !rounded-tl-[0] !rounded-bl-[0] !border-BrightGray font-soraRegular',
                section: 'left-[-20px]'
              }}
            />
          </Flex>
          <UnstyledButton className='text-[16px] text-SmokyBlack border-BrightGray border-[1px] border-solid rounded-[12px] w-fit px-[16px] py-[11px]' >
            $0 - $5,000
          </UnstyledButton>
          <UnstyledButton className='text-[16px] text-SmokyBlack border-BrightGray border-[1px] border-solid rounded-[12px] w-fit px-[16px] py-[11px]' >
            $5,000 - $50,000
          </UnstyledButton>
          <UnstyledButton className='text-[16px] text-SmokyBlack border-BrightGray border-[1px] border-solid rounded-[12px] w-fit px-[16px] py-[11px]' >
            $50,000
          </UnstyledButton>
        </Flex>
      </Collapse>
    </Box>
  )
}

export default Filter