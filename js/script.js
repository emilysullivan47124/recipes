/*Shows-Hides the Appetizer*/
function appClicker(){

    var appButton = document.getElementById('app-button');
    var appShowHide = document.getElementById('app-showhide');

    if (appShowHide.style.display === 'none') {
        appButton.textContent ='Hide Appetizer Recipes';
        appShowHide.style.display ='block';
    } else { 
        appButton.textContent ='See Appetizer Recipes';
        appShowHide.style.display ='none';
    }
}

/*Shows-Hides the Nacho Recipe*/
function nachoClicker(){

    var nachoRecipeButton = document.getElementById('nacho-recipe-button');
    var nachoRecipeShowHide = document.getElementById('nacho-recipe-showhide');

    if (nachoRecipeShowHide.style.display === 'none') {
        nachoRecipeButton.textContent ='Hide Recipe';
        nachoRecipeShowHide.style.display ='block';
    } else { 
        nachoRecipeButton.textContent ='Show Recipe';
        nachoRecipeShowHide.style.display ='none';
    }
}