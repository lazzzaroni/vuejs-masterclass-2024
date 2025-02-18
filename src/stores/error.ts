export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref(false)

  const setError = () => {
    activeError.value = true
  }

  const clearError = () => {
    activeError.value = false
  }

  return { activeError, setError, clearError }
})
