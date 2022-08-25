import React from 'react'
import styles from '../../styles/Pages/create-form-step1.module.css'
import CustomInput from '../../components/CustomInput'

const CreateFormStep1 = () => {
	const academicYearData = [
		{
			value: '2020/24',
			name: '2020/24',
		},
		{
			value: '2021/25',
			name: '2021/25',
		},
		{
			value: '2022/26',
			name: '2022/26',
		},
		{
			value: '2023/27',
			name: '2023/27',
		},
	]

	return (
		<div className={styles.create__form__body}>
			<div className={styles.form__element}>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={undefined}
						label={'Form Title'}
						placeholder={'Enter the Title'}
						type={'text'}
					/>
				</div>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={academicYearData}
						label={'Academic Year'}
						placeholder={'Select'}
						type={'drop-down'}
					/>
				</div>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={undefined}
						label={'Deadline'}
						placeholder={'Select a date'}
						type={'date'}
					/>
				</div>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={undefined}
						label={'Description'}
						placeholder={'Write your instructions here'}
						type={'textarea'}
					/>
				</div>
			</div>
		</div>
	)
}

export default CreateFormStep1
