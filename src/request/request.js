import axios from "axios"

const apikey=process.env.REACT_APP_API_KEY
const url=process.env.REACT_APP_URL

export async function getCityByName(name){
      const res = await axios(`${url}?q=${name}&units=metric&appid=${apikey}`)
      return res.data
  }