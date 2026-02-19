// composables/useBtnBorder.js

import { ref, onMounted, onUnmounted } from 'vue'

export function useBtnBorder(wrapperRef) {
  const STROKE = 5
  const HALF   = STROKE / 2   // 2.5px — offset per non tagliare il bordo

  // CSS custom props passate al NuxtLink via :style
  const style = ref({})

  // Coordinate del <rect> SVG — calcolate in JS, non con calc()
  const rectX = ref(HALF)
  const rectY = ref(HALF)
  const rectW = ref(0)
  const rectH = ref(0)

  function calculate() {
    const el = wrapperRef.value
    if (!el) return

    // Leggiamo le dimensioni del NuxtLink (primo figlio del wrapper)
    const btn = el.querySelector('.btn--outline')
    if (!btn) return

    const W = btn.offsetWidth
    const H = btn.offsetHeight

    // Coordinate rect: inset di HALF per non tagliare lo stroke
    rectW.value = W - STROKE
    rectH.value = H - STROKE

    // Perimetro effettivo del rect (non del btn)
    const rW = rectW.value
    const rH = rectH.value
    const perimeter = 2 * (rW + rH)

    // Logica dasharray:
    //   Il <rect> SVG disegna in senso ORARIO partendo da top-left:
    //   top(rW) → right(rH) → bottom(rW) → left(rH)
    //
    //   Vogliamo:
    //     - bottom sempre visibile (nel gap)
    //     - right + top + left visibili a riposo (nella dash)
    //     - stroke che parte da bottom-right e percorre right→top→left
    //
    //   offset = -(rW + rH) sposta il punto di inizio a bottom-right
    //   dash   = rH + rW + rH = 2rH + rW  (right + top + left)
    //   gap    = rW                         (bottom — sempre nel gap)

    const dash   = 2 * rH + rW
    const gap    = rW
    const offset = -(rW + rH)

    style.value = {
      '--btn-dash':      `${dash}px`,
      '--btn-gap':       `${gap}px`,
      '--btn-offset':    `${offset}px`,
      '--btn-perimeter': `${perimeter}px`,
    }
  }

  let ro
  onMounted(() => {
    // nextTick implicito: il ResizeObserver chiama calculate() al primo paint
    ro = new ResizeObserver(calculate)
    if (wrapperRef.value) ro.observe(wrapperRef.value)
  })

  onUnmounted(() => {
    if (ro) ro.disconnect()
  })

  return { style, rectX, rectY, rectW, rectH }
}