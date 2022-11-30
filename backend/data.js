import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
          name: 'Yohannes',
          email: 'yohannesgezahugne59@gmail.com',
          password: bcrypt.hashSync('080502'),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'jooman2121@gmail.com',
          password: bcrypt.hashSync('080502'),
          isAdmin: false,
        },
      ],
products:[
    {
        //_id: '1',
        name: 'Nike Slim shirt',
        slug: 'Nike-Slim-shirt',
        category: 'Shirts',
        image: 'images/p1.jpg',
        price: '120',
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: '10',
        description: 'High Quality Shirt'

    },
    {
        //_id: '2',
        name: 'Adidas fit SHIRT',
        slug: 'Adidas fit-Shirt',
        category: 'Shirts',
        image: 'images/p2.jpg',
        price: '250',
        countInStock: 0,
        brand: 'Adidas',
        rating: '4.0',
        numReviews: '10',
        description: 'High Quality Shirt'

    },
    {
        //_id: '3',
        name: 'Nike Slim Pant',
        slug: 'Nike-Slim-Pant',
        category: 'Pants',
        image: 'images/p3.jpg',
        price: '20',
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: '14',
        description: 'High Quality Product'

    },
    {
        //_id: '4',
        name: 'Adidas fit pant',
        slug: 'Adidas-fit-pant',
        category: 'Pants',
        image: 'images/p4.jpg',
        price: '30',
        countInStock: 10,
        brand: 'Nike',
        rating: '4.5',
        numReviews: '18',
        description: 'High Quality Product'

    },
],

}
export default data;