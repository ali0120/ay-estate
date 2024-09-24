import { Select as MantineSelect, SelectProps } from '@mantine/core';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import IoIosArrowDown from '@/public/svg/arrow-down.svg';
import { ErrorMessage } from '@hookform/error-message';
import { ReactNode } from 'react';

interface IProps extends SelectProps {
    name: string;
    label?: string;
    isLoading?: boolean;
    registerOptions?: RegisterOptions;
    isrequired?: boolean;
    icon?: ReactNode;
}

function Select({
    name,
    label,
    icon = <IoIosArrowDown />,
    data,
    onSearchChange,
    searchable = true,
    isrequired,
    ...rest
}: IProps) {
    const { formState } = useFormContext();
    const { errors } = formState;

    function handleOnSearch(value: string) {
        onSearchChange && onSearchChange(value);
    }

    return (
        <div>
            <label>
                {label && (
                    <span className='text-[14px] md:text-[16px] leading-[18.2px] md:leading-[20.8px] font-soraBold mb-[12px]'>
                        {label} {isrequired && <span className='text-red-700'>*</span>}
                    </span>
                )}
                    </label>
                <MantineSelect
                    {...rest}
                    data={data}
                    rightSection={icon}
                    onSearchChange={handleOnSearch}
                    searchable={searchable}
                />
            {!!errors && !!errors[name] && (
                <div className="ErrorMessageStyle">
                    <ErrorMessage errors={errors} name={name} render={({ message }) => <p>{message}</p>} />
                </div>
            )}
        </div>
    );
}

export default Select;
