import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { RegisterOptions, useFormContext, Controller } from 'react-hook-form';
import { Checkbox, CheckboxProps } from '@mantine/core';

interface IProps extends Omit<CheckboxProps, 'value'> {
	name: string;
	label: string;
	registerOptions?: RegisterOptions;
}

function CheckBox({ name, registerOptions,label, ...rest }: IProps) {
	const { control, formState } = useFormContext();
	const { errors } = formState;

	return (
		<div>
			<Controller
				name={name}
				control={control}
				rules={registerOptions}
				render={({ field: { onChange, value } }) => (
					<Checkbox {...rest} checked={value || false} onChange={onChange} label={     <span className='text-[12px] md:text-[16px] leading-[18.2px] md:leading-[20.8px] font-soraMedium md:font-soraBold mb-[12px]'>
                        {label}
                        {((typeof registerOptions?.required === 'object' && registerOptions?.required.value) ||
                            (typeof registerOptions?.required === 'string' && registerOptions?.required)) && <span className='text-red-700'>*</span>}
                    </span>} />
				)}
			/>
			
            {!!errors && !!errors[name] && (
                <div className="ErrorMessageStyle !m-0">
                    <ErrorMessage errors={errors} name={name} render={({ message }) => <p>{message}</p>} />
                </div>
            )}
		</div>
	);
}

export default CheckBox;
