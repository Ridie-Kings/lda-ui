import { DocPageLayout } from '../components/Example'

export default function IntroductionDocs() {
  return (
    <DocPageLayout 
      title="LDA UI Components"
      description="Una librería moderna de componentes React diseñada para ser flexible, accesible y fácil de usar."
    >
      <div className="prose prose-gray max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bienvenido</h2>
        <p className="text-gray-600 mb-6">
          Esta librería contiene una colección de componentes React reutilizables organizados siguiendo 
          la metodología de Atomic Design. Cada componente está diseñado para ser:
        </p>
        
        <ul className="space-y-2 text-gray-600 mb-8">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span><strong>Reutilizable:</strong> Puede ser usado en múltiples contextos</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span><strong>Consistente:</strong> Sigue patrones de diseño unificados</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span><strong>Accesible:</strong> Cumple con estándares de accesibilidad</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span><strong>Tipado:</strong> Incluye tipos TypeScript completos</span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Organización</h2>
        <p className="text-gray-600 mb-4">
          Los componentes están organizados en dos categorías principales:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Átomos</h3>
            <p className="text-gray-600 text-sm mb-3">
              Componentes básicos e indivisibles que forman la base del sistema.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Button</li>
              <li>• Input</li>
              <li>• Badge</li>
              <li>• Card</li>
              <li>• Y más...</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Moléculas</h3>
            <p className="text-gray-600 text-sm mb-3">
              Combinaciones de átomos que forman componentes más complejos.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Accordion</li>
              <li>• Alert</li>
              <li>• Navigation</li>
              <li>• Forms</li>
              <li>• Y más...</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Instalación</h2>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm mb-6">
          <code>npm install lda-ui</code>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Uso básico</h2>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm mb-6">
          <code>{`import { Button, Card } from 'lda-ui'

function App() {
  return (
    <Card>
      <Button text="Hola mundo" onClick={() => alert('¡Hola!')} />
    </Card>
  )
}`}</code>
        </div>

        <p className="text-gray-600">
          Navega por el sidebar para explorar todos los componentes disponibles y ver ejemplos de uso.
        </p>
      </div>
    </DocPageLayout>
  )
}
