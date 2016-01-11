import React from 'react'
import AppStore from 'AppStore'

export default class Menu extends React.Component {
	render() {
		var menuData = AppStore.menuContent()
		var menuItems = menuData.map((item, index)=>{
			var pathUrl = '#' + item.url
			return(
				<li key={index}><a href={pathUrl}>{item.name}</a></li>
			)
		})
		return (
			<div ref='menu' id='menu'> 
				{menuItems}
			</div>
		)
	}
}