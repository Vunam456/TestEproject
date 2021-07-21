
//------------ Close button --------------- //
const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
    menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
    });        

//------------ Navbar --------------- //
var navbar = document.querySelector(".res-header");
var icon = document.getElementById('res-icon');
var navbarWidth = navbar.clientWidth;
  icon.onclick = function() {
    navbar.classList.toggle("active");
  };

//------------ Resnew --------------- //  
var resnew = document.getElementById('res-new');
var whatnew = document.getElementById('what-new');
var back = document.getElementById('backnew');
var resnewWidth = resnew.clientWidth;
  whatnew.onclick = function() {
    var isClosed = resnew.clientWidth === resnewWidth;
      if (isClosed) {
        resnew.style.width = 'auto';
        resnew.style.display = 'block';
      } else {
        resnew.style.width = null;
        resnew.style.display = 'none';
      }
  }
  back.onclick = function() {
    var isClosed = resnew.clientWidth === resnewWidth;
    if (isClosed) {
      resnew.style.display = 'block';
    } else {
      resnew.style.display = 'none';
    } 
  };
//------------ Resjew --------------- //   
var resjew = document.getElementById('res-jew');
var jewelry = document.getElementById('jew-elry');
var back = document.getElementById('backjew');
var resjewWidth = resjew.clientWidth;
  jewelry.onclick = function() {
    var isClosed = resjew.clientWidth === resjewWidth;
      if (isClosed) {
        resjew.style.width = 'auto';
        resjew.style.display = 'block';
      } else {
        resjew.style.width = null;
        resjew.style.display = 'none';
      }
  }
  back.onclick = function() {
    var isClosed = resjew.clientWidth === resjewWidth;
    if (isClosed) {
      resjew.style.display = 'block';
    } else {
      resjew.style.display = 'none';
    } 
  };
  
//------------ Reshome --------------- //   
var reshome = document.getElementById('res-home');
var home = document.getElementById('home-decor');
var back = document.getElementById('backhome');
var reshomeWidth = reshome.clientWidth;
  home.onclick = function() {
    var isClosed = reshome.clientWidth === reshomeWidth;
      if (isClosed) {
        reshome.style.width = 'auto';
        reshome.style.display = 'block';
      } else {
        reshome.style.width = null;
        reshome.style.display = 'none';
      }
  }
  back.onclick = function() {
    var isClosed = reshome.clientWidth === reshomeWidth;
    if (isClosed) {
      reshome.style.display = 'block';
    } else {
      reshome.style.display = 'none';
    } 
  };

//------------ Reshome --------------- //   
var resgift = document.getElementById('res-gift');
var gift = document.getElementById('gi-ft');
var back = document.getElementById('backgift');
var resgiftWidth = resgift.clientWidth;
  gift.onclick = function() {
    var isClosed = resgift.clientWidth === resgiftWidth;
      if (isClosed) {
        resgift.style.width = 'auto';
        resgift.style.display = 'block';
      } else {
        resgift.style.width = null;
        resgift.style.display = 'none';
      }
  }
  back.onclick = function() {
    var isClosed = resgift.clientWidth === resgiftWidth;
    if (isClosed) {
      resgift.style.display = 'block';
    } else {
      resgift.style.display = 'none';
    } 
  };
  
//------------ Reshome --------------- //   
var resabout = document.getElementById('res-about');
var about = document.getElementById('ab-out');
var back = document.getElementById('backabout');
var resaboutWidth = resabout.clientWidth;
  about.onclick = function() {
    var isClosed = resabout.clientWidth === resaboutWidth;
      if (isClosed) {
        resabout.style.width = 'auto';
        resabout.style.display = 'block';
      } else {
        resabout.style.width = null;
        resabout.style.display = 'none';
      }
  }
  back.onclick = function() {
    var isClosed = resabout.clientWidth === resaboutWidth;
    if (isClosed) {
      resabout.style.display = 'block';
    } else {
      resabout.style.display = 'none';
    } 
  };



//------------ crystals --------------- //   
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');
let btn7 = document.querySelector('#btn7');
let btn8 = document.querySelector('#btn8');
let btn9 = document.querySelector('#btn9');

