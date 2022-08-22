
$('#carMake').select2({
  placeholder: "Make",
  dropdownCssClass: "car-dropdown",
});

$('#carModel').select2({
  placeholder: "Model",
  dropdownCssClass: "car-dropdown",
});
$('#carEngine').select2({
  placeholder: "Engine",
  dropdownCssClass: "car-dropdown",
});

let fluid = function() {
  const element = $(".find-out");
  if ($(window).width() <= 576) {
    element.html('MORE INFO >');
  } else{
    element.html('FIND OUT MORE >');
  }
};

// Fire on DOM ready
fluid();

// Fire upon resize
$(window).resize(fluid);


