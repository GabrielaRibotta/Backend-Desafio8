import { Router } from "express";
import { generateProducts } from '../utils/faker.js'

const mockRouter = Router()

mockRouter.get('/', async (req,res) => {
    const productsMock = []
    for(let i=0; i<100; i++){
        productsMock.push(generateProducts())
    }
    res.json({status: 'success', payload: productsMock})
})

export default mockRouter