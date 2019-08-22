const create = (req,res) => {
    const{name,description,price,image_url} = req.body
    const db = req.app.get('db');
    db.create_product([name,description,price,image_url]).then(() =>{
        res.status(200).send('product created')
    }).catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } )
}


const getOne = (req,res) => {
    const {id} = req.params
    const db = req.app.get('db');
    db.read_product(id).then((product) => {
        res.status(200).send(product)
    }).catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } )
}


const getAll = (req,res) => {
    const db = req.app.get('db')
    db.read_products().then((products) => {
        res.status(200).send(products)
    }).catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } )
}


const update = (req,res) => {
    const {id} = req.params
    const {desc} = req.query
    const db = req.app.get('db')
    db.update_product([id,desc]).then(() => {
        res.sendStatus(200)
    }).catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } )
}


const delete1 = (req,res) => {
    const {id} = req.params
    const db = req.app.get('db');
    db.delete_product(id).then(() => {
        res.status(200)
    }).catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } )
}

module.exports = {
    delete1,
    getOne,
    getAll,
    create,
    update
}