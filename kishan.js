function headercom(){
    let mainDiv = document.getElementById("main");
    let header = document.createElement("header");
    header.setAttribute("class","bg-dark text-white p-2 d-flex justify-contenet-around align-items-center")
    header.setAttribute("style","height:70px;width:100%; position:fixed;z-index:5000;");
    let logo = document.createElement("div");
    let search = document.createElement("div");
    let option = document.createElement("div");

    logo.setAttribute("class","d-flex justify-content-center align-items-center")
    logo.setAttribute("style","height:60px;width:20%;");
    let logotext = document.createElement("p");
    logotext.innerHTML=`<strong class='text-success'>Agro</strong><span class=text-white>Market</span>`
    logotext.setAttribute("style","font-size:30px")
    logo.appendChild(logotext);
    header.appendChild(logo)

    search.setAttribute("class","d-flex justify-content-center align-items-center");
    search.setAttribute("style","width:70%;");
    let searchdiv = document.createElement("div");
    searchdiv.setAttribute("style","height:50px;width:90%;position:relative;")
    let searchInput = document.createElement("input");
    searchInput.setAttribute("placeholder","search by crop name...")
    searchInput.setAttribute("style","width:100%;height:50px;border-radius:10px;padding-left:10px;padding-right:40px;")
    searchbutton = document.createElement("button");
    searchbutton.innerHTML="search"
    searchbutton.setAttribute("style","position: absolute; right: 1px; height:50px;width: 70px; border-radius:10px;")
    searchbutton.setAttribute("class","btn btn-success");
    searchbutton.addEventListener('click', function() {
        let query = searchInput.value.trim().toLowerCase();
        if (query) {
            searchCrops(query); // Perform search when button is clicked
        }
    });
    searchdiv.appendChild(searchInput);
    searchdiv.appendChild(searchbutton);
    search.appendChild(searchdiv);
    header.appendChild(search)

    option.setAttribute("style","width:15%")
    option.setAttribute("class","d-flex justify-content-around align-items-center");
    let signin = document.createElement("button");
    signin.innerText="Signin"
    signin.setAttribute("class","btn btn-success");
    signin.addEventListener("click",function(){
        signIn();
    });
    option.appendChild(signin);

    let signup = document.createElement("button");
    signup.innerText="Signup"
    signup.setAttribute("class","btn btn-success");
    signup.addEventListener("click",function(){
        signUp();
    });
    option.appendChild(signup);
    header.appendChild(option);
    mainDiv.appendChild(header);

}


function signUp() {
    let mainDivParent2 = document.querySelector("#mainDivParent2");
    let mainDiv2 = document.querySelector("#mainDiv2");

    mainDivParent2.removeChild(mainDiv2);

    let signupform = document.createElement("div");
    signupform.setAttribute("class", "container ");
    signupform.setAttribute("style", "height:570px; width:400px; border:2px solid black; margin-top:100px;");

    let form = document.createElement("form");
    form.setAttribute("class", "form-group mt-2  d-flex flex-column justify-content-center align-items-center");
    form.setAttribute("style", "gap:5px;");

    // Username Field
    let username = document.createElement("label");
    username.setAttribute("style", "margin:10px");
    username.innerHTML = `<strong>Username</strong>`;

    let userinput = document.createElement("input");
    userinput.setAttribute("placeholder", "Enter your name");
    userinput.setAttribute("style", "height:40px;width:100%");
    userinput.setAttribute("id", "username");
    form.appendChild(username);
    form.appendChild(userinput);

    //error
    let usernameError = document.createElement("div");
    usernameError.setAttribute("id", "usernameError");
    usernameError.setAttribute("style", "color: red; font-size: 12px;");
    form.appendChild(usernameError);

    // Email Field
    let email = document.createElement("label");
    email.setAttribute("style", "margin:10px");
    email.innerHTML = `<strong>Email</strong>`;
    let emailinput = document.createElement("input");
    emailinput.setAttribute("placeholder", "Enter your email");
    emailinput.setAttribute("style", "height:40px;width:100%");
    emailinput.setAttribute("id", "email");
    form.appendChild(email);
    form.appendChild(emailinput);

    //error
    let emailError = document.createElement("div");
    emailError.setAttribute("id", "emailError");
    emailError.setAttribute("style", "color: red; font-size: 12px;");
    form.appendChild(emailError);

    // Password Field
    let password = document.createElement("label");
    password.setAttribute("style", "margin:10px");
    password.innerHTML = `<strong>Password</strong>`;
    let passwordinput = document.createElement("input");
    passwordinput.setAttribute("placeholder", "Enter your password");
    passwordinput.setAttribute("type", "password");
    passwordinput.setAttribute("style", "height:40px;width:100%");
    passwordinput.setAttribute("id", "password");
    form.appendChild(password);
    form.appendChild(passwordinput);

    //error
    let passwordError = document.createElement("div");
    passwordError.setAttribute("id", "passwordError");
    passwordError.setAttribute("style", "color: red; font-size: 12px;");
    form.appendChild(passwordError);

    // Phone Number Field
    let phone = document.createElement("label");
    phone.setAttribute("style", "margin:10px");
    phone.innerHTML = `<strong>Phone No</strong>`;
    let phoneinput = document.createElement("input");
    phoneinput.setAttribute("placeholder", "Enter your phone no.");
    phoneinput.setAttribute("style", "height:40px;width:100%");
    phoneinput.setAttribute("id", "phone");
    form.appendChild(phone);
    form.appendChild(phoneinput);
    
    //error
    let phoneError = document.createElement("div");
    phoneError.setAttribute("id", "phoneError");
    phoneError.setAttribute("style", "color: red; font-size: 12px;");
    form.appendChild(phoneError);


    // Submit Button
    let submit = document.createElement("button");
    submit.setAttribute("class", "btn btn-success");
    submit.setAttribute("style", "height:40px;width:100%;margin:50px");
    submit.innerHTML = "Sign Up";

    submit.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission until validation is successful
        localsignup();

    

        // Clear previous error messages
        document.getElementById("usernameError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("passwordError").innerHTML = "";
        document.getElementById("phoneError").innerHTML = "";

        // Validation flags
        let isValid = true;

        // Validate username (non-empty, alphabetic)
        let usernameValue = userinput.value.trim();
        if (usernameValue === "") {
            document.getElementById("usernameError").innerHTML = "Username is required!";
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(usernameValue)) {
            document.getElementById("usernameError").innerHTML = "Username must only contain letters and spaces!";
            isValid = false;
        }

        // Validate email (non-empty and valid email format)
        let emailValue = emailinput.value.trim();
        if (emailValue === "") {
            document.getElementById("emailError").innerHTML = "Email is required!";
            isValid = false;
        } else if (!validateEmail(emailValue)) {
            document.getElementById("emailError").innerHTML = "Please enter a valid email address!";
            isValid = false;
        }

        // Validate password (non-empty, minimum length 6 characters)
        let passwordValue = passwordinput.value.trim();
        if (passwordValue === "") {
            document.getElementById("passwordError").innerHTML = "Password is required!";
            isValid = false;
        } else if (passwordValue.length < 6) {
            document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters!";
            isValid = false;
        }

        // Validate phone number (non-empty, numeric, and 10 digits)
        let phoneValue = phoneinput.value.trim();
        if (phoneValue === "") {
            document.getElementById("phoneError").innerHTML = "Phone number is required!";
            isValid = false;
        } else if (!/^\d{10}$/.test(phoneValue)) {
            document.getElementById("phoneError").innerHTML = "Phone number must be 10 digits!";
            isValid = false;
        }

        // If all fields are valid, proceed with submission (here we just alert)
        if (isValid) {
            alert("Form is valid. Proceeding with sign-up.");
            mainDivParent2.removeChild(signupform);
            mainDivParent2.appendChild(mainDiv2);
            localsignup(usernameValue, emailValue, passwordValue, phoneValue);
             signIn();
            // You can proceed with the actual sign-up logic here (e.g., send data to a server)
        }
       
    });

    form.appendChild(submit);
    signupform.appendChild(form);
    mainDivParent2.appendChild(signupform);
    
}

