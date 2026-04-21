export const AUTH_STORAGE_KEY = 'guideai.authenticated'

export function isAuthenticated() {
  return window.localStorage.getItem(AUTH_STORAGE_KEY) === 'true'
}

export function setAuthenticated(value: boolean) {
  window.localStorage.setItem(AUTH_STORAGE_KEY, value ? 'true' : 'false')
}

