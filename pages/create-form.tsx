import React from 'react'
import styles from '../styles/Pages/create-form.module.css'
import CreateFormStatus from '../components/CreateFormStatus'
import CustomButton from '../components/CustomButton'

import CreateFormStep1 from '../components/create-form/create-form-step-1'
import CreateFormStep2 from '../components/create-form/create-form-step-2'
import CreateFormStep3 from '../components/create-form/create-form-step-3'

const CreateForm = () => {
	const [step, setStep] = React.useState(1)

	const handleStep = () => {
		switch (step) {
			case 1:
				return <CreateFormStep1 />
			case 2:
				return <CreateFormStep2 />
			case 3:
				return <CreateFormStep3 />
			default:
				return null
		}
	}

	return (
		<div className={styles.form__components}>
			<p className={styles.create__form__title}>Create New Form</p>
			<div className={styles.create__form__status__wrap}>
				<CreateFormStatus />
			</div>
			{handleStep()}
			<div className={styles.button__wrapper}>
				<div className={styles.button__internal__wrapper}>
					{step > 1 ? (
						<CustomButton
							handleClick={() => setStep(step - 1)}
							title={'Back'}
						/>
					) : null}
				</div>
				<div className={styles.button__internal__wrapper}>
					{step < 3 ? (
						<CustomButton
							handleClick={() => setStep((prevStep) => prevStep + 1)}
							title={'Next'}
						/>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default CreateForm
