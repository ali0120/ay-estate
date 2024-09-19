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
    router.push(`/listings?${queryString}`,{ scroll: false });
  };


  return (
    <Box w={278} p={24} className='border-[1px] rounded-[12px] border-BrightGray h-fit' >
      <h6 className='text-[20px] font-soraSemiBold leading-[28px]' >Filter Option</h6>
      <Divider mt={16} mb={24} />
      <UnstyledButton w={'100%'} onClick={toggleBestFilter} className='text-[16px] font-bold ' >
        <Flex align={'center'} justify={'space-between'}>
          <h4>Best Filter</h4>
          <ArrowUpIcon className={`transition-transform ${!bestFilterOpened ? 'rotate-180' : 'rotate-0'}`} />
        </Flex>
      </UnstyledButton>
      <Collapse in={bestFilterOpened} mt={12} mb={24}>
        <Flex direction={'column'} gap={13} >
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "rating", "4-stars")}
            label={<Flex gap={4}>
              <StarIcon />
              <h4>4 stars or upper</h4>
            </Flex>}
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
      <Divider my={24} />
      <UnstyledButton w={'100%'} onClick={toggleLocation} className='text-[16px] font-bold ' >
        <Flex align={'center'} justify={'space-between'}>
          <h4>Location</h4>
          <ArrowUpIcon className={`transition-transform ${!locationOpened ? 'rotate-180' : 'rotate-0'}`} />
        </Flex>
      </UnstyledButton>
      <Collapse in={locationOpened} mt={12} mb={24}>
        <Flex direction={'column'} gap={13} >
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

      <Divider my={24} />
      <UnstyledButton w={'100%'} onClick={toggleCategory} className='text-[16px] font-bold ' >
        <Flex align={'center'} justify={'space-between'}>
          <h4>Category</h4>
          <ArrowUpIcon className={`transition-transform ${!categoryOpened ? 'rotate-180' : 'rotate-0'}`} />
        </Flex>
      </UnstyledButton>
      <Collapse in={categoryOpened} mt={12} mb={24}>
        <Flex direction={'column'} gap={13} >
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "category", "house")}
            label={
              <Flex justify={'space-between'}>
                <h4>House</h4>
                <ArrowUpIcon className='gray_stroke' />
              </Flex>
            }
            classNames={{
              labelWrapper: 'w-full',
              label: 'text-RomanSilver text-[16px] font-soraRegular',
              input: 'rounded-[6px] border-2 checked:!bg-ForestGreen checked:border-ForestGreen'
            }} />
          <Checkbox
            onChange={(e) => handleCheckboxChange(e.target.checked, "category", "villa")}
            label={
              <Flex justify={'space-between'}>
                <h4>Villa</h4>
                <ArrowUpIcon className='gray_stroke' />
              </Flex>
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
              <Flex justify={'space-between'}>
                <h4>Apartment</h4>
                <ArrowUpIcon className='gray_stroke' />
              </Flex>
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
              <Flex justify={'space-between'}>
                <h4>Hotel</h4>
                <ArrowUpIcon className='gray_stroke' />
              </Flex>
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
              <Flex justify={'space-between'}>
                <h4>Real Estate</h4>
                <ArrowUpIcon className='gray_stroke' />
              </Flex>
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
      <UnstyledButton w={'100%'} onClick={togglePrice} className='text-[16px] font-bold ' >
        <Flex align={'center'} justify={'space-between'}>
          <h4>Price Range</h4>
          <ArrowUpIcon className={`transition-transform ${!priceOpened ? 'rotate-180' : 'rotate-0'}`} />
        </Flex>
      </UnstyledButton>
      <Collapse in={priceOpened} mt={12} mb={24}>
        <Flex direction={'column'} gap={13} >
          <Flex align={'center'} >
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
          <Flex align={'center'} >
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