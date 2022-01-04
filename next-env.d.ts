/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  __REACT_DEVTOOLS_GLOBAL_HOOK__: any
}

declare module '*.ico' {
  const resource: string
  export = resource
}

declare module '*.png' {
  const resource: string
  export = resource
}

declare module '*.jpg' {
  const resource: string
  export = resource
}

declare module '*.svg' {
  const resource: string
  export = resource
}

declare module '*.css' {
  const resource: any
  export = resource
}

declare module '*.scss' {
  const resource: any
  export = resource
}

declare module '*.pcss' {
  const resource: string
  export = resource
}

declare module '*.json' {
  const resource: any
  export = resource
}

declare module '*.webp' {
  const resource: any
  export = resource
}
