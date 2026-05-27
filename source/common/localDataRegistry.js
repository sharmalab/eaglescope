const REGISTRY_KEY = 'es-registry';

export function getRegistry() {
  try {
    return JSON.parse(localStorage.getItem(REGISTRY_KEY) || '[]');
  } catch {
    return [];
  }
}

export function updateRegistry(entry) {
  const registry = getRegistry();
  const idx = registry.findIndex((r) => r.storageKey === entry.storageKey);
  if (idx >= 0) registry[idx] = entry;
  else registry.unshift(entry);
  localStorage.setItem(REGISTRY_KEY, JSON.stringify(registry));
}

export function saveVisConfigs(storageKey, configs) {
  localStorage.setItem(`es-vis-${storageKey}`, JSON.stringify(configs));
}

export function loadVisConfigs(storageKey) {
  try {
    return JSON.parse(localStorage.getItem(`es-vis-${storageKey}`) || 'null');
  } catch {
    return null;
  }
}

export function setLocalDataParam(storageKey) {
  const url = new URL(window.location.href);
  url.searchParams.set('localdata', storageKey);
  window.history.replaceState({}, '', url.toString());
}
