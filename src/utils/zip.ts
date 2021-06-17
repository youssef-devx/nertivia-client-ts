import pako from "pako";

export function zip(value: string) {
  const binaryString = pako.deflate(value, { to: "string" });
  return btoa(binaryString);
}

export function unzip(base64: string) {
  try {
    const binaryString = atob(base64);
    return pako.inflate(binaryString, { to: "string" });
  } catch {
    return null;
  }
}

export function unzipAlt(base64: string) {
  try {
    return pako.inflate(base64, { to: "string" });
  } catch {
    return null;
  }
}
