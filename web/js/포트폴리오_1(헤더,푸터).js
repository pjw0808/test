$(document).ready(function(){
    let language = $('.h_tp_item').eq(1)
    let close = $('.close')
    let aside_btn = $('.aside_btn')
    console.log(close.length)
    language.click(()=>{
        $('.language').removeClass('block')
    })
    close.eq(0).click(()=>{
        $('.language').addClass('block')
    })
    language.click(()=>{
        $('.language').removeClass('block')
    })
    aside_btn.click(()=>{
        $('.aside_menu').removeClass('block')
    })
    close.eq(1).click(()=>{
        $('.aside_menu').addClass('block')
    })

    $(window).scroll(()=>{
        let s_top = $(window).scrollTop()
        let h_tp_top = $('.h_tp').offset().top
        // console.log(s_top)
        // console.log(h_tp_top)
        if(s_top >= 60){
            // $('.h_tp').slideUp(2000)
            $('.h_tp').css({
                transform: 'translateY(-32px)',
                transition: '2s'
            })
            $('.aside').css({
                transform: 'translateY(-128px)',
                transition: '2s'
            })
        }
        else{
            $('.h_tp').css({
                transform: 'translateY(0px)'
            })
            $('.aside').css({
                transform: 'translateY(0px)'
            })
        }
    })
})