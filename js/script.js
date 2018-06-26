/*Main Sections*/

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

var $('#app-showhide');
var $('#app-button');
$('#app-button').click(function) {
    if $('#app-showhide'.style.display === 'none') {
        $('#app-button'.textContent) = 'Hide Appetizer Recipe';
        $('#app-showhide').show();
    } else {
        $('#app-button').textContent = 'See Appetizer Recipe';
        $('app-showhide').hide;
    }
}

/*Shows-Hides the Main Courses*/
function mainCourseClicker(){

    var mainCourseButton = document.getElementById('main-course-button');
    var mainCourseShowHide = document.getElementById('main-course-showhide');

    if (mainCourseShowHide.style.display === 'none') {
        mainCourseButton.textContent ='Hide Main Course Recipes';
        mainCourseShowHide.style.display ='block';
    } else { 
        mainCourseButton.textContent ='See Main Course Recipes';
        mainCourseShowHide.style.display ='none';
    }
}

/*Shows-Hides the Side Dishes*/
function sideDishesClicker(){

    var sideDishesButton = document.getElementById('side-dishes-button');
    var sideDishesShowHide = document.getElementById('side-dishes-showhide');

    if (sideDishesShowHide.style.display === 'none') {
        sideDishesButton.textContent ='Hide Side Dishes Recipes';
        sideDishesShowHide.style.display ='block';
    } else { 
        sideDishesButton.textContent ='See Side Dishes Recipes';
        sideDishesShowHide.style.display ='none';
    }
}

/*Shows-Hides the Desserts*/
function dessertClicker(){

    var dessertButton = document.getElementById('dessert-button');
    var dessertShowHide = document.getElementById('dessert-showhide');

    if (dessertShowHide.style.display === 'none') {
        dessertButton.textContent ='Hide Dessert Recipes';
        dessertShowHide.style.display ='block';
    } else { 
        dessertButton.textContent ='See Dessert Recipes';
        dessertShowHide.style.display ='none';
    }
}

/* Recipes */

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


/*Shows-Hides the Pork Marsala Recipe*/
function porkMarsalaClicker(){

    var porkMarsalaRecipeButton = document.getElementById('pork-marsala-recipe-button');
    var porkMarsalaRecipeShowHide = document.getElementById('pork-marsala-recipe-showhide');

    if (porkMarsalaRecipeShowHide.style.display === 'none') {
        porkMarsalaRecipeButton.textContent ='Hide Recipe';
        porkMarsalaRecipeShowHide.style.display ='block';
    } else { 
        porkMarsalaRecipeButton.textContent ='Show Recipe';
        porkMarsalaRecipeShowHide.style.display ='none';
    }
}

/*Shows-Hides the Thai Coconut Shrimp Recipe*/
function thaiCoconutShrimpClicker(){

    var thaiCoconutShrimpRecipeButton = document.getElementById('thai-coconut-shrimp-recipe-button');
    var thaiCoconutShrimpRecipeShowHide = document.getElementById('thai-coconut-shrimp-recipe-showhide');

    if (thaiCoconutShrimpRecipeShowHide.style.display === 'none') {
        thaiCoconutShrimpRecipeButton.textContent ='Hide Recipe';
        thaiCoconutShrimpRecipeShowHide.style.display ='block';
    } else { 
        thaiCoconutShrimpRecipeButton.textContent ='Show Recipe';
        thaiCoconutShrimpRecipeShowHide.style.display ='none';
    }
}

/*Shows-Hides the Savory Chicken Recipe*/
function savoryChickenClicker(){

    var savoryChickenRecipeButton = document.getElementById('savory-chicken-recipe-button');
    var savoryChickenRecipeShowHide = document.getElementById('savory-chicken-recipe-showhide');

    if (savoryChickenRecipeShowHide.style.display === 'none') {
        savoryChickenRecipeButton.textContent ='Hide Recipe';
        savoryChickenRecipeShowHide.style.display ='block';
    } else { 
        savoryChickenRecipeButton.textContent ='Show Recipe';
        savoryChickenRecipeShowHide.style.display ='none';
    }
}

