name_of_people =[];
 
function submit()
{
  var display_guest_name = [];

  for(var j = 1; j <=name_of_people; j++)
  {
    var GuestName = document.getElementById("name_of_people").value;
name_of_people.push(GuestName);
  }
 

  console.log(name_of_people);

  var of_name_of_guests_array = GuestName;
  console.log(of_name_of_guests_array);


  for(var k = 0; k < of_name_of_guests_array; k++)
  {
    display_guest_name.push("<h4>NAME -"+ name_of_people[k]+"</h4>");
    console.log(Guest_Name);
  }



console.log(display_guest_name);
document.getElementById("display_name_with_commas").innerHTML = display_guest_name;

var remove_commas = display_guest_name.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;



  document.getElementById("submit_button").style.display="none";
  document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
  name_of_people.sort();
  console.log(name_of_people);
  


  var display_guest_array_sorting = [];

  var length_of_name_of_guests_array = name_of_people.length;
  console.log(length_of_name_of_guests_array);

  for(var k = 0; k < length_of_name_of_guests_array; k++)
  {
    display_guest_array_sorting.push("<h4>NAME -" + nname_of_people[k] + "</h4>");
      console.log(display_guest_array_sorting);
  }

var remove_commas = display_guest_array_sorting.join(" ");
console.log(remove_commas);


document.getElementById("display_name_without_commas").innerHTML = remove_commas;


}

function searching()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){
               found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found"+found+" time/s";
    console.log("found name "+found+" time/s")
}   