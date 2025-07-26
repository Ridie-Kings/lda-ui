# LDA UI Components

LDA UI es una librería de componentes React reutilizables, desarrollada en TypeScript y estilizada con Tailwind CSS. Su objetivo es acelerar el desarrollo de interfaces modernas, accesibles y consistentes en cualquier proyecto React, incluyendo aplicaciones Next.js.

- 🚀 **Fácil de usar**: Importa solo los componentes que necesitas.
- 🎨 **Estilos desacoplados**: Usa Tailwind CSS para máxima personalización.
- 🧩 **Tipado estricto**: Todos los componentes incluyen tipos TypeScript.
- ⚡ **Compatibilidad**: Funciona en proyectos ESM, CommonJS y Next.js.

## Instalación

```bash
pnpm add lda-ui
# o
npm install lda-ui
# o
yarn add lda-ui
```

## Uso

### Importar componentes

```tsx
import { Button, Card, Input } from 'lda-ui';

function App() {
  return (
    <div>
      <Button text="Click me" variant="primary" />
      <Input label="Nombre" />
      <Card title="Mi Card" description="Descripción del card" />
    </div>
  );
}
```

### Importar estilos (requerido)

```tsx
import 'lda-ui/styles';
// o si usas el CSS directamente
import 'lda-ui/dist/styles/tailwind.css';
```

## Componentes disponibles

- `Button` - **Botón personalizable**. Props: `text`, `variant` (`primary`, `secondary`, `tertiary`), `size` (`sm`, `md`, `lg`), `onClick`, `icon`, `disabled`, `type`, `className`.
  - _Ejemplo:_
    ```tsx
    <Button text="Guardar" variant="primary" size="md" onClick={...} />
    ```
- `Badge` - **Insignia para estados o conteos**. Props: `text`, `variant`, `size`, `className`, `children`.
  - _Ejemplo:_
    ```tsx
    <Badge text={3} variant="success" />
    ```
- `Card` - **Contenedor de contenido**. Props: `title`, `description`, `children`, `className`.
  - _Ejemplo:_
    ```tsx
    <Card title="Título" description="Texto descriptivo">Contenido</Card>
    ```
- `FileInput` - **Input para subir archivos**. Props: `label`, `accept`, `multiple`, `onChange`, `className`.
  - _Ejemplo:_
    ```tsx
    <FileInput label="Subir imagen" accept="image/*" onChange={...} />
    ```
- `Icon` - **Componente para mostrar iconos SVG**. Props: `name`, `size`, `color`, `className`.
  - _Ejemplo:_
    ```tsx
    <Icon name="check" size={24} color="#22c55e" />
    ```
- `Input` - **Campo de texto**. Props: `label`, `value`, `onChange`, `type`, `placeholder`, `disabled`, `className`.
  - _Ejemplo:_
    ```tsx
    <Input label="Email" type="email" value={email} onChange={...} />
    ```
- `Select` - **Selector desplegable**. Props: `label`, `options`, `value`, `onChange`, `disabled`, `className`.
  - _Ejemplo:_
    ```tsx
    <Select label="País" options={[{label: 'España', value: 'es'}]} value={pais} onChange={...} />
    ```
- `TabButton` - **Botón para pestañas**. Props: `active`, `onClick`, `children`, `className`.
  - _Ejemplo:_
    ```tsx
    <TabButton active={true} onClick={...}>General</TabButton>
    ```
- `TextArea` - **Área de texto multilínea**. Props: `label`, `value`, `onChange`, `rows`, `placeholder`, `disabled`, `className`.
  - _Ejemplo:_
    ```tsx
    <TextArea label="Descripción" value={desc} onChange={...} rows={4} />
    ```

## Desarrollo

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Build para producción
pnpm build:lib

# Lint
pnpm lint
```

## Licencia

MIT
