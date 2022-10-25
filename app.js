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

    const $p = $("<p class = nutrients>")//declaring a p tag food name
    $p.html(foodName) //assign the inner html of food name to p tag
    $div.append($p) //adding p tag to the end of the div


    for (nutrient in nutrients){
        const $p = $("<p class = nutrients>") //creating a p tag for each nutrient key
        // console.log(nutrient)

        switch (nutrient)
        {
            case "ENERC_KCAL":
                $p.html(`Calories = ${nutrients[nutrient]}`)
                $div.append($p)
                break
            
            case "PROCNT":
                $p.html(`Protein = ${nutrients[nutrient]}`)
                $div.append($p)
                break

            case "FAT":
                $p.html(`Fat = ${nutrients[nutrient]}`)
                $div.append($p)
                break

            case "CHOCDF":
                $p.html(`Carbohydrate = ${nutrients[nutrient]}`)
                $div.append($p)
                break

            case "FIBTG":
                $p.html(`Dietary Fiber = ${nutrients[nutrient]}`)
                $div.append($p)
                break

            default:
                console.log(`Error`);
                
        }

    }


    })


}
foodSearch("banana"); //testing inputting apple


//grab the submit button and put the a click event on it

