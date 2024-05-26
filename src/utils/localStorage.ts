type LocalStorageKey = string;
type AuthToken = string;

// set
export function setLocalStorage(key: LocalStorageKey, token: AuthToken) {
  localStorage.setItem(key, token);
}

// get
export function getLocalStorage(key: LocalStorageKey): string | null {
  const accessToken = localStorage.getItem(key);
  return accessToken;
}

// remove
export function removeLocalStorage(key: LocalStorageKey) {
  localStorage.removeItem(key);
}
