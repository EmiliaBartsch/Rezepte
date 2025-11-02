let sortedArray = mealsArrayAlpha;
let currentArray = sortedArray;

let inputText;
function activateSearch() {
  //gets searchbar
  const search = document.querySelector('.search');

  search.addEventListener('input', () => {
    //make search case unsensitive
    inputText = search.value.toLocaleLowerCase();
    
    //goes through every recipe
    const filteredSearch = sortedArray.filter(meal => {
      //if the title/ingredient matches the input, variable is saved
      const titleMatch = meal.name.toLocaleLowerCase().includes(inputText);

      const ingredientMatch = Array.from(meal.zutaten.other).some(ingredient => ingredient.toLocaleLowerCase().includes(inputText));

      return  titleMatch || ingredientMatch;
    });
    renderMeals(filteredSearch);
    openLink();
  });
}

activateSearch();

//gets season and checkbox
const seasonChecked = document.querySelector('.season-check input');
const seasonButton = document.querySelector('.switch .check');


//Sidebar filter

const checkBoxes = document.querySelectorAll('.possibilities input');

checkBoxes.forEach(box => {
  box.addEventListener('change', filterAll);
});

//goes through all checkmarks every time the code is run
function filterAll() {
  filterHaupt();
  filterAufwand();
  filterZubereitung();
  filterRating();
  renderMeals(filteredRating);
  //filterSeason();
  openLink();
  currentArray = filteredRating;
};

function filterHaupt() {
  const selected = getChecked(0, 5); // ['pasta', 'reis', '...']

  if (selected.length > 0) {
    window.filteredHaupt = sortedArray.filter(meal => selected.some(filter => meal.zutaten.main.includes(filter)))
    ;
  } else {
    filteredHaupt = sortedArray;
  }
}

function filterAufwand() {
  const selected = getChecked(5, 8);

  if (selected.length > 0) {
    window.filteredAufwand = filteredHaupt.filter(meal => selected.some(filter => meal.aufwand.includes(filter)))
  } else {
    filteredAufwand = filteredHaupt;
  };
}

function filterZubereitung() {
  const selected = getChecked(8, 11);
  
  if (selected.length > 0) {
    window.filteredZubereitung = filteredAufwand.filter(meal => selected.some(filter => meal.zubereitung.includes(filter)))
  } else {
    filteredZubereitung = filteredAufwand;
  };
}


function filterRating() {
  const selected = getChecked(15, 20);

  window.filteredRating = filteredZubereitung.filter(meal => selected.some(filter => filter <= averageRating(meal.rating.emi, meal.rating. tri, meal.rating.gab, meal.rating.tho)));
  if (selected[0] === '0') {
    window.filteredRating = filteredZubereitung;
  };
}

//gets the input of the main group
function getChecked(beg, end) {
  const checkChecked = Array.from(checkBoxes).slice(beg, end);  
  const selected = checkChecked.filter(box => box.checked).map(box => box.value);

  return selected;
}

//season filter

//when checkbox is clicked
seasonChecked.addEventListener('click', () => {
  filterAll();
  filterSeason();
})

function filterSeason() {
  if (seasonChecked.checked) {
    seasonButton.disabled = false;
      if (seasonButton.classList.contains('summer')) {
        window.filteredSeason = filteredRating.filter(meal => meal.season === 'all' || meal.season === 'summer');
      } else {
        window.filteredSeason = filteredRating.filter(meal => meal.season === 'all' || meal.season === 'winter');
      }
      renderMeals(filteredSeason);
  } else {
    seasonButton.disabled = true;
  }
}

//when button is clicked
seasonButton.addEventListener('click', () => {
  //season = winter
  if (seasonButton.classList.contains('summer')) {
    seasonButton.classList.add('winter');
    seasonButton.classList.remove('summer');
    //only filters if season is checked
    filterSeason();
  } else {
    //season = summer
    seasonButton.classList.add('summer');
    seasonButton.classList.remove('winter');
    filterSeason();
  }
  renderMeals(filteredSeason);
  currentArray = filteredSeason;
})

//reset filter
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  document.querySelectorAll('.possibilities input').forEach(cb => {
    cb.checked = false;
    //makes "alle" true
    document.querySelector('.rating input').checked = true;
    //makes mitglieder true
    Array.from(document.querySelectorAll('.mitglieder input')).forEach(input => {
      input.checked = true;
    })
    filterAll(); 
  })
})

// sort filter
const sortFilter = document.querySelectorAll('.typeOptions div');
const sortOptions = Array.from(sortFilter);

let arrayName = "";
sortOptions.forEach(option => {
  option.addEventListener('click', () => {
    switch(option.innerHTML) {
      case "A-Z":
        sortedArray = mealsArrayAlpha;
        break;
      case "Z-A":
        sortedArray = mealsArrayAlphaReverse;
        break;
      case "highest":
        arrayName = "Rating";
        sortedArray = sortRating();
        break;
      case "lowest":
        arrayName = "RatingReverse";
        sortedArray = sortRating().toReversed();
        break;
      case "shortest":
        sortedArray = mealsArrayTime;
        break;
      case "longest":
        sortedArray = mealsArrayTimeReverse;
        break;
      default:
        sortedArray = mealsArrayAlpha;
    }
    renderMeals(sortedArray);
    openLink()
    filterAll();
  });
})

//opens link upon click on image
function openLink() {
  const queryRecipes = Array.from(document.querySelectorAll('.recipe'));

  queryRecipes.forEach(recipe => {
    let recipeIMG = recipe.querySelector('img');
    recipeIMG.addEventListener('click', () => {
      const recipeName = recipe.querySelector(`.name`).innerHTML;
      sortedArray.forEach(meal => {
        if (meal.name.includes(recipeName)) {
          window.open(meal.link, '_blank')
        }
      })
    }) 
  })
}

openLink();