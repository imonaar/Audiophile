import data from './data.json'
import { Product } from './types'

export async function getProducts(name: string): Promise<Product[]> {
    return data.filter(item => item.category === name)
}

export async function getProductBySlug(name: string): Promise<Product> {
    const product = data.filter(item => item.slug === name)
    return product[0];
}