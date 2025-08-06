import type { ComponentGroup } from '../types'

export const componentGroups: ComponentGroup[] = [
  {
    name: "Introducción",
    components: [
      {
        id: "introduction",
        name: "Bienvenida",
        description: "Introducción a la librería de componentes"
      }
    ]
  },
  {
    name: "Átomos",
    components: [
      {
        id: "button",
        name: "Button",
        description: "Botón básico con diferentes variantes"
      },
      {
        id: "badge",
        name: "Badge",
        description: "Etiqueta para mostrar estados o categorías"
      },
      {
        id: "input",
        name: "Input",
        description: "Campo de entrada de texto"
      },
      {
        id: "textarea",
        name: "TextArea",
        description: "Campo de texto multilínea"
      },
      {
        id: "select",
        name: "Select",
        description: "Lista desplegable de opciones"
      },
      {
        id: "card",
        name: "Card",
        description: "Contenedor básico para agrupar contenido"
      },
      {
        id: "icon",
        name: "Icon",
        description: "Iconos con diferentes tamaños"
      },
      {
        id: "fileinput",
        name: "FileInput",
        description: "Campo para subir archivos"
      },
      {
        id: "tabbutton",
        name: "TabButton",
        description: "Botón para navegación por pestañas"
      },
      {
        id: "slider",
        name: "Slider",
        description: "Control deslizante para seleccionar valores numéricos"
      }
    ]
  },
  {
    name: "Moléculas",
    components: [
      {
        id: "accordion",
        name: "Accordion",
        description: "Panel expandible con contenido"
      },
      {
        id: "alert",
        name: "Alert",
        description: "Mensaje de notificación con diferentes tipos"
      }
    ]
  }
]
