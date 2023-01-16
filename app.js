const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const golfspelare = {allagolfspelare: [
    {name:"Tiger Woods", Country: "USA", WinsOnPGATour: "82"},
    {name:"Rory Mcllroy", Country:"IRLAND", WinsOnPGATour: "23"},
    {name:"Henrik Stenson", Country:"Sweden", WinsOnPGATour: "7"},
    {name:"Andrew Johnston", Country:"England", WinsOnPGATour:"2"}]}

    const firstNames = ["Tony", "Keegan", "Brian", "Harry", "Keith", "Jon"]
    const lastNames = ["Finau", "Bradley", "Harman", "English", "Mitchell", "Rahm"]
    const countries = ["USA", "England", "Spain", "Irland", "Sweden", "Danmark"]
    const wins = ["4", "7", "8", "15", "62", "25"]

    app.get("/newentry", (req,res) => {
        newEntry()
        res.send("New Golfer added!")
    })

    function newEntry(){
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)]
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)]
        const randomCountries = countries[Math.floor(Math.random() * countries.length)]
        const randomWins = wins[Math.floor(Math.random() * wins.length)]
        const randomFullName = randomFirstName + " " + randomLastName
    
        golfspelare.allagolfspelare.push({name: randomFullName, Country: randomCountries, WinsOnPGATour: randomWins})
    
        return golfspelare
    
    }

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})


app.get("/golfers", (req,res) => {
    res.send(golfspelare)
})




app.listen(PORT, () => {
    console.log("Listening to " + PORT)
    //console.log(golfspelare)
})
//app.listen funkar bara på 80 och 443 när den är hostad