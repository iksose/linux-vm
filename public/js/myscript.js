info = [ 
   {
      Name : "Band",
      Date : "Aug 14th, 2012",
      Albums : [
         {
            Name : "Generic Name"
         },
         {
            Name : "Something Else!!"
         }
      ]
   },
   {
      Name : "Other Guys",
      Date : "Aug 22nd, 2012",
      Albums : [
         {
            Name : "Album One"
         }
      ]
   }
]


window.cocks = "Hello from cocks"


var data = { 
  persons:
    [{
       name: 'ivan',
       email: [
       {
          Personal : 'iwano@hotmail.com'
        },
        {
          Private  : 'cockbuster@xtube.com'
        }
        ],
       city: 'Colima'
    },
    {
       name: 'Michael',
       email: 'mscott@dunder.com',
       city: 'Scranton'
    }]
}

Handlebars.registerHelper('introduceYourself', function() {
  return "Hi my name is " + this.name + " and i'm from " + this.city + "!";
});

Handlebars.registerHelper('cocker', function(person){
  var a = ''
  var b = ''
  if(typeof(this.email) == 'object'){
    $.each(this.email, function(){
      return "count"
    })
  }
})

$(document).ready(function(){

var source   = $("#person-template").html();
var template = Handlebars.compile(source);
var html    = template(data);
$('body').append(html);

});