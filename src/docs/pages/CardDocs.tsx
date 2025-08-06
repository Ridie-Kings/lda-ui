import { InfoCard } from '../../components/atoms/Card'
import { DocPageLayout, Example } from '../components/Example'

export default function CardDocs() {
  return (
    <DocPageLayout 
      title="Card"
      description="El componente Card proporciona un contenedor para agrupar contenido relacionado."
    >
      <Example
        title="Card básico"
        code={`<InfoCard title="Título de la tarjeta" description="Esta es la descripción de la tarjeta." />`}
        component={<InfoCard title="Título de la tarjeta" description="Esta es la descripción de la tarjeta." />}
      />
    </DocPageLayout>
  )
}
