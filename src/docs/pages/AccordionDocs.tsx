import Accordion from '../../components/molecules/Accordion'
import { DocPageLayout, Example } from '../components/Example'

export default function AccordionDocs() {

  return (
    <DocPageLayout 
      title="Accordion"
      description="El componente Accordion permite mostrar y ocultar contenido de forma expandible."
    >
      <Example
        title="Accordion con etiqueta"
        description="Accordion simple que muestra solo texto informativo."
        code={`<Accordion 
  title="Información general" 
  type="label" 
  labelContent="Este es un contenido informativo que se muestra cuando se expande el accordion."
/>`}
        component={
          <Accordion 
            title="Información general" 
            type="label" 
            labelContent="Este es un contenido informativo que se muestra cuando se expande el accordion."
          />
        }
      />

      <Example
        title="Accordion con texto y botón"
        description="Accordion que incluye texto y un botón para realizar acciones."
        code={`<Accordion 
  title="Configuración" 
  type="text" 
  textContent="Aquí puedes configurar las opciones de tu aplicación."
  buttonLabel="Guardar configuración"
  onButtonClick={() => alert('Configuración guardada')}
/>`}
        component={
          <Accordion 
            title="Configuración" 
            type="text" 
            textContent="Aquí puedes configurar las opciones de tu aplicación."
            buttonLabel="Guardar configuración"
            onButtonClick={() => alert('Configuración guardada')}
          />
        }
      />

      <Example
        title="Accordion con textarea"
        description="Accordion que incluye un campo de texto para entrada de datos."
        code={`<Accordion 
  title="Escribir comentario" 
  type="textarea" 
  textareaLabel="Tu comentario"
  textareaPlaceholder="Escribe tu comentario aquí..."
  buttonLabel="Enviar comentario"
  onButtonClick={() => alert('Comentario enviado')}
/>`}
        component={
          <Accordion 
            title="Escribir comentario" 
            type="textarea" 
            textareaLabel="Tu comentario"
            textareaPlaceholder="Escribe tu comentario aquí..."
            buttonLabel="Enviar comentario"
            onButtonClick={() => alert('Comentario enviado')}
          />
        }
      />

      <Example
        title="Accordion abierto por defecto"
        description="Accordion que se muestra expandido desde el inicio."
        code={`<Accordion 
  title="Términos y condiciones" 
  type="label" 
  labelContent="Al usar esta aplicación, aceptas nuestros términos y condiciones..."
  defaultOpen={true}
/>`}
        component={
          <Accordion 
            title="Términos y condiciones" 
            type="label" 
            labelContent="Al usar esta aplicación, aceptas nuestros términos y condiciones..."
            defaultOpen={true}
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
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">title</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Título que se muestra en la cabecera del accordion</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">type</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"label" | "text" | "textarea"</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Tipo de contenido que se muestra en el accordion</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">labelContent</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Contenido de texto para type="label"</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">textContent</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Contenido de texto para type="text"</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">textareaLabel</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Etiqueta del textarea para type="textarea"</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">textareaPlaceholder</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Placeholder del textarea</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">buttonLabel</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Texto del botón (para type="text" y "textarea")</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onButtonClick</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{'() => void'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                <td className="px-6 py-4 text-sm text-gray-500">Función que se ejecuta al hacer clic en el botón</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">defaultOpen</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                <td className="px-6 py-4 text-sm text-gray-500">Si el accordion debe estar abierto por defecto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DocPageLayout>
  )
}
