import Container from '@mui/material/Container'
import HeaderBar from './HeaderBar/index.jsx'
import AppBar from './AppBar/index.jsx'
import AppContent from './AppContent/index.jsx'

function Board() {
	return (
		<>
			<Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
				<HeaderBar />
				<AppBar />
				<AppContent />
			</Container>
		</>
	)
}

export default Board
