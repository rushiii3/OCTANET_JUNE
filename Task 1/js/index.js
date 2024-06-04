var lastScrollTop;
let navbar = document.getElementById("header"); // Get The NavBar
window.addEventListener("scroll", function () {
    const scrollY = this.scrollY;
    if (scrollY > lastScrollTop) {
        // navbar.style.top = '-150px';
        navbar.classList.add("animateUp");
        navbar.classList.remove("animateDown");
    } else {
        // navbar.style.top = '0px';
        navbar.classList.add("animateDown");
        navbar.classList.remove("animateUp");
    }
    lastScrollTop = scrollY;
});
var openNavButton = document.getElementById("openNav");
var smallNavbar = document.getElementById("smallNavbar");
var closeNavButton = document.getElementById("closeNav");
var body = document.querySelector("body");
openNavButton.addEventListener("click", function () {
    smallNavbar.style.display = "block";
    body.classList.add("nav_open");
});
closeNavButton.addEventListener("click", function () {
    smallNavbar.style.display = "none";
    body.classList.remove("nav_open");
});

const popular = [
    {
        index: 0,
        title: "Nike Air Force 1 '07 Fresh",
        category: "Men's Shoes",
        price: "₹ 11 295.00",
        image:
            "./assests/shoes/air-force-1-07-fresh-shoes-bBRnbq.png",
    },
    {
        index: 1,
        title: "Air Jordan 1 Low",
        category: "Women's Shoes",
        price: "₹ 8 295.00",
        image:"./assests/shoes/air-jordan-1-low-shoes-459b4T.png"    
    },
    {
        index: 2,
        title: "Nike Air Max 90",
        category: "Women's Shoes",
        price: "₹ 10 995.00",
        image:"./assests/shoes/air-max-90-shoes-K0mczj.png"
    },
    {
        index: 3,
        title: "Nike Gamma Force",
        category: "Women's Shoes",
        price: "₹ 8 495.00",
        image:"./assests/shoes/gamma-force-shoes-CbTnH1.png"
    },
    {
        index: 4,
        title: "Nike Dunk Low Retro",
        category: "Men's Shoe",
        price: "₹ 8 295.00",
        image:"./assests/shoes/dunk-low-retro-shoe-66RGqF.png"
    },
    {
        index: 5,
        title: "Nike Dunk Low",
        category: "Women's Shoes",
        price: "₹ 8 295.00",
        image:"./assests/shoes/dunk-low-shoes-r8QXCd.png"
    },
    {
        index: 6,
        title: "Nike Air Force 1 '07 EasyOn",
        category: "Women's Shoes",
        price: "₹ 9 695.00",
        image:"./assests/shoes/air-force-1-07-easyon-shoes-lpjTWM.png"
    },
    {
        index: 7,
        title: "Tatum 2 'Vortex' PF",
        category: "Basketball Shoes",
        price: "₹ 10 495.00",
        image:"./assests/shoes/tatum-2-vortex-pf-basketball-shoes-WWbXXK.png"
    },
    {
        index: 8,
        title: "Nike Blazer Mid '77",
        category: "Women's Shoes",
        price: "₹ 8 695.00",
        image: "./assests/shoes/dunk-low-shoes-wbxcmN.png"
    },
    {
        index: 9,
        title: "Nike Air Max Plus",
        category: "Women's Shoes",
        price: "₹ 16 995.00",
        image: "./assests/shoes/air-max-90-shoes-K0mczj.png"
    },
];

const ShopBySport = [
    {
        title: "Nike Basketball",
        image_url: "./assests/nikeBasketBall.jpeg",
        description: "Styles made for your game.",
    },
    {
        title: "Nike Golf",
        image_url: "./assests/nikeGolf.jpeg",
        description: "Conquer any course in style.",
    },
    {
        title: "Nike Trail",
        image_url: "./assests/nikeTrail.jpeg",
        description: "Gear that leads to wild places.",
    },
    {
        title: "Nike Tennis",
        image_url: "./assests/nikeTennis.jpeg",
        description: "Serve up in style.",
    },
    {
        title: "Nike Football",
        image_url: "./assests/nikeFootball.jpeg",
        description: "Bring mad style to the pitch with the latest gear.",
    },
];

