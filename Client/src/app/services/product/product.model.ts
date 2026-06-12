export interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  discount: number
  description?: string
  images: string[]
  features: string[]
  category: string
  rating: number,
  reviews: number
  isNew: boolean
  isSale: boolean
  isFlashDeal: boolean
}
