
import { useState } from "react";
import { Slider } from "../../components/atoms/Slider";
import { Example } from "../components/Example";

export default function SliderDocs() {
  const [value, setValue] = useState(1);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-2">Slider</h1>
      <p className="text-gray-700 mb-4">
        El componente <code>Slider</code> permite seleccionar un valor numérico dentro de un rango, mostrando el valor actual a la derecha. Es ideal para filtros, formularios y controles interactivos.
      </p>
      <Example
        code={`<Slider label=\"Cantidad de resultados\" min={1} max={10} value={value} onChange={e => setValue(Number(e.target.value))} />`}
        title="Slider básico"
        component={
          <Slider
            label="Cantidad de resultados"
            min={1}
            max={4}
            value={value}
            onChange={e => setValue(Number(e.target.value))}
          />
        }
      />
      <h2 className="text-xl font-semibold mt-6 mb-2">Props</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li><b>label</b>: string — Etiqueta opcional que se muestra arriba del slider.</li>
        <li><b>value</b>: number — Valor actual del slider (controlado).</li>
        <li><b>min</b>: number — Valor mínimo (por defecto 0).</li>
        <li><b>max</b>: number — Valor máximo (por defecto 100).</li>
        <li><b>step</b>: number — Paso entre valores (por defecto 1).</li>
        <li><b>onChange</b>: función — Callback para manejar el cambio de valor.</li>
        <li><b>className</b>: string — Clases para el contenedor.</li>
        <li><b>inputClassName</b>: string — Clases para el input tipo range.</li>
        <li>...rest: Cualquier otra prop válida para <code>&lt;input type="range" /&gt;</code>.</li>
      </ul>
    </div>
  );
}
