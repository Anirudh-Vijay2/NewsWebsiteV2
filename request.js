const axios = require('axios');
const url = {
    topHeadlines: "https://newsapi.org/v2/top-headlines?country=in&apiKey=8127727ffc49478ab6685dd16fadc301",
    topUSBusiness: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8127727ffc49478ab6685dd16fadc301",
    topIndiaBusiness: "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8127727ffc49478ab6685dd16fadc301",
    topSportsHeadline: "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8127727ffc49478ab6685dd16fadc301"
}

const fetchTopHeadlines = async () =>{
    try{
        const response = await axios.get(url.topHeadlines);
        // console.log(response.data.articles)
        return response.data;
    }
   catch (error) {
    console.error('Error fetching news:', error.message);
    return [];
  }
}


const fetchTopBusinessOne = async () =>{
    try{
        const responseTwo = await axios.get(url.topUSBusiness);
        return responseTwo.data;
    }
   catch (error) {
    console.error('Error fetching news:', error.message);
    return [];
  }
}

const fetchTopBusinessTwo = async () =>{
    try{
        const responseThree = await axios.get(url.topIndiaBusiness);
        return responseThree.data;
    }
   catch (error) {
    console.error('Error fetching news:', error.message);
    return [];
  }
}

const fetchTopSports = async () =>{
    try{
        const responseFour = await axios.get(url.topSportsHeadline);
        return responseFour.data;
    }
   catch (error) {
    console.error('Error fetching news:', error.message);
    return [];
  }
}

module.exports  = {fetchTopHeadlines, fetchTopBusinessOne, fetchTopBusinessTwo, fetchTopSports};