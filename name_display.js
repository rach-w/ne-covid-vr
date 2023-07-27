
var label = document.querySelector('#douglasLabel')
var Douglas = document.querySelector('#Dcounty')
label.addEventListener('mouseenter',function(){
    label.setAttribute('visible', true)
    Douglas.setAttribute('color', '#260099')
})
label.addEventListener('mouseleave',function(){
    label.setAttribute('visible', false)
    Douglas.setAttribute('color','#FAFAFA')
})

var label2 = document.querySelector('#lancasterLabel')
var Lancaster = document.querySelector('#Lcounty')
label2.addEventListener('mouseenter',function(){
    label2.setAttribute('visible', true)
    Lancaster.setAttribute('color', '#260099')
})
label2.addEventListener('mouseleave',function(){
    label2.setAttribute('visible', false)
    Lancaster.setAttribute('color',"#FAFAFA")
})

var label3 = document.querySelector('#scottsbluffLabel')
var Scottsbluff = document.querySelector('#Scounty')
label3.addEventListener('mouseenter',function(){
    label3.setAttribute('visible', true)
    Scottsbluff.setAttribute('color', '#260099')
})
label3.addEventListener('mouseleave',function(){
    label3.setAttribute('visible', false)
    Scottsbluff.setAttribute('color', '#FAFAFA')
})

