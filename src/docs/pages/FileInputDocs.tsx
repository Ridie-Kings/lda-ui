import { DocPageLayout, Example } from '../components/Example'

export default function FileInputDocs() {
  return (
    <DocPageLayout 
      title="FileInput"
      description="El componente FileInput permite subir archivos."
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
