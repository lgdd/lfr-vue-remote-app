const resolveOrigin = (path) => {
  if(import.meta.env.MODE === 'development') {
    return path
  }
  return import.meta.env.VITE_URL + path
}

export { resolveOrigin as default }