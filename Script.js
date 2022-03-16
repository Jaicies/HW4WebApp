
//array of json objects
var classmate_data = [
  {
    'name': 'John',
    'shadow': 'No',
    'galic': 'No',
    'complexion': 'Pale'
  },
  {
    'name': 'Lee',
    'shadow': 'yes',
    'galic': 'no',
    'complexion': 'pale'
  },
  {
    'name': 'Emma',
    'shadow': 'no',
    'galic': 'yes',
    'complexion': 'brown'
  },
  {
    'name': 'Ava',
    'shadow': 'yes',
    'galic': 'yes',
    'complexion': 'olive '
  },
  {
    'name': 'Alex',
    'shadow': 'no',
    'galic': 'no',
    'complexion': 'brown'
  },
];

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);


// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  var data = new google.visualization.DataTable();
  classmate_data_processing(data);


  // Set chart options
  var options = {
    'title': 'How many vampires in the class?',
    'width': 400,
    'height': 300
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

// model of MVC
function classmate_data_processing(result_data) {
  // this function process classmate data and create data table
  var num_human = 0;
  var num_vampire = 0;
  for (var i = 0; i <= classmate_data.length - 1; i++) {
    // logic based on shadow 
    if (classmate_data[i]['shadow'] == 'no') {
      num_vampire++;
    }
    else {
      num_human++;
    }
  }
  // Create the data table.
  result_data.addColumn('string', 'Element');
  result_data.addColumn('number', 'Vampire');
  result_data.addRows([
    ['Human', num_human],
    ['Vampire', num_vampire]
  ]);

}


function is_vampire() {

  var first_name = document.getElementById("first_name").value;
  var shadow = 0;
  var complexion = 0;
  var garlic = 0;

  var shadow_string = "";
  var garlic_string = "";
  var complexion_string = "";


  if (document.getElementById("galic_checkbox").checked) {
    garlic = 0;
    garlic_string = "Nes";
  }
  else {
    garlic = 3;
    garlic_string = "No";
  }

  if (document.getElementById("shadow_checkbox").checked) {
    shadow = 0;
    shadow_string = "Yes";
  }
  else {
    shadow = 4;
    shadow_string = "No";
  }

  if (document.getElementById("complexion_id").value == 'pale' | 'Pale') {
    complexion = 3;
    complexion_string = "Pale"
  }
  else {
    complexion = 0;
    complexion_string = "Not Pale"
  }

  var status = (garlic + shadow + complexion > 6) ? "This classmate is a vampire" : "This classmate is not a vampire";

  window.alert(status);

  //json object to hold classmate info
  classmate_data.push(classmate_obj =
  {
    'name': document.getElementById("firstName"),
    'shadow': shadow_string,
    'galic': garlic_string,
    'complexion': document.getElementById("complexion_id")
  })

  insert_row(first_name, shadow_string, garlic_string, complexion_string);

  drawChart();

}


function output_user_info() {
  // use this
  document.getElementById('first_name').value;

  var gender_str;
  if (document.getElementById('male_radio').checked) {
    gender_str = "male";
  }
  else {
    gender_str = "female"
  }

}

function getRandomInt() {
  // round up
  var min = 0;
  // round down
  var max = classmate_data.length;
  // Math.random() random number in the range 0–1 
  // inclusive of 0, but not 1
  var numPicked = Math.floor(Math.random() * (max - min + 1)) + min;
  if (classmate_data[numPicked]['shadow'] == 'no') {
    alert(classmate_data[numPicked].name + " Is Not A Vampire");
  }
  else {
    alert(classmate_data[numPicked].name + " Is A Vampire");
  }
}

function new_table_row() {
  var first_name = document.getElementById("first_name").value;

  var shadow = "No";
  if (document.getElementById("shadow_checkbox").checked) {
    shadow = "Yes";
  }

  var garlic = "No";
  if (document.getElementById("galic_checkbox").checked) {
    garlic = "Yes";
  }
  var complexion = document.getElementById("complexion_id").selectedIndex;
  var option = document.getElementById("complexion_id").options;


  // Insert row to table
  insert_row(first_name, shadow, garlic, option[complexion].text);

}

function insert_row(first_name, shadow, garlic, complexion) {
  var table = document.getElementById("classmate_table");
  // Create an empty <tr> element and add it to the 1st position of the table:
  // BE CAREFUL!!! row 0 is our heading row
  var row = table.insertRow(1);
  // Try this
  // var row = table.insertRow(0);
  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  // Add some text to the new cells:
  cell1.innerHTML = first_name;
  cell2.innerHTML = garlic;
  cell3.innerHTML = complexion;
  cell4.innerHTML = shadow;
}
