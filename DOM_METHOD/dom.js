
// {   get element by id
{
    function findElement(){
        const element = document.getElementById("id1")
        element.innerHTML = "element found...!"
    }
}
{
    function searchelement(){
        let search = document.getElementById("index")
        search.innerHTML = " get element by id...."
    }
}

 // using alert
// {
//     const node1 = document.getElementById("id2")
//     const node2 = document.getElementById("id3")

//     function node1(){
//         alert(node1.innerHTML);
//     }
//     function Node2() {
//         alert(node2.innerHTML);
//     }
// }

//  get element by tag name 

{
    const elements = document.getElementsByTagName("div");
    console.log(elements);

    function changeColor() {
      for (let i = 0; i < elements.length; i++) {
        if(i==0)
        elements[i].style.color = "red";
    else
        elements[i].style.color = "blue";
      }
    }
}