function localsignup(usernameValue, emailValue, passwordValue, phoneValue){
    let userdata ={
        username:usernameValue,
        email:emailValue,
        password:passwordValue,
        phone:phoneValue
    };
    
      localStorage.setItem("email",JSON.stringify(userdata));
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

//sigin form
function signIn() {
    let mainDivParent2 = document.querySelector("#mainDivParent2");
    let mainDiv2 = document.querySelector("#mainDiv2");

    console.log(mainDiv2)
    if(mainDiv2){
    mainDivParent2.removeChild(mainDiv2);
    }

    let signinform = document.createElement("div");
    signinform.setAttribute("class", "container ");
    signinform.setAttribute("style", "height:350px; width:400px; border:2px solid black; margin-top:100px;");

    let form = document.createElement("form");
    form.setAttribute("class", "form-group mt-2  d-flex flex-column justify-content-center align-items-center");
    form.setAttribute("style", "gap:5px;");

    // Email Field
    let email = document.createElement("label");
    email.setAttribute("style", "margin:10px");
    email.innerHTML = `<strong>Email</strong>`;
    let emailinput = document.createElement("input");
    emailinput.setAttribute("placeholder", "Enter your email");
    emailinput.setAttribute("type", "email");  // This is to help with email format validation
    emailinput.setAttribute("style", "height:40px;width:100%");
    emailinput.setAttribute("id", "email");  // Add an id for easier reference
    form.appendChild(email);
    form.appendChild(emailinput);

    //error
    let emailError = document.createElement("div");
    emailError.setAttribute("id", "emailError");
    emailError.setAttribute("style", "color: red; font-size: 12px;");
    form.appendChild(emailError);

    // Password Field
    let password = document.createElement("label");
    password.setAttribute("style", "margin:10px");
    password.innerHTML = `<strong>Password</strong>`;
    let passwordinput = document.createElement("input");
    passwordinput.setAttribute("placeholder", "Enter your password");
    passwordinput.setAttribute("type", "password");
    passwordinput.setAttribute("style", "height:40px;width:100%");
    passwordinput.setAttribute("id", "password");  // Add an id for easier reference
    form.appendChild(password);
    form.appendChild(passwordinput);

    // Error messages

    let passwordError = document.createElement("div");
    passwordError.setAttribute("id", "passwordError");
    passwordError.setAttribute("style", "color: red; font-size: 12px;");
    form.appendChild(passwordError);

    // Submit Button
    let submit = document.createElement("button");
    submit.setAttribute("class", "btn btn-success");
    submit.setAttribute("style", "height:40px;width:100%;margin:50px");
    submit.innerHTML = "Sign In";
    
    // Add click event to submit button
    submit.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission until validation is successful
        
        // Clear previous error messages
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("passwordError").innerHTML = "";

        // Validation
        let isValid = true;
        
        // Validate email
        let emailValue = emailinput.value.trim();
        if (emailValue === "") {
            document.getElementById("emailError").innerHTML = "Email is required!";
            isValid = false;
        } else if (!validateEmail(emailValue)) {
            document.getElementById("emailError").innerHTML = "Please enter a valid email address!";
            isValid = false;
        }
        
        // Validate password
        let passwordValue = passwordinput.value.trim();
        if (passwordValue === "") {
            document.getElementById("passwordError").innerHTML = "Password is required!";
            isValid = false;
        } else if (passwordValue.length < 6) {
            document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters!";
            isValid = false;
        }

        // If validation is successful, proceed with form submission
        if (isValid) {
            console.log(mainDiv2);
            console.log(mainDivParent2);
            mainDivParent2.removeChild(signinform);
            mainDivParent2.appendChild(mainDiv2);
            // You can proceed with your actual sign-in logic here (e.g., API call)
            
        }
    });


    let getlocaldata = localStorage.getItem("email")
console.log(getlocaldata);

 getlocaldata=JSON.parse(getlocaldata);
 if(getlocaldata.password==password){
    alert("sigin successful!")


 }else{
    // alert("incorrect password")
 }

    form.appendChild(submit);
    signinform.appendChild(form);
    mainDivParent2.appendChild(signinform);
}
 

// Function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}


function slider() {
    let mainDiv = document.getElementById("main");

     //main-Div-Parent
     let mainDiv2Parent = document.createElement("div");
     mainDiv2Parent.setAttribute("id","mainDivParent2");
     mainDiv2Parent.setAttribute("class","d-flex flex-column");
     mainDiv.appendChild(mainDiv2Parent);


    //main div-2
    let mainDiv2 = document.createElement("div");
    mainDiv2.setAttribute("id","mainDiv2");
    mainDiv2.setAttribute("class","d-flex flex-column");
    mainDiv2Parent.appendChild(mainDiv2);


    let slide = document.createElement("div");
    slide.setAttribute("id","slide-con")
    let images = [
        "slide-1.png",
        "slide-2_.png",
        "slide-3.png",
        "slide-4.png" 
        
    ];
    let currentIndex = 0;

    // Create image elements and append to the slide
    images.forEach(srcp => {
        let img = document.createElement("img");
        img.setAttribute("src", srcp);
        img.style.display = "none"; // Hide all images initially
        slide.appendChild(img);
    });

    // Show the first image
    slide.children[currentIndex].style.display = "block";

    // Set styles for the slide container
    slide.setAttribute("style", "height: 300px; width: 100%; margin-left: 7%; margin-top: 5%;");
    mainDiv2.appendChild(slide);

    // Function to change the slide
    function changeSlide() {
        // Hide the current image
        slide.children[currentIndex].style.display = "none";
        
        // Update index for next image
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the start

        // Show the next image
        slide.children[currentIndex].style.display = "block";
    }

    // Change slide every 5 seconds
    setInterval(changeSlide, 5000);
    mark();
    CardContainerComponent();
    page();
    
}

