let query = {};
let $element = $('#sel_users');
$('#sel_users').val('');

let $element2 = $('#searchParts');
$('#searchParts').val('');

function markMatch (text, term) {
  // Find where the match is
  var match = text.toUpperCase().indexOf(term.toUpperCase());
  var $result = $('<span></span>');

  // If there is no match, move on
  if (match < 0) {
    return $result.text(text);
  }

  // Put in whatever text is before the match
  $result.text(text.substring(0, match));

  // Mark the match
  var $match = $('<span class="select2-rendered__match"></span>');
  $match.text(text.substring(match, match + term.length));

  // Append the matching text
  $result.append($match);

  // Put in whatever is after the match
  $result.append(text.substring(match + term.length));

  return $result;
}

$element.select2({
  maximumSelectionLength: 1,
  dropdownCssClass: "search-dropdown",
  templateResult: function (item) {
    // No need to template the searching text
    if (item.loading) {
      return item.text;
    }

    const term = query.term || '';
    return markMatch(item.text, term);
  },
  language: {
    searching: function (params) {
      // Intercept the query as it is happening
      query = params;

      // Change this to be appropriate for your application
      return 'Searching…';
    }
  },
  multiple: true,
});

$element2.select2({
  maximumSelectionLength: 1,
  dropdownCssClass: "search-dropdown",
  templateResult: function (item) {
    // No need to template the searching text
    if (item.loading) {
      return item.text;
    }

    const term = query.term || '';
    return markMatch(item.text, term);
  },
  language: {
    searching: function (params) {
      // Intercept the query as it is happening
      query = params;

      // Change this to be appropriate for your application
      return 'Searching…';
    }
  },
  multiple: true,
});

$element.val('');



function showMenu() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function showDropdown(){
  if($("#searchDropdown").is(":visible")){
    $('#searchDropdown').hide();
  } else{
    $('#searchDropdown').show();
  }
}
