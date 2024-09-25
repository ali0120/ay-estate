"use client"
import React, { useState } from 'react';
import { Accordion, Box } from '@mantine/core';
import IconPlus from '@/public/svg/add.svg';
import IconMinus from '@/public/svg/minus.svg';
import Link from 'next/link';
import { faqData } from '../data/faqData';

const AccordingComponent = () => {
  const [opened, setOpened] = useState<string | null>(null);

  const handleAccordionChange = (value: string | null) => {
    setOpened((prev) => (prev === value ? null : value)); // Toggle open/close
  };

  return (
    <Accordion
      chevronPosition="left"
      value={opened}
      onChange={handleAccordionChange}
      multiple={false}
      classNames={{
        chevron: 'hidden',
        control: 'hover:bg-transparent',
        item: 'w-full mb-[2 0px] md:mb-[30px] rounded-[18px] border-2 border-[#F6F8F9] p-[20px] lg:p-[24px]',
        label: 'text-[14px] md:text-[20px] leading-[18.2px] md:leading-[26px] font-soraBold text-DarkJungleGreentwo p-0 capitalize ',
        content: 'pb-0 text-[14px] md:text-[18px] leading-[22.4px] md:leading-[32.4px] font-soraRegular md:font-soraSemiBold text-RomanSilver px-[0] mt-[11px]'
      }}
      className="flex flex-col gap-[20px] md:gap-[30px] md:mt-[20px]"
    >
      {faqData.map((item, index) => (
        <Accordion.Item key={index} value={item.title.replace(/\s+/g, '-')}>
          <Accordion.Control
            icon={opened === item.title ? <IconMinus /> : <IconPlus />} // Change icon per item
          >
            {item.title}
          </Accordion.Control>
          <Accordion.Panel>
            <Box>
              {item.description}
            </Box>
            <Link href={"#"} className='text-YellowGreen lg:text-RoyalBlue text-[16px] md:text-[18px] font-soraBold leading-[20.8px] md:leading-[23.4px] inline-block mt-[20px] lg:mt-[24px]' >Read More</Link>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordingComponent;
