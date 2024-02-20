interface Location {
  id: number
  name: string
  description: string
  image: string
  category: string
}

interface LocationCategory {
  key: string
  label: string
  singular: string
  locations?: WordpressLocation[]
  visible?: boolean
}
