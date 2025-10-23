/**
 * Scrolls to a component and centers it in the viewport
 * @param componentId - The ID of the component to scroll to
 * @param _offset - Optional offset from center (default: 0) - reserved for future use
 */
export function scrollToComponent(componentId: string, _offset: number = 0): void {
  const element = document.getElementById(componentId)
  
  if (!element) {
    console.warn(`Component with id "${componentId}" not found`)
    return
  }

  // Scroll to element with smooth behavior and center it
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  })

  // Optional: Update URL hash without page reload
  if (window.history.pushState) {
    window.history.pushState(null, '', `#${componentId}`)
  }
}

/**
 * Handles hash change on page load to scroll to initial component
 */
export function handleInitialHash(): void {
  const hash = window.location.hash.slice(1)
  if (hash) {
    // Delay to ensure components are rendered
    setTimeout(() => {
      scrollToComponent(hash)
    }, 100)
  }
}
