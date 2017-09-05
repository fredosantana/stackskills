$(document).ready(function(){
  // Direct Parents; will highlight direct parent of initial element
  //$ ('span').parent().css({'color': 'red', 'border': '2px red solid'});

  // All Parents; will highlight all ascending parents
  //$ ('span').parents().css({'color': 'red', 'border': '2px red solid'});

  // Only UL Parents; will highligh defined parent in parents parameter
  //$ ('span').parents('ul').css({'color': 'red', 'border': '2px red solid'});

  // All parents until div; parentsUntil function will highlight defined parents between initial element and one defined after the function
  //$ ('span').parentsUntil('div').css({'color': 'red', 'border': '2px red solid'});

  // Direct Children; will highlight direct children of initial element
  //$ ('div').children().css({'color': 'red', 'border': '2px red solid'});

  // Find; will highlight element(s) defined in initial parameter and one inside function
  //$ ('div').find('p').css({'color': 'red', 'border': '2px red solid'});

  // Direct Siblings; will highlight direct siblings of initial element; initial element will not be included
  //$ ('h2').siblings().css({'color': 'red', 'border': '2px red solid'});

  // Direct Sibling; will highlight direct sibling of initial element if element is defined within siblings function; initial element will not be included
  // $('h2').siblings('p').css({'color': 'red', 'border': '2px red solid'});

  // Next; highlights next direct element if available; next function will not accept custom element
  // $('h2').next().css({'color': 'red', 'border': '2px red solid'});

  // Next All; highlights all next direct elements if available; next function will not accept custom element
  // $('h2').nextAll().css({'color': 'red', 'border': '2px red solid'});

  // Next Until; highlights all next elements between initial element and element defined by function; element defined by function not included
  // $('p').nextUntil('h5').css({'color': 'red', 'border': '2px red solid'});

  // Previous; highlights next previous element if available; previous function will not accept custom element
  // $('h2').prev().css({'color': 'red', 'border': '2px red solid'});

  // Previous All; highlights all previous direct elements if available; previous function will not accept custom element
  // $('h2').prevAll().css({'color': 'red', 'border': '2px red solid'});

  // Prevous Until; highlights all previous elements between initial element and element defined by function; element defined by function not included
  // $('p').prevUntil('h2').css({'color': 'red', 'border': '2px red solid'});

  // First; highlight first instance of initial element
  // $('p').first().css({'color': 'red', 'border': '2px red solid'});

  // Last; highlight last instance of initial element
  // $('p').last().css({'color': 'red', 'border': '2px red solid'});
});
