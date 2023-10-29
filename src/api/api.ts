import axios from "axios"
import lodash from "lodash";

const URL='http://localhost:3100'

const copyToWrite=async(data:any)=>{
    try{

        return await axios.post(`${URL}/create`,data)
    }catch(err){
        console.log(err);
        
    }
}
const copyToRead=async()=>{
    try{
        return await axios.get(`${URL}/reading`).then((res)=>{
            console.log("this is ",res);
            
            return res.data

            
        })

    }catch(err){
        console.log("there is error",err);
        
    }
}



// export const searchVid= async (search: string) => {

// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/search',
//   params: {
//     q: search,
//     part: 'snippet,id',
//     regionCode: 'US',
//     maxResults: '50',
//     order: 'date'
//   },
//   headers: {
//     'X-RapidAPI-Key': '516ef8bb4cmsh93cc012cca22a36p13ed77jsn37375adccc35',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// try {
	
//     const check:any= await copyToRead()

//     if(lodash.some(check?.data.data, search)){
//         console.log(lodash.find(check?.data.data, search));
        

//         return lodash.find(check?.data.data, search)

        
//     }else{
//         const response = await axios.request(options);

//     const dataSearched= `${search}`
    
//     const writeData = {
//         data: {
//             [dataSearched]: response.data.items
//         }
//     }
//     copyToWrite(writeData)
// // console.log(check.data);
// // console.log(lodash.find(check?.data, search));

//     return lodash.find(check?.data, search)


//     }

// } catch (error) {
// 	console.error(error);
// }
// }


// export const DetailedVid= async(videoId:any)=>{
//     const options = {
//         method: 'GET',
//         url: 'https://youtube-v31.p.rapidapi.com/videos',
//         params: {
//           part: 'contentDetails,snippet,statistics',
//           id: videoId
//         },
//         headers: {
//           'X-RapidAPI-Key': '516ef8bb4cmsh93cc012cca22a36p13ed77jsn37375adccc35',
//           'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//         }
//       };
      
//       try {
//           const response = await axios.request(options);
//           return response.data.
//       } catch (error) {
//           console.error(error);
//       }
// }


export const searchVid= async (search: string) => {

    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        q: search,
        part: 'snippet,id',
        regionCode: 'US',
        maxResults: '50',
        order: 'date'
      },
      headers: {
        'X-RapidAPI-Key': '516ef8bb4cmsh93cc012cca22a36p13ed77jsn37375adccc35',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    
    try {
        
        const check:any= await copyToRead()
    
        if(lodash.some(check?.data.data, search)){
            console.log(lodash.find(check?.data.data, search));
            
    
            return lodash.find(check?.data.data, search)
    
            
        }else{
            const response = await axios.request(options);
    
        const dataSearched= `${search}`
        
        const writeData = {
            data: {
                [dataSearched]: response.data.items
            }
        }
        copyToWrite(writeData)
    // console.log(check.data);
    // console.log(lodash.find(check?.data, search));
    
        return lodash.find(check?.data, search)
    
    
        }
    
    } catch (error) {
        console.error(error);
    }
    }