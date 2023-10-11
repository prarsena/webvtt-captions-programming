const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.listen(port, ()=> {
    console.log('\x1b[36m%s\x1b[0m', `\n r u even listening 2 me? \n P.S. I'm running on port ${port} \n`)
})
