import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    const result = cn('text-red-500', 'bg-blue-500')
    expect(result).toContain('text-red-500')
    expect(result).toContain('bg-blue-500')
  })

  it('handles conflicting classes correctly', () => {
    const result = cn('text-red-500', 'text-blue-500')
    // tailwind-merge should keep only the last conflicting class
    expect(result).toBe('text-blue-500')
  })

  it('handles empty inputs', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('handles conditional classes', () => {
    const condition = true
    const result = cn('base-class', condition && 'conditional-class')
    expect(result).toContain('base-class')
    expect(result).toContain('conditional-class')
  })
})
