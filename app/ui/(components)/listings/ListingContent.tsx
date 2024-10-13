import { Flex } from '@mantine/core'
import Filter from './component/Filter'
import { ListingData } from './component/ListingData'
import { Drawer } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface ListingContentProps {
  type: string;
  opened: boolean;
  close: () => void;
}

const ListingContent: React.FC<ListingContentProps> = ({ type, opened, close }) => {
  const isLgScreen = useMediaQuery('(min-width: 1024)');
  return (
    <section className='bg-White' >
      <div className='px-[20px] xl:px-[100px]'>
        <Flex className='gap-[40px]'>
          {isLgScreen ? (
            <div>
              <Filter />
            </div>
          ) :
            <Drawer opened={opened} onClose={close} withCloseButton={false} p={0} size={312}>
              <Filter />
            </Drawer>
          }
          <ListingData type={type} />
        </Flex>
      </div>
    </section>
  )
}

export default ListingContent