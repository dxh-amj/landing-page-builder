// Type declarations for YAML module imports
declare module '*.yml' {
  import type { DesignConfig } from './design';
  const content: DesignConfig;
  export default content;
}

declare module '*.yaml' {
  import type { DesignConfig } from './design';
  const content: DesignConfig;
  export default content;
}
