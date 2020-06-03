const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('dist'));

const list = [{
    id: 1,
    title: 'Title 1',
    img: 'https://dummyimage.com/300x200/000/fff',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod laudantium ducimus deleniti, quam nesciunt corporis iusto optio magnam velit voluptatum?'
},
{
    id: 2,
    title: 'Title 2',
    img: 'https://dummyimage.com/300x200/000/eee',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod laudantium ducimus deleniti, quam nesciunt corporis iusto optio magnam velit voluptatum?'
},
{
    id: 3,
    title: 'Title 3',
    img: 'https://dummyimage.com/300x200/000/fee',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod laudantium ducimus deleniti, quam nesciunt corporis iusto optio magnam velit voluptatum?'
}];

const userList = [
    {
        username: 'user',
        password: '12345678',
        userStatus: 'user'
    }
]


app.get('/api/blog-list', function(req, res){
    // request to db ...
    setTimeout(() => {
        res.json(list);
    },1500);
});


app.get('/api/blog-list/:id', function(req, res){
    let id = req.params.id;
    let response = list.filter((item) => item.id === +id);
    res.json(response);
});


app.post('/api/login', function(req, res){
    let params = req.body;
    console.log('--- ', params);
    let result = userList.filter((user) => {
        return user.username === params.username && user.password === params.password;
    })
    if (result.length > 0) {
        console.log(result)
        res.status(200).send({ message: 'OK', userStatus: result[0].userStatus });
    } else {
        res.status(400).send({message: 'Auth failed'})
    }
    
});







app.get('/', function(res, res){
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

