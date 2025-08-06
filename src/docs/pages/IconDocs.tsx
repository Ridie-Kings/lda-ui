import { DocPageLayout, Example } from '../components/Example'

export default function IconDocs() {
  return (
    <DocPageLayout 
      title="Icon"
      description="El componente Icon permite mostrar iconos de diferentes tamaños."
    >
      <Example
        title="Documentación pendiente"
        description="Esta página está en construcción."
        code={`// Próximamente`}
        component={<div className="text-gray-500">Documentación en desarrollo</div>}
      />
    </DocPageLayout>
  )
}
