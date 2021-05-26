export interface Offsets {
  ecos: number;
  floras: number;
  invisibleWalls: number;
  objects: number;
  lights: number;
  unknowns: number;
  decals: number;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Tint {
  color: Color;
  percentage: number;
}

export interface Layer {
  density: number;
  minScale: number;
  maxScale: number;
  slopePeak: number;
  slopeExtent: number;
  minElevation: number;
  maxElevation: number;
  minAlpha: number;
  flora: string;
  tints: Tint[];
}

export interface Eco {
  index: number;
  name: string;
  colorNxMap: string;
  specBlendNyMap: string;
  detailRepeat: number;
  blendStrength: number;
  specMin: number;
  specMax: number;
  specSmoothnessMin: number;
  specSmoothnessMax: number;
  physicsMaterial: string;
  layers: Layer[];
}

export interface Flora {
  name: string;
  texture: string;
  model: string;
  unknownBoolean1: boolean;
  unknownFloat1: number;
  unknownFloat2: number;
  unknownFloat3: number;
  unknownFloat4: number;
  unknownFloat5: number;
}

export interface Instance {
  position: number[];
  rotation: number[];
  scale: number[];
  id: number;
  unknownByte1: number;
  unknownFloat1: number;
}

export interface Decal {
  unknownFloat1: number;
  position: number[];
  unknownFloat2: number;
  unknownFloat3: number;
  unknownFloat4: number;
  unknownFloat5: number;
  decimalDigits6And4: number;
  name: string;
  unknownFloat6: number;
  unknownFloat7: number;
  unknownFloat8: number;
  unknownInt: number;
}

export interface ZoneObject {
  actorDefinition: string;
  renderDistance: number;
  instances: Instance[];
  lights: any[];
  unknowns: any[];
  decals: Decal[];
}

export interface ZoneFile {
  signature: number;
  version: number;
  unknown: number;
  offsets: Offsets;
  quadsPerTile: number;
  tileSize: number;
  tileHeight: number;
  vertsPerTile: number;
  tilesPerChunk: number;
  startX: number;
  startY: number;
  chunksX: number;
  chunksY: number;
  ecos: Eco[];
  floras: Flora[];
  invisibleWalls: any[];
  objects: ZoneObject[];
}
