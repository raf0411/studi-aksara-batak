import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Custom hook to handle page animations more reliably
 * Ensures animations trigger properly on route changes
 */
export function usePageAnimation() {
  const [isPageReady, setIsPageReady] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Reset animation state on route change
    setIsPageReady(false)
    
    // Small delay to ensure the page has mounted properly
    const timer = setTimeout(() => {
      setIsPageReady(true)
    }, 50)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return { isPageReady }
}
