function scuberGreetingForFeet(someNumber){
  let result;
  if (someNumber <= 400) {
    return "This one is on me!"
  } else if (someNumber > 400 && someNumber < 2000) {
    return "That will be twenty bucks."
  } else if (someNumber > 2000 && someNumber < 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  let location;
  location = (city === 'NYC') ? "Ok, sounds good." : "No go.";
  return location;
}

function switchOnCharmFromTip(tip){
  let reply;
  
  switch (tip) {
    case 'generous':
      reply = "Thank you so much.";
      break;
    case 'not as generous':
      reply = "Thank you.";
      break;
    default:
      reply = "Bye.";
  }
  return reply;
}