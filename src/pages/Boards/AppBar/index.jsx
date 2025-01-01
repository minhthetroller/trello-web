import Box from '@mui/material/Box'

export default function AppBar() {
	return (
		<>
			<Box sx={{
				backgroundColor: 'primary.dark',
				height: (theme) => theme.trello.appBarHeight,
				display: 'flex',
				alignItems: 'center'
			}}>
				App bar
			</Box>
		</>
	)
}
