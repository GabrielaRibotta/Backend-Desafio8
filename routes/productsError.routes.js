import { Router } from "express";
import CustomError from "../services/CustomError.js";
import Errors from "../services/Enums.js";
import { generateErrorInfo } from "../services/errorsInfo.js";

const productsErrorRouter = Router()

const products = []

productsErrorRouter.post('/', (req,res) => {
    const {title, description, price, thumbnail, code, stock} = req.body;
    if(!title || !description || !price || !thumbnail || !code || !stock){
        CustomError.createError({
            name:"Error al crear producto",
            cause:generateErrorInfo({title, description, price, thumbnail, code, stock}),
            message:"Error al crear producto",
            code: Errors.INVALID_TYPES_ERROR
        })
    } else {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        products.push(product)
        res.send({status:"success", payload: product})
    }
})

export default productsErrorRouter
