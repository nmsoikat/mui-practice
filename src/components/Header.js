import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Badge, Grid, IconButton, InputBase, TextField } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatIcon from '@mui/icons-material/Chat';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
	root: {
		backgroundColor: '#fff'
	}
});

function Header() {
	const classes = useStyle();

	return (
		<AppBar position="static">
			<Toolbar className={classes.root}>
				<Grid container>
					<Grid item>
						<InputBase startAdornment={<SearchIcon />} placeholder="type here" />
					</Grid>
					<Grid item sm />
					<Grid item>
						<IconButton>
							<Badge badgeContent={4} color="secondary">
								<NotificationsActiveIcon />
							</Badge>
						</IconButton>

						<IconButton>
							<Badge badgeContent={2} color="secondary">
								<ChatIcon />
							</Badge>
						</IconButton>

						<IconButton>
							<PowerSettingsNewIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
