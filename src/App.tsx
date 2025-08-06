import { useState } from 'react'
import './styles/index.css'
import Sidebar from './docs/components/Sidebar'
import ComponentDocs from './docs/components/ComponentDocs'

function App() {
  const [selectedComponent, setSelectedComponent] = useState<string>('introduction')

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        selectedComponent={selectedComponent} 
        onSelectComponent={setSelectedComponent} 
      />
      <div className="flex-1 overflow-auto">
        <ComponentDocs selectedComponent={selectedComponent} />
      </div>
    </div>
  )
}

export default App
