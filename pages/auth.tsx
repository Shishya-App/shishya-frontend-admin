import React from 'react'

import AuthHeader from '../components/AuthHeader'

import { Typography, Layout } from 'antd'
import { Tabs } from 'antd'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

const { Content } = Layout
const { Title } = Typography
const { TabPane } = Tabs

const onChange = (key: string) => {
	console.log(key)
}

const Auth = () => {
	return (
		<Layout
			style={{
				background: '#F0F2F5',
				height: '100vh',
				display: 'flex',
				justifyContent: 'flex-start',
			}}
		>
			<AuthHeader />
			<Tabs
				size="large"
				defaultActiveKey="1"
				onChange={onChange}
				style={{ width: '30vw', margin: '2% auto 10% auto' }}
			>
				<TabPane tab="Login" key="1">
					<Login />
				</TabPane>
				<TabPane tab="Sign Up" key="2">
					<SignUp />
				</TabPane>
			</Tabs>
		</Layout>
	)
}

export default Auth
