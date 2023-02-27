import React from 'react'
import Header from './components/common/Header'
import Sidebar from './components/common/Sidebar'

class WebLayout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: null
		}
	}
	
	render() {

		return (
			<div id="appMain">
				<Header />
				{/* <Sidebar /> */}
				<div className="wrapper">
					{React.cloneElement(this.props.children)}
				</div>
			</div>
		)
	}
}

export default WebLayout;
