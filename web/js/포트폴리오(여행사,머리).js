$(document).ready(function(){
    let ranking = $('.ranking')
    ranking.mouseover(()=>{
        ranking.children().eq(0).css({
            color:"green"
        })
        $('.top_10').removeClass('block')
    })
    ranking.mouseout(()=>{
        ranking.children().eq(0).css({
            color:"grey"
        })
        $('.top_10').addClass('block')
    })

    // $('.result').text(arr.eq(0))
})
let arr = ['영국' , '일본' , '태국', '미국', '터키' ,'아르헨티나', '체코', '프랑스' , '벨기에' ,'콜롬비아'];
console.log(arr[0]);
let count = 0;
let result = document.getElementById('result');
let interval;
result.innerText = count+1 + "  "+ arr[count];
interval = setInterval(()=>{
    result.innerText = count+1 + "  "+ arr[count];
    count++;
    if(count > 9){
        count=0;
    }
}, 2000)
$(document).ready(function(){
            
    let continent = $('.continent')
    let land = $('.land')
    let count = 0
    console.log(land.length)
    // $('.where_title').click(()=>{
    //     $('#where').toggleClass('open')
    //     $('#where').css({
    //         overflow: 'scrollY'
    //     })
    // })
    continent.click(function(){
        console.log($(this).index())
        for(let i = 0; i < land.length; i++){
            land.eq(i).addClass('block')
        }
        land.eq($(this).index()).removeClass('block')
    })
    land.click(function(event){
        console.log(event.target.textContent)
        $('.where_title').text(event.target.textContent)
    
    })
    $('.search_bar').click(()=>{
        $('.search_box').toggleClass('block')
    })
    $('.where_title').click(function(event){
        console.log(event.target.textContent)
        $('.search_bar').val(event.target.textContent)
    })
})
