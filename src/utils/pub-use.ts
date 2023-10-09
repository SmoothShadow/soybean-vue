// 获取assets静态资源
export const getAssetsFile = (url: string) => {
  return new URL(`/src/assets/${url}`, import.meta.url).href
}
