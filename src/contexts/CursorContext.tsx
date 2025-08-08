import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface CursorSettings {
  enabled: boolean
  showDecorations: boolean
  animationSpeed: 'slow' | 'normal' | 'fast'
  size: 'small' | 'medium' | 'large'
  opacity: number
}

interface CursorContextType {
  settings: CursorSettings
  updateSettings: (newSettings: Partial<CursorSettings>) => void
  toggleCursor: () => void
}

const defaultSettings: CursorSettings = {
  enabled: true,
  showDecorations: true,
  animationSpeed: 'normal',
  size: 'medium',
  opacity: 0.8
}

const CursorContext = createContext<CursorContextType | undefined>(undefined)

export function CursorProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<CursorSettings>(defaultSettings)

  const updateSettings = (newSettings: Partial<CursorSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
  }

  const toggleCursor = () => {
    setSettings(prev => ({ ...prev, enabled: !prev.enabled }))
  }

  return (
    <CursorContext.Provider value={{ settings, updateSettings, toggleCursor }}>
      {children}
    </CursorContext.Provider>
  )
}

export function useCursorSettings() {
  const context = useContext(CursorContext)
  if (context === undefined) {
    throw new Error('useCursorSettings must be used within a CursorProvider')
  }
  return context
}

// Helper functions to get animation values based on settings
export function getAnimationSpeed(speed: 'slow' | 'normal' | 'fast') {
  switch (speed) {
    case 'slow':
      return { stiffness: 100, damping: 20 }
    case 'fast':
      return { stiffness: 800, damping: 30 }
    default:
      return { stiffness: 500, damping: 28 }
  }
}

export function getSizeMultiplier(size: 'small' | 'medium' | 'large') {
  switch (size) {
    case 'small':
      return 0.8
    case 'large':
      return 1.4
    default:
      return 1
  }
}