/*Shows-Hides the Indiana Cucumber Salad Recipe*/
function cucumberSaladClicker(){

    var cucumberSaladRecipeButton = document.getElementById('cucumber-salad-recipe-button');
    var cucumberSaladRecipeShowHide = document.getElementById('cucumber-salad-recipe-showhide');

    if (cucumberSaladRecipeShowHide.style.display === 'none') {
        cucumberSaladRecipeButton.textContent ='Hide Recipe';
        cucumberSaladRecipeShowHide.style.display ='block';
    } else { 
        cucumberSaladRecipeButton.textContent ='Show Recipe';
        cucumberSaladRecipeShowHide.style.display ='none';
    }
}

/*Shows-Hides the Asparagus with Lemon and Goat Cheese Recipe*/
function asparagusLemonRecipeClicker(){

    var asparagusLemonRecipeButton = document.getElementById('asparagus-lemon-recipe-button');
    var asparagusLemonRecipeShowHide = document.getElementById('asparagus-lemon-recipe-showhide');

    if (asparagusLemonRecipeShowHide.style.display === 'none') {
        asparagusLemonRecipeButton.textContent ='Hide Recipe';
        asparagusLemonRecipeShowHide.style.display ='block';
    } else { 
        asparagusLemonRecipeButton.textContent ='Show Recipe';
        asparagusLemonRecipeShowHide.style.display ='none';
    }
}

/*Shows-Hides the Grilled Carrot Recipe*/
function grilledCarrotRecipeClicker(){

    var grilledCarrotRecipeButton = document.getElementById('grilled-carrot-recipe-button');
    var grilledCarrotRecipeShowHide = document.getElementById('grilled-carrot-recipe-showhide');

    if (grilledCarrotRecipeShowHide.style.display === 'none') {
        grilledCarrotRecipeButton.textContent ='Hide Recipe';
        grilledCarrotRecipeShowHide.style.display ='block';
    } else { 
        grilledCarrotRecipeButton.textContent ='Show Recipe';
        grilledCarrotRecipeShowHide.style.display ='none';
    }
}

/*Shows-Hides the Grilled Carrot Recipe*/
function pumpkinSpiceRecipeClicker(){

    var pumpkinSpiceRecipeButton = document.getElementById('pumpkin-spice-recipe-button');
    var pumpkinSpiceRecipeShowHide = document.getElementById('pumpkin-spice-recipe-showhide');

    if (pumpkinSpiceRecipeShowHide.style.display === 'none') {
        pumpkinSpiceRecipeButton.textContent ='Hide Recipe';
        pumpkinSpiceRecipeShowHide.style.display ='block';
    } else { 
        pumpkinSpiceRecipeButton.textContent ='Show Recipe';
        pumpkinSpiceRecipeShowHide.style.display ='none';
    }
}

/*Shows-Hides the Cinnamon Buttercream Frosting Recipe*/
function cinnamonFrostingRecipeClicker(){

    var cinnamonFrostingRecipeButton = document.getElementById('cinnamon-frosting-recipe-button');
    var cinnamonFrostingRecipeShowHide = document.getElementById('cinnamon-frosting-recipe-showhide');

    if (cinnamonFrostingRecipeShowHide.style.display === 'none') {
        cinnamonFrostingRecipeButton.textContent ='Hide Recipe';
        cinnamonFrostingRecipeShowHide.style.display ='block';
    } else { 
        cinnamonFrostingRecipeButton.textContent ='Show Recipe';
        cinnamonFrostingRecipeShowHide.style.display ='none';
    }
}

/*Shows-Hides the Brownies Recipe*/
function browniesRecipeClicker(){

    var browniesRecipeButton = document.getElementById('brownies-recipe-button');
    var browniesRecipeShowHide = document.getElementById('brownies-recipe-showhide');

    if (browniesRecipeShowHide.style.display === 'none') {
        browniesRecipeButton.textContent ='Hide Recipe';
        browniesRecipeShowHide.style.display ='block';
    } else { 
        browniesRecipeButton.textContent ='Show Recipe';
        browniesRecipeShowHide.style.display ='none';
    }
}


