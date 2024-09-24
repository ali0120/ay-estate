'use client'
import { FORM_REGEX_VALIDATORS } from '@/app/(app-constants)/form-validations';
import CheckBox from '@/app/(components)/FormComponents/CheckBox';
import Input from '@/app/(components)/FormComponents/Input';
import Select from '@/app/(components)/FormComponents/Select';
import Textarea from '@/app/(components)/FormComponents/TextArea';
import { Box, Button, Flex } from '@mantine/core'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import CenteredTextBlock from '../CenteredTextBlock';

type FormData = {
  name: string;
  email: string;
  phone: string;
  size: string;
  message: string;
  agree: boolean;
};

const ContactUsForm = () => {
  const methods = useForm<FormData>();
  const {
    handleSubmit,
    control
  } = methods;


  const onSubmit = async (data: FormData) => {
    console.log(data)

  };

  return (
    <section className='bg-White text-DarkJungleGreentwo relative'>
      <Box className='px-[20px] md:px-[100px] pb-[100px] md:pb-[100px] pt-[100px] md:pt-0'>
        <CenteredTextBlock
          heading="Contact our sales team"
          paragraph="Built for every team across your company, Jobify Enterprise boosts productivity with
            upgraded security and account support. Contact us today to unlock:"
        />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='pt-[20px] px-[16px] lg:px-0'
          >
            <Box className='grid md:gap-y-[40px] w-full gap-[20px] grid-cols-1 md:grid-cols-2'>
              <Input name="name" label="Your Name" placeholder="Enter your name" radius={16}
                registerOptions={{
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  pattern: {
                    value: FORM_REGEX_VALIDATORS.textOnly.regex,
                    message: FORM_REGEX_VALIDATORS.textOnly.message,
                  },
                }} />

              <Input name="email" type='email' label="Email" placeholder="Enter your email" radius={16}
                registerOptions={{
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  pattern: {
                    value: FORM_REGEX_VALIDATORS.email.regex,
                    message: FORM_REGEX_VALIDATORS.email.message,
                  },
                }} />

              <Input name="phone" label="Phone Number" placeholder="Enter your phone number" radius={16}
                registerOptions={{
                  pattern: {
                    value: FORM_REGEX_VALIDATORS.numericWithPlusRegex.regex,
                    message: FORM_REGEX_VALIDATORS.numericWithPlusRegex.message,
                  },
                }} />

              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: `This field is required`,
                  },
                }}
                name="size"
                render={({ field: { onChange, value } }) => (
                  <Select
                    radius={16}
                    name="size"
                    label="How Can Our Sales Team Help?"
                    isrequired
                    placeholder={'Choose company size'}
                    data={[
                      { value: '5', label: 'Five' },
                      { value: '10', label: 'Ten' },
                    ]}
                    value={value}
                    onChange={onChange}
                  />
                )} />
              <Textarea
                className="col-span-1 md:col-span-2"
                radius={16}
                name="message"
                label="Anything Else You’d Like Us To Know?"
                placeholder="Type anything"
                registerOptions={{
                  minLength: {
                    value: 3,
                    message: 'Message must be at least 3 characters long',
                  },
                  maxLength: {
                    value: 3000,
                    message: 'Message must be at most 3000 characters long',
                  },
                }}
              />
            </Box>
            <Flex className='flex-col md:flex-row justify-between gap-[40px] md:gap-[80px] items-center mt-[32px] md:mt-[61px]'>
              <CheckBox radius={6} name='agree' label="I agree to Loom's Terms of Service and Privacy Policy."
                registerOptions={{
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                }}
              />
              <Button  type="submit" className='h-[48px] md:h-[52px] px-[23px] w-full md:w-auto text-[12px] lg:text-[16px] font-soraBold lg:font-soraSemiBold leading-[15.6px] lg:leading-[21px]' >
                Contact Sales
              </Button>
            </Flex>
          </form>
        </FormProvider>
      </Box>
    </section>
  )
}

export default ContactUsForm