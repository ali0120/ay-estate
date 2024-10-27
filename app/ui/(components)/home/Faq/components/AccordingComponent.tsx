"use client";
import React, { useState } from 'react';
import { Accordion } from '@mantine/core';
import IconPlus from '@/public/svg/add.svg';
import IconMinus from '@/public/svg/minus.svg';
import { faqData } from '../data/faqData';
import Link from 'next/link';

const AccordingComponent = () => {
  const [openedFirst, setOpenedFirst] = useState<string | null>(null);
  const [openedSecond, setOpenedSecond] = useState<string | null>(null);

  const handleAccordionChangeFirst = (value: string | null) => {
    setOpenedFirst((prev) => (prev === value ? null : value));
    setOpenedSecond(null);
  };

  const handleAccordionChangeSecond = (value: string | null) => {
    setOpenedSecond((prev) => (prev === value ? null : value));
    setOpenedFirst(null)
  };

  // Divide the data for each Accordion component
  const firstAccordionData = faqData.slice(0, Math.ceil(faqData.length / 2));
  const secondAccordionData = faqData.slice(Math.ceil(faqData.length / 2));

  return (
    <div className="w-full mt-[24px] lg:mt-[53px] flex flex-col lg:flex-row gap-[20px]" >
      {/* First Accordion */}
      <Accordion
        chevronPosition="left"
        value={openedFirst}
        onChange={handleAccordionChangeFirst}
        multiple={false}
        classNames={{
          chevron: 'hidden',
          control: 'hover:bg-transparent',
          root:'w-full flex flex-col gap-[20px]',
          item: 'w-full rounded-[18px] border-2 border-[#F6F8F9] py-[20px] lg:py-[27px] px-[20px] xl:px-[24px]',
          label: 'text-[14px] md:text-[20px] font-soraBold text-DarkJungleGreentwo p-0 capitalize',
          content: 'text-[14px] md:text-[18px] font-soraRegular md:font-soraSemiBold text-RomanSilver mt-[11px] px-0',
        }}
      >
        {secondAccordionData.map((item, index) => (
          <Accordion.Item key={index} value={item.title.replace(/\s+/g, '-')}>
            <Accordion.Control
              icon={openedFirst === item.title.replace(/\s+/g, '-') ? <IconMinus /> : <IconPlus />}
            >
              {item.title}
            </Accordion.Control>
            <Accordion.Panel>
              <div>{item.description}</div>
              <Link href="#" className="text-YellowGreen lg:text-RoyalBlue text-[16px] md:text-[18px] font-soraBold mt-[20px] lg:mt-[24px] inline-block">
                Read More
              </Link>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      {/* Second Accordion */}
      <Accordion
        chevronPosition="left"
        value={openedSecond}
        onChange={handleAccordionChangeSecond}
        multiple={false}
        classNames={{
          chevron: 'hidden',
          control: 'hover:bg-transparent',
          root:'w-full flex flex-col gap-[20px]',
          item: 'w-full  rounded-[18px] border-2 border-[#F6F8F9] py-[20px] lg:py-[27px] px-[20px] xl:px-[24px]',
          label: 'text-[14px] md:text-[20px] font-soraBold text-DarkJungleGreentwo p-0 capitalize',
          content: 'text-[14px] md:text-[18px] font-soraRegular md:font-soraSemiBold text-RomanSilver mt-[11px] px-0',
        }}
      >
        {firstAccordionData.map((item, index) => (
          <Accordion.Item key={index} value={item.title.replace(/\s+/g, '-')}>
            <Accordion.Control
              icon={openedSecond === item.title.replace(/\s+/g, '-') ? <IconMinus /> : <IconPlus />}
            >
              {item.title}
            </Accordion.Control>
            <Accordion.Panel>
              <div>{item.description}</div>
              <Link href="#" className="text-YellowGreen lg:text-RoyalBlue text-[16px] md:text-[18px] font-soraBold mt-[20px] lg:mt-[24px] inline-block">
                Read More
              </Link>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordingComponent;
