import { Input } from '../../components/atoms/Input'
import { DocPageLayout, Example } from '../components/Example'

export default function InputDocs() {
  return (
    <DocPageLayout 
      title="Input"
      description="El componente Input permite la entrada de texto del usuario."
    >
      <Example
        title="Input básico"
        code={`<Input />`}
        component={<Input />}
      />

      <Example
        title="Input con etiqueta"
        code={`<Input label="Nombre de usuario" />`}
        component={<Input label="Nombre de usuario" />}
      />

      <Example
        title="Input con error"
        code={`<Input label="Email" error="Este campo es requerido" />`}
        component={<Input label="Email" error="Este campo es requerido" />}
      />
    </DocPageLayout>
  )
}
