import React from 'react';
import './sidebar.css'


function SideBar(){

	return(

		<>


			<div className = "sidebar-container">

				<h4 className = "menu-heading">  Menu </h4>

				<ul className = "menu">

					<li > <a  href = "#" > <i class="fas fa-home icon"></i> <span className = "manu-text">  Home</span> </a> </li>
					<li > <a href = "#" > <i class="fas fa-address-card icon"></i> <span className = "manu-text">  About </span></a> </li>
					<li > <a href = "#" > <i class="fas fa-file-signature icon"></i> <span className = "manu-text">   Contact </span></a> </li>
					<li > <a href = "#" > <i class="fas fa-cog icon"></i> <span className = "manu-text">   setting </span> </a> </li>
					

				</ul>
			</div>
          

		</>
		)
}


export default SideBar;