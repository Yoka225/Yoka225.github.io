    /// auto navbar scrolling in JS ///

const section = document.querySelector('section')
const navLink = document.querySelector('header nav a')

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = set.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top >= offset && top < offset + height){
            navLink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active') 
            })
        }
    })
        /// creating sitcky bar //

    var header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 100)

    //// Creating toggle Changer ///
    menubar.classList.remove('bx-x')
    navbar.classList.remove('active')
};

let menubar = document.querySelector('#menu')
let navbar = document.querySelector('navbar')
menubar.onclick = () => {
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}








//         let id = sec.getAttribute('id');
//         console.log( 'id' + id );

//         if(top>=offset && top< offset + height){
 
//             // 1. Step remove all navlinks from active class
//             navLink.forEach(links =>{
//                 let navLinkId = links.getAttribute('href').substr(1) ;
//                 console.log('xxx '+ navLinkId);
//                 //if navLinkId is same as links.name then add otherwise remove from the classlist
//                 links.classList.remove('active')
//             })
//             // 2. Add the corresponding navlink with the correct id
//             //  get the correct navlink

//         }
        // } else {
        //         navLink.forEach(links => {
        //             links.classList.add('active')
        //         })
        // }


        //// Creating Sticky navbar ////


