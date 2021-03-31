

const demoData = {
    "9021994b-89f3-4abe-900d-82bccd9a95fa":{
        userId: "A1B2C3",
        profileImage: require('./assets/joshhead.png'),
        name: "Joshua Ng",
        address: "11 Location",
        phoneNum: "999 222 7777",
        CovidTest: [
            {
                date: "February 15, 2021",
                result: "Negative",
            },
            {
                date: "January 7, 2021",
                result: "Negative",
            },{
                date: "December 16, 2020",
                result: "Negative",
        }], 
        Vaccinations: [
            {
                Type: "Moderna",
                date: "February 6, 2021"
            },{
                Type: "Moderna",
                date: "January 16, 2021"},]
        
    },
    "a2f9f0b3-c114-47b0-ba3e-8215c3ce07eb":{
        userId: "Y6J2D8",
        profileImage: require('./assets/jamhead.png'),
        name: "Jamie Tang",
        address: "12 Location",
        phoneNum: "111 222 3333",
        CovidTest: [{
            date: "March 10, 2021",
            result: "Negative",
        }, {
            date: "January 26, 2021",
            result: "Negative",
        },{
            date: "December 28, 2020",
            result: "Negative",
        }], 
        Vaccinations: [
            {
                Type: "Pfizer",
                date: "February 21, 2021"
            },{
                Type: "Pfizer",
                date: "February 1, 2021"},]
    }
}
const demoAuthData = { 
    "12345":{
        pass:"aaa",
        id: "9021994b-89f3-4abe-900d-82bccd9a95fa"
    },
    "54321" :{
        pass:"aaa",
        id:"a2f9f0b3-c114-47b0-ba3e-8215c3ce07eb"
    }
}


export const compareValues = (user, pass) =>{
    if(demoAuthData[user] && demoAuthData[user].pass === pass){
        return demoData[demoAuthData[user].id];
    }
    return null;

    return new Promise((res, rej)=>{
        fetch('https://jtang91bti425a1.herokuapp.com/api/sales/5bd761dcae323e45a93ccfe8')
        .then((response) => response.json())
        .then((json) => {

            

        })
        .catch((error) => console.error(error))
    })
}
