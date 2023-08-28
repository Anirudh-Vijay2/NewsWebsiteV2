const express = require('express')
const app = express()
const requestWorker = require('./request')
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

app.get('/api/anirudh/TopHeadline', async (req, res)=>{
    const topHeadlines = await requestWorker.fetchTopHeadlines()
    res.json(topHeadlines)
})

app.get('/api/anirudh/fetchTopBusinessOne', async (req, res)=>{
    const TopBusinessOne = await requestWorker.fetchTopBusinessOne()
    res.json(TopBusinessOne)
})

app.get('/api/anirudh/fetchTopBusinessTwo', async (req, res)=>{
    const TopBusinessTwo = await requestWorker.fetchTopBusinessTwo()
    res.json(TopBusinessTwo)
})

app.get('/api/anirudh/fetchTopSports', async (req, res)=>{
    const topSportsHeadlines = await requestWorker.fetchTopBusinessTwo()
    res.json(topSportsHeadlines)
})

app.listen(5000, ()=>{
    console.log('server running on port 5000')
})