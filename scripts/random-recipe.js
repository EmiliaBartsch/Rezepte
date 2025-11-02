const buttons = Array.from(document.querySelectorAll('.day'));
const checkAll = document.querySelector('.checkAll');
const weekdaysOrder = ['Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam', 'Son'];
let selectedDays = [];
let randomRecipes = [];
let randomIngredient = [];
//array of filtered list
let newRecipe = [];
//list, holds the filtered meal list for every individual day
let arrayOfDays = [];

const randomWindow = document.querySelector('.random-window');
const editWindow = document.querySelector('.editWindow');
const openWindow = document.querySelector('.random-filter');
const closeWindow = document.querySelector('.close')
const closeEditor = document.querySelector('.editWindow .close')
const firstPage = document.querySelector('.choseDays');
const secondPage = document.querySelector('.editDays');
const thirdPage = document.querySelector('.randomRecipes');

const backbutton = document.querySelector('.pageNumber button');
const nextButton = document.querySelector('.pageNumber button:last-child');

const inputWerktag = document.querySelector('.werktag');
const inputWE = document.querySelector('.WE');
let valueWerktag = '';
let valueWE = '';


openWindow.addEventListener('click', () => {
  randomWindow.style.display = 'flex';
  firstPage.style.display = 'block';
  secondPage.style.display ='none';
  thirdPage.style.display = 'none';
  backbutton.style.display = 'none'
  selectedDays = [];
  buttons.forEach(button => button.classList = 'day');
  checkAll.checked = false;
  randomRecipes = [];
  arrayOfDays = [];
  newRecipe = currentArray;
})


closeWindow.addEventListener('click', () => {
  randomWindow.style.display = 'none';
  nextButton.innerHTML = 'Next';
  editWindow.style.display = 'none';
})

closeEditor.addEventListener('click', () => {
  editWindow.style.display = 'none';
})

//moves forth and back
nextButton.addEventListener('click', () => {
  //when first page is displayed:
  if (firstPage.style.display !== 'none' && selectedDays.length > 0) {
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';
    backbutton.style.display = 'inline';
    renderDays(selectedDays);
  } else if (selectedDays.length === 0) {
    alert('Du muss mindestens einen Tag auswählen!')
  } else {
    secondPage.style.display = 'none';
    thirdPage.style.display = 'grid';
    nextButton.innerHTML = 'Reload';
    randomRecipes = [];
    generateRandom();
  }
})
backbutton.addEventListener('click', () => {
  //when second page is displayed
  if (secondPage.style.display == 'block') {
    secondPage.style.display = 'none';
    firstPage.style.display = 'block';
    backbutton.style.display = 'none'
  } //when third page is displayed
  else if (thirdPage.style.display =='grid') {
    secondPage.style.display ='block';
    thirdPage.style.display = 'none';
    nextButton.innerHTML = 'Next'
  }
})

//selects days
buttons.forEach(button => {
  checkAll.addEventListener('click', () => {
    if (checkAll.checked) {
      button.classList.add('clicked');
      if (!selectedDays.includes(button.innerHTML)) {
        selectedDays.push(button.innerHTML);};
    } else {
      button.classList.remove('clicked');
      selectedDays = [];
    }
    selectedDays.sort((a, b) => {
      return weekdaysOrder.indexOf(a) - weekdaysOrder.indexOf(b);})
  });
  button.addEventListener('click', () => {
    if (button.classList.contains('clicked')) {
      button.classList.remove('clicked')
      checkAll.checked = false;
      let index = selectedDays.indexOf(button.innerHTML);
      selectedDays.splice(index, 1);
    } else {
      button.classList.add('clicked')
      selectedDays.push(button.innerHTML);
    }
    //sorts it so that the order is right
    selectedDays.sort((a, b) => {
      return weekdaysOrder.indexOf(a) - weekdaysOrder.indexOf(b);})
  })
})

//second page
const randomCheckBoxes = editWindow.querySelectorAll('.possibilities input');
let indexDay = [];
let presentRandomMembers = ['emilia', 'tristan', 'gabi', 'thomas'];
let presentRandomLenght = 4;

