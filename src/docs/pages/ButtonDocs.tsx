import { Button } from '../../components/atoms/Button'
import { DocPageLayout, Example } from '../components/Example'

export default function ButtonDocs() {
  return (
    <DocPageLayout 
      title="Button"
      description="El componente Button permite a los usuarios realizar acciones con un solo clic."
    >
      <Example
        title="Botón básico"
        description="Uso básico del componente Button con texto."
        code={`<Button text="Click me" />`}
        component={<Button text="Click me" />}
      />

      <Example
        title="Variantes"
        description="Diferentes estilos visuales para distintos contextos."
        code={`<Button text="Primary" variant="primary" />
<Button text="Secondary" variant="secondary" />
<Button text="Tertiary" variant="tertiary" />`}
        component={
          <div className="flex gap-4">
            <Button text="Primary" variant="primary" />
            <Button text="Secondary" variant="secondary" />
            <Button text="Tertiary" variant="tertiary" />
          </div>
        }
      />

      <Example
        title="Tamaños"
        description="Diferentes tamaños para adaptarse a diversos contextos de UI."
        code={`<Button text="Small" size="sm" />
<Button text="Medium" size="md" />
<Button text="Large" size="lg" />`}
        component={
          <div className="flex gap-4 items-center">
            <Button text="Small" size="sm" />
            <Button text="Medium" size="md" />
            <Button text="Large" size="lg" />
          </div>
        }
      />

      <Example
        title="Estado deshabilitado"
        description="Botón en estado deshabilitado para prevenir interacciones."
        code={`<Button text="Disabled" disabled />`}
        component={<Button text="Disabled" disabled />}
      />

      <Example
        title="Con evento onClick"
        description="Botón que ejecuta una función al hacer clic."
        code={`<Button 
  text="Alert Button" 
  onClick={() => alert('¡Botón clickeado!')} 
/>`}
        component={
          <Button 
            text="Alert Button" 
            onClick={() => alert('¡Botón clickeado!')} 
          />
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Texto que se muestra en el botón</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">variant</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'primary' | 'secondary' | 'tertiary'</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'primary'</td>
                <td className="px-6 py-4 text-sm text-gray-500">Estilo visual del botón</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">size</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'sm' | 'md' | 'lg'</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'md'</td>
                <td className="px-6 py-4 text-sm text-gray-500">Tamaño del botón</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                <td className="px-6 py-4 text-sm text-gray-500">Deshabilita el botón</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onClick</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{'() => void'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Función que se ejecuta al hacer clic</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">type</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'button' | 'submit' | 'reset'</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'button'</td>
                <td className="px-6 py-4 text-sm text-gray-500">Tipo del botón HTML</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">className</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">''</td>
                <td className="px-6 py-4 text-sm text-gray-500">Clases CSS adicionales</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">icon</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">React.ReactNode</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Icono que se muestra junto al texto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DocPageLayout>
  )
}
