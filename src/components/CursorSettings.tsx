import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Settings, Eye, EyeOff, Zap, Gauge, Palette } from 'lucide-react'
import { useCursorSettings } from '@/contexts/CursorContext'

export default function CursorSettings() {
  const [isOpen, setIsOpen] = useState(false)
  const { settings, updateSettings, toggleCursor } = useCursorSettings()

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {/* Toggle Button */}
      <div className="relative group">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-12 h-12 p-0 bg-batak-brown-dark hover:bg-batak-brown-darker shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Cursor Settings"
        >
          <Settings className="h-5 w-5 text-batak-cream" />
        </Button>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-batak-brown-dark text-batak-cream text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
            Pengaturan Kursor
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-batak-brown-dark"></div>
          </div>
        )}
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-0 w-80 max-w-[calc(100vw-2rem)]"
          >
            <Card className="bg-batak-brown-light border-batak-brown-medium shadow-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-batak-brown-dark flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Pengaturan Kursor Batak
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Enable/Disable Cursor */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-batak-brown-dark">
                    Kursor Kustom
                  </span>
                  <Button
                    onClick={toggleCursor}
                    variant="ghost"
                    size="sm"
                    className={`
                      ${settings.enabled 
                        ? 'bg-batak-brown-medium text-batak-cream' 
                        : 'bg-batak-brown-muted text-batak-brown-dark'
                      }
                    `}
                  >
                    {settings.enabled ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </Button>
                </div>

                {/* Show Decorations */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-batak-brown-dark">
                    Hiasan Batak
                  </span>
                  <Button
                    onClick={() => updateSettings({ showDecorations: !settings.showDecorations })}
                    variant="ghost"
                    size="sm"
                    className={`
                      ${settings.showDecorations 
                        ? 'bg-batak-brown-medium text-batak-cream' 
                        : 'bg-batak-brown-muted text-batak-brown-dark'
                      }
                    `}
                    disabled={!settings.enabled}
                  >
                    <Zap className="h-4 w-4" />
                  </Button>
                </div>

                {/* Animation Speed */}
                <div className="space-y-2">
                  <span className="text-sm font-medium text-batak-brown-dark flex items-center gap-2">
                    <Gauge className="h-4 w-4" />
                    Kecepatan Animasi
                  </span>
                  <div className="flex gap-1">
                    {(['slow', 'normal', 'fast'] as const).map((speed) => (
                      <Button
                        key={speed}
                        onClick={() => updateSettings({ animationSpeed: speed })}
                        variant="ghost"
                        size="sm"
                        className={`
                          flex-1 text-xs
                          ${settings.animationSpeed === speed 
                            ? 'bg-batak-brown-medium text-batak-cream' 
                            : 'bg-batak-brown-muted text-batak-brown-dark'
                          }
                        `}
                        disabled={!settings.enabled}
                      >
                        {speed === 'slow' ? 'Lambat' : speed === 'fast' ? 'Cepat' : 'Normal'}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div className="space-y-2">
                  <span className="text-sm font-medium text-batak-brown-dark">
                    Ukuran Kursor
                  </span>
                  <div className="flex gap-1">
                    {(['small', 'medium', 'large'] as const).map((size) => (
                      <Button
                        key={size}
                        onClick={() => updateSettings({ size })}
                        variant="ghost"
                        size="sm"
                        className={`
                          flex-1 text-xs
                          ${settings.size === size 
                            ? 'bg-batak-brown-medium text-batak-cream' 
                            : 'bg-batak-brown-muted text-batak-brown-dark'
                          }
                        `}
                        disabled={!settings.enabled}
                      >
                        {size === 'small' ? 'Kecil' : size === 'large' ? 'Besar' : 'Sedang'}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Opacity */}
                <div className="space-y-2">
                  <span className="text-sm font-medium text-batak-brown-dark">
                    Transparansi: {Math.round(settings.opacity * 100)}%
                  </span>
                  <input
                    type="range"
                    min="0.3"
                    max="1"
                    step="0.1"
                    value={settings.opacity}
                    onChange={(e) => updateSettings({ opacity: parseFloat(e.target.value) })}
                    className="w-full h-2 bg-batak-brown-muted rounded-lg appearance-none cursor-pointer slider"
                    disabled={!settings.enabled}
                  />
                </div>

                {/* Info */}
                <div className="text-xs text-batak-brown-dark/70 pt-2 border-t border-batak-brown-medium/30">
                  💡 Kursor akan berubah saat mengarah ke tombol, link, atau area teks
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom slider styles */}
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #493628;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #493628;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}
