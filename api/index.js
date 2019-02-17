import express from 'express'
import { json, urlencoded } from 'body-parser'
import { join } from 'path'

const app = express()
const port = process.env.PORT || 5000

app.use(json())
app.use(urlencoded({ extended: true }))

// API calls
app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello From Express' })
})

app.post('/api/world', (req, res) => {
	console.log(req.body)
	res.send(`I received your POST request. This is what you sent me: ${req.body.post}`)
})

if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(join(__dirname, 'client/build')))
	// Handle React routing, return all requests to React app
	app.get('*', (req, res) => {
		res.sendFile(join(__dirname, 'client/build', 'index.html'))
	})
}

app.listen(port, () => console.log(`Listening on port ${port}`))