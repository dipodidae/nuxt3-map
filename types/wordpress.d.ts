interface WordpressLink {
  href: string
}

interface WordpressPageLink {
  'self': WordpressLink[]
  'collection': WordpressLink[]
  'about': WordpressLink[]
  'wp:attachment': WordpressLink[]
  'curies': {
    name: string
    href: string
    templated: boolean
  }
}

interface WordpressFeaturedImage {
  full: string
  large: string
  medium: string
  thumbnail: string
}

interface WordpressFormattedContent {
  rendered: string
  protected?: boolean
}

interface WordpressPage {
  id: number
  date: string
  date_gmt: string
  guid: WordpressFormattedContent
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: WordpressFormattedContent
  content: WordpressFormattedContent
  template: string
  gallery: string[]
  _links: WordpressPageLink[]
  featured_image: WordpressFeaturedImage
}

interface WordpressLocation extends WordpressPage {
  meta: {
    'video': string
    'categories': string[] | null
    'article': string
    'location-lat': string
    'location-lon': string
    'location-combined': string
    'address': string
    'quality-brand': string
    'company-owner': string
    'organization': string
    'stable-system': string
    'company-name': string
    'visible'?: string
  }
  position?: google.maps.LatLngLiteral
  categories?: LocationCategory[]
  visible?: boolean
  active?: boolean
}

interface WordpressArticle extends WordpressPage {
  meta: {
    'article': string
    'location-lat': string
    'location-lon': string
    'location-combined': string
    'video': string
    'ongehoord-article-categories': string
  }
  children?: WordpressArticle[]
}
