export const generateErrorInfo = (product) => {
    return `Uno o más campos están incompletos o contienen información no válida.
    * title : se espera un String, se recibió ${product.title}
    * description : se espera un String, se recibió ${product.description}
    * price : se espera un Number, se recibió ${product.price}
    * thumbnail : se espera un String, se recibió ${product.thumbnail}
    * code : se espera un String, se recibió ${product.code}
    * stock : se espera un Number, se recibió ${product.price}`
}