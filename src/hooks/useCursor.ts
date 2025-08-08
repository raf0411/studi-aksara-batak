import { useEffect, useState, useCallback } from 'react'

interface CursorState {
  x: number
  y: number
  isPointer: boolean
  isText: boolean
  isGrabbing: boolean
  isVisible: boolean
  isHiding: boolean
}

export function useCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isPointer: false,
    isText: false,
    isGrabbing: false,
    isVisible: false,
    isHiding: false,
  })

  const updateCursorType = useCallback((element: HTMLElement) => {
    const computedStyle = window.getComputedStyle(element)
    const cursor = computedStyle.cursor
    
    // Check for clickable elements
    const isClickable = element.tagName === 'BUTTON' || 
                       element.tagName === 'A' || 
                       !!element.closest('button') || 
                       !!element.closest('a') ||
                       element.hasAttribute('onclick') ||
                       cursor === 'pointer'

    // Check for text input elements
    const isTextInput = element.tagName === 'INPUT' || 
                       element.tagName === 'TEXTAREA' ||
                       element.isContentEditable ||
                       cursor === 'text'

    // Check for draggable elements
    const isDraggable = element.draggable || 
                       cursor === 'grab' || 
                       cursor === 'grabbing'

    setCursorState(prev => ({
      ...prev,
      isPointer: isClickable,
      isText: isTextInput,
      isGrabbing: isDraggable,
    }))
  }, [])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setCursorState(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
        isVisible: true,
        isHiding: false,
      }))
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      updateCursorType(target)
    }

    const handleMouseLeave = () => {
      setCursorState(prev => ({
        ...prev,
        isHiding: true,
      }))
      
      setTimeout(() => {
        setCursorState(prev => ({
          ...prev,
          isVisible: false,
        }))
      }, 150)
    }

    const handleMouseEnter = () => {
      setCursorState(prev => ({
        ...prev,
        isHiding: false,
        isVisible: true,
      }))
    }

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [updateCursorType])

  return cursorState
}
