import React, { useState } from "react";
import { Switch } from "../../components/atoms/Switch";
import { Example } from "../components/Example";

export default function SwitchDocs() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-2">Switch</h1>
      <p className="text-gray-700 mb-4">
        El componente <code>Switch</code> permite alternar entre dos estados (on/off) de forma accesible y moderna.
      </p>
      <Example
        title="Switch básico"
        code={`<Switch checked={checked} onChange={e => setChecked(e.target.checked)} label="Activar opción" />`}
        component={
          <Switch checked={checked} onChange={e => setChecked(e.target.checked)} label="Activar opción" />
        }
      />
      <Example
        title="Switch deshabilitado"
        code={`<Switch checked={false} onChange={() => {}} label="Deshabilitado" disabled />`}
        component={
          <Switch checked={false} onChange={() => {}} label="Deshabilitado" disabled />
        }
      />
    </div>
  );
}
