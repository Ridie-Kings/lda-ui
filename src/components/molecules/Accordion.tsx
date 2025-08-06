import { useState } from "react";
import type { AccordionProps } from "../../interfaces/interfaces";
import { Minus, Plus } from "lucide-react";
import {Button} from "../atoms/Button";
import { TextArea } from "../..";

export default function Accordion({ title, type, labelContent, textContent, textareaLabel, textareaPlaceholder, onButtonClick, buttonLabel, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-medium">{title}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-gray-600" />
        ) : (
          <Plus className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-4">
          {type === "label" && (
            <p className="text-sm text-gray-600">{labelContent}</p>
          )}

          {type === "text" && (
            <>
              <p className="text-sm text-gray-600">{textContent}</p>
              <Button text={buttonLabel} variant="primary" onClick={onButtonClick} />
            </>
          )}

          {type === "textarea" && (
            <>
              <TextArea
                label={textareaLabel}
                placeholder={textareaPlaceholder}
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              />
              <Button text={buttonLabel} variant="primary" onClick={onButtonClick} />
            </>
          )}
        </div>
      )}
    </div>
  );
};