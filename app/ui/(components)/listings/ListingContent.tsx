import { Box, Flex } from '@mantine/core'
import Filter from './component/Filter'
import { ListingData } from './component/ListingData'
import { Drawer } from '@mantine/core';

interface ListingContentProps {
  type: string;
  opened: boolean;
  close: () => void;
}

const ListingContent: React.FC<ListingContentProps> = ({ type, opened, close }) => {
  return (
    <section className='bg-White' >
      <Box className='px-[20px] md:px-[100px]'>
        <Flex className='gap-[40px]'>
          <Drawer opened={opened} onClose={close} withCloseButton={false} p={0} size={312} hiddenFrom='md'>
            <Filter />
          </Drawer>
          <Box visibleFrom='md' >
            <Filter />
          </Box>
          <ListingData type={type} />
        </Flex>
      </Box>
    </section>
  )
}

export default ListingContent