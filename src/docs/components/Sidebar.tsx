import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { componentGroups } from '../data/componentGroups'
import type { ComponentGroup, ComponentInfo } from '../types'

interface SidebarProps {
  selectedComponent: string
  onSelectComponent: (componentId: string) => void
}

interface GroupItemProps {
  group: ComponentGroup
  selectedComponent: string
  onSelectComponent: (componentId: string) => void
}

function GroupItem({ group, selectedComponent, onSelectComponent }: GroupItemProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  
  return (
    <div className="mb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center w-full px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
      >
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 mr-2" />
        ) : (
          <ChevronRight className="w-4 h-4 mr-2" />
        )}
        {group.name}
      </button>
      
      {isExpanded && (
        <div className="ml-6 mt-1 space-y-1">
          {group.components.map((component: ComponentInfo) => (
            <button
              key={component.id}
              onClick={() => onSelectComponent(component.id)}
              className={`block w-full px-3 py-2 text-left text-sm rounded-md transition-colors ${
                selectedComponent === component.id
                  ? 'bg-red-50 text-red-700 border-r-2 border-red-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="font-medium">{component.name}</div>
              <div className="text-xs text-gray-500 mt-1">{component.description}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Sidebar({ selectedComponent, onSelectComponent }: SidebarProps) {
  return (
    <div className="w-80 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">LDA UI Components</h1>
        <p className="text-sm text-gray-600 mt-1">Librería de componentes React</p>
      </div>
      
      <div className="p-4">
        {componentGroups.map((group) => (
          <GroupItem
            key={group.name}
            group={group}
            selectedComponent={selectedComponent}
            onSelectComponent={onSelectComponent}
          />
        ))}
      </div>
    </div>
  )
}
