import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import type { ExampleProps } from '../types'

export function Example({ title, description, code, component }: ExampleProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </div>
      
      <div className="p-6 bg-white">
        <div className="flex items-center justify-center min-h-24 border border-gray-200 rounded-lg bg-gray-50 mb-4">
          {component}
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Código:</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  Copiar
                </>
              )}
            </button>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

interface DocPageLayoutProps {
  title: string
  description: string
  children: React.ReactNode
}

export function DocPageLayout({ title, description, children }: DocPageLayoutProps) {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      
      <div className="space-y-8">
        {children}
      </div>
    </div>
  )
}
