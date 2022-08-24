
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
    $('.braking-text').hide();
  } else{
    element.html('FIND OUT MORE >');
    $('.braking-text').show();
  }
};

// Fire on DOM ready
fluid();

// Fire upon resize
$(window).resize(fluid);

function expandDiv(){
  if($(".braking-text").is(":visible")){
    $('.braking-text').hide();
    $('.expand-btn').css('transform' ,'rotate(0deg)');
  } else{
    $('.braking-text').show();
    $('.expand-btn').css('transform' ,'rotate(180deg)');
  }
}
