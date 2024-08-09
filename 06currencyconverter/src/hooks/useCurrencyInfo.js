import { useEffect , useState } from "react"

//simple hook
// function hello(){
//     return []
// }

function useCurrencyInfo(currency){
    const [data ,setData] = useState({}) //empty data
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=> response.json())
        .then((res)=> setData(res[currency]))
        console.log(data)
    } , [currency])

    return data
}

export default useCurrencyInfo