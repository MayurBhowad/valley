import axios from "axios"


export const getData = () => {
    axios.get('https://pastebin.com/CfLLF3Yq').then(data => {
        console.log(data);
        //fetched data issue
    })

    //else
    //Static data
    let data = [
        {
            "Department Name": "Department1",
            "Sales": 1000,
            "Percentage": "7%"
        },
        {
            "Department Name": "Department2",
            "Sales": 2000,
            "Percentage": "13%"
        },
        {
            "Department Name": "Department3",
            "Sales": 3000,
            "Percentage": "20%"
        },
        {
            "Department Name": "Department4",
            "Sales": 4000,
            "Percentage": "27%"
        },
        {
            "Department Name": "Department5",
            "Sales": 5000,
            "Percentage": "33%"
        }
    ]
    return data;
}