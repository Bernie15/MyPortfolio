import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  color: string
}

interface GearShape {
  x: number
  y: number
  radius: number
  teeth: number
  rotation: number
  speed: number
  opacity: number
  color: string
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles
    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      color: ['#7c5cfc', '#5ce1e6', '#c77dff', '#67c0f4'][Math.floor(Math.random() * 4)],
    }))

    // Create gear shapes
    const gears: GearShape[] = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 30 + 20,
      teeth: Math.floor(Math.random() * 4) + 6,
      rotation: Math.random() * Math.PI * 2,
      speed: (Math.random() - 0.5) * 0.008,
      opacity: Math.random() * 0.08 + 0.03,
      color: ['#7c5cfc', '#5ce1e6', '#c77dff'][Math.floor(Math.random() * 3)],
    }))

    const drawGear = (gear: GearShape) => {
      ctx.save()
      ctx.translate(gear.x, gear.y)
      ctx.rotate(gear.rotation)
      ctx.globalAlpha = gear.opacity
      ctx.strokeStyle = gear.color
      ctx.lineWidth = 1.5

      // Outer ring with teeth
      ctx.beginPath()
      const outerR = gear.radius
      const innerR = gear.radius * 0.7
      const toothDepth = gear.radius * 0.2
      const steps = gear.teeth * 2

      for (let i = 0; i <= steps; i++) {
        const angle = (i / steps) * Math.PI * 2
        const r = i % 2 === 0 ? outerR + toothDepth : outerR
        const x = Math.cos(angle) * r
        const y = Math.sin(angle) * r
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.stroke()

      // Inner circle
      ctx.beginPath()
      ctx.arc(0, 0, innerR, 0, Math.PI * 2)
      ctx.stroke()

      // Center dot
      ctx.beginPath()
      ctx.arc(0, 0, 3, 0, Math.PI * 2)
      ctx.fillStyle = gear.color
      ctx.globalAlpha = gear.opacity * 2
      ctx.fill()

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gears
      for (const gear of gears) {
        gear.rotation += gear.speed
        drawGear(gear)
      }

      // Draw and update particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
      }

      // Draw connections between nearby particles
      ctx.globalAlpha = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(124, 92, 252, ${0.08 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
