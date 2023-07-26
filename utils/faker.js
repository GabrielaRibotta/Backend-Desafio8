import { fakerES } from '@faker-js/faker'

export const generateProducts = () => {
    return{
        title: fakerES.commerce.product(), 
        description: fakerES.commerce.productDescription(),
        price: fakerES.commerce.price(),
        thumbnail: fakerES.image.url(),
        code: fakerES.number.hex(),
        stock: fakerES.number.int({max: 100})
    }
}