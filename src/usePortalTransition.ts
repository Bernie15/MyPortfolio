import { useEffect, useRef } from 'react'

/**
 * Observes elements with `[data-portal]` and adds the `portal-visible` class
 * when they scroll into view, triggering a circular clip-path reveal effect.
 */
export default function usePortalTransition() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Wait one frame so the browser paints the initial hidden state first;
    // without this the CSS transition has no "from" frame and never plays.
    const rafId = requestAnimationFrame(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              // Double-rAF ensures the transition triggers reliably
              requestAnimationFrame(() => {
                entry.target.classList.add('portal-visible')
              })
              observerRef.current?.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
      )

      const sections = document.querySelectorAll('[data-portal]')
      sections.forEach((el) => observerRef.current?.observe(el))
    })

    return () => {
      cancelAnimationFrame(rafId)
      observerRef.current?.disconnect()
    }
  }, [])
}
