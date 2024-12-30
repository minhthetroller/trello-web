import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function App() {
  const { mode, setMode } = useColorScheme()
  function changingMode(event) {
    setMode(event.target.value)
  }
  return (
    <>
      <FormControl sx={{ m:2, minWidth: 130 }}>
        <InputLabel id="mode-selecting-label">Mode</InputLabel>
        <Select
          labelId="mode-selecting-label"
          id="mode-select"
          value={mode}
          label="Mode"
          onChange={changingMode}
        >
          <MenuItem value='dark'>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <DarkModeOutlinedIcon fontSize='small'/> Dark
            </Box>
          </MenuItem>
          <MenuItem value='light'>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LightModeIcon fontSize='small'/> Light
            </Box>
          </MenuItem>
          <MenuItem value='system'>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SettingsBrightnessIcon fontSize='small'/> System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default App