function mark(){
    let mainDiv2 = document.getElementById("mainDiv2");
    let market = document.createElement("div");
    market.setAttribute("id","market-con")
    market.setAttribute("style","height:50px;width:85%;margin-top:12px;margin-left:7%;background-color:white;border-radius:8px;")
    market.setAttribute("class"," d-flex justify-content-center align-items-center")
    let marquee = document.createElement("marquee")
    marquee.innerHTML=`<strong class='text-success'>Wheat: </strong><span class=text-danger> Max Price:2500 | </span> <strong class='text-success'>Corn: </strong><span class=text-danger> Max Price:2000 | </span><strong class='text-success'>Rice: </strong><span class=text-danger> Max Price:2200 | </span><strong class='text-success'>Barley: </strong><span class=text-danger> Max Price:1600 | </span><strong class='text-success'>Soybean: </strong><span class=text-danger> Max Price:4000 | </span><strong class='text-success'>Mustard: </strong><span class=text-danger> Max Price:5000 | </span><strong class='text-success'>Onion: </strong><span class=text-danger> Max Price:3000 | </span><strong class='text-success'>Potato: </strong><span class=text-danger> Max Price:1800  </span>`;
    marquee.setAttribute("style","direction:left;scrollamount:40;scrolldelay:85;behavior:alernate;")

      
    
    market.appendChild(marquee);
    mainDiv2.appendChild(market);
}


function CardContainerComponent(){
    let mainDiv2 = document.getElementById("mainDiv2")

    let cardcontainer = document.createElement("div")
    cardcontainer.setAttribute("class","container mt-2")
    cardcontainer.setAttribute("id","card-container")

    let cardrow = document.createElement("div")
    cardrow.setAttribute("class","row")

    CardComponent(getData(),cardrow)
    cardcontainer.appendChild(cardrow);
    mainDiv2.appendChild(cardcontainer);
}

function CardComponent(data,cardrow){
    for(let product of data){
        let card = document.createElement("div");
        card.setAttribute("class","col-md-3 p-2 ");
        let cardContent = document.createElement("div")
        cardContent.setAttribute("style","height:320px;box-shadow:10px 10px 10px grey;")
        cardContent.setAttribute("class","d-flex flex-column justify-content-center align-items-center")
        let productimage = document.createElement("img")
        productimage.setAttribute("src",product.image_url);
        productimage.setAttribute("style","height:200px;width:100%")
        cardContent.appendChild(productimage);
        let h6 = document.createElement("h6")
        h6.innerHTML=product.crop_name;
        h6.setAttribute("class","text-center");
        cardContent.appendChild(h6)

        let price = document.createElement("p");
        price.innerHTML=`<strong class='text-success'>${product.crop_maximum_price} Rs. </Strong>`
        cardContent.appendChild(price);

        let viewMore = document.createElement("button");
        viewMore.innerText="View more"
        viewMore.setAttribute("class","btn btn-success")
        viewMore.setAttribute("style","width:100%")
        viewMore.addEventListener('click',function(){
            ViewMoreComponent(product)
        })
        cardContent.appendChild(viewMore);
        card.appendChild(cardContent);
        cardrow.appendChild(card);
    }

}

function page(){
    let mainDiv2 = document.getElementById("mainDiv2")

    let pagediv = document.createElement("div");
    pagediv.setAttribute("class","d-flex justify-content-center align-items-center");
     pagediv.setAttribute("style","height:50px;width:100%;margin-top:10px;");
    
    let pagebutton = document.createElement("button");
    pagebutton.innerText="SeeAll";
    pagebutton.setAttribute("class","btn btn-success");
    pagebutton.addEventListener("click",()=>{
        mainDiv2.removeChild(pagediv);
        CardContainerComponent2()
    })
    pagediv.appendChild(pagebutton);
    mainDiv2.appendChild(pagediv);
    
}

function CardContainerComponent2(){
    let mainDiv2 = document.getElementById("mainDiv2")

    let cardcontainer2 = document.createElement("div")
    cardcontainer2.setAttribute("class","container mt-2")
    cardcontainer2.setAttribute("id","cardcontainer2")
    
    let cardrow = document.createElement("div")
    cardrow.setAttribute("class","row")
    CardComponent(getData2(),cardrow)
    cardcontainer2.appendChild(cardrow);
    mainDiv2.appendChild(cardcontainer2);

    less();

}


function less(){
    let mainDiv2 = document.getElementById("mainDiv2");
    let cardcontainer2 = document.getElementById("cardcontainer2")


    let lessdiv = document.createElement("div");
    lessdiv.setAttribute("class","d-flex justify-content-center align-items-center");
    lessdiv.setAttribute("style","height:50px;width:100%;margin-top:10px;");
    
    let lessbutton = document.createElement("button");
    lessbutton.innerHTML="seeless";
    lessbutton.setAttribute("class","btn btn-success");
    lessbutton.setAttribute("style","height:40px; width:80px;")
    lessbutton.addEventListener("click",function(){
        mainDiv2.removeChild(cardcontainer2);
        mainDiv2.removeChild(lessdiv);
        page();
    })
    
    lessdiv.appendChild(lessbutton);
    mainDiv2.appendChild(lessdiv);


}

function CardComponent(data,cardrow){
    for(let product of data){
        let card = document.createElement("div"); 
        card.setAttribute("class","col-md-3 p-2 ");
        // card.setAttribute("style"," border-radius:10px; ");
        let cardContent = document.createElement("div")
        cardContent.setAttribute("style","height:320px;box-shadow:10px 10px 10px grey; border-radius:10px;")
        cardContent.setAttribute("class","d-flex flex-column justify-content-center align-items-center")
        let productimage = document.createElement("img")
        productimage.setAttribute("src",product.image_url);
        productimage.setAttribute("style","height:200px;width:90%; border-radius:10px;")
        cardContent.appendChild(productimage);
        let h6 = document.createElement("h6")
        h6.innerHTML=product.crop_name;
        h6.setAttribute("class","text-center");
        cardContent.appendChild(h6)

        let price = document.createElement("p");
        price.innerHTML=`<strong class='text-success'>${product.crop_maximum_price} Rs. </Strong>`
        cardContent.appendChild(price);

        let viewMore = document.createElement("button");
        viewMore.innerText="View more"
        viewMore.setAttribute("class","btn btn-success")
        viewMore.setAttribute("style","width:90%; border-radius:20px;")
        viewMore.addEventListener('click',function(){
            ViewMoreComponent(product)
        })
        cardContent.appendChild(viewMore);
        card.appendChild(cardContent);
        cardrow.appendChild(card);
    }

}

