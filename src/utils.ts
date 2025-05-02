export function withBasePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || 'https://7110.github.io/oshiben-fe'}${path}`;
}
