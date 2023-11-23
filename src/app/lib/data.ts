import data from './data.json'

export async function getProducts(name: string) {
    return data.filter(item => item.category === name)
}