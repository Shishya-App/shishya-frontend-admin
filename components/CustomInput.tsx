import React from 'react'
import { DatePicker, Input, Select } from 'antd'
import styles from '../styles/Components/CustomInput.module.css'

const { Option } = Select
const { TextArea } = Input

interface IProps {
	placeholder: string | undefined
	type: string
	data: any
	label: string
}

const CustomInput = ({ placeholder, type, data, label }: IProps) => {
	return (
		<div className={styles.input__wrapper}>
			<label className={styles.input__label}>{label}</label>
			<div className={styles.input__element}>
				{type === 'text' ? (
					<Input
						placeholder={placeholder}
						className={styles.input__element__comp}
					/>
				) : null}
				{type === 'date' ? (
					<DatePicker className={styles.input__element__comp} />
				) : null}
				{type === 'drop-down' ? (
					<Select
						defaultValue="Option1"
						className={styles.input__element__dropdown}
					>
						{data.map((item: any) => (
							<Option key={item.value} value={item.value}>
								{item.name}
							</Option>
						))}
					</Select>
				) : null}
				{type === 'textarea' ? (
					<TextArea rows={5} className={styles.input__element__comp} />
				) : null}
			</div>
		</div>
	)
}

export default CustomInput
