//script.js: Get randomize emoji number
$(document).ready(function() {

    const arrMainCourse = [
        {
            nameMeal: "taco",
            numMeal: 127790
        },
        {
            nameMeal: "ramen",
            numMeal: 127836
        },
        {
            nameMeal: "spaghetti",
            numMeal: 127837
        },
        {
            nameMeal: "sushi",
            numMeal: 127843
        },
        {
            nameMeal: "curryWRice",
            numMeal: 127835
        }
      ];
      const arrDrink = [
        {
            nameMeal: "sirap",
            numMeal: 127863
        },
        {
            nameMeal: "juice_box",
            numMeal: 129475
        },
        {
            nameMeal: "coke",
            numMeal: 129380
        },
        {
            nameMeal: "coconut_drink",
            numMeal: 129381
        },
        {
            nameMeal: "tea",
            numMeal: 127861
        }
      ];
      const arrDessert = [
        {
            nameMeal: "ice_cream",
            numMeal: 127848
        },
        {
            nameMeal: "donut",
            numMeal: 127849
        },
        {
            nameMeal: "chocolate_cookies",
            numMeal: 127850
        },
        {
            nameMeal: "cupcake",
            numMeal: 129473
        },
        {
            nameMeal: "pie",
            numMeal: 129383
        }
      ];
      const arrFruit = [
        {
            nameMeal: "watermelon",
            numMeal: 127817
        },
        {
            nameMeal: "orange",
            numMeal: 127818
        },
        {
            nameMeal: "banana",
            numMeal: 127820
        },
        {
            nameMeal: "apple",
            numMeal: 127822
        },
        {
            nameMeal: "peach",
            numMeal: 127825
        },
      ];
      
    var numRandom = () => {
    return (Math.floor(Math.random()*5));
    }
    
    let strCopy = " ";
    var onClickRand = () => {
    
        let numRand1 = 0;
        numRand1 = numRandom();
        $("#mc-answer").text(String.fromCodePoint(arrMainCourse[numRand1].numMeal));
        console.log(arrMainCourse[numRand1].numMeal);

        let numRand2 = 0;
        numRand2 = numRandom();
        $("#drink-answer").text(String.fromCodePoint(arrDrink[numRand2].numMeal));
        console.log(arrDrink[numRand2].numMeal);

        let numRand3 = 0;
        numRand3 = numRandom();
        $("#dessert-answer").text(String.fromCodePoint(arrDessert[numRand3].numMeal));
        console.log(arrDessert[numRand3].numMeal);

        let numRand4 = 0;
        numRand4 = numRandom();
        $("#fruit-answer").text(String.fromCodePoint(arrFruit[numRand4].numMeal));
        console.log(arrFruit[numRand4].numMeal);

        strCopy = `${String.fromCodePoint(arrMainCourse[numRand1].numMeal)} ${String.fromCodePoint(arrDrink[numRand2].numMeal)} ${String.fromCodePoint(arrDessert[numRand3].numMeal)} ${String.fromCodePoint(arrFruit[numRand4].numMeal)}`;
    
    }

    var copyToClipboard = () => {
        navigator.clipboard
        .writeText(strCopy)
        .then(() => {
            alert("successfully copied");
        })
        .catch(() => {
            alert("something went wrong");
        });

    }

    $("#randNumEmoji-button").click(onClickRand);
    $("#copy-button").click(copyToClipboard);

});