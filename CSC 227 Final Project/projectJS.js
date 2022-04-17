
function myWindow() {

     var name = document.getElementById('txtName').value;
     var city = document.getElementById('txtcity').value;
     var state = document.getElementById("txtState").value;
     var zipcode = document.getElementById("zipCode").value;
     var socialMedia = document.getElementById("socialMedia").value;
     var phoneNumber = document.getElementById("phoneNumber").value;
     var email = document.getElementById("emailAddress").value;
     var portfolio = document.getElementById("portFolio").value;
     var titleJob = document.getElementById("titleJob").value;
     
     
     var codeSkills = document.getElementById("codeSkills").value;
     var writingSkills = document.getElementById("writingSkills").value;
     var workEthic = document.getElementById("workEthic").value;
     var javaSkills = document.getElementById("javaScriptskills").value;
     var codeExperience = document.getElementById("codingExperience").value;
     var educationBackground = document.getElementById("education").value;
     var startDate1 = document.getElementById("startDate1").value;
     var endDate1 = document.getElementById("endDate1").value;
     var workExp1 = document.getElementById("workExp1").value;
     var startDate2 = document.getElementById("startDate2").value;
     var endDate2 = document.getElementById("endDate2").value;
     var workExp2 = document.getElementById("workExp2").value;
     var startDate3 = document.getElementById("startDate3").value;
     var endDate3 = document.getElementById("endDate3").value;
     var workExp3 = document.getElementById("workExp3").value;
     var references = document.getElementById("businessRef").value;

  
        var str = document.getElementById("emailAddress").value;
        var checkerRegExp = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        var a = checkerRegExp.test(str);
        
        if (a == true) {
            visitorName = name;
            myText = ("<html>\n<head > <link rel='stylesheet' href='projectStyle.css'><title>Welcome</title>\n</head>\n<body class = d>\n");
            myText += ("<h1 class = 'mystyle'>"  + visitorName + "</h1>");
            myText += ("<p>" + city +  " , " + state +  " , " + zipcode + "  " + "</p>" );

            myText+=("<p>" + "Social Media: " + socialMedia + "</p>");

            myText+=("<p>" + "Phone Number : " + phoneNumber + "</p>");

            myText+=("<p>" + "Email : " + email + "</p>");

            myText+=("<p>" + "Portfolio : " + portfolio + "</p>");
        
            myText += ("************************************************************************************************************************************")
            myText +=("<h2 class = 'mystyle'>"  + titleJob + "</h2>");
            myText += ("************************************************************************************************************************************")
            myText +=(" <h3 >" + "Coding Skills: " + "</h3>");
            myText +=(" <p >" + codeSkills + "</p>");
            myText +=(" <h3>" + "Writing Skills: " + "</h3>");
            myText +=(" <p c>" + writingSkills + "</p>");
            myText +=(" <h3>" + "Work Ethic: " + "</h3>");
            myText +=(" <p>" + workEthic + "</p>");
            myText +=(" <h3>" + "JavScript Skills: " + "</h3>");
            myText +=(" <p>" + javaSkills + "</p>");
            myText +=(" <h3>" + "Code Experience: " + "</h3>");
            myText +=(" <p>" + codeExperience + "</p>");
            myText +=(" <h3>" + "Educational Background: " + "</h3>");
            myText +=(" <p>" + educationBackground + "</p>");
            myText +=(" <h3>" + "Job Experience: " + "</h3>");
            myText +=(" <p>" + "Start Date: " + startDate1 + "</p>");
            myText +=(" <p>" + "End Date: " +  endDate1 + "</p>");
            myText +=(" <h3>" + "Details: " + "</h3>");
            myText +=(" <p>" + workExp1 + "</p>");
            myText +=(" <h3>" + "Job Experience: " + "</h3>");
            myText +=(" <p>" + "Start Date: " + startDate2 + "</p>");
            myText +=(" <p>" + "End Date: " + endDate2 + "</p>");
            myText +=(" <h3>" + "Details: " + "</h3>");
            myText +=(" <p>" + workExp2 + "</p>");
            myText +=(" <h3>" + "Job Experience: " + "</h3>");
            myText +=(" <p>" + "Start Date: " + startDate3 + "</p>");
            myText +=(" <p>" + "End Date: " + endDate3 + "</p>");
            myText +=(" <p>" + workExp3 + "</p>");
            myText +=(" <h3>" + "References: " + "</h3>");
            myText +=(" <p>" + references + "</p>");



        
            myText += ("</body>\n</html>");
        
            flyWindow = window.open('about:blank', 'myPop', 'width=1024,height=768,left=500,top=500');
            flyWindow.document.write(myText);
        
            
        }
        else (
            alert("Incorrect Please type in a valid email")
        )
        
    
    
    
 
    



    //VALIDATE EMAIL AND CSS make lists
}

