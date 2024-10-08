import { Flex } from '@mantine/core'
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
      <div className='px-[20px] xl:px-[100px]'>
        <Flex className='gap-[40px]'>
          <Drawer opened={opened} onClose={close} withCloseButton={false} p={0} size={312} hiddenFrom='md'>
            <Filter />
          </Drawer>
          <div className="hidden md:block" >
            <Filter />
          </div>
          <ListingData type={type} />
        </Flex>
      </div>
    </section>
  )
}

export default ListingContent