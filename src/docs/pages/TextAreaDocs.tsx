import { useState } from 'react'
import { TextArea } from '../../components/atoms/TextArea'
import { DocPageLayout, Example } from '../components/Example'

export default function TextAreaDocs() {
  const [value, setValue] = useState('')
  
  return (
    <DocPageLayout 
      title="TextArea"
      description="El componente TextArea permite la entrada de texto multilínea."
    >
      <Example
        title="TextArea básico"
        code={`<TextArea 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
  placeholder="Escribe aquí..."
/>`}
        component={
          <TextArea 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            placeholder="Escribe aquí..."
          />
        }
      />

      <Example
        title="TextArea con etiqueta"
        code={`<TextArea 
  label="Comentarios"
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
  placeholder="Escribe tus comentarios..."
/>`}
        component={
          <TextArea 
            label="Comentarios"
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            placeholder="Escribe tus comentarios..."
          />
        }
      />
    </DocPageLayout>
  )
}
