import { HTMLInputTypeAttribute, useEffect } from 'react';
import { Input as MantineInput, InputProps } from '@mantine/core';
import { useFormContext, RegisterOptions } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface IProps extends InputProps {
    name: string;
    registerOptions?: RegisterOptions;
    type?: Exclude<HTMLInputTypeAttribute, 'range' | 'reset' | 'submit' | 'search'>;
    placeholder?: string;
    iconPlaceholder?: string;
    label?: string;
    readonly?: boolean;
    labelVisibility?: boolean;
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}

function Input({
    name,
    registerOptions,
    type = 'text',
    placeholder,
    iconPlaceholder,
    label,
    readonly,
    className,
    disabled,
    value,
    defaultValue,
    onChange,
    ...rest
}: IProps) {
    const { register, formState, setValue } = useFormContext();
    const { errors } = formState;

    // onChange Handler
    const onChangeHandler = (Event: React.ChangeEvent<HTMLInputElement>) => {
        const element = { ...(register && { ...register(`${name}`, registerOptions) }) };
        if (Object.keys(element).length !== 0) element.onChange(Event);
        if (onChange) onChange(Event.target.value);
    };

    useEffect(() => {
        if (value) {
            setValue(name, value)
        }
    }, [name, setValue, value])

    return (
        <div className={className}>
            <label>
                {label && (
                    <span className='text-[14px] md:text-[16px] leading-[18.2px] md:leading-[20.8px] font-soraBold mb-[12px]'>
                        {label}
                        {((typeof registerOptions?.required === 'object' && registerOptions?.required.value) ||
                            (typeof registerOptions?.required === 'string' && registerOptions?.required)) && <span className='text-red-700'>*</span>}
                    </span>
                )}
              </label>
                <MantineInput
                    {...rest}
                    type={type}
                    placeholder={placeholder}
                    {...register(name, registerOptions)}
                    readOnly={readonly}
                    disabled={disabled}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={onChangeHandler}
                    classNames={{
                        input:'h-[46px] lg:h-[58px]'
                    }}
                />
                {iconPlaceholder && (
                    <span className={`icon ${label ? 'label' : 'no_label'}`}>{iconPlaceholder}</span>
                )}
            {!!errors && !!errors[name] && !value && (
                <div className="ErrorMessageStyle">
                    <ErrorMessage errors={errors} name={name} render={({ message }) => <p>{message}</p>} />
                </div>
            )}
        </div>
    );
}

export default Input;
