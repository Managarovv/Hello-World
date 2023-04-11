const express = require('express')
const app = require('express')()

const host = 'localhost'
const port = process.env.PORT || 3000

app.use('/', express.static(__dirname + 'Overhaul/static'));
/*app.get('/', (req, res) =>{
	res.sendFile(`${__dirname}/static/index.html`)
})*/

app.use((req, res)=>{
	res.status(404).send('error: '+req.url+' cannot be found')
})

app.listen(port, host, function() {
	console.log(`app listen ${port} port`)
})