const memberBeneifit = [
    {
        index: 0,
        image:
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_422,c_limit/cb28c551-b85b-479f-8fc3-40ad4e7c9ca4/nike-just-do-it.jpg",
        subtitle: "Member Product",
        title: "Your Exclusive Access",
        cta_text: "Shop",
    },
    {
        index: 1,
        image:
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_422,c_limit/100ca749-1a94-4f98-bc43-a58e7e9cdbcf/nike-just-do-it.png",
        subtitle: "Nike By You",
        title: "Your Customisation Service",
        cta_text: "Customise",
    },
    {
        index: 2,
        image:
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_422,c_limit/39412611-0af5-4770-8c2e-ef5c23bc6a3d/nike-just-do-it.jpg",
        subtitle: "Member Rewards",
        title: "How We Say Thank You",
        cta_text: "Celebrate",
    },
    {
        index: 3,
        image:
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_422,c_limit/a9767bce-db10-41ff-9eb5-f5daf8bbb3e6/nike-just-do-it.png",
        subtitle: "Member Days",
        title: "A Celebration of You",
        cta_text: "Learn More",
    },
    {
        index: 4,
        image:
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_422,c_limit/37b262a3-c8c7-49e8-a29f-8d46bc8ab950/nike-just-do-it.jpg",
        subtitle: "Sport & Wellness Apps",
        title: "Movement Where You Are",
        cta_text: "Move",
    },
    {
        index: 5,
        image:
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_422,c_limit/c17ae904-9307-4575-8ac1-ad08adafe17f/nike-just-do-it.jpg",
        subtitle: "SNKRS",
        title: "Your Ultimate Sneaker Community",
        cta_text: "Explore",
    },
];
var popularGrid = document.getElementById("popularGrid");
popular.forEach(element => {
    var data = '<div> <img src="'+element.image+'" alt="" class="card"/> <div style="margin-top: 0.5rem"> <p style="font-size: 1.2rem; margin-bottom: 0.2rem; color: black; font-weight: 600;">' + element.title + '</p> <p style="font-size: 1rem; margin-bottom: 0.5rem; color: darkgrey">' + element.category + '</p> <p style="font-size: 1.2rem; color: black; font-weight: 600">MRP: ' + element.price + '</p> </div> </div>';
    popularGrid.innerHTML += data;
});

var ShopGrid = document.getElementById("ShopGrid");
ShopBySport.forEach(element => {
    var data = `
        <div class="card2">
            <img src="${element.image_url}" alt="" class="card2img" />
            <div style="margin-top: 0.5rem">
                <p style="font-size: 1.2rem; margin-bottom: 0.2rem; color: black; font-weight: 600;">${element.title}</p>
                <p style="font-size: 1rem; margin-bottom: 0.5rem; color: darkgrey">${element.category}</p>
                <p style="font-size: 1.2rem; color: black; font-weight: 500; text-decoration: underline;">Shop</p>
            </div>
        </div>`;
        ShopGrid.innerHTML += data;
});


var BenefitsGrid = document.getElementById("BenefitsGrid");
memberBeneifit.forEach(element => {
    var data = `
        <div class="card">
            <img src="${element.image}" alt="" style="height: 100%; width: 100%" />
            <div style="position: absolute; bottom: 3rem; left: 3rem">
                <p style="font-size: 1.2rem; margin-bottom: 0.5rem; color: white">${element.title}</p>
                <p style="font-size: 1.5rem; margin-bottom: 0.5rem; color: white">${element.subtitle}</p>
                <button type="button" class="button" style="background-color: white; color: black; font-weight: 500">${element.cta_text}</button>
            </div>
        </div>`;
        BenefitsGrid.innerHTML += data;
});



