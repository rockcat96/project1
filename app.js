//variables

const apiID = "2d1e931b"
const apiKey = "fda994e9501b480dc018841ba4a7c060"
const baseUrl = "https://api.edamam.com/api/food-database/v2/parser"



//function that searches for the food name and then display facts

const foodSearch = (food) => {
    const foodUrl = `${baseUrl}?app_id=${apiID}&app_key=${apiKey}&ingr=${food}`
    console.log(foodUrl)

    $.ajax(foodUrl)
    .then((foodObj) => {


    const nutrients = foodObj.parsed[0].food.nutrients //access the nutrients data in the food object
    const $div = $("div.foodstats") //This is the div where are the food data will be housed

    const foodName = foodObj.text.charAt(0).toUpperCase().concat(foodObj.text.slice(1))  // user inputted food name and capitalize the first letter of the string


    // const $p = $("<p class = nutrients>")//declaring a p tag food name
    $("#name").text(foodName) //assign the inner html of food name to p tag
    // $div.append($p) //adding p tag to the end of the div


    for (nutrient in nutrients){
        // const $p = $("<p class = nutrients>") //creating a p tag for each nutrient key
        // // console.log(nutrient)

        switch (nutrient)
        {
            case "ENERC_KCAL":
                $("#calories").text(`Calories: ${nutrients[nutrient]} Kcal`)
                break
            
            case "PROCNT":
                $("#protein").text(`Protein: ${nutrients[nutrient]} gram`)
                break

            case "FAT":
                $("#fat").text(`Fat: ${nutrients[nutrient]} gram`)
                break

            case "CHOCDF":
                $("#carbohydrate").text(`Carbohydrate: ${nutrients[nutrient]} gram`)
                break

            case "FIBTG":
                $("#fiber").text(`Dietary Fiber: ${nutrients[nutrient]} gram`)
                break

            default:
                console.log(`Error`);
                
        }
    }


    })


}
// foodSearch("banana"); //testing inputting apple


//grab the submit button and put the a click event on it

$("form.foodLookup").on("submit", (event) => {
    //prevent default
    event.preventDefault()

    //grab text from input box add invoke the food search function

    const inputText = $("input[type=text]").val()

    foodSearch(inputText)
})

//create a function that searches for food and add together the key nutrients 












//grab the submit button and put the a click event on it

// $("form.foodLogging").on("submit", (event) => {
//     //prevent default
//     event.preventDefault()

//     //grab text from input box add invoke the food search function

//     const inputText = $("input[type=text]").val()

//     foodSearch(inputText)
// })