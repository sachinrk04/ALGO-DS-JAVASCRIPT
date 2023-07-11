var ctx = document.getElementById("myChart").getcontext("2d");

console.log("ctx--->", ctx)
var myChart =   new Chart(ctx,
{
 type : "bar",
  data: {
    label:["Python", "javaScript", "PHP", "JAVA", "C#", "c++"]
 , 
            datasets:[
           {
              data: [13, 15, 5, 10, 9, 10],
            },
               ],
        }
})