function renderDays(days) {
  let daysHTML = '';
  days.forEach((day) => {
    daysHTML += `
      <button class="day editDay">${day}
      <img src="pictures/edit-icon.png" class="editIcon"></button>`
  });
  document.querySelector('.selectedDays').innerHTML = daysHTML;
  const editDay = Array.from(document.querySelectorAll('.selectedDays .editDay'));
  editSelected(editDay);
}

randomCheckBoxes.forEach(box => {
  box.addEventListener('change', () => {
    filterRandomSeason();
    filterRandomAufwand();
    filterRandomZubereitung();
    filterRandomRating();
    const filteredNewRecipe = filteredRandomRating;
    if (indexDay.length > 0) {
      //gets the last clicked day and assigns new array
      let index = indexDay[indexDay.length-1]
      arrayOfDays[index] = filteredNewRecipe;
    }
  })
});
function editSelected(selected) {
  selected.forEach(day => {
    /*for each day, pushes the default filtered array*/
    arrayOfDays.push(newRecipe);

    day.addEventListener('click', () => {
      indexDay.push(selected.indexOf(day));
      //clears checkboxes
      randomCheckBoxes.forEach(cb => {
        cb.checked = false;
      });
      editWindow.querySelectorAll('.newMitglieder input').forEach(input => {
        input.checked = true;
      });
      //if day is clicked, each checkbox gets an event listener
      editWindow.style.display = 'grid';
    })
  })
}
function filterRandomSeason() {
  if (seasonChecked.checked) {
    console.log("true");
    if (seasonButton.classList.contains('summer')) {
      window.filteredRandomSeason = mealsArrayAlpha.filter(meal => meal.season === 'all' || meal.season === 'summer');
    } else {
        window.filteredRandomSeason = mealsArrayAlpha.filter(meal => meal.season === 'all' || meal.season === 'winter');
      }
  } else {
    window.filteredRandomSeason = mealsArrayAlpha; 
  }
}

function filterRandomAufwand() {
  const selected = getRandomChecked(0,3);
  if (selected.length > 0) {
    window.filteredRandomAufwand = filteredRandomSeason.filter(meal => selected.some(filter => meal.aufwand.includes(filter)))
  } else {
    filteredRandomAufwand = filteredRandomSeason;
  };
}

function filterRandomZubereitung() {
  const selected = getRandomChecked(3, 6);
  
  if (selected.length > 0) {
    window.filteredRandomZubereitung = filteredRandomAufwand.filter(meal => selected.some(filter => meal.zubereitung.includes(filter)))
  } else {
    filteredRandomZubereitung = filteredRandomAufwand;
  };
}

function filterRandomRating() {
  window.filteredRandomRating = [];
  filteredRandomZubereitung.forEach(meal => {
    const randomRating = averageRandomRating(meal.rating.emi, meal.rating.tri, meal.rating.gab, meal.rating.tho);
    if (randomRating > 3.6) {
      //only if avrg rating is higher than 3.6, it can be displayed
      filteredRandomRating.push(meal);
    }
  })
  if (filteredRandomRating.length < 1) {
    //if no meals with rating > 3.6 available, all meals will be pushed to avoid error
    filteredRandomRating = filteredRandomZubereitung;
  }
}

const checkedRandomMembers = document.querySelectorAll('.newMitglieder input');
checkedRandomMembers.forEach(box => {
  box.addEventListener('change', () => {
    //if box is changed, all present members will be returned
    presentRandomMembers = [];
    checkedRandomMembers.forEach(member => {
      if (member.checked) {
        presentRandomMembers.push(member.value);
      };});
      presentRandomLenght = presentRandomMembers.length;
      filterRandomRating();
  });
});


//gets average rating
function averageRandomRating(emi, tri, gab, tho) {
  if (presentRandomMembers.includes('emilia')) {
    ratingEmi = parseInt(emi, 10);
  } else {
    ratingEmi = 0;
  }
  if (presentRandomMembers.includes('tristan')) {
    ratingTri = parseInt(tri, 10);
  } else {
    ratingTri = 0;
  }
  if (presentRandomMembers.includes('gabi')) {
    ratingGab = parseInt(gab, 10);
  } else {
    ratingGab = 0;
  }
  if (presentRandomMembers.includes('thomas')) {
    ratingTho = parseInt(tho, 10);
  } else {
    ratingTho = 0;
  }
  const average = (ratingEmi + ratingTri + ratingGab + ratingTho)/presentRandomLenght;
  const averageRounded = Math.round(average * 100) / 100;
  return averageRounded;
}

