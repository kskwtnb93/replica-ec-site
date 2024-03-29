export function imagePlaceholder(
  w: number,
  h: number
): `data:image/svg+xml;base64,${string}` {
  const shimmer = `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#efefef" offset="20%" />
        <stop stop-color="#fafafa" offset="50%" />
        <stop stop-color="#efefef" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#efefef" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>`

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  return `data:image/svg+xml;base64,${toBase64(shimmer)}`
}

export function calcImageHeight(
  orgImageHeight: number,
  orgImageWidth: number,
  imageWidth: number
): number {
  return (orgImageHeight / orgImageWidth) * imageWidth
}
