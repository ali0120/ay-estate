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
  const isLgScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <section className='bg-White' >
      <div className='px-[23px] xl:px-[120px]'>
        <Flex className='gap-[40px]'>
          <div className='w-0 mr-[-40px] lg:mr-0 lg:w-[275px]'> {/* Fixed width to avoid CLS */}
            {isLgScreen ? (
              <Filter />
            ) : (
              <Drawer opened={opened} onClose={close} withCloseButton={false} p={0} size={312}>
                <Filter />
              </Drawer>
            )}
          </div>
          <ListingData type={type} />
        </Flex>
      </div>
    </section>
  )
}

export default ListingContent