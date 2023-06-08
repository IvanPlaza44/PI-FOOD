const cleanSteps = (arr)=>{
    if(arr.length === 0) return[]
    const { steps } = arr[0]
    let cleanArr = steps.map((step => `Paso -> ${step.number} ${step.step}`))
    return cleanArr;
}

const clearRecipeById= (recip)=>{
    if(recip.vegetarian) recip.diets = [...recip.diets, "vegetarian"]
        return{
            id: recip.id,
            name: recip.title,
            image: recip.image,
            summary: recip.summary,
            healthScore: recip.healtScore,
            steps: cleanSteps(recip.analyzedInstructions),
            diets: recip.diets,
            created: false
            };
}

const recipe = {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 14,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 0,
    "healthScore": 82,
    "creditsText": "blogspot.it",
    "sourceName": "blogspot.it",
    "pricePerServing": 540.55,
    "extendedIngredients": [
      {
        "id": 15001,
        "aisle": "Seafood",
        "image": "anchovies.jpg",
        "consistency": "SOLID",
        "name": "anchovy filets",
        "nameClean": "boquerones",
        "original": "8 high quality anchovy filets, (we use anchovies from Sardegna packed in salt)",
        "originalName": "high quality anchovy filets, (we use anchovies from Sardegna packed in salt)",
        "amount": 8,
        "unit": "",
        "meta": [
          "packed in salt)"
        ],
        "measures": {
          "us": {
            "amount": 8,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 8,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 1034053,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "olive-oil.jpg",
        "consistency": "LIQUID",
        "name": "extra virgin olive oil",
        "nameClean": "extra virgin olive oil",
        "original": "good quality extra virgin olive oil",
        "originalName": "good quality extra virgin olive oil",
        "amount": 2,
        "unit": "servings",
        "meta": [],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 98849,
        "aisle": "Canned and Jarred",
        "image": "tomatoes-canned.png",
        "consistency": "SOLID",
        "name": "roasted tomatoes",
        "nameClean": "fire roasted tomatoes",
        "original": "Roasted Tomatoes with Anchovies",
        "originalName": "Roasted Tomatoes with Anchovies",
        "amount": 2,
        "unit": "servings",
        "meta": [
          "with anchovies"
        ],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 1002044,
        "aisle": "Produce",
        "image": "lemon-basil.jpg",
        "consistency": "SOLID",
        "name": "any herbs you like",
        "nameClean": "lemon basil",
        "original": "small handful of any fresh herbs you like, chopped - we use oregano but you can also use basil, thyme, etc.",
        "originalName": "any fresh herbs you like, chopped - we use oregano but you can also use basil, thyme, etc",
        "amount": 1,
        "unit": "small handful",
        "meta": [
          "fresh",
          "chopped",
          "canned"
        ],
        "measures": {
          "us": {
            "amount": 1,
            "unitShort": "small handful",
            "unitLong": "small handful"
          },
          "metric": {
            "amount": 1,
            "unitShort": "small handful",
            "unitLong": "small handful"
          }
        }
      },
      {
        "id": 1102047,
        "aisle": "Spices and Seasonings",
        "image": "salt-and-pepper.jpg",
        "consistency": "SOLID",
        "name": "salt & pepper",
        "nameClean": "salt and pepper",
        "original": "salt & pepper",
        "originalName": "salt & pepper",
        "amount": 2,
        "unit": "servings",
        "meta": [],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 11641,
        "aisle": "Produce",
        "image": "yellow-squash.jpg",
        "consistency": "SOLID",
        "name": "on a summer's day",
        "nameClean": "summer squash",
        "original": "On a hot summer's day, we keep the kitchen oven off & make these in our outdoor wood burning oven!",
        "originalName": "On a hot summer's day, we keep the kitchen oven off & make these in our outdoor wood burning oven",
        "amount": 2,
        "unit": "servings",
        "meta": [
          "hot"
        ],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 11955,
        "aisle": "Canned and Jarred;Produce",
        "image": "sundried-tomatoes.jpg",
        "consistency": "SOLID",
        "name": "once the tomatoes shrivel up a bit & start to look sun-dried",
        "nameClean": "sun dried tomatoes",
        "original": "Once the tomatoes shrivel up a bit & start to look sun-dried, they are ready. They should still hold their shape & not become mush.",
        "originalName": "Once the tomatoes shrivel up a bit & start to look sun-dried, they are ready. They should still hold their shape & not become mush",
        "amount": 2,
        "unit": "servings",
        "meta": [],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 11529,
        "aisle": "Produce",
        "image": "tomato.png",
        "consistency": "SOLID",
        "name": "round tomatoes",
        "nameClean": "tomato",
        "original": "4 round tomatoes (we grow & use grappolo for this dish)",
        "originalName": "round tomatoes (we grow & use grappolo for this dish)",
        "amount": 4,
        "unit": "",
        "meta": [
          "for this dish",
          "(we grow & use grappolo )"
        ],
        "measures": {
          "us": {
            "amount": 4,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 4,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 23584,
        "aisle": "Meat",
        "image": "top-sirloin-steak.jpg",
        "consistency": "SOLID",
        "name": "cut the top 3rd off the tomatoes & discard top",
        "nameClean": "top sirloin steak",
        "original": "Cut the top 3rd off the tomatoes & discard top.",
        "originalName": "Cut the top 3rd off the tomatoes & discard top",
        "amount": 2,
        "unit": "servings",
        "meta": [],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 12420420,
        "aisle": "Pasta and Rice",
        "image": "lasagna-noodles.jpg",
        "consistency": "SOLID",
        "name": "remove from oven",
        "nameClean": "oven ready lasagne noodles",
        "original": "Remove from oven, top each tomato with a whole anchovy filet. Serve warm or room temperature with olive oil from the baking pan drizzled over the top.",
        "originalName": "Remove from oven, top each tomato with a whole anchovy filet. Serve warm or room temperature with olive oil from the baking pan drizzled over the top",
        "amount": 2,
        "unit": "servings",
        "meta": [
          "whole",
          "with a  anchovy filet. serve warm or room temperature with olive oil from the baking pan drizzled over the top."
        ],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": -1,
        "aisle": "?",
        "image": null,
        "consistency": "SOLID",
        "name": "pomodori al forno con le acciughe",
        "nameClean": null,
        "original": "Pomodori al forno con le acciughe",
        "originalName": "Pomodori al forno con le acciughe",
        "amount": 2,
        "unit": "servings",
        "meta": [],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 2,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      }
    ],
    "id": 17,
    "title": "Savory Slow Roasted Tomatoes with Filet of Anchovy",
    "readyInMinutes": 45,
    "servings": 2,
    "sourceUrl": "http://latavolamarche.blogspot.it/2012/07/savory-slow-roasted-tomatoes-with-filet.html",
    "image": "https://spoonacular.com/recipeImages/17-556x370.jpg",
    "imageType": "jpg",
    "summary": "Savory Slow Roasted Tomatoes with Filet of Anchovy is a <b>dairy free</b> recipe with 2 servings. This main course has <b>679 calories</b>, <b>63g of protein</b>, and <b>24g of fat</b> per serving. For <b>$5.41 per serving</b>, this recipe <b>covers 37%</b> of your daily requirements of vitamins and minerals. 1 person has tried and liked this recipe. It is brought to you by latavolamarche.blogspot.it. Head to the store and pick up remove from oven, extra virgin olive oil, pomodori al forno con le acciughe, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 89%</b>. This score is great. Similar recipes are <a href=\"https://spoonacular.com/recipes/savory-slow-roasted-tomatoes-with-filet-of-anchovy-631757\">Savory Slow Roasted Tomatoes with Filet of Anchovy</a>, <a href=\"https://spoonacular.com/recipes/slow-roasted-filet-of-beef-and-basil-parmesan-mayonnaise-362274\">Slow-Roasted Filet of Beef and Basil Parmesan Mayonnaise</a>, and <a href=\"https://spoonacular.com/recipes/caesar-salad-with-anchovy-wrapped-garlic-and-savory-lemon-sabayon-221\">Caesar Salad with Anchovy Wrapped Garlic and Savory Lemon Sabayon</a>.",
    "cuisines": [],
    "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ],
    "diets": [
      "dairy free"
    ],
    "occasions": [],
    "winePairing": {
      "pairedWines": [
        "sauvignon blanc",
        "riesling",
        "sparkling rose"
      ],
      "pairingText": "Sauvignon Blanc, Riesling, and Sparkling rosé are my top picks for Anchovies. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. One wine you could try is Villa Maria Wairau Valley Reserve Sauvignon Blanc. It has 4.8 out of 5 stars and a bottle costs about 30 dollars.",
      "productMatches": [
        {
          "id": 2050548,
          "title": "Villa Maria Wairau Valley Reserve Sauvignon Blanc",
          "description": "A classic representation of Sauvignon Blanc from the Wairau Valley in Marlborough, bursting with aromatic tropical fruit characters found in this warmer sub-region. This wine displays powerful aromas of blackcurrant, passionfruit and ripe rock-melon. The palate has an enticing array of ripe citrus fruits mixed with pungent herbs such as fresh rosemary, finishing with subtle acidity.",
          "price": "$29.989999771118164",
          "imageUrl": "https://spoonacular.com/productImages/2050548-312x231.jpg",
          "averageRating": 0.9599999785423279,
          "ratingCount": 5,
          "score": 0.8974999785423279,
          "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fvilla-maria-wairau-valley-reserve-sauvignon-blanc-2021%2F894589"
        }
      ]
    },
    "instructions": "It's tomato season, so keep it simple while cooking. No need to make heavy sauces with all those gorgeous tomatoes that are bursting with flavor - try a simple 5 ingredient recipe with slow roasted tomatoes, herbs, loads of olive oil and topped with a filet of anchovy! This recipe is straight from the seaside of Le Marche, where we first devoured this delicious antipasto in Numana.On a hot summer's day, we keep the kitchen oven off & make these in our outdoor wood burning oven!Roasted Tomatoes with AnchoviesPomodori al forno con le acciugheserves 44 round tomatoes (we grow & use grappolo for this dish)small handful of any fresh herbs you like, chopped - we use oregano but you can also use basil, thyme, etc.salt & peppergood quality extra virgin olive oil8 high quality anchovy filets, (we use anchovies from Sardegna packed in salt)Preheat oven to 150 C or 280 FCut the top 3rd off the tomatoes & discard top.Place tomatoes on a baking tray, lined with parchment paper. Sprinkle generously with salt, pepper & herbs. Drizzle with a generous amount of olive oil. Place in the oven for 4-6 hours depending on the size of your tomatoes. Every once in a while as you pass the kitchen, baste the tomatoes in the juices & olive oil in the pan.Once the tomatoes shrivel up a bit & start to look sun-dried, they are ready. They should still hold their shape & not become mush.Remove from oven, top each tomato with a whole anchovy filet. Serve warm or room temperature with olive oil from the baking pan drizzled over the top.",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "It's tomato season, so keep it simple while cooking. No need to make heavy sauces with all those gorgeous tomatoes that are bursting with flavor - try a simple 5 ingredient recipe with slow roasted tomatoes, herbs, loads of olive oil and topped with a filet of anchovy! This recipe is straight from the seaside of Le Marche, where we first devoured this delicious antipasto in Numana.On a hot summer's day, we keep the kitchen oven off & make these in our outdoor wood burning oven!Roasted Tomatoes with Anchovies",
            "ingredients": [
              {
                "id": 15001,
                "name": "anchovies",
                "localizedName": "anchovies",
                "image": "anchovies.jpg"
              },
              {
                "id": 4053,
                "name": "olive oil",
                "localizedName": "olive oil",
                "image": "olive-oil.jpg"
              },
              {
                "id": 11529,
                "name": "tomato",
                "localizedName": "tomato",
                "image": "tomato.png"
              },
              {
                "id": 1002044,
                "name": "herbs",
                "localizedName": "herbs",
                "image": "mixed-fresh-herbs.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              }
            ]
          },
          {
            "number": 2,
            "step": "Pomodori al forno con le acciugheserves 44 round tomatoes (we grow & use grappolo for this dish)small handful of any fresh herbs you like, chopped - we use oregano but you can also use basil, thyme, etc.salt & peppergood quality extra virgin olive oil8 high quality anchovy filets, (we use anchovies from Sardegna packed in salt)Preheat oven to 150 C or 280 F",
            "ingredients": [
              {
                "id": 15001,
                "name": "anchovy fillets",
                "localizedName": "anchovy fillets",
                "image": "anchovies.jpg"
              },
              {
                "id": 10111297,
                "name": "fresh herbs",
                "localizedName": "fresh herbs",
                "image": "mixed-fresh-herbs.jpg"
              },
              {
                "id": 15001,
                "name": "anchovies",
                "localizedName": "anchovies",
                "image": "anchovies.jpg"
              },
              {
                "id": 11529,
                "name": "tomato",
                "localizedName": "tomato",
                "image": "tomato.png"
              },
              {
                "id": 2027,
                "name": "oregano",
                "localizedName": "oregano",
                "image": "oregano.jpg"
              },
              {
                "id": 2044,
                "name": "basil",
                "localizedName": "basil",
                "image": "basil.jpg"
              },
              {
                "id": 9195,
                "name": "olives",
                "localizedName": "olives",
                "image": "olives-mixed.jpg"
              },
              {
                "id": 2049,
                "name": "thyme",
                "localizedName": "thyme",
                "image": "thyme.jpg"
              },
              {
                "id": 2047,
                "name": "salt",
                "localizedName": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg",
                "temperature": {
                  "number": 150,
                  "unit": "Celsius"
                }
              }
            ]
          },
          {
            "number": 3,
            "step": "Cut the top 3rd off the tomatoes & discard top.",
            "ingredients": [
              {
                "id": 11529,
                "name": "tomato",
                "localizedName": "tomato",
                "image": "tomato.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Place tomatoes on a baking tray, lined with parchment paper.",
            "ingredients": [
              {
                "id": 11529,
                "name": "tomato",
                "localizedName": "tomato",
                "image": "tomato.png"
              }
            ],
            "equipment": [
              {
                "id": 404770,
                "name": "baking paper",
                "localizedName": "baking paper",
                "image": "baking-paper.jpg"
              },
              {
                "id": 404646,
                "name": "baking pan",
                "localizedName": "baking pan",
                "image": "roasting-pan.jpg"
              }
            ]
          },
          {
            "number": 5,
            "step": "Sprinkle generously with salt, pepper & herbs.",
            "ingredients": [
              {
                "id": 1002030,
                "name": "pepper",
                "localizedName": "pepper",
                "image": "pepper.jpg"
              },
              {
                "id": 1002044,
                "name": "herbs",
                "localizedName": "herbs",
                "image": "mixed-fresh-herbs.jpg"
              },
              {
                "id": 2047,
                "name": "salt",
                "localizedName": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 6,
            "step": "Drizzle with a generous amount of olive oil.",
            "ingredients": [
              {
                "id": 4053,
                "name": "olive oil",
                "localizedName": "olive oil",
                "image": "olive-oil.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 7,
            "step": "Place in the oven for 4-6 hours depending on the size of your tomatoes. Every once in a while as you pass the kitchen, baste the tomatoes in the juices & olive oil in the pan.Once the tomatoes shrivel up a bit & start to look sun-dried, they are ready. They should still hold their shape & not become mush.",
            "ingredients": [
              {
                "id": 4053,
                "name": "olive oil",
                "localizedName": "olive oil",
                "image": "olive-oil.jpg"
              },
              {
                "id": 11529,
                "name": "tomato",
                "localizedName": "tomato",
                "image": "tomato.png"
              }
            ],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              },
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }
            ],
            "length": {
              "number": 360,
              "unit": "minutes"
            }
          },
          {
            "number": 8,
            "step": "Remove from oven, top each tomato with a whole anchovy filet.",
            "ingredients": [
              {
                "id": 15001,
                "name": "anchovies",
                "localizedName": "anchovies",
                "image": "anchovies.jpg"
              },
              {
                "id": 11529,
                "name": "tomato",
                "localizedName": "tomato",
                "image": "tomato.png"
              }
            ],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              }
            ]
          },
          {
            "number": 9,
            "step": "Serve warm or room temperature with olive oil from the baking pan drizzled over the top.",
            "ingredients": [
              {
                "id": 4053,
                "name": "olive oil",
                "localizedName": "olive oil",
                "image": "olive-oil.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404646,
                "name": "baking pan",
                "localizedName": "baking pan",
                "image": "roasting-pan.jpg"
              }
            ]
          }
        ]
      }
    ],
    "originalId": null
  }

  clearRecipeById(recipe)