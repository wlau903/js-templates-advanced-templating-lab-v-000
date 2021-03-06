function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper("displayIngredient", function() {

  })
}

function createRecipe() {
  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}

function displayEditForm() {
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}

function updateRecipe() {
  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
