require('dotenv').config()
const express = require('express')
const app = express()
// TODO: import the getCityInfo and getJobs functions from util.js
const data = require('./util.js')
// TODO: Statically serve the public folder
app.use(express.static('public'))
// TODO: declare the GET route /api/city/:city
app.get ('/api/city/:city', async (req, res) => {
    const city = req.params.city;
    const cityInfo = await data.getCityInfo(city);
    const jobs = await data.getJobs (city)

// This endpoint should call getCityInfo and getJobs and return
// the result as JSON.
// The returned JSON object should have two keys:
// cityInfo (with value of the getCityInfo function)
// jobs (with value of the getJobs function)
// If no city info or jobs are found,
// the endpoint should return a 404 status
//Should work if I have both city and job data
if (cityInfo && jobs){
    res.status(200).json({cityInfo, jobs})
//If I have only job data
} else if (!cityInfo && jobs){
    res.status(200).json({cityInfo: false, jobs: jobs})
//If I have only city data
} else if (cityInfo && !jobs){
    res.status(200).json({cityInfo: cityInfo, jobs: false})
}else{
res.status(404).json({error:'Not found'})}
})
module.exports = app
