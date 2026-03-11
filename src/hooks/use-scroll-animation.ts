import { useRef } from 'react'

export function useScrollAnimation() {
  return useRef<HTMLElement>(null)
}
