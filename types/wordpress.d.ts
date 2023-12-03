export {}

declare global {
  interface WordpressPageLinks {
    'self': { 'href': string }[]
    'collection': { 'href': string }[]
    'about': { 'href': string }[]
    'wp:attachment': { 'href': string }[]
    'curies': {
      'name': string
      'href': string
      'templated': boolean
    }[]
  }

  interface WordpressFeaturedImage {
    full: string
    large: string
    medium: string
    thumbnail: string
  }

  interface WordpressPage {
    'id': number
    'date': string
    'date_gmt': string
    'guid': { 'rendered': string }
    'modified': string
    'modified_gmt': string
    'slug': string
    'status': string
    'type': string
    'link': string
    'title': { 'rendered': string }
    'content': {
      'rendered': string
      'protected': boolean
    }
    'template': string
    'gallery': string[]
    '_links': WordpressPageLinks
    'featured_image': WordpressFeaturedImage
  }

  interface WordpressLocation extends WordpressPage {
    'meta': {
      'video': string
      'categories': string[]
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
  }

  interface WordpressArticle extends WordpressPage {
    meta: {
      article: string
      'location-lat': string
      'location-lon': string
      'location-combined': string
      video: string
      'ongehoord-article-categories': string
    }
    children?: WordpressArticle[]
  }
}