btn1.addEventListener('click', () => {
  img1.src = '../Images/index/Gem/New folder/6601_hero.png';
  img2.src = '../Images/index/Gem/New folder/AMETHYST_birthstone_gemstone_cut (1).png';
});

btn2.addEventListener('click', () => {
  img1.src = '../Images/index/Gem/New folder (2)/47286c_main.png';
  img2.src = '../Images/index/Gem/New folder (2)/AQUAMARINE_birthstone_gemstone_cut (1).png';
});

btn3.addEventListener('click', () => {
  img1.src = '../Images/index/Gem/New folder (3)/6853_main.png';
  img2.src = '../Images/index/Gem/New folder (3)/DIAMOND_birthstone_gemstone_cut (1).png';
});

btn4.addEventListener('click', () => {
  img1.src = '../Images/index/Gem/New folder (4)/EE30400800_hero.png';
  img2.src = '../Images/index/Gem/New folder (4)/EMERALD_birthstone_gemstone_cut (1).png';
});

btn5.addEventListener('click', () => {
  img1.src = '../Images/index/Gem/New folder (5)/55074c_main.png';
  img2.src = '../Images/index/Gem/New folder (5)/RUBY_birthstone_gemstone_cut (1).png';
});

btn6.addEventListener('click', () => {
  img1.src = '../Images/index/Gem/New folder (6)/BR30402000_main.png';
  img2.src = '../Images/index/Gem/New folder (6)/PERIDOT_birthstone_gemstone_cut (1).png';
});

btn7.addEventListener('click', () => {
  img1.src = '../Images/index/Gem/New folder (7)/SR30500400_heroNEW.png';
  img2.src = '../Images/index/Gem/New folder (7)/SAPPHIRE_birthstone_gemstone_cut (1).png';
});

btn8.addEventListener('click', () => {
  img1.src = '../Images/index/Gem/New folder (8)/50656_main.png';
  img2.src = '../Images/index/Gem/New folder (8)/CITRINE_birthstone_gemstone_cut (1).png';
});

btn9.addEventListener('click', () => {
  img1.src = '../Images/index/Gem/New folder (9)/6603_main.png';
  img2.src = '../Images/index/Gem/New folder (9)/TOPAZ_birthstone_gemstone_cut (1).png';
});

