// Exportar todos los componentes
export { default as Button } from './components/atoms/Button';
export { default as Badge } from './components/atoms/Badge';
export { default as Card } from './components/atoms/Card';
export { default as FileInput } from './components/atoms/FileInput';
export { default as Icon } from './components/atoms/Icon';
export { default as Input } from './components/atoms/Input';
export { default as Select } from './components/atoms/Select';
export { default as TabButton } from './components/atoms/TabButton';
export { default as TextArea } from './components/atoms/TextArea';

// Exportar interfaces/tipos
export type {
  ButtonProps,
  BadgeProps,
  CardProps,
  FileInputProps,
  IconProps,
  InputProps,
  SelectProps,
  TabButtonProps,
  TextareaProps
} from './interfaces/interfaces';

// Exportar estilos CSS
import './index.css';
