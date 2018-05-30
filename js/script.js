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

/*Shows-Hides the Stuffed Shrimp Recipe*/
function stuffedShrimpClicker(){

    var stuffedShrimpRecipeButton = document.getElementById('stuffed-shrimp-recipe-button');
    var stuffedShrimpRecipeShowHide = document.getElementById('stuffed-shrimp-recipe-showhide');

    if (stuffedShrimpRecipeShowHide.style.display === 'none') {
        stuffedShrimpRecipeButton.textContent ='Hide Recipe';
        stuffedShrimpRecipeShowHide.style.display ='block';
    } else { 
        stuffedShrimpRecipeButton.textContent ='Show Recipe';
        stuffedShrimpRecipeShowHide.style.display ='none';
    }
}

/*Shows-Hides the Crostini Recipe*/
function crostiniClicker(){

    var crostiniRecipeButton = document.getElementById('crostini-recipe-button');
    var crostiniRecipeShowHide = document.getElementById('crostini-recipe-showhide');

    if (crostiniRecipeShowHide.style.display === 'none') {
        crostiniRecipeButton.textContent ='Hide Recipe';
        crostiniRecipeShowHide.style.display ='block';
    } else { 
        crostiniRecipeButton.textContent ='Show Recipe';
        crostiniRecipeShowHide.style.display ='none';
    }
}