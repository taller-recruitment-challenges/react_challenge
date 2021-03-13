import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import PeopleIcon from '@material-ui/icons/People';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

const NavBar = () => {

	return <div><Divider/>
		<List>
			<ListItem button>
				<ListItemIcon>
					<PeopleIcon/>
				</ListItemIcon>
				<ListItemText primary="Usuarios"/>
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<PlaylistAddCheck/>
				</ListItemIcon>
				<ListItemText primary="To Do"/>
			</ListItem>
		</List>
		<Divider/>
	</div>
};

export default NavBar;
