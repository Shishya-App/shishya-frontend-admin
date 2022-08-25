import React from 'react'

import { Button } from 'antd'
import { DeleteOutlined, SaveOutlined } from '@ant-design/icons'

const CustomDoc = () => {
	return (
		<div
			style={{
				backgroundColor: 'white',
				borderRadius: '6px',
				padding: '2% 4%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				width: '75%',
			}}
		>
			<div style={{ width: '45%' }}>
				<input
					placeholder="Custom Document Name"
					style={{ width: '100%', border: '0', fontSize: '1.2rem' }}
				/>
				<div
					style={{ height: '1px', width: '100%', backgroundColor: '#A39797' }}
				/>
			</div>
			<div
				style={{
					display: 'flex',
					width: '30%',
					justifyContent: 'space-between',
				}}
			>
				<Button
					icon={<DeleteOutlined size={48} style={{ color: 'white' }} />}
					style={{
						border: 'none',
						width: '48px',
						background: 'red',
						borderRadius: '6px',
					}}
				/>
				<Button
					icon={<SaveOutlined style={{ color: 'white' }} />}
					style={{
						border: 'none',
						background: '#54C940',
						color: 'white',
						fontSize: '0.9rem',
						fontWeight: '600',
						borderRadius: '6px',
					}}
				>
					Save Document
				</Button>
			</div>
		</div>
	)
}

export default CustomDoc
