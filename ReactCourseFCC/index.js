/*ReactDOM.render(<ul>
    <li > Coffee</li>
    <li> tea</li>
</ul>,document.getElementById("root"))
*/



//Create you own custom React Component 
//Call it MainContent and have it return a simple h1 emlement saying
// I am learning react 
// Afterards render it below the Navbar


// why use react 
// vanilla javascript is imperative 
// imperative - How should it be done? "Describing to me every step on how to do something, and I'll do it"

// Declarative- Waht should be done? "just tell me what to do, and I'll worry about how to get it done"

// react is declarative


/*function MainContent()
{
    return (
        <h1>I'm learning react</h1>
    )

}

ReactDOM.render(
<div>
    <MainContent />
</div>
,document.getElementById("root")
)

// we have a line given here which says //ReactDOM.render(<h1> hello, react</h1> , document.getElementById('root'))

// how do we recreate the above line of code in vanilla js by creating and appending an h1 to our 
// div#root(without using innerHTML)

// this is the imperative way of creating html using javascript 
const h1=document.createElement("h1");
h1.textContent="This is an imperative way to program"
h1.className="header"
document.getElementById("root").append(h1);
console.log(h1);
//<h1 class='header'>

// we have to tell it step by step 
// we will have a lot of lines of codes 
// react solves this problem by helping us 
const element=<h1 className="header">This is jsx</h1>
console.log(element);
ReactDOM.render(element,document.getElementById("root"));

// with jsx react was declarative instead of declarative
// difference between what jsx and what dom elements are 

// we can also wrap a div and assign it to a variable 

const page=(
    <div>
        <h1 className="header">This is jsx</h1>
        <p> this is paragraph</p>
    </div>
)

ReactDOM.render(
    page,document.getElementById("root")
)
*/

const page=(
    <nav>
        <h1 className="header">My website</h1>
        <ul>
            <li> Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(
    page,document.getElementById("root")
)