var lastScrollTop = 0;
window.addEventListener('DOMContentLoaded', function () {
    var scrollTop = $(this).scrollTop();

    setTimeout(() => {
        $('#section01 .line01_01').addClass('on');
    },100)
    setTimeout(() => {
        $('#section01 .line02_01').addClass('on');
    },400)
    setTimeout(() => {
        $('#section01 .maintitle01_01').addClass('on');
    },800)
    setTimeout(() => {
        $('#section01 .maintitle02_01').addClass('on');
    },900)

    setTimeout(() => {
        $('#section01 .line001').addClass('on');
    },1300)
    setTimeout(() => {
        $('#section01 .line002').addClass('on');
        $('#section01 .maintitle03_01').addClass('on');
        $('#section01 .maintitle04_01').addClass('on');
    },1200)
  


    $("#container").each(function () {
        var contentIndex = $(this).attr("id");
        if(scrollTop >= $(this).offset().top) {
            $(".scroll_03 a").removeClass("on");
            $(".scroll_03 a[href=#"+contentIndex+"]").addClass("on");
        }
    })

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 0){
            $('.ac02_01').addClass('on');
        }
        if(scrollTop >= 0){
            $('.ac03_01').addClass('on');
        }
        if(scrollTop >= 0){
            $('.ac04_01').addClass('on');
        }
        if(scrollTop >= 872){
            $('.image01_02').addClass('on');
        }
        if(scrollTop >= 1101){
            $('.text01_02').addClass('on');
        }
        if(scrollTop >= 1290){
            $('.text02_02').addClass('on');
        }
        if(scrollTop >= 1840){
            $('.image02_02').addClass('on');
        }
        if(scrollTop >= 1840){
            $('.title02_02').addClass('on');
        }
        if(scrollTop >= 1840){
            $('.title02_02').addClass('on');
        }
        if(scrollTop >= 1913){
            $('.text03_02').addClass('on');
        }

        if(scrollTop >= 2383){
            $('.image03_02').addClass('on');
        }
        if(scrollTop >= 2383){
            $('.title03_02').addClass('on');
        }
        if(scrollTop >= 2600){
            $('.text04_02').addClass('on');
        }
        if(scrollTop >= 3160){
            $('.title_03').addClass('on');
        }

        if(scrollTop >= 3440){
            $('.asis01_03').addClass('on');
        }
        if(scrollTop >= 3600){
            $('.asis02_03').addClass('on');
        }
        if(scrollTop >= 3750){
            $('.asis03_03').addClass('on');
        }
        if(scrollTop >= 3800){
            $('.tobe01_03').addClass('on');
        }
        if(scrollTop >= 3820){
            $('.tobe02_03').addClass('on');
        }
        if(scrollTop >= 3840){
            $('.tobe03_03').addClass('on');
        }

        if(scrollTop >= 4274){
            $('.title01_04').addClass('on');
        }
        if(scrollTop >= 4570){
            $('.line01_04').addClass('on');
        }
        if(scrollTop >= 4477){
            $('.color01_04').addClass('on');
        }
        if(scrollTop >= 4500){
            $('.color02_04').addClass('on');
        }

        if(scrollTop >= 4686){
            $('.typo01_04').addClass('on');
        }
        if(scrollTop >= 4873){
            $('.typo02_04').addClass('on');
        }
        if(scrollTop >= 4992){
            $('.typo03_04').addClass('on');
        }
        if(scrollTop >= 5111){
            $('.typo04_04').addClass('on');
        }
        if(scrollTop >= 4747){
            $('.line02_04').addClass('on');
        }
        if(scrollTop >= 4905){
            $('.title02_04').addClass('on');
        }
        if(scrollTop >= 6460){
            $('.title_05').addClass('on');
        }
        if(scrollTop >= 6640){
            $('.text_05').addClass('on');
        }
        if(scrollTop >= 6650){
            $('.image03_05').addClass('on');
        }
        if(scrollTop >= 6975){
            $('.image02_05').addClass('on');
        }

        if(scrollTop >= 7370){
            $('.ac002_06').addClass('on');
        }
        if(scrollTop >= 7370){
            $('.ac003_06').addClass('on');
        }
        if(scrollTop >= 7370){
            $('.ac004_06').addClass('on');
        }
        if(scrollTop >= 7500){
            $('.mockup02_06').addClass('on');
        }
        if(scrollTop >= 7500){
            $('.title01_06').addClass('on');
        }
        if(scrollTop >= 8700){
            $('.title02_06').addClass('on');
        }

        if(scrollTop >= 9300){
            $('.line01_06').addClass('on');
        }
        if(scrollTop >= 9300){
            $('.line02_06').addClass('on');
        }
        if(scrollTop >= 9300){
            $('.line03_06').addClass('on');
        }
        if(scrollTop >= 9300){
            $('.line04_06').addClass('on');
        }
        if(scrollTop >= 9300){
            $('.line05_06').addClass('on');
        }
        if(scrollTop >= 9300){
            $('.line06_06').addClass('on');
        }
        if(scrollTop >= 9300){
            $('.line07_06').addClass('on');
        }
        if(scrollTop >= 9300){
            $('.line08_06').addClass('on');
        }
        if(scrollTop >= 10540){
            $('.title03_06').addClass('on');
        }

        if(scrollTop >= 10770){
            $('.mockup05_06').addClass('on');
        }
        if(scrollTop >= 12003){
            $('.title01_07').addClass('on');
        }
        if(scrollTop >= 12224){
            $('.mockup02_07').addClass('on');
        }

        if(scrollTop >= 13110){
            $('.title03_07').addClass('on');
        }
        if(scrollTop >= 13200){
            $('.title04_07').addClass('on');
        }
        if(scrollTop >= 13300){
            $('.title05_07').addClass('on');
        }

        if(scrollTop >= 13600){
            $('.image02_07').addClass('on');
        }
        if(scrollTop >= 13600){
            $('.image04_07').addClass('on');
        }
        if(scrollTop >= 15213){
            $('.text02_08').addClass('on');
        }
        if(scrollTop >= 15567){
            $('.mockup02_08').addClass('on');
        }
        if(scrollTop >= 15567){
            $('.mockup03_08').addClass('on');
        }  
        if(scrollTop >= 16597){
            $('.mockup04_08').addClass('on');
        }
        if(scrollTop >= 18200){
            $('.mockup05_08').addClass('on');
        }
        if(scrollTop >= 18200){
            $('.image01_08').addClass('on');
        }
        if(scrollTop >= 19727){
            $('.glossy_08').addClass('on');
        }
        if(scrollTop >= 19727){
            $('.finishes_08').addClass('on');
        }

        if(scrollTop >= 20630){
            $('.ac02_09').addClass('on');
        }
        if(scrollTop >= 20630){
            $('.ac03_09').addClass('on');
        }
        if(scrollTop >= 20630){
            $('.ac04_09').addClass('on');
        }
        if(scrollTop >= 20760){
            $('.mockup01_09').addClass('on');
        }
        if(scrollTop >= 21152){
            $('.mockup02_09').addClass('on');
        }
        if(scrollTop >= 22254){
            $('.mockup03_09').addClass('on');
        }
        if(scrollTop >= 22470){
            $('.text02_09').addClass('on');
        }
      
        if(scrollTop >= 23770){
            $('.title02_09').addClass('on');
        }

        if(scrollTop >= 24115){
            $('.mockup05_2_09').addClass('on');
        }
        if(scrollTop >= 24115){
            $('.mockup05_3_09').addClass('on');
        }

        if(scrollTop >= 24800){
            $('.bg_text01_09').addClass('on');
        }
        if(scrollTop >= 25000){
            $('.bg_text02_09').addClass('on');
        }
        if(scrollTop >= 25100){
            $('.bg_text03_09').addClass('on');
        }

        if(scrollTop >= 25800){
            $('.text01_10').addClass('on');
        }
        if(scrollTop >= 25800){
            $('.text02_10').addClass('on');
        }
        if(scrollTop >= 25800){
            $('.text03_10').addClass('on');
        }
        if(scrollTop >= 25800){
            $('.image05_10').addClass('on');
        }
        if(scrollTop >= 25800){
            $('.image02_10').addClass('on');
        }


        if(scrollTop >= 26620){
            $('.title01_footer').addClass('on');
        }
        if(scrollTop >= 26778){
            $('.title02_footer').addClass('on');
        }



        if(scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
            if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { /* &&: AND, 두 값이 모두 참이어야 값이 출력 */
                /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
                $("#header").css("top","-100px");
            } else {
                $("#header").css("top","0px");
            }
    
            lastScrollTop = scrollTop;
        } 
    

        


    });



    /*  slide,click event section */
    gsap.to(".star01_01", {
        rotation: 360,
        ease: "none",
        duration: 5,
        repeat: -1,
      });
      gsap.to(".star02_01", {
        rotation: 360,
        ease: "none",
        duration: 5,
        repeat: -1,
      });

      gsap.to(".circle_text_02", {
        rotation: 360,
        ease: "none",
        duration: 15,
        repeat: -1,
      });
      gsap.to(".earth_text_02", {
        rotation: 360,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
      gsap.to(".long_text01_04", {
        // 사진 가로 크기
        x: -2268, 
        ease: "none",
        duration: 20,
        repeat: -1,
      });
      gsap.from(".long_text02_04", {
        // 사진 가로 크기
        x: -2279, 
        ease: "none",
        duration: 20,
        repeat: -1,
      });
      gsap.to(".earth_text_06", {
        rotation: 360,
        ease: "none",
        duration: 15,
        repeat: -1,
      });
      gsap.to(".ac_02_10", {
        rotation: 360,
        ease: "none",
        duration: 15,
        repeat: -1,
      });










      gsap.to(".bottom_frame_10", {
        // 사진 가로 크기
        x: -1611, 
        ease: "none",
        duration: 15,
        repeat: -1,
      });


})


