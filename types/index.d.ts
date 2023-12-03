export {}

declare global {
  interface nodeProps { [key: string]: any }

  interface WordpressContentOptions {
    endpoint?: string
    slug?: string
    parent?: string
    id?: string
  }

  interface WordpressParams {
    slug?: string
    parent?: string
  }

  interface contentAnnotation {
    id: string
    content: string
    url?: string
  }

  interface ContentNode {
    tag: string
    props?: nodeProps
    content?: string
    children?: ContentNode[]
  }

  type PostType = 'posts' | 'pages' | 'locations'

  interface MenuItem {
    path: string
    label: string
    icon: string
  }

  interface HomeArticle {
    'id': string
    'slug': string
    'label': string
    'content': string
    'thumbnail': string
    'categories': string[]
    'year': number
    'intro': string
    'video': string
    'exclude-from-live': string
    'exclude-from-investigation-page': string
    'button-label': string
    'path': string
    'shortLabel': string
  }

  interface InvestigationArticle {
    title: string
    slug: string
    date: string
    excerpt: string
    image: {
      url: string
      alt: string
    }
  }

  interface mapsPosition {
    lat: number
    lng: number
  }

  interface InvestigationCategory {
    label: string
    key?: string
    articles: InvestigationArticle[]
  }

  interface AnimalCategory {
    'label': string
    'singular': string
    'key': string
  }
}
