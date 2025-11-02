//selects present family members
var presentMembersLenght = 0;
let presentMembers = ['emilia', 'tristan', 'gabi', 'thomas'];

const checkedMembers = document.querySelectorAll('.mitglieder input');
checkedMembers.forEach(box => {
  box.addEventListener('change', () => {
    //if box is changed, all present members will be returned
    presentMembers = [];
    checkedMembers.forEach(member => {
      if (member.checked) {
        presentMembers.push(member.value);
      };});
    //updates sortedArray if family members are changed and meals are displayed by rating
    if (arrayName === "Rating") {
      sortedArray = sortRating();
    } else if (arrayName === "RatingReverse") {
      sortedArray = sortRating().toReversed();
    }
  });
});

//gets number of present members
function filterMitglieder() {
  const selected = Array.from(checkedMembers).filter(box => box.checked).map(box => box.value);
  presentMembersLenght = 0;
  presentMembersLenght = selected.length;
  return presentMembersLenght;
}

//gets average rating
function averageRating(emi, tri, gab, tho) {
  if (presentMembers.includes('emilia')) {
    ratingEmi = parseInt(emi, 10);
  } else {
    ratingEmi = 0;
  }
  if (presentMembers.includes('tristan')) {
    ratingTri = parseInt(tri, 10);
  } else {
    ratingTri = 0;
  }
  if (presentMembers.includes('gabi')) {
    ratingGab = parseInt(gab, 10);
  } else {
    ratingGab = 0;
  }
  if (presentMembers.includes('thomas')) {
    ratingTho = parseInt(tho, 10);
  } else {
    ratingTho = 0;
  }
  const average = (ratingEmi + ratingTri + ratingGab + ratingTho)/filterMitglieder();
  const averageRounded = Math.round(average * 100) / 100;
  return averageRounded;
}

function sortRating() {
  const mealsArrayRating = mealsArray.toSorted((a,b) => {
    const avgA = averageRating(a.rating.emi, a.rating.tri, a.rating.gab, a.rating.tho);
    const avgB = averageRating(b.rating.emi, b.rating.tri, b.rating.gab, b.rating.tho);
    return avgB - avgA;}); 
  return mealsArrayRating;
}

//sort Array alphabeticcaly
const mealsArrayAlpha = [...mealsArray].sort((a, b) => a.name.localeCompare(b.name));
const mealsArrayAlphaReverse = mealsArrayAlpha.toReversed()
//sort array by average rating
const mealsArrayRating = sortRating();
const mealsArrayRatingReverse = mealsArrayRating.toReversed();
//sort array by time needed
const mealsArrayTime = [...mealsArray].sort((a, b) => a.zeit.localeCompare(b.zeit));
const mealsArrayTimeReverse = mealsArrayTime.toReversed();


//pushes the attributes into the class "allRecipes"
function renderMeals(meals) {
  let mealsHTML = '';

  meals.forEach((meal) => {
    mealsHTML += `
      <div class="recipe">
        <img src="${meal.image}">
        <div class="description">
          <div class="name">${meal.name}</div>
          <div class="attributes">
            <div>${meal.zeit}min</div>
            <div>${meal.aufwand}</div>
            <div>${averageRating(meal.rating.emi, meal.rating. tri, meal.rating.gab, meal.rating.tho)}★</div>
          </div>
        </div>
      </div>`
  });
  document.querySelector('.js-meals-grid').innerHTML = mealsHTML;
}

renderMeals(mealsArrayAlpha);
