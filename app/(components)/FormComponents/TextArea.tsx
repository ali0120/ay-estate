import { Textarea as MantineTextArea,TextareaProps } from '@mantine/core';
import { useFormContext, RegisterOptions } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface IProps extends TextareaProps {
	name: string;
	registerOptions?: RegisterOptions;
	placeholder?: string;
	label?: string;
	labelVisibility?: boolean;
	className?: string;
	value?: string;
	defaultValue?: string;
}

function Textarea({
	name,
	registerOptions,
	placeholder,
	label,
	className,
	...rest
}: IProps) {
	const { register, formState } = useFormContext();
	const { errors } = formState;

	return (
		<div className={className}>
			<label>
				{label && (
					<span className='text-[14px] md:text-[16px] leading-[18.2px] md:leading-[20.8px] font-soraBold mb-[12px]'>
						{label} {registerOptions?.required && <span className='text-red-700'>*</span>}
					</span>
				)}
			</label>
				<MantineTextArea
					{...rest} placeholder={placeholder} {...register(name, registerOptions)} />
			{!!errors && !!errors[name] && (
				<div className="ErrorMessageStyle">
					<ErrorMessage errors={errors} name={name} render={({ message }) => <p>{message}</p>} />
				</div>
			)}
		</div>
	);
}

export default Textarea;
