import './App.css'
import { useState } from 'react'
import { Tabs, Tab, Box } from '@mui/material'
import { SearchPage } from './pages/search'
import { SolvePage } from './pages/solve'
import { StudyPage } from './pages/study'
import { TopBar } from './components/TopBar'

const pages = [{
  label: 'Study',
  component: <StudyPage />
}, {
  label: 'Solve',
  component: <SolvePage />
}, {
  label: 'Search',
  component: <SearchPage />
}]

function App() {
  const [tabIndex, setTabIndex] = useState(1)

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  return (
    <Box>
      <TopBar/>
      <Tabs value={tabIndex} onChange={handleTabChange}>

        {pages.map((page, index) => (
          <Tab key={index} label={page.label} />
        ))}

      </Tabs>

      <Box>
        {pages[tabIndex].component}
      </Box>

    </Box>
  )
}

export default App;