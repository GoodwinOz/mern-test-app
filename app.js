const express = require('express')
const helmet = require('helmet')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')
const AuthRoute = require('./routes/auth.routes')
const LinkRoute = require('./routes/link.routes')
const RedirectRoute = require('./routes/redirect.routes')

const app = express()

app.use(helmet())
app.use(express.json({ extended: true }))

app.use('/api/auth', AuthRoute)
app.use('/api/link', LinkRoute)
app.use('/t', RedirectRoute)

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()