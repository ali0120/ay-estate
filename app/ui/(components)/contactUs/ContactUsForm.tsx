'use client'
import { FORM_REGEX_VALIDATORS } from '@/app/(app-constants)/form-validations';
import CheckBox from '@/app/(components)/FormComponents/CheckBox';
import Input from '@/app/(components)/FormComponents/Input';
import Select from '@/app/(components)/FormComponents/Select';
import Textarea from '@/app/(components)/FormComponents/TextArea';
import { Box, Button, Flex, Grid } from '@mantine/core'
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
      <Box pt={{ base: 100, md: 0 }} pb={{ base: 100, md: 100 }} px={{ base: 20, md: 100 }} >
        <CenteredTextBlock
          heading="Contact our sales team"
          paragraph="Built for every team across your company, Jobify Enterprise boosts productivity with
            upgraded security and account support. Contact us today to unlock:"
        />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='pt-[20px] px-[16px] lg:px-0'
          >
            <Grid gutter={20} grow>
              <Grid.Col span={{ base: 12, sm: 6 }} pb={{base:10,sm:30}}>
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
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }} pb={{base:10,sm:30}}>
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
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }} pb={{base:10,sm:30}}>
                <Input name="phone" label="Phone Number" placeholder="Enter your phone number" radius={16}
                  registerOptions={{
                    pattern: {
                      value: FORM_REGEX_VALIDATORS.numericWithPlusRegex.regex,
                      message: FORM_REGEX_VALIDATORS.numericWithPlusRegex.message,
                    },
                  }} />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }} pb={{base:10,sm:30}}>
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
              </Grid.Col>
              <Grid.Col span={{ base: 12 }}>
                <Textarea
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
              </Grid.Col>
            </Grid>
            <Flex direction={{ base: 'column', sm: 'row' }} justify={'space-between'} gap={{ base: 40, md: 80 }} align={'center'} mt={{ base: 32, md: 61 }} >
              <CheckBox radius={6} name='agree' label="I agree to Loom's Terms of Service and Privacy Policy."
                registerOptions={{
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                }}
              />
              <Button h={{ base: 48, sm: 52 }} type="submit" py={17} px={23} className='w-full md:w-auto text-[12px] lg:text-[16px] font-soraBold lg:font-soraSemiBold leading-[15.6px] lg:leading-[21px]' >
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