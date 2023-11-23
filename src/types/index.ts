export interface BreadcrumbType {
  href: string
  text: string
}

export interface ImageType {
  url: string
  height: number
  width: number
}

export interface CampaignType {
  id: string
  title: string
  description: string
  image: ImageType
  linkUrl: string
}
