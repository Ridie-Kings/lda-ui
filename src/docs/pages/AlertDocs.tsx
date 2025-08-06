import { Alert } from '../../components/molecules/Alert'
import { DocPageLayout, Example } from '../components/Example'

export default function AlertDocs() {
  return (
    <DocPageLayout 
      title="Alert"
      description="El componente Alert se usa para mostrar mensajes importantes al usuario."
    >
      <Example
        title="Tipos de Alert"
        description="Diferentes tipos de alertas para diversos contextos."
        code={`<Alert type="info" label="Información" text="Este es un mensaje informativo." />
<Alert type="success" label="Éxito" text="Operación completada exitosamente." />
<Alert type="warning" label="Advertencia" text="Ten cuidado con esta acción." />
<Alert type="error" label="Error" text="Ha ocurrido un error inesperado." />`}
        component={
          <div className="space-y-4 w-full">
            <Alert type="info" label="Información" text="Este es un mensaje informativo." />
            <Alert type="success" label="Éxito" text="Operación completada exitosamente." />
            <Alert type="warning" label="Advertencia" text="Ten cuidado con esta acción." />
            <Alert type="error" label="Error" text="Ha ocurrido un error inesperado." />
          </div>
        }
      />

      <Example
        title="Alert con botón de cerrar"
        description="Alert que puede ser cerrado por el usuario."
        code={`<Alert 
  type="success" 
  label="¡Bien hecho!" 
  text="Los cambios se han guardado correctamente."
  showClose={true}
  onClose={() => alert('Alert cerrado')}
/>`}
        component={
          <Alert 
            type="success" 
            label="¡Bien hecho!" 
            text="Los cambios se han guardado correctamente."
            showClose={true}
            onClose={() => alert('Alert cerrado')}
          />
        }
      />

      <Example
        title="Alert sin etiqueta"
        description="Alert con solo mensaje de texto."
        code={`<Alert type="warning" text="Recuerda guardar tus cambios antes de salir." />`}
        component={
          <Alert type="warning" text="Recuerda guardar tus cambios antes de salir." />
        }
      />
    </DocPageLayout>
  )
}
