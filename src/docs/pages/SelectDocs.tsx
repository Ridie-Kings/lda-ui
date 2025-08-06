import { useState } from 'react'
import { Select } from '../../components/atoms/Select'
import { DocPageLayout, Example } from '../components/Example'

export default function SelectDocs() {
  const [value, setValue] = useState('')
  
  const options = [
    { label: 'Selecciona una opción', value: '' },
    { label: 'Opción 1', value: 'option1' },
    { label: 'Opción 2', value: 'option2' },
    { label: 'Opción 3', value: 'option3' },
  ]
  
  return (
    <DocPageLayout 
      title="Select"
      description="El componente Select permite seleccionar una opción de una lista."
    >
      <Example
        title="Select básico"
        code={`const options = [
  { label: 'Selecciona una opción', value: '' },
  { label: 'Opción 1', value: 'option1' },
  { label: 'Opción 2', value: 'option2' },
  { label: 'Opción 3', value: 'option3' },
]

<Select 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
  options={options}
/>`}
        component={
          <Select 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            options={options}
          />
        }
      />
    </DocPageLayout>
  )
}
