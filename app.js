function bringEmDown(color){
    
}
function changeTheme(themeColor, element) {
    // Title Animation
    anime({
        targets: '.titled',
        translateY: -100,
        delay: function(el, i, l) {
          return i * 70;
        },
        endDelay: function(el, i, l) {
          return (l - i) * 70;
        }
      });
      anime({
        targets: element,
        scale: (1,1.3),
        direction: 'alternate',
        duration: 400
      })
      setTimeout(function () {
        let title = document.getElementsByClassName('titled')
        for(let a=0; a<title.length; a++){
          title[a].style.color = themeColor
        }
        anime({
            targets: '.titled',
            translateY: 0,
            delay: function(el, i, l) {
              return i * 70;
            },
            endDelay: function(el, i, l) {
              return (l - i) * 70;
            }
          });   
      }, 500)

    //   Calcy background animation
    let background = document.getElementById('background');
    anime({
        targets: '#background',
        backgroundColor: themeColor,

      });

    //   Result color
    anime({
        targets: '#ans',
        color: themeColor
      });        
    anime({
      targets: '#evaluation',
      backgroundColor: themeColor
    })
}

function clickAnimation(key){
  anime({
    targets: key,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    direction: 'alternate',
    duration: 100,
    easing: 'easeInOutExpo'
  })
  let screen = document.getElementById('screened');
  if(screen.value == '0'){
    screen.value = ''
  }
  screen.value += key.innerText
}

function evaluation(themeColor){
  let screen = document.getElementById('screened');
  let resultWindow = document.getElementById('ans');
  try{
    let solution = eval(screen.value)
    resultWindow.innerText = '='+solution
    resultWindow.style.color = themeColor.style.backgroundColor
    console.log(themeColor.style.backgroundColor)
    anime({
      targets: resultWindow,
      opacity: [ 0, 1],
      duration: 1000
    })
  }catch(err){
    resultWindow.innerText = "Error"
    resultWindow.style.color = '#E84855'
  }

}
function backspace(){
  let screen = document.getElementById('screened');
  let screens = screen.value
 let newStr = screens.substring(0, screens.length - 1);
 screen.value = newStr
}