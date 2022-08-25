import React from 'react'

import DocCheckboxes from './DocCheckboxes'
import CustomDoc from './CustomDoc'

import { Button } from 'antd'

import { MdLibraryAdd } from 'react-icons/md'

import inputStyles from '../../../styles/Components/CustomInput.module.css'
import styles from '../../../styles/Pages/create-form-step1.module.css'

const CreateFormStep2 = () => {
	const [selectedCheckboxOptions, setSelectedCheckboxOptions] = React.useState<
		string[]
	>([])

	// React.useEffect(() => {
	// 	console.log(selectedCheckboxOptions)
	// }, [selectedCheckboxOptions])

	return (
		<div className={inputStyles.create__form__body}>
			<DocCheckboxes setSelectedCheckboxOptions={setSelectedCheckboxOptions} />
			<div
				style={{
					display: 'flex',
					position: 'relative',
					marginTop:"4%"
				}}
			>
				<CustomDoc />
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%',
						position: 'absolute',
						top: '0',
						right: '14vw',
					}}
				>
					<Button
						icon={<MdLibraryAdd size={30} />}
						style={{
							height: '60px',
							width: '60px',
							border: 'none',
							background: 'white',
							borderWidth: '1px',
							borderColor: 'black',
							borderRadius: '6px',
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default CreateFormStep2
