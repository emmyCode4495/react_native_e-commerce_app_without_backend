const products = [
    {
        id: "1",
        name:"Velcro Ballerinas for girls (pink)",
        image:"https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7528.jpg?w=826&t=st=1684037459~exp=1684038059~hmac=36ce881c12fa6d116004babd541f51d12df0e25f6dd9434512bd8beaa46ac911",
        description:"This is the description of the items in the cart",
        price:90,
        countInStock: 3,
        rating: 3,
        numRewviews: 4
    },
    {
        id: "2",
        name:"Velcro Ballerinas for girls (Blue)",
        image:"https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?w=826&t=st=1684037505~exp=1684038105~hmac=85f6e706a0cf3dbbd7aa3c7daa9ed2b38aaa62b9d91cd334bdcf4f18323bcfdd",
        description:"This is the description of the items in the cart",
        price:100,
        countInStock: 15,
        rating: 1.5,
        numRewviews: 2
    },
    {
        id: "3",
        name:"Velcro Ballerinas for girls and slippers",
        image:"https://img.freepik.com/free-photo/sport-running-shoes_1203-3414.jpg?w=826&t=st=1684037589~exp=1684038189~hmac=ea6a86d29a0b3d35566be3828ce517f1d9bb8c34301980c3abdf99ba6e3d4fd7",
        description:"This is the description of the items in the cart",
        price:40,
        countInStock: 7,
        rating: 3.5,
        numRewviews: 4
    },
    {
        id: "4",
        name:"Velcro Ballerinas for girls (green)",
        image:"https://img.freepik.com/free-photo/brown-leather-shoes_1203-8175.jpg?w=826&t=st=1684037639~exp=1684038239~hmac=1fdff02c68af2bbc7d59d20d823b9eccb2250ee45dd9c1e7175b1d6a732fbae0",
        description:"This is the description of the items in the cart",
        price:60,
        countInStock: 5,
        rating: 2.5,
        numRewviews: 10
    },
    {
        id: "5",
        name:"Velcro Ballerinas for girls (pink)",
        image:"https://img.freepik.com/free-photo/black-leather-shoes_1203-8180.jpg?w=826&t=st=1684037678~exp=1684038278~hmac=6c75b0c9933a2103fbf60f917fca8f52487661b7e8d5453408cf303dc2caa7f8",
        description:"This is the description of the items in the cart",
        price:70,
        countInStock: 15,
        rating: 2,
        numRewviews: 15
    },
    {
        id: "6",
        name:"Velcro Ballerinas for girls (pink)",
        image:"https://img.freepik.com/free-photohttps://img.freepik.com/free-photo/sneakers-shoes_1203-8036.jpg?w=826&t=st=1684037737~exp=1684038337~hmac=ee509d04dd552b2e26ca6d1837c238e1bc13ca737a41347d6ba65d9023f020ca/black-leather-shoes_1203-8180.jpg?w=826&t=st=1684037678~exp=1684038278~hmac=6c75b0c9933a2103fbf60f917fca8f52487661b7e8d5453408cf303dc2caa7f8",
        description:"This is the description of the items in the cart",
        price:70,
        countInStock: 15,
        rating: 3,
        numRewviews: 15
    },

    {
        id: "7",
        name:"Velcro Ballerinas for girls (green)",
        image:"https://img.freepik.com/free-photo/brown-leather-shoes_1203-8175.jpg?w=826&t=st=1684037639~exp=1684038239~hmac=1fdff02c68af2bbc7d59d20d823b9eccb2250ee45dd9c1e7175b1d6a732fbae0",
        description:"This is the description of the items in the cart",
        price:60,
        countInStock: 5,
        rating: 2.5,
        numRewviews: 10
    },
    {
        id: "8",
        name:"Velcro Ballerinas for girls (pink)",
        image:"https://img.freepik.com/free-photo/black-leather-shoes_1203-8180.jpg?w=826&t=st=1684037678~exp=1684038278~hmac=6c75b0c9933a2103fbf60f917fca8f52487661b7e8d5453408cf303dc2caa7f8",
        description:"This is the description of the items in the cart",
        price:70,
        countInStock: 15,
        rating: 2,
        numRewviews: 15
    },
    {
        id: "9",
        name:"Velcro Ballerinas for girls (pink)",
        image:"https://img.freepik.com/premium-photo/blue-sport-running-shoes-white-background-sports-shoes-blue-color-trendy-sport-footwear_256259-2485.jpg?w=826",
        description:"This is the description of the items in the cart",
        price:70,
        countInStock: 15,
        rating: 1.5,
        numRewviews: 15
    },
    {
        id: "10",
        name:"Velcro Ballerinas for girls (pink)",
        image:"https://img.freepik.com/free-photohttps://img.freepik.com/free-photo/sneakers-shoes_1203-8036.jpg?w=826&t=st=1684037737~exp=1684038337~hmac=ee509d04dd552b2e26ca6d1837c238e1bc13ca737a41347d6ba65d9023f020ca/black-leather-shoes_1203-8180.jpg?w=826&t=st=1684037678~exp=1684038278~hmac=6c75b0c9933a2103fbf60f917fca8f52487661b7e8d5453408cf303dc2caa7f8",
        description:"This is the description of the items in the cart",
        price:70,
        countInStock: 15,
        rating: 2.5,
        numRewviews: 15
    },

    {
        id: "11",
        name:"Velcro Ballerinas for girls (green)",
        image:"https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-133039.jpg?w=826&t=st=1684062594~exp=1684063194~hmac=0ec5c000b6419c8961ff6cc960ad44f4c5015acd279efcaff0fef39b1db5312c",
        description:"This is the description of the items in the cart",
        price:60,
        countInStock: 5,
        rating: 5,
        numRewviews: 10
    },
    {
        id: "12",
        name:"Velcro Ballerinas for girls (pink)",
        image:"https://img.freepik.com/free-photo/black-leather-shoes_1203-8180.jpg?w=826&t=st=1684037678~exp=1684038278~hmac=6c75b0c9933a2103fbf60f917fca8f52487661b7e8d5453408cf303dc2caa7f8",
        description:"This is the description of the items in the cart",
        price:70,
        countInStock: 15,
        rating: 2.5,
        numRewviews: 15
    },
    {
        id: "13",
        name:"Velcro Ballerinas for girls (pink)",
        image:"https://img.freepik.com/free-photohttps://img.freepik.com/free-photo/sneakers-shoes_1203-8036.jpg?w=826&t=st=1684037737~exp=1684038337~hmac=ee509d04dd552b2e26ca6d1837c238e1bc13ca737a41347d6ba65d9023f020ca/black-leather-shoes_1203-8180.jpg?w=826&t=st=1684037678~exp=1684038278~hmac=6c75b0c9933a2103fbf60f917fca8f52487661b7e8d5453408cf303dc2caa7f8",
        description:"This is the description of the items in the cart",
        price:70,
        countInStock: 15,
        rating: 3.5,
        numRewviews: 15
    },
    {
        id: "14",
        name:"Velcro Ballerinas for girls (pink)",
        image:"https://img.freepik.com/free-photohttps://img.freepik.com/free-photo/sneakers-shoes_1203-8036.jpg?w=826&t=st=1684037737~exp=1684038337~hmac=ee509d04dd552b2e26ca6d1837c238e1bc13ca737a41347d6ba65d9023f020ca/black-leather-shoes_1203-8180.jpg?w=826&t=st=1684037678~exp=1684038278~hmac=6c75b0c9933a2103fbf60f917fca8f52487661b7e8d5453408cf303dc2caa7f8",
        description:"This is the description of the items in the cart",
        price:70,
        countInStock: 15,
        rating: 2.5,
        numRewviews: 15
    },
];

export default products;