function ViewMoreComponent(product){
    let mainDiv =document.querySelector("#main");
    let mainDivParent2 =document.querySelector("#mainDivParent2");
    let mainDiv2 =document.querySelector("#mainDiv2");


    
    if(mainDiv2){
    mainDivParent2.removeChild(mainDiv2);
    }

    let productdatialcontainer = document.createElement("div");
    productdatialcontainer.setAttribute("class"," continer")
    productdatialcontainer.setAttribute("style"," margin-top:100px;margin-left:100px; margin-right:100px;")

    let row = document.createElement("div");
    row.setAttribute("class","row");

    let firstcolumn = document.createElement("div")
    firstcolumn.setAttribute("style","height:500px;box-shadow:10px 10px 10px grey")
    firstcolumn.setAttribute("class","col-md-6 d-flex flex-column")

    let productimg = document.createElement("img");
    productimg.src=product.image_url;
    productimg.setAttribute("style","width:100%;height:400px");
    firstcolumn.appendChild(productimg);

    row.appendChild(firstcolumn);

    let secondcol = document.createElement("div")
    secondcol.setAttribute("style","height:500px; box-shadow:10px 10px 10px grey;")
    secondcol.setAttribute("class","col-md-6 d-flex flex-column p-3 justify-content-around");

    let productHeader = document.createElement("div")
    productHeader.setAttribute("class","d-flex justify-content-between p-1")
    productHeader.setAttribute("style","height:80px; width:100%;margin-left:10px;")

    let titleLabel = document.createElement("label")
    titleLabel.innerHTML=`<strong 'font-size:20px';>${product.crop_name} [${product.crop_type}]</strong>`
    productHeader.appendChild(titleLabel)

    let priceLabel = document.createElement("label")
    //priceLabel.setAttribute("style","margin-left:400px;")
    priceLabel.innerHTML=`<strong class='text-danger' style='font-size: 25px;'><strong class='text-danger' style='font-size: 25px;'>Max:</strong>${product.crop_maximum_price}.Rs</strong>`
    productHeader.appendChild(priceLabel)

    let pricelabel2 = document.createElement("label");
   // pricelabel2.setAttribute("style","margin-top:40px;")
    pricelabel2.innerHTML=`<strong class='text-danger' style='font-size: 25px;'><strong class='text-danger' style='font-size: 25px;'>Min:</strong>${product.crop_minimum_price}.Rs</strong>`
    productHeader.appendChild(pricelabel2);

    secondcol.appendChild(productHeader)

    let productDescription = document.createElement("p")
    productDescription.innerHTML = product.description
    productDescription.setAttribute("style","margin-left:10px;")
    secondcol.appendChild(productDescription);

    let Mandilocation = document.createElement("p")
    Mandilocation.innerHTML = `<strong>Mandi Location: </strong>${product.mandi_location}`
    Mandilocation.setAttribute("style","margin-left:10px;")
    secondcol.appendChild(Mandilocation);

    let paymentmethod = document.createElement("p")
    paymentmethod.innerHTML = `<strong>Payment Method: </strong>${product.payment_method}`
    paymentmethod.setAttribute("style","margin-left:10px;")
    secondcol.appendChild(paymentmethod);

    let Transport = document.createElement("p")
    Transport.innerHTML = `<strong>Transportation: </strong>${product.transportation}`
    Transport.setAttribute("style","margin-left:10px;")
    secondcol.appendChild(Transport);

    let marketregulation = document.createElement("p")
    marketregulation.innerHTML = `<strong>Market Regulation: </strong>${product.market_regulation}`
    marketregulation.setAttribute("style","margin-left:10px;")
    secondcol.appendChild(marketregulation);

    let governmentschemes = document.createElement("p")
    governmentschemes.innerHTML = `<strong>Government Schemes: </strong>${product.government_schemes}`
    governmentschemes.setAttribute("style","margin-left:10px;")
    secondcol.appendChild(governmentschemes);

    let msp = document.createElement("p")
    msp.innerHTML = `<strong>MSP: </strong>${product.MSP}`
    msp.setAttribute("style","margin-left:10px;")
    secondcol.appendChild(msp);

    let qualitygrading = document.createElement("p")
    qualitygrading.innerHTML = `<strong>Quality and Grading: </strong>${product.quality_and_grading}`
    qualitygrading.setAttribute("style","margin-left:10px;")
    secondcol.appendChild(qualitygrading);

    let Rating = document.createElement("p")
    Rating.innerHTML = `<strong>Rating: </strong>${product.rating}`
    Rating.setAttribute("style","margin-left:20px;")
    secondcol.appendChild(Rating);
    row.appendChild(secondcol)

    productdatialcontainer.appendChild(row);
    mainDivParent2.appendChild(productdatialcontainer);

}

function imagemark(){
    let mainDiv = document.getElementById("main");
    let footslide = document.createElement("div");
    footslide.setAttribute("id","footslide-con");
    footslide.setAttribute("style","height:60px;width:85%;margin-top:12px;margin-left:7%;")
    footslide.setAttribute("class"," d-flex justify-content-center align-items-center")
    let marquee = document.createElement("marquee");
    marquee.setAttribute("style","direction:left;scrollamount:40;scrolldelay:85;behavior:alernate;")
    marquee.setAttribute("class","d-flex justify-content-space-center align-items-center")
    let imag =document.createElement("img");
    imag.setAttribute("style","margin-right:3px")
    imag.src="indiagov.png";
    marquee.appendChild(imag);

    let imag2 = document.createElement("img");
    imag2.setAttribute("style","margin-right:3px")
    imag2.src="farportal.png";
    marquee.appendChild(imag2);

    let imag3 = document.createElement("img");
    imag3.setAttribute("style","margin-right:3px")
    imag3.src="fertilizerscroll.png";
    marquee.appendChild(imag3);

    let imag4 = document.createElement("img");
    imag4.setAttribute("style","margin-right:3px")
    imag4.src="icarscroll.png";
    marquee.appendChild(imag4);

    let imag5 = document.createElement("img");
    imag5.setAttribute("style","margin-right:3px")
    imag5.src="maharashtrastate.png";
    marquee.appendChild(imag5);

    let imag6 = document.createElement("img");
    imag6.setAttribute("style","margin-right:3px")
    imag6.src="mkisanportal.png";
    marquee.appendChild(imag6);

    let imag7 = document.createElement("img");
    imag7.setAttribute("style","margin-right:3px")
    imag7.src="nam.png";
    marquee.appendChild(imag7);

    let imag8 = document.createElement("img");
    imag8.setAttribute("style","margin-right:3px")
    imag8.src="nhmscroll.png";
    marquee.appendChild(imag8);

    let imag9 = document.createElement("img");
    imag9.setAttribute("style","margin-right:3px")
    imag9.src="seedscrollnew.png";
    marquee.appendChild(imag9);

    footslide.appendChild(marquee);
    mainDiv.appendChild(footslide);

}

