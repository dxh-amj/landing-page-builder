// Get design ID from environment variable
const DESIGN_ID = import.meta.env.DESIGN_ID || "design-a";

export async function loadSelectedDesign(): Promise<{
  Header: any;
  Hero: any;
  Footer?: any;
}> {
  try {
    // This will only import the selected design at build time
    // Vite's tree-shaking will remove unused imports in production
    switch (DESIGN_ID) {
      case "design-a":
        return await import("../components/designs/design-a");
      case "design-b":
        return await import("../components/designs/design-b");
      case "business":
        return await import("../components/designs/business");
      case "real-estate":
        return await import("../components/designs/real-estate");
      default:
        console.warn(`Design ${DESIGN_ID} not found, falling back to design-a`);
        return await import("../components/designs/design-a");
    }
  } catch (error) {
    console.error(`Failed to load design: ${DESIGN_ID}`, error);
    // Fallback to design-a
    return await import("../components/designs/design-a");
  }
}

export function getDesignId(): string {
  return DESIGN_ID;
}