function getRandomChecked(beg, end) {
  const checkChecked = Array.from(randomCheckBoxes).slice(beg, end);  
  const selected = checkChecked.filter(box => box.checked).map(box => box.value);

  return selected;
}


inputWerktag.addEventListener('input', () => {
  valueWerktag = inputWerktag.value;
})
inputWE.addEventListener('input', () => {
  valueWE = inputWE.value;
})

//third page

function generateRandom() {
  var indexArray = 0;
  selectedDays.forEach(day => {
    const arrayDay = arrayOfDays[indexArray];
    indexArray++;
    let randomMeal = arrayDay[Math.floor(Math.random() * arrayDay.length)];
    if (day !== 'Sam' && day !== 'Son') {
      countIngredients(randomMeal, valueWerktag, arrayDay);
    } else {
      countIngredients(randomMeal, valueWE, arrayDay);
    }
    renderRandomMeals(randomRecipes);
  })
}
//counts occurance of ingredients, and if too often generates new recipe
function countIngredients(ingredient, time, arrayDay) {
  const count = {
    kartoffeln: 0,
    pasta: 0,
    reis: 0,
    anderes: 0
  }
  randomIngredient.forEach(item => {
    count[item] = (count[item]) + 1;
  })
  let attempts = 0;
  //if time isnt a number
  if (((time * 0) !== 0) || (time == '')) {
    time = 500;
  }
  while (true) {
    attempts++;
    if (attempts >1000) {
      console.log("break");
      break;
    }
    const kartoffelnLimit = 
      ingredient.zutaten.main == 'kartoffeln' && (count.kartoffeln == 3 || (parseInt(count.kartoffeln, 10) + parseInt(count.pasta, 10)) == 5);

    const pastaLimit = 
      ingredient.zutaten.main == 'pasta' && (count.pasta == 3 || (parseInt(count.kartoffeln, 10) + parseInt(count.pasta, 10)) == 5);

    const reisLimit = 
      ingredient.zutaten.main == 'reis' && count.reis == 1;

    const anderesLimit = ingredient.zutaten.main == 'anderes' && count.anderes == 3;

    //const limitRating = averageRandomRating(ingredient.rating.emi, ingredient.rating.tri, ingredient.rating.gab, ingredient.rating.tho) < 3.6;

    const tooLong = parseInt(ingredient.zeit, 10) > parseInt(time, 10);

    const alreadyIncluded = randomRecipes.includes(ingredient);

    if (kartoffelnLimit || pastaLimit || reisLimit || anderesLimit || tooLong ||alreadyIncluded) {
      ingredient = arrayDay[Math.floor(Math.random() * arrayDay.length)]
    } else {
      break;
    }
  }
  randomRecipes.push(ingredient);
}


function renderRandomMeals(meals) {
  let randomMealsHTML = '';
  let summaryHTML = '';
  let indexDay = 0;
  let mealNamesArray = [];
  let mealsLinkArray = [];
  let mealName = '';
  let mealLink = '';
  meals.forEach((meal) => {
    randomMealsHTML += `
      <div class="randomRecipe">
        <div class="dayTitle">${selectedDays[indexDay]}</div>
        <img src="${meal.image}" class="picture">
        <div class="description">
          <div class="name">${meal.name}</div>
          <div class="attributes">
            <div>${meal.zeit}min</div>
            <div>${meal.aufwand}</div>
            <div>${averageRating(meal.rating.emi, meal.rating. tri, meal.rating.gab, meal.rating.tho)}★</div>
          </div>
        </div>
      </div>`
      indexDay++;
      mealNamesArray.push(meal.name);
      mealsLinkArray.push(meal.link);
  });

  for (var i=0; i<selectedDays.length; i++) {
    mealName = mealNamesArray[i];
    mealLink = mealsLinkArray[i];
    summaryHTML += `
      <p class="summary">${selectedDays[i]}: ${mealName} (<a href="${mealLink}" target="_blank">${mealLink}</a>)</p>
    `
  }

  document.querySelector('.randomRecipes').innerHTML = randomMealsHTML + summaryHTML;
}