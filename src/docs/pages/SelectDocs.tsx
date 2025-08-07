import { useState } from 'react'
import { Select } from '../../components/atoms/Select'
import { DocPageLayout, Example } from '../components/Example'

export default function SelectDocs() {
  const [value, setValue] = useState('')
  const [valueError, setValueError] = useState('')
  const [valueReadOnly, setValueReadOnly] = useState('option1')
  const options = [
    { label: 'Selecciona una opción', value: '' },
    { label: 'Opción 1', value: 'option1' },
    { label: 'Opción 2', value: 'option2' },
    { label: 'Opción 3', value: 'option3' },
  ]

  return (
    <DocPageLayout 
      title="Select"
      description="El componente Select permite seleccionar una opción de una lista. Soporta label, helperText, error, solo lectura y tooltips."
    >
      <Example
        title="Select básico"
        code={`<Select value={value} onChange={e => setValue(e.target.value)} options={options} />`}
        component={
          <Select value={value} onChange={e => setValue(e.target.value)} options={options} />
        }
      />

      <Example
        title="Con label y helperText"
        code={`<Select label="Selecciona una opción" helperText="Texto de ayuda" value={value} onChange={e => setValue(e.target.value)} options={options} />`}
        component={
          <Select label="Selecciona una opción" helperText="Texto de ayuda" value={value} onChange={e => setValue(e.target.value)} options={options} />
        }
      />

      <Example
        title="Con error"
        code={`<Select label="Con error" error="Mensaje de error" value={valueError} onChange={e => setValueError(e.target.value)} options={options} />`}
        component={
          <Select label="Con error" error="Mensaje de error" value={valueError} onChange={e => setValueError(e.target.value)} options={options} />
        }
      />

      <Example
        title="Solo lectura (readOnly)"
        code={`<Select label="Solo lectura" readOnly value={valueReadOnly} onChange={e => setValueReadOnly(e.target.value)} options={options} />`}
        component={
          <Select label="Solo lectura" readOnly value={valueReadOnly} onChange={e => setValueReadOnly(e.target.value)} options={options} />
        }
      />

      <Example
        title="Con tooltip en el label"
        code={`<Select label="Con tooltip" labelTooltip="Información adicional" value={value} onChange={e => setValue(e.target.value)} options={options} />`}
        component={
          <Select label="Con tooltip" labelTooltip="Información adicional" value={value} onChange={e => setValue(e.target.value)} options={options} />
        }
      />
    </DocPageLayout>
  )
}