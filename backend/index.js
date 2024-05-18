import express from "express";

const app = express()

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "table plastic",
            price: 150,
            image: "https://images.pexels.com/photos/176551/pexels-photo-176551.jpeg"
        },
        {
            id: 2,
            name: "round plastic table",
            price: 200,
            image: "https://images.pexels.com/photos/1258851/pexels-photo-1258851.jpeg"
        },
        {
            id: 3,
            name: "white plastic garden table",
            price: 180,
            image: "https://images.pexels.com/photos/994563/pexels-photo-994563.jpeg"
        },
        {
            id: 4,
            name: "foldable plastic table",
            price: 130,
            image: "https://images.pexels.com/photos/1181932/pexels-photo-1181932.jpeg"
        },
        {
            id: 5,
            name: "rectangular plastic table",
            price: 160,
            image: "https://images.pexels.com/photos/250579/pexels-photo-250579.jpeg"
        }
    ]

    // http://localhost:3000/api/products?search=white

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts)
        return
    }

    setTimeout(() => {
        res.send(products)
    }, 3000)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})

