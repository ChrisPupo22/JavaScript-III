/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The Window/Global object binding, this applies to the the global scope of the program. 
* 2. Implicit Binding: this is when the object before the "." is the object that is being referred to by "this".
* 3. New Binding: this is when a constructor function returns a new object using the "new" key word. 
* 4. Explicit Binding: this is when you manually override the new binding of an item by using .apply and .call
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function whatsUp(whatUp) {
    console.log(this);
    return whatUp; 
}
whatsUp("whatUp");

// Principle 2

// code example for Implicit Binding 
// ode to "the office"
const theObj = {
    joke: 'knock knock',
    sayJoke: function(punch) {
        console.log(`${this.joke} who's there? ${punch}`);
        console.log(this); 
    }
};
theObj.sayJoke('KGB!!!'); 

// Principle 3

// code example for New Binding
function RudePerson(intro) {
    this.meanIntro = 'what do you want';
    this.intro = intro; 
    this.speak = function(){
        console.log(this.meanIntro +' '+ this.intro +'?!');
        console.log(this);
    };
};
const tom = new RudePerson('Petty');
const jimmy = new RudePerson('two shoes');

tom.speak();
jimmy.speak();


// Principle 4

// code example for Explicit Binding

