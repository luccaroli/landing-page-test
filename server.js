const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos =require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')
nunjucks.configure('views', {
    express: server,
    noCache: true
})


server.get('/', function(req, res) {
    const about = {
        avatar_url: 'https://scontent.ffor10-1.fna.fbcdn.net/v/t1.0-9/69586179_2482258171833658_2044750066094178304_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_eui2=AeE7CZTbUJIeuxCz7kOutNMA0pMKrg7cCsjSkwquDtwKyDU3IwrO-V5n6hcZByZdhrteqaMxsqdh6hHVgrLC5foo&_nc_ohc=l_sgX31_JBsAX-ZqEHp&_nc_ht=scontent.ffor10-1.fna&oh=953f7f3ffe44d8e2b28bfa25ea2b29d2&oe=5EBF89D2',
        name: 'LUCCAROLI',
        role: 'Developer and Filmaker',
        description: 'Programador, Filmaker e Life Style. GO LEVEL UP.',
        links: [
            { name: 'Github', url: 'https://github.com/luccaroli'},
            { name: 'Twitter', url: 'https://twitter.com/luccaroli'},
            { name: 'Linkedin', url: 'https://www.linkedin.com/in/luccaroli'},
        ]
    }

    return res.render('about', {  about  })
})

server.get('/portfolio', function(req, res) {
    return res.render('portfolio', {items: videos})
})

server.listen(5000, function() {
    console.log('server is running')
})