import { Badge } from '../../components/atoms/Badge'
import { DocPageLayout, Example } from '../components/Example'

export default function BadgeDocs() {
  return (
    <DocPageLayout 
      title="Badge"
      description="El componente Badge se usa para mostrar etiquetas, estados o categorías de forma compacta."
    >
      <Example
        title="Badge básico"
        description="Uso básico del componente Badge."
        code={`<Badge text="Nuevo" />`}
        component={<Badge text="Nuevo" />}
      />

      <Example
        title="Variantes"
        description="Diferentes variantes de color para representar distintos estados."
        code={`<Badge text="Éxito" variant="success" />
<Badge text="Advertencia" variant="warning" />
<Badge text="Error" variant="error" />
<Badge text="Info" variant="info" />
<Badge text="Neutral" variant="neutral" />`}
        component={
          <div className="flex gap-4 flex-wrap">
            <Badge text="Éxito" variant="success" />
            <Badge text="Advertencia" variant="warning" />
            <Badge text="Error" variant="error" />
            <Badge text="Info" variant="info" />
            <Badge text="Neutral" variant="neutral" />
          </div>
        }
      />

      <Example
        title="Tamaños"
        description="Diferentes tamaños para adaptarse a diversos contextos."
        code={`<Badge text="Pequeño" size="sm" />
<Badge text="Mediano" size="md" />`}
        component={
          <div className="flex gap-4 items-center">
            <Badge text="Pequeño" size="sm" />
            <Badge text="Mediano" size="md" />
          </div>
        }
      />

      <Example
        title="Con números"
        description="Perfecto para mostrar contadores o cantidades."
        code={`<Badge text={42} variant="error" />
<Badge text={99} variant="info" />
<Badge text="99+" variant="success" />`}
        component={
          <div className="flex gap-4">
            <Badge text={42} variant="error" />
            <Badge text={99} variant="info" />
            <Badge text="99+" variant="success" />
          </div>
        }
      />

      <Example
        title="En contexto"
        description="Ejemplo de cómo usar badges en un contexto real."
        code={`<div className="flex items-center gap-2">
  <span>Tareas pendientes</span>
  <Badge text={3} variant="warning" size="sm" />
</div>`}
        component={
          <div className="flex items-center gap-2">
            <span>Tareas pendientes</span>
            <Badge text={3} variant="warning" size="sm" />
          </div>
        }
      />

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prop
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Por defecto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descripción
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">text</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string | number</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Texto o número que se muestra en el badge</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">variant</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'success' | 'warning' | 'error' | 'info' | 'neutral'</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'neutral'</td>
                <td className="px-6 py-4 text-sm text-gray-500">Variante de color del badge</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">size</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'sm' | 'md'</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'md'</td>
                <td className="px-6 py-4 text-sm text-gray-500">Tamaño del badge</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">className</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">''</td>
                <td className="px-6 py-4 text-sm text-gray-500">Clases CSS adicionales</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">children</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">React.ReactNode</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Contenido adicional dentro del badge</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DocPageLayout>
  )
}
