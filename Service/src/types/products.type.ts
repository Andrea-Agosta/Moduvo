export interface IProducts {
	id: number,
	name: string,
	price: number,
	originalPrice: number,
	description?: string
	images: string[],
	features: string[],
	category: string
	rating: number,
	reviews: number
	isNew: boolean
	isSale: boolean
}