function footer(){
    let mainDiv =document.getElementById("main");
    let footersection = document.createElement("div");
    footersection.setAttribute("id","footersection-con");
    footersection.setAttribute("style","width:100;height:350px;margin-top:10px;");

    let social = document.createElement("div");
    social.setAttribute("style","height:70px;width:100%;background-color:green;")
    social.setAttribute("class","d-flex ")
    
    let para = document.createElement("div");
    para.setAttribute("style","width:40%;height:100%;margin-top:5px;margin-left:10px;")
    para.setAttribute("class","d-flex justify-content-start align-items-center")
    let peraText = document.createElement("p");
    peraText.setAttribute("style","color:white;font-wieght:400;")
    peraText.innerText = "Get connected with us on social network";
    para.appendChild(peraText);

    let socialicon = document.createElement("div");
    socialicon.setAttribute("class","d-flex justify-content-around align-items-center")
    socialicon.setAttribute("style","width:15%;height:100%;margin-left:600px;");
    let ficon = document.createElement("img");
    ficon.src="icons8-facebook-24.png";
    socialicon.appendChild(ficon);

    let inicon = document.createElement("img");
    inicon.src="icons8-instagram-24.png";
    socialicon.appendChild(inicon);

    let licon = document.createElement("img");
    licon.src="icons8-linkedin-24.png";
    socialicon.appendChild(licon);

    let ticon = document.createElement("img");
    ticon.src="icons8-twitter-24.png";
    socialicon.appendChild(ticon);


    social.appendChild(para);
    social.appendChild(socialicon);
    footersection.appendChild(social);

    let content = document.createElement("div");
    content.setAttribute("style","height:100%;width:100%")
    content.setAttribute("class","d-flex justify-content-center align-items-center");

    //div-1
    let about = document.createElement("div");
    about.setAttribute("style","height:100%;width:25%;")
    
    let head =document.createElement("h4");
    head.innerHTML="About us"
    head.setAttribute("style","margin-top:10px;margin-left:10px;")
    let abouttext = document.createElement("p")
    abouttext.setAttribute("style","margin-left:10px;")
    abouttext.innerHTML="Agromarket Crop Price is your trusted source for real-time market prices, trends, and insights for agricultural products across regions. We help farmers and buyers connect, track prices, and <br>make informed decisions to maximize profits."
    abouttext.setAttribute("style","font-weight:400;margin-left:10px;margin-bottom:10px;line-height:2.0;")
    about.appendChild(head);
    about.appendChild(abouttext);
    content.appendChild(about);

    //div-2
    let product = document.createElement("div");
    product.setAttribute("style","height:100%;width:25%;")
    let newshead = document.createElement("h4")
    newshead.setAttribute("style","margin-top:10px;margin-left:10px;")
    newshead.innerHTML="News";
    let newstext = document.createElement("p");
    newstext.setAttribute("style","margin-left:10px;line-height:2.0;")
    newstext.innerText="The agricultural technology industry is evolving rapidly. Discover the cutting-edge technologies that are transforming crop production, from AI-powered tools to automated harvesters.Get the latest news and offers from AgroMarket directly to your inbox."
    product.appendChild(newshead);
    product.appendChild(newstext);
    content.appendChild(product);
    //div-3
    let more = document.createElement("div");
    more.setAttribute("style","height:100%;width:25%;")
   
    let morehead = document.createElement("h4");
    morehead.setAttribute("style","margin-left:35px;margin-top:10px;")
    morehead.innerHTML="More";
    let moretext = document.createElement("ul");
    moretext.setAttribute("style", "list-style-type: none; font-weight: 400; margin-bottom: 20px; padding: 0; display: flex; flex-direction: column; gap: 10px;margin-left:35px;");
    // moretext.setAttribute("style","list-style-type: none;font-weight:400; margin-bottom:20px; gap:5%;")
    let list1 = document.createElement("li");
    list1.innerText="Careers";
    moretext.appendChild(list1);
    let list2 = document.createElement("li");
    list2.innerText="Blog";
    moretext.appendChild(list2);
    let list3 = document.createElement("li");
    list3.innerText="Upcoming Events";
    moretext.appendChild(list3);
    let list4 = document.createElement("li");
    list4.innerText="Press Releases";
    moretext.appendChild(list4);
    let list5 = document.createElement("li");
    list5.innerText="Sustainability";
    moretext.appendChild(list5);
    let list6 = document.createElement("li");
    list6.innerText="Investor Relations";
    moretext.appendChild(list6);
    more.appendChild(morehead);
    more.appendChild(moretext);
    content.appendChild(more);

    //div-4
    let contact = document.createElement("div");
    contact.setAttribute("style","height:100%;width:25%;")
    let contacthead = document.createElement("h4");
    contacthead.setAttribute("style","margin-left:35px;margin-top:10px;")
    contacthead.innerHTML="Contact us";
    contact.appendChild(contacthead);
    let contacttext = document.createElement("p");
    contacttext.setAttribute("style","margin-left:35px;margin-top:10px;")
    contacttext.innerHTML=`<strong>Phone:</strong><span>+918596374521</span>`;
    contact.appendChild(contacttext);

    let contacttext1 = document.createElement("p");
    contacttext1.setAttribute("style","margin-left:35px;margin-top:10px;")
    contacttext1.innerHTML=`<strong>Email:</strong><span>support@agromarketgmail.com</span>`;
    contact.appendChild(contacttext1);

    let contacttext2 = document.createElement("p");
    contacttext2.setAttribute("style","margin-left:35px;margin-top:10px;")
    contacttext2.innerHTML=`<strong>Address:</strong><span> Raj Mohalla South, Madhavastika InfoBeans Foundation, Indore, Madhya Pradesh 452002</span>`;
    contact.appendChild(contacttext2);

    content.appendChild(contact);

    footersection.appendChild(content);
    mainDiv.appendChild(footersection);

}
function loadData(){
    let products =[{"id":1,"crop_name":"Wheat","crop_type":"Cereal","mandi_location":"Delhi","date":"2024-10-31","crop_minimum_price":2200,"crop_maximum_price":2500,"quantity_rate":100,"MSP":2100,"market_regulation":"State Regulated","market_agents":["Agent A","Agent B"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN","MSP Scheme"],"market_challenges":["Price Fluctuation","Transport Issues"],"description":"Wheat is a staple food in many countries and is a major source of carbohydrates.","farmer_name":"Rajesh Kumar","rating":4.5,"reviews":[{"reviewer_name":"Anita","comment":"Good quality wheat, very satisfied!","date":"2024-10-25"},{"reviewer_name":"Sunil","comment":"Price is reasonable for the quality.","date":"2024-10-26"}],"image_url":"fresh-wheat-crop.jpg"},{"id":2,"crop_name":"Rice","crop_type":"Cereal","mandi_location":"Punjab","date":"2024-10-30","crop_minimum_price":1800,"crop_maximum_price":2200,"quantity_rate":100,"MSP":1900,"market_regulation":"State Regulated","market_agents":["Agent C","Agent D"],"quality_and_grading":"Grade B","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Water Scarcity","Labor Shortage"],"description":"Rice is a staple food for a large part of the world, particularly in Asia.","farmer_name":"Sita Devi","rating":4.0,"reviews":[{"reviewer_name":"Mohit","comment":"Good quality rice but slightly over-priced.","date":"2024-10-27"},{"reviewer_name":"Kiran","comment":"Excellent service, will buy again.","date":"2024-10-28"}],"image_url":"iso__0005_WhiteRice1_1200x1200.webp"},{"id":3,"crop_name":"Corn","crop_type":"Cereal","mandi_location":"Madhya Pradesh","date":"2024-10-29","crop_minimum_price":1500,"crop_maximum_price":1800,"quantity_rate":100,"MSP":1600,"market_regulation":"State Regulated","market_agents":["Agent E","Agent F"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN"],"market_challenges":["Pest Attacks","Weather Dependency"],"description":"Corn is widely used for food, fodder, and industrial products.","farmer_name":"Vikram Singh","rating":4.3,"reviews":[{"reviewer_name":"Ravi","comment":"Nice quality, will buy again.","date":"2024-10-25"}],"image_url":"maize-yellow-corn.jpg"},{"id":4,"crop_name":"Barley","crop_type":"Cereal","mandi_location":"Haryana","date":"2024-10-30","crop_minimum_price":1400,"crop_maximum_price":1600,"quantity_rate":100,"MSP":1500,"market_regulation":"State Regulated","market_agents":["Agent G","Agent H"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Online Transfer","government_schemes":["PM-KISAN","MSP Scheme"],"market_challenges":["Weather Dependency"],"description":"Barley is one of the oldest cultivated grains, important for food and animal feed.","farmer_name":"Anil Sharma","rating":4.2,"reviews":[{"reviewer_name":"Neha","comment":"Great quality and well-priced.","date":"2024-10-29"}],"image_url":"barley-grain-on-wooden-background-600nw-2160377105.webp"},{"id":5,"crop_name":"Mustard","crop_type":"Oilseed","mandi_location":"Rajasthan","date":"2024-10-31","crop_minimum_price":4500,"crop_maximum_price":5000,"quantity_rate":100,"MSP":4600,"market_regulation":"State Regulated","market_agents":["Agent I","Agent J"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Market Fluctuations"],"description":"Mustard is an important oilseed crop grown for its seeds.","farmer_name":"Deepak Verma","rating":4.6,"reviews":[{"reviewer_name":"Pooja","comment":"Very good quality mustard seeds.","date":"2024-10-30"}],"image_url":"100-black-mustard-seeds-small-kali-sarso-rai-100g-andaristore-original-imagkpjuwvhz3bbf.webp"},{"id":6,"crop_name":"Soybean","crop_type":"Oilseed","mandi_location":"Maharashtra","date":"2024-10-29","crop_minimum_price":3500,"crop_maximum_price":3800,"quantity_rate":100,"MSP":3700,"market_regulation":"State Regulated","market_agents":["Agent K","Agent L"],"quality_and_grading":"Grade B","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN"],"market_challenges":["Pest Issues"],"description":"Soybean is an important source of protein and oil.","farmer_name":"Suresh Patil","rating":4.1,"reviews":[{"reviewer_name":"Rahul","comment":"Satisfactory quality, will recommend.","date":"2024-10-28"}],"image_url":"Soybeans trends digicomply.webp"},{"id":7,"crop_name":"Chickpeas","crop_type":"Pulses","mandi_location":"Andhra Pradesh","date":"2024-10-30","crop_minimum_price":4000,"crop_maximum_price":4400,"quantity_rate":100,"MSP":4100,"market_regulation":"State Regulated","market_agents":["Agent M","Agent N"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Supply Issues"],"description":"Chickpeas are a rich source of protein and fiber.","farmer_name":"Raghavendra","rating":4.4,"reviews":[{"reviewer_name":"Suma","comment":"Good quality, happy with the purchase.","date":"2024-10-29"}],"image_url":"Chickpeas.png"},{"id":8,"crop_name":"Pigeon Peas","crop_type":"Pulses","mandi_location":"Karnataka","date":"2024-10-31","crop_minimum_price":4200,"crop_maximum_price":4600,"quantity_rate":100,"MSP":4300,"market_regulation":"State Regulated","market_agents":["Agent O","Agent P"],"quality_and_grading":"Grade B","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN"],"market_challenges":["Weather Effects"],"description":"Pigeon peas are a vital source of protein in many diets.","farmer_name":"Manoj Yadav","rating":4.2,"reviews":[{"reviewer_name":"Neelam","comment":"Good price for the quality.","date":"2024-10-30"}],"image_url":"red-pigeon-peas.jpg"}]
    localStorage.setItem("productList",JSON.stringify(products));
}
function loadData2(){
    let products2= [{"id":9,"crop_name":"Green Gram","crop_type":"Pulses","mandi_location":"Uttar Pradesh","date":"2024-10-29","crop_minimum_price":3800,"crop_maximum_price":4000,"quantity_rate":100,"MSP":3900,"market_regulation":"State Regulated","market_agents":["Agent Q","Agent R"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Price Variability"],"description":"Green gram is a nutritious pulse that is rich in protein.","farmer_name":"Pawan Singh","rating":4.5,"reviews":[{"reviewer_name":"Aarti","comment":"Fresh and high quality.","date":"2024-10-28"}],"image_url":"images (2).jpeg"},{"id":10,"crop_name":"Black Gram","crop_type":"Pulses","mandi_location":"Gujarat","date":"2024-10-30","crop_minimum_price":4500,"crop_maximum_price":4800,"quantity_rate":100,"MSP":4700,"market_regulation":"State Regulated","market_agents":["Agent S","Agent T"],"quality_and_grading":"Grade B","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN"],"market_challenges":["Export Restrictions"],"description":"Black gram is a popular pulse known for its health benefits.","farmer_name":"Kiran Patel","rating":4.4,"reviews":[{"reviewer_name":"Vinay","comment":"Good quality, satisfied with the service.","date":"2024-10-29"}],"image_url":"download.jpeg"},{"id":11,"crop_name":"Turmeric","crop_type":"Spice","mandi_location":"Tamil Nadu","date":"2024-10-31","crop_minimum_price":6000,"crop_maximum_price":6500,"quantity_rate":100,"MSP":6100,"market_regulation":"State Regulated","market_agents":["Agent U","Agent V"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Market Demand"],"description":"Turmeric is widely used for its culinary and medicinal properties.","farmer_name":"Ramesh Kumar","rating":4.7,"reviews":[{"reviewer_name":"Geeta","comment":"Excellent quality turmeric!","date":"2024-10-30"}],"image_url":"download (4).jpeg"},{"id":12,"crop_name":"Ginger","crop_type":"Spice","mandi_location":"Kerala","date":"2024-10-29","crop_minimum_price":8000,"crop_maximum_price":8500,"quantity_rate":100,"MSP":8200,"market_regulation":"State Regulated","market_agents":["Agent W","Agent X"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN"],"market_challenges":["Pest Management"],"description":"Ginger is valued for its flavor and medicinal properties.","farmer_name":"Ajay Menon","rating":4.6,"reviews":[{"reviewer_name":"Maya","comment":"Very fresh and aromatic.","date":"2024-10-30"}],"image_url":"download (5).jpeg"},{"id":13,"crop_name":"Coriander","crop_type":"Herb","mandi_location":"Maharashtra","date":"2024-10-31","crop_minimum_price":3000,"crop_maximum_price":3500,"quantity_rate":100,"MSP":3100,"market_regulation":"State Regulated","market_agents":["Agent Y","Agent Z"],"quality_and_grading":"Grade B","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Quality Control"],"description":"Coriander is used in various cuisines for its flavor.","farmer_name":"Nitin Rao","rating":4.3,"reviews":[{"reviewer_name":"Rita","comment":"Good quality, fragrant coriander.","date":"2024-10-30"}],"image_url":"download (6).jpeg"},{"id":14,"crop_name":"Garlic","crop_type":"Vegetable","mandi_location":"Punjab","date":"2024-10-30","crop_minimum_price":4000,"crop_maximum_price":4500,"quantity_rate":100,"MSP":4100,"market_regulation":"State Regulated","market_agents":["Agent AA","Agent AB"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN"],"market_challenges":["Export Issues"],"description":"Garlic is a popular ingredient known for its health benefits.","farmer_name":"Sukhwinder Singh","rating":4.5,"reviews":[{"reviewer_name":"Kamla","comment":"Excellent quality garlic.","date":"2024-10-30"}],"image_url":"download (3).jpeg"},{"id":15,"crop_name":"Onion","crop_type":"Vegetable","mandi_location":"Maharashtra","date":"2024-10-31","crop_minimum_price":2500,"crop_maximum_price":3000,"quantity_rate":100,"MSP":2600,"market_regulation":"State Regulated","market_agents":["Agent AC","Agent AD"],"quality_and_grading":"Grade B","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Price Fluctuations"],"description":"Onion is a widely used vegetable in Indian cooking.","farmer_name":"Pradeep Pawar","rating":4.2,"reviews":[{"reviewer_name":"Deepali","comment":"Fresh and good quality onions.","date":"2024-10-30"}],"image_url":"download (2).jpeg"},{"id":17,"crop_name":"Potato","crop_type":"Vegetable","mandi_location":"Uttar Pradesh","date":"2024-10-31","crop_minimum_price":1500,"crop_maximum_price":1800,"quantity_rate":100,"MSP":1600,"market_regulation":"State Regulated","market_agents":["Agent AG","Agent AH"],"quality_and_grading":"Grade B","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Storage Issues"],"description":"Potato is a versatile vegetable used in many dishes.","farmer_name":"Kailash Yadav","rating":4.3,"reviews":[{"reviewer_name":"Lata","comment":"Good quality potatoes.","date":"2024-10-30"}],"image_url":"images (3).jpeg"},{"id":28,"crop_name":"Peas","crop_type":"Vegetable","mandi_location":"Uttar Pradesh","date":"2024-10-30","crop_minimum_price":1800,"crop_maximum_price":2200,"quantity_rate":100,"MSP":1900,"market_regulation":"State Regulated","market_agents":["Agent BC","Agent BD"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN"],"market_challenges":["Pest Infestation"],"description":"Peas are a sweet and nutritious vegetable.","farmer_name":"Deependra Yadav","rating":4.5,"reviews":[{"reviewer_name":"Suman","comment":"Very fresh peas!","date":"2024-10-30"}],"image_url":"images (2).jpeg"},{"id":29,"crop_name":"Sweet Corn","crop_type":"Vegetable","mandi_location":"Punjab","date":"2024-10-30","crop_minimum_price":2000,"crop_maximum_price":2400,"quantity_rate":100,"MSP":2100,"market_regulation":"State Regulated","market_agents":["Agent BE","Agent BF"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Market Demand"],"description":"Sweet corn is enjoyed as a snack and in various dishes.","farmer_name":"Rajesh Kumar","rating":4.6,"reviews":[{"reviewer_name":"Nisha","comment":"Delicious and sweet corn.","date":"2024-10-30"}],"image_url":"images (1).jpeg"},{"id":32,"crop_name":"Sesame Seeds","crop_type":"Oilseeds","mandi_location":"Gujarat","date":"2024-10-31","crop_minimum_price":6000,"crop_maximum_price":6500,"quantity_rate":100,"MSP":6100,"market_regulation":"State Regulated","market_agents":["Agent BK","Agent BL"],"quality_and_grading":"Grade B","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN"],"market_challenges":["Market Demand"],"description":"Sesame seeds are used for oil extraction and in cooking.","farmer_name":"Nirmal Patel","rating":4.6,"reviews":[{"reviewer_name":"Rajesh","comment":"Fresh and high-quality seeds.","date":"2024-10-30"}],"image_url":"4d3029_8ab3aebcc53a4998b7f5d14a674b6c2b~mv2.webp"},{"id":33,"crop_name":"Safflower","crop_type":"Oilseeds","mandi_location":"Rajasthan","date":"2024-10-30","crop_minimum_price":7000,"crop_maximum_price":7500,"quantity_rate":100,"MSP":7200,"market_regulation":"State Regulated","market_agents":["Agent BM","Agent BN"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Water Scarcity"],"description":"Safflower is primarily grown for its seeds used in oil production.","farmer_name":"Suresh Kumar","rating":4.3,"reviews":[{"reviewer_name":"Ritika","comment":"Good quality safflower seeds.","date":"2024-10-30"}],"image_url":"61-Md1bi+rS._AC_UF1000,1000_QL80_.jpg"},{"id":34,"crop_name":"Sunflower Seeds","crop_type":"Oilseeds","mandi_location":"Madhya Pradesh","date":"2024-10-31","crop_minimum_price":5000,"crop_maximum_price":5500,"quantity_rate":100,"MSP":5200,"market_regulation":"State Regulated","market_agents":["Agent BO","Agent BP"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN"],"market_challenges":["Price Volatility"],"description":"Sunflower seeds are rich in oil and widely consumed.","farmer_name":"Kiran Singh","rating":4.7,"reviews":[{"reviewer_name":"Anjali","comment":"Excellent quality sunflower seeds.","date":"2024-10-30"}],"image_url":"black-sunflower-seeds.jpg"},{"id":35,"crop_name":"Groundnuts","crop_type":"Oilseeds","mandi_location":"Andhra Pradesh","date":"2024-10-30","crop_minimum_price":4000,"crop_maximum_price":4500,"quantity_rate":100,"MSP":4200,"market_regulation":"State Regulated","market_agents":["Agent BQ","Agent BR"],"quality_and_grading":"Grade B","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Market Competition"],"description":"Groundnuts are used for oil extraction and as snacks.","farmer_name":"Raju Reddy","rating":4.4,"reviews":[{"reviewer_name":"Radha","comment":"Fresh and tasty groundnuts.","date":"2024-10-30"}],"image_url":"images.jpeg"},{"id":41,"crop_name":"Finger Millet","crop_type":"Cereals","mandi_location":"Karnataka","date":"2024-10-30","crop_minimum_price":2200,"crop_maximum_price":2600,"quantity_rate":100,"MSP":2300,"market_regulation":"State Regulated","market_agents":["Agent CC","Agent CD"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Market Demand"],"description":"Finger millet is rich in calcium and used in various dishes.","farmer_name":"Krishna Rao","rating":4.5,"reviews":[{"reviewer_name":"Geeta","comment":"Very nutritious finger millet.","date":"2024-10-30"}],"image_url":"finger-millet-2-1.webp"},{"id":42,"crop_name":"Sorghum","crop_type":"Cereals","mandi_location":"Madhya Pradesh","date":"2024-10-31","crop_minimum_price":2000,"crop_maximum_price":2300,"quantity_rate":100,"MSP":2100,"market_regulation":"State Regulated","market_agents":["Agent CE","Agent CF"],"quality_and_grading":"Grade B","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN"],"market_challenges":["Weather Conditions"],"description":"Sorghum is used in food and fodder production.","farmer_name":"Arvind Singh","rating":4.3,"reviews":[{"reviewer_name":"Poonam","comment":"Good quality sorghum.","date":"2024-10-30"}],"image_url":"sorghum-seeds-3.avif"},{"id":45,"crop_name":"Amaranth","crop_type":"Cereals","mandi_location":"Uttar Pradesh","date":"2024-10-31","crop_minimum_price":2200,"crop_maximum_price":2500,"quantity_rate":100,"MSP":2300,"market_regulation":"State Regulated","market_agents":["Agent CK","Agent CL"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Awareness"],"description":"Amaranth is a gluten-free grain rich in protein.","farmer_name":"Kamal Sharma","rating":4.4,"reviews":[{"reviewer_name":"Deepika","comment":"Fresh and healthy amaranth.","date":"2024-10-30"}],"image_url":"amaranth.jpg"},{"id":46,"crop_name":"Brown Rice","crop_type":"Cereals","mandi_location":"Tamil Nadu","date":"2024-10-31","crop_minimum_price":2700,"crop_maximum_price":3000,"quantity_rate":100,"MSP":2800,"market_regulation":"State Regulated","market_agents":["Agent CM","Agent CN"],"quality_and_grading":"Grade B","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN"],"market_challenges":["Storage Issues"],"description":"Brown rice is a whole grain known for its health benefits.","farmer_name":"Vijay Kumar","rating":4.5,"reviews":[{"reviewer_name":"Priya","comment":"Good quality brown rice.","date":"2024-10-30"}],"image_url":"organic-basmati-brown-rice-500x500.webp"},{"id":47,"crop_name":"Black Rice","crop_type":"Cereals","mandi_location":"Maharashtra","date":"2024-10-31","crop_minimum_price":3500,"crop_maximum_price":4000,"quantity_rate":100,"MSP":3600,"market_regulation":"State Regulated","market_agents":["Agent CO","Agent CP"],"quality_and_grading":"Grade A","transportation":"Local Transport","payment_method":"Cash","government_schemes":["PM-KISAN"],"market_challenges":["Market Awareness"],"description":"Black rice is known for its antioxidants and health benefits.","farmer_name":"Karan Mehta","rating":4.7,"reviews":[{"reviewer_name":"Tara","comment":"Excellent quality black rice.","date":"2024-10-30"}],"image_url":"Ac85708ea101c4315b42112d9fd256be1j.jpg_300x300.webp"},{"id":48,"crop_name":"Sorghum Flour","crop_type":"Cereals","mandi_location":"Gujarat","date":"2024-10-30","crop_minimum_price":1800,"crop_maximum_price":2000,"quantity_rate":100,"MSP":1900,"market_regulation":"State Regulated","market_agents":["Agent CQ","Agent CR"],"quality_and_grading":"Grade B","transportation":"Local Transport","payment_method":"Digital Transfer","government_schemes":["PM-KISAN"],"market_challenges":["Consumer Preference"],"description":"Sorghum flour is gluten-free and used in various dishes.","farmer_name":"Ankush Joshi","rating":4.2,"reviews":[{"reviewer_name":"Simran","comment":"Good quality sorghum flour.","date":"2024-10-30"}],"image_url":"sorghum-seeds-3.avif"}]
    localStorage.setItem("productList2",JSON.stringify(products2));
}

