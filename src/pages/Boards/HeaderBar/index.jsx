import ModeSelect from '../../../components/ModeSelect/index.jsx'
import Box from '@mui/material/Box'

export default function HeaderBar() {
	return (
		<>
			<Box sx={{
				backgroundColor: 'primary.light',
				height: (theme) => theme.trello.headerBarHeight,
				display: 'flex',
				alignItems: 'center'
			}}>
				<ModeSelect />
			</Box>
		</>
	)
}
