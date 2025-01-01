import Box from '@mui/material/Box'

export default function AppContent() {
	return (
		<>
			<Box sx={{
				backgroundColor: 'primary.main',
				height: (theme) => `calc(100vh - ${theme.trello.headerBarHeight} - ${theme.trello.appBarHeight})`,
				display: 'flex',
				alignItems: 'center'
			}}>
				App content
			</Box>
		</>
	)
}
