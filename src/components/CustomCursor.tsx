import { motion } from 'framer-motion'
import { useCursor } from '@/hooks/useCursor'
import { useCursorSettings, getAnimationSpeed, getSizeMultiplier } from '@/contexts/CursorContext'

export default function CustomCursor() {
  const { x, y, isPointer, isText, isGrabbing, isVisible, isHiding } = useCursor()
  const { settings } = useCursorSettings()

  // Don't render if cursor is disabled
  if (!settings.enabled || !isVisible) return null

  const animationConfig = getAnimationSpeed(settings.animationSpeed)
  const sizeMultiplier = getSizeMultiplier(settings.size)

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: x,
          top: y,
        }}
        animate={{
          scale: (isPointer ? 0.5 : isText ? 0.8 : isGrabbing ? 1.2 : 1) * sizeMultiplier,
          opacity: isHiding ? 0 : settings.opacity,
        }}
        transition={{
          type: "spring",
          stiffness: animationConfig.stiffness,
          damping: animationConfig.damping,
          mass: 0.5,
        }}
      >
        <div 
          className={`
            w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2
            ${isPointer 
              ? 'bg-batak-cream shadow-lg shadow-batak-brown-dark/50' 
              : isText 
                ? 'bg-batak-brown-light shadow-md shadow-batak-brown-medium/30' 
                : isGrabbing
                  ? 'bg-batak-brown-medium shadow-lg shadow-batak-brown-dark/40'
                  : 'bg-batak-brown-dark shadow-md shadow-batak-brown-medium/20'
            }
          `}
        />
      </motion.div>

      {/* Cursor ring/follower */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: x,
          top: y,
        }}
        animate={{
          scale: (isPointer ? 1.8 : isText ? 1.4 : isGrabbing ? 2.2 : 1) * sizeMultiplier,
          opacity: isHiding ? 0 : settings.opacity * 0.8,
          rotate: isGrabbing ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: animationConfig.stiffness * 0.3,
          damping: animationConfig.damping * 0.5,
          mass: 0.1,
          rotate: { duration: 0.3 }
        }}
      >
        <div 
          className={`
            w-8 h-8 rounded-full transform -translate-x-1/2 -translate-y-1/2
            border-2 transition-all duration-300
            ${isPointer 
              ? 'border-batak-cream bg-batak-brown-light/30 shadow-lg' 
              : isText 
                ? 'border-batak-brown-medium bg-batak-brown-light/15 shadow-md' 
                : isGrabbing
                  ? 'border-batak-brown-dark bg-batak-brown-medium/25 shadow-xl'
                  : 'border-batak-brown-medium bg-batak-brown-dark/10 shadow-sm'
            }
          `}
        />
      </motion.div>

      {/* Decorative Batak-inspired pattern cursor for clickable interactions */}
      {isPointer && settings.showDecorations && (
        <motion.div
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: x,
            top: y,
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{ 
            scale: sizeMultiplier, 
            rotate: 360,
            opacity: settings.opacity * 0.8,
          }}
          exit={{ scale: 0 }}
          transition={{
            type: "spring",
            stiffness: animationConfig.stiffness * 0.4,
            damping: animationConfig.damping * 0.4,
            rotate: { 
              duration: settings.animationSpeed === 'fast' ? 2 : settings.animationSpeed === 'slow' ? 4 : 3, 
              repeat: Infinity, 
              ease: "linear" 
            }
          }}
        >
          <div className="w-16 h-16 transform -translate-x-1/2 -translate-y-1/2">
            {/* Traditional Batak-inspired geometric pattern */}
            <svg 
              width="64" 
              height="64" 
              viewBox="0 0 64 64" 
              className="text-batak-brown-medium drop-shadow-lg"
            >
              {/* Outer diamond pattern */}
              <path
                d="M32 8 L48 24 L32 40 L16 24 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.6"
              />
              {/* Inner cross pattern */}
              <path
                d="M32 16 L40 24 L32 32 L24 24 Z M32 24 L36 28 L32 56 L28 28 Z"
                fill="currentColor"
                opacity="0.4"
              />
              {/* Central dot */}
              <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.8" />
              {/* Corner accents */}
              <circle cx="16" cy="24" r="1" fill="currentColor" opacity="0.6" />
              <circle cx="48" cy="24" r="1" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        </motion.div>
      )}

      {/* Text cursor indicator */}
      {isText && (
        <motion.div
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: x,
            top: y,
          }}
          initial={{ scaleY: 0 }}
          animate={{ 
            scaleY: [1, 0.8, 1],
            opacity: settings.opacity * 0.8,
          }}
          transition={{
            scaleY: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.2 }
          }}
        >
          <div 
            className="w-1 h-6 bg-batak-brown-medium transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80"
            style={{ transform: `translate(-50%, -50%) scale(${sizeMultiplier})` }}
          />
        </motion.div>
      )}

      {/* Grab cursor indicator */}
      {isGrabbing && (
        <motion.div
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: x,
            top: y,
          }}
          initial={{ scale: 0 }}
          animate={{ 
            scale: [sizeMultiplier, sizeMultiplier * 1.1, sizeMultiplier],
            opacity: settings.opacity * 0.9,
          }}
          transition={{
            scale: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.2 }
          }}
        >
          <div className="w-12 h-12 transform -translate-x-1/2 -translate-y-1/2">
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 48 48" 
              className="text-batak-brown-dark opacity-70"
            >
              {/* Hand/grip pattern */}
              <path
                d="M24 12 L32 20 L24 36 L16 20 Z M20 20 L28 20 M20 24 L28 24 M20 28 L28 28"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </>
  )
}
