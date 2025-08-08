import { useState, useEffect, useRef } from 'react'

interface UseTypewriterOptions {
  texts: string[]
  typeSpeed?: number
  deleteSpeed?: number
  delayBetweenTexts?: number
  loop?: boolean
}

export function useTypewriter({
  texts,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
  loop = true,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (texts.length === 0) return

    const currentText = texts[currentTextIndex]
    
    const typeNextChar = () => {
      if (isWaiting) {
        timeoutRef.current = setTimeout(() => {
          setIsWaiting(false)
          setIsDeleting(true)
        }, delayBetweenTexts)
        return
      }

      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
          timeoutRef.current = setTimeout(typeNextChar, typeSpeed)
        } else {
          setIsWaiting(true)
          timeoutRef.current = setTimeout(typeNextChar, 0)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
          timeoutRef.current = setTimeout(typeNextChar, deleteSpeed)
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => {
            if (!loop && prev === texts.length - 1) {
              return prev 
            }
            return (prev + 1) % texts.length
          })
        }
      }
    }

    timeoutRef.current = setTimeout(typeNextChar, typeSpeed)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [displayText, currentTextIndex, isDeleting, isWaiting, texts, typeSpeed, deleteSpeed, delayBetweenTexts, loop])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [])

  return displayText
}