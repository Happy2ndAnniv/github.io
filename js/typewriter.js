// set up text to print, each item in array is new line
var aText = new Array(
  "To my one and only one,", 

  " ",

  "Happy 2nd Anniversary beb ko, I love you so much <3. Grabe nga naman at ang bilis ng panahon talaga na eto tayo pinagtagpo para sa isa't isa. Mula sa yayaan ng sine hanggang napunta sa ikalawang annibersaryo ng pagmamahalan natin.  Hindi lang ikalawang, kundi hindi mabilang na pagmamahal natin sa isa't isa",

  "",

  "Ikaw lang pinakama malaking blessing na natanggap ko sa buong buhay ko. Maraming salamat araw-araw sa lahat ng mga paalala mo, pag-aalala mo at pagdama ng pagmamahal mo sakin. Kahit na alam kong simpleng tampuhan yun, nakikita ko yung pagmamahal mo sakin at alam kona nakikita mo rin ang pagmamahal ko sayo. Kaya minsan wagkang mainis at magalit kung napapagsabihan kita. Para saiyodun yun at ayoko ng napapano ka aba.",

  "",

  "Paumanhin na ako'y nakakagawa ng pagkakasala at sana patawarin mo ko sa lahat ng iyon. Pasensya sa lahat ng mga nagawa ko at magagawa ko charot. Di beb pero sorry for the things that I have done to you, to feel your angry, sad, worry and sulk. Kung minsan ay walanjo ka magalit at magtampo na akala mo pinagsakluban ng langit at lupa, sorry beb at nagkulang din ako sayo minsan. Alam ko na hindi ako perfect, pero i swear alam ko na perfect tayo para sa isa't isa. Ikaw laging galit  ako laging chill ganun ba hehehe joke lang. ",

  "",

  "Sa lahat ng mga problema mo, pag woworry mo, at pag ka inis mo, tandaan mo na andito ako sayo lagi mong maasahan at ka rant buddy mo sa mga ganung bagay. Sa lahat ng mga kasamahan mo pati narin minsan tampuhan sa ibang tao, magsabi ka lang at tandaan mo na makikinig  at nakikinig ako. Kahit na murahin mo ng sobrang sobra sa inis at sukdulan ang galit mo sa taong yun, tandaan mo na andito parin  ako makikigalit din saiyo hehehe. Pero tandaan mo na, wag ka  magpadala sa galit at inis mo ha, sabi nga nila, kung sino yung  nagpapakumbaba ay siya ang itinataas. Hayaan mo sila na magalit  at mainis sayo, hayaan mo sila na may masabi sayo. Pero tatandaan mo na wala kang ginawang masama. Ginawa mo ang nakakabuti at ginawa mo ang lahat. Kaya ikaw, chill ka lang lagi wag hanap ng away aba  (lalo na sa akin hehehe joke lang). Sa lahat ng bagay, tandaan mo na hindi ako mawawala at lagi sayong nakasupporta sa lahat ng anumang bagay. ",

  "",

  "",

  "Hindi ko na ito papahabain pa, happy 2 years with full of love, happiness, and (away de joke hahahaha) joyful. Marami tayong nagawang memories na hindi kayang paltan ng kahit na anuman. Alam ko na marami pa tayong trip or out of town na galaan, don't worry marami tayong gagalaan pa. Marami pa tayong igigrind na slp at ibuburn na fats (joke ulit hehehe) at  marami pa tayong mga jamming ng mga tugtugan. Kaya wag mainip at marami  tayong mag didiscover sa ating adventure. I love you and i love you always, my mi amore. Mahal na mahal kita aking sinta",

  "",

  "~ Para sa aking hiwaga't paghinga at pahinga na pipiliin ko sa araw-araw",
  
  "~ To my one and only one, my sanctuary, and my everything",

  "~ Mahal na mahal kita at maraming salamat sa lahat lahat",

  "~ I love you so much <3",

  );
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();