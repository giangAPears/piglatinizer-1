$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    $("#button").click(function(){
        //clears the resultant so that it doesn't append
        $("#output").text(" ");
        let string = $(".initial").val();
        lowerCaseString = string.toLowerCase();
        let words = lowerCaseString.split(" ");
        //makes the 3 parts of the result
        $("#user").append(`"${lowerCaseString}"`);
        $("#becomes").append(" becomes ");
        words.forEach(function(word){
            let firstLetter = word.charAt(0);
            // move the first letter to the end
            let restOfWord = word.slice(1);
            if(lowerCaseString==="" || lowerCaseString===" ") {
                alert("Please type something in");
                $(".initial").val("");
            } else {
            $("#output").append(`${restOfWord + firstLetter}ay `);
            $(".initial").val("");
            }
        });
    });
});