function Amethyst() {
  document.getElementById("cry-name").innerHTML=("AMETHYST");
  document.getElementById("cry-para").innerHTML=("The vibrantly purple amethyst, a variety of quartz, has long been worn by royalty and was a favorite of both St. Valentine and Leonardo da Vinci. Amethysts were once considered as rare as diamonds, and medieval soldiers believed they provided healing and calmness. High-quality specimens have saturated color and pure purple hues.");
  document.getElementById("cry-btn").innerHTML=("Shop Amethyst Jewelry");
};
function Aquamarine() {
  document.getElementById("cry-name").innerHTML=("AQUAMARINE");
  document.getElementById("cry-para").innerHTML=("These light blue gemstones are a variety of the mineral beryl, as is the emerald. Long associated with water, the aquamarine was especially treasured as a talisman by ancient seafaring people. Aquamarine’s cool blue hue is believed to have a calming effect on its wearer. Look for clear, bright colors and good translucency.");
  document.getElementById("cry-btn").innerHTML=("Shop Aquamarine Jewelry");
};
function Diamond() {
  document.getElementById("cry-name").innerHTML=("DIAMOND");
  document.getElementById("cry-para").innerHTML=("April is the winner of the birthstone lottery—diamonds! Treasured for their rarity and brilliance, diamonds have been prized for centuries as the symbol of eternal love. Highly valued for their brilliance and durability, diamonds also signify strength, balance, and courage. Look for diamonds with a good balance of the 4Cs: cut, color, clarity, and carat weight.");
  document.getElementById("cry-btn").innerHTML=("Shop Diamond Jewelry");
};
function Emerald() {
  document.getElementById("cry-name").innerHTML=("EMERALD");
  document.getElementById("cry-para").innerHTML=("The rich, green emerald has been held in high esteem by many cultures around the world for centuries, including the ancient Incas and Aztecs who regarded them as holy. Emerald is a variety of beryl and the finest-quality emeralds have vivid, saturated color.");
  document.getElementById("cry-btn").innerHTML=("Shop Emerald Jewelry");
};
function Ruby() {
  document.getElementById("cry-name").innerHTML=("RUBY");
  document.getElementById("cry-para").innerHTML=("Because of its fiery crimson color, ruby has long represented romance, devotion, and passion. Like sapphires, rubies are a variety of corundum, a mineral with great hardness well suited to everyday wear. Examples of flawless rubies are extremely rare and highly prized. The best examples have good translucency and depth of color.");
  document.getElementById("cry-btn").innerHTML=("Shop Ruby Jewelry");
};
function Peridot() {
  document.getElementById("cry-name").innerHTML=("PERIDOT");
  document.getElementById("cry-para").innerHTML=("This vivid green gemstone is thought to ward off evil, and bring good fortune to its wearer. Peridots, like diamonds are formed deep in the earth, surfacing only during volcanic eruptions. Hawaiian mythology refers to this vibrant green gemstone as the tears of the fire goddess, Pele. Look for bright yellowish-green hues and good translucency.");
  document.getElementById("cry-btn").innerHTML=("Shop Peridot Jewelry");
};
function Sapphire() {
  document.getElementById("cry-name").innerHTML=("SAPPHIRE");
  document.getElementById("cry-para").innerHTML=("Sapphire is well known for its velvety-blue hue, but pink sapphire is gaining popularity. A variety of corundum like rubies, sapphire’s natural hardness makes it an ideal gemstone for fine jewelry. A traditional symbol of nobility, truth, and romance, the most prized sapphires have good transparency and vibrant depth of color.");
  document.getElementById("cry-btn").innerHTML=("Shop Sapphire Jewelry");
};
function Citrine() {
  document.getElementById("cry-name").innerHTML=("CITRINE");
  document.getElementById("cry-para").innerHTML=("This bright, effervescent gemstone gets its name from the French word for lemon and has been regarded as a symbol for happiness, health and vitality for centuries. High quality citrines will have good transparency and no eye-visible inclusions. They range in color from earthy deep browns and reddish-oranges to glowing yellow-orange.");
  document.getElementById("cry-btn").innerHTML=("Shop Citrine Jewelry");
};
function Topaz() {
  document.getElementById("cry-name").innerHTML=("TOPAZ");
  document.getElementById("cry-para").innerHTML=("Blue topaz is one of December's birthstones along with tanzanite and turquoise. Symbolic of wisdom and longevity, blue topaz ranges in hues from deep London blue to paler sky blue. The ancient Greeks believed that topaz gave strength to the wearer.");
  document.getElementById("cry-btn").innerHTML=("Shop Topaz Jewelry");
};

/*                            Rings                                             */
var myCarousel = document.querySelector('#carouselExampleControlsNoTouching1');
var carousel = new bootstrap.Carousel(myCarousel);

var myCarousel = document.querySelector('#carouselExampleControlsNoTouching2');
var carousel = new bootstrap.Carousel(myCarousel);

var myCarousel = document.querySelector('#carouselExampleControlsNoTouching4');
var carousel = new bootstrap.Carousel(myCarousel);

var myCarousel = document.querySelector('#carouselExampleControlsNoTouching5');
var carousel = new bootstrap.Carousel(myCarousel);

var myCarousel = document.querySelector('#carouselExampleControlsNoTouching6');
var carousel = new bootstrap.Carousel(myCarousel);

var myCarousel = document.querySelector('#carouselExampleControlsNoTouching7');
var carousel = new bootstrap.Carousel(myCarousel);

var myCarousel = document.querySelector('#carouselExampleControlsNoTouching8');
var carousel = new bootstrap.Carousel(myCarousel);

var myCarousel = document.querySelector('#carouselExampleControlsNoTouching9');
var carousel = new bootstrap.Carousel(myCarousel);

var myCarousel = document.querySelector('#carouselExampleControlsNoTouching10');
var carousel = new bootstrap.Carousel(myCarousel);

var myCarousel = document.querySelector('#carouselExampleControlsNoTouching11');
var carousel = new bootstrap.Carousel(myCarousel);

var myCarousel = document.querySelector('#carouselExampleControlsNoTouching12');
var carousel = new bootstrap.Carousel(myCarousel);

