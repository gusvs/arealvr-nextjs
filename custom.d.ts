declare global {
  interface WindowEventMap {
    keydown: KeyboardEvent<HTMLInputElement>
  }
}