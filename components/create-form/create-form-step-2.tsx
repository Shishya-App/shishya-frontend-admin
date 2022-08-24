import React from 'react'

import { Checkbox, Row } from 'antd'
import CustomInput from '../../components/CustomInput'

import styles from '../../styles/Components/CustomInput.module.css'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

const CreateFormStep2 = () => {
	const [checkboxOptions, setCheckboxOptions] = React.useState([
		'Apple',
		'Pear',
		'Orange',
		'Apple',
	])

	const checkboxChangeHandler = (e: CheckboxChangeEvent) => {
		console.log(e)
	}

	const checkboxItems = checkboxOptions.map((option) => {
		return (
			<Checkbox
				style={{
					margin: '2%',
				}}
				key={option}
				value={option}
				onChange={checkboxChangeHandler}
			>
				{option}
			</Checkbox>
		)
	})

	return (
		<div className={styles.create__form__body}>
			<div className={styles.form__element}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						width: '100%',
						justifyContent: 'flex-start',
					}}
				>
					<label className={styles.input__label}>Required Documents</label>
					<div
						style={{
							width: '60%',
							background: 'white',
							padding: '1% 3%',
							marginLeft: '10%',
						}}
					>
						<Checkbox.Group
							style={{
								width: '90%',
							}}
						>
							<Row>{checkboxItems}</Row>
						</Checkbox.Group>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateFormStep2
