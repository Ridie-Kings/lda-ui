import { DocPageLayout, Example } from '../components/Example'

export default function TabButtonDocs() {
  return (
    <DocPageLayout 
      title="TabButton"
      description="El componente TabButton se usa para navegación por pestañas."
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