function getData(){
    let productList = localStorage.getItem("productList")
    productList=JSON.parse(productList);
    return productList;
}
function getData2(){
    let productList = localStorage.getItem("productList2")
    productList=JSON.parse(productList);
    return productList;
}
    /////////////////////////////////////////////

    // function searchCrops(query) {
    //     let mainDiv2Parent = document.getElementById("mainDiv2Parent");
    //     // let sreahCard = 
    
    //     let data1 = getData();
    //     let data2 = getData2();
        



    // }
    function searchCrops(query) {
        // Get references to DOM elements
        let mainDiv2Parent = document.getElementById("mainDivParent2");
        let mainDiv2 =document.querySelector("#mainDiv2");
    
        // Assume getData() and getData2() fetch data from your JSON databases
        let data1 = getData(); // Replace with actual data-fetching logic
        let data2 = getData2(); // Replace with actual data-fetching logic
    
        // Function to search the crops data for the query
        function findCropInData(data, query) {
            return data.filter(item => {
                // Make the search case-insensitive
                return item.crop_name.toLowerCase().includes(query.toLowerCase()) ||
                       item.crop_type.toLowerCase().includes(query.toLowerCase()) ||
                       item.mandi_location.toLowerCase().includes(query.toLowerCase()) ||
                       item.description.toLowerCase().includes(query.toLowerCase());
            });
        }
    
        // Search in data1 first
        let searchResults = findCropInData(data1, query);
    
        // If no results found in data1, search in data2
        if (searchResults.length === 0) {
            searchResults = findCropInData(data2, query);
        }
    
        // Display the search results in the mainDiv2Parent
        if (searchResults.length > 0) {
            mainDiv2Parent.removeChild(mainDiv2);
    
            // Ensure cropRowDiv is only created once
            let cropRowDiv = document.getElementById("cropRowDiv");
            if (!cropRowDiv) {
                cropRowDiv = document.createElement("div");
                cropRowDiv.id = "cropRowDiv";
                cropRowDiv.setAttribute("class", "container d-flex flex-wrap");
                mainDiv2Parent.appendChild(cropRowDiv);
            }
    
            // Iterate through search results and create card for each crop
            searchResults.forEach(result => {
                // Create a card container
                let card = document.createElement("div");
                card.setAttribute("class", "col-md-3 p-2");
    
    
                // Create the content area for the card
                let cardContent = document.createElement("div");
                cardContent.setAttribute("style", "height:320px; box-shadow:10px 10px 10px grey;margin-top:80px ;border-radius:5px;");
                cardContent.setAttribute("class", "d-flex flex-column justify-content-center align-items-center");
    
                // Create the image element for the crop
                let productImage = document.createElement("img");
                productImage.setAttribute("src", result.image_url);
                productImage.setAttribute("style", "height:200px;width:90%;border-radius:5px;");
                cardContent.appendChild(productImage);
    
                // Create a heading for the crop name
                let h6 = document.createElement("h6");
                h6.innerHTML = result.crop_name;
                h6.setAttribute("class", "text-center");
                cardContent.appendChild(h6);
    
                // Create the price element
                let price = document.createElement("p");
                price.innerHTML = `<strong class='text-success'>${result.crop_maximum_price} Rs. </strong>`;
                cardContent.appendChild(price);
    
                // Create the "View More" button
                let viewMore = document.createElement("button");
                viewMore.innerText = "View more";
                viewMore.setAttribute("class", "btn btn-success");
                viewMore.setAttribute("style", "width:90%;border-radius:10px;");
    
                // Make sure the correct data is passed to the ViewMoreComponent function
                viewMore.addEventListener('click', function () {
                    mainDiv2Parent.removeChild(cropRowDiv);
                    ViewMoreComponent(result);  // Pass the crop result, not "product"
                });
                cardContent.appendChild(viewMore);
    
                // Append the content to the card
                card.appendChild(cardContent);
    
                // Append the card to the cropRowDiv
                cropRowDiv.appendChild(card);
            });
        } else {
            // If no results are found, show a "no results" message
            mainDiv2Parent.innerHTML = '<p>No crops found matching your search.</p>';
        }
    }
    
    
    