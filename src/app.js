import express from 'express'
import mockRouter from "../routes/productsFaker.routes.js"
import productsErrorRouter from '../routes/productsError.routes.js'
import errorHandler from '../utils/errorHandler.js'

const app = express()
const PORT = 8080


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/mockingproducts', mockRouter)
app.use('/api/products', productsErrorRouter)
app.use(errorHandler)



app.listen(PORT, () =>{
    console.log(`Server on port ${PORT}`)
})