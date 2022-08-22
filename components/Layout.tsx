import React, { useState } from 'react'
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
const { Content, Sider } = Layout
import styles from '../styles/Components/Layout.module.css'
import CustomHeader from '../components/Header'

interface IProps {
	children: React.ReactNode
}

const items1 = ['1', '2', '3'].map((key) => ({
	key,
	label: `nav ${key}`,
}))

const items2 = [
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
	LaptopOutlined,
	NotificationOutlined,
].map((icon, index) => {
	const key = String(index + 1)
	return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: `subnav ${key}`,
		children: new Array(4).fill(null).map((_, j) => {
			const subKey = index * 4 + j + 1
			return {
				key: subKey,
				label: `option${subKey}`,
			}
		}),
	}
})

const CustomLayout = ({ children }: IProps) => {
	const [collapsed, setCollapsed] = useState(false)
	return (
		<Layout style={{ height: '100vh', overflowY: 'clip' }}>
			<Layout>
				<Sider
					width={230}
					className={styles.custom__style}
					collapsible
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
				>
					<div
						style={{
							height: '20%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'white'
						}}
					>
						{!collapsed ? (
							<p className={styles.side__panel__title}>SHISHYA</p>
						) : null}
					</div>

					<Menu
						mode="inline"
						defaultOpenKeys={['sub1']}
						style={{
							height: '100%',
							borderRight: 0,
						}}
						items={items2}
					/>
				</Sider>
				<Layout
					style={{
						padding: '0 24px 24px',
					}}
				>
					<Content
						className="site-layout-background"
						style={{
							margin: 0,
							minHeight: 280,
						}}
					>
						<CustomHeader />
						<Content className={styles.custom__content}>{children}</Content>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default CustomLayout
