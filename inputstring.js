



/*inputString = () => 
{
    let validInput;
    let validInput  = document.forms["inputForm"]["inputHere"].value;
  
    if(validInput != String)
    {
        alert = ("Please enter a string value");
        return false;
    }
}*/


inputString = () => {
    let x, text;
    let letters = /^[A-Za-z]+$/;
    // Get the value of the input field with id="inputValue"
    value = document.getElementById("inputValue").value;

    // If x is Not a Number or less than one or greater than 10
    if (!value.match(/^[a-zA-Z]+$/) || "" ) {
   text = "Input not valid";
       //window.alert("Input not valid");
       // document.write("Input not valid");
        
    } else {
        text = "Input valid, If you want your Input to be displayed alphabetically press your enter key";
      // window.alert("Input valid, If you want your Input to be displayed alphabetically press your enter key");
        
    }
        document.getElementById("output").innerHTML = text;

    document.addEventListener("keyup", function (event)//an eventlistener looks out for a particular event that its assigned to,
    //Here it is assigned to the keyup event, It measn the event listener would be triggered whenever  KEYButton is pressed on the keyboard
    {
    if (event.keyCode === 13) {
      
        inputString = (value)=>
         { let read;

            return value.split('').sort().join('');
        }
        window.alert("Your Input arranged alphabetically is:" + " " + inputString(value));
      }
        })
    }







 /*   <div class="container">
        <div class="header">
            <span>CodeHandbook : Sorting String Using JavaScript</span>
        </div>

        <div class="content">
            <input id="txt" type="text" />
            <button id="btn" onClick="sortItem()">Sort String</button>
            <div class="result">
                <span id="result"></span>
            </div>
        </div>

    </div>*/




   