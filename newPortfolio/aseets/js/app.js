
// F-KV
$(function () {



    leftTop();
    setTimeout(function () { rightTop() }, 100);
    setTimeout(function () { center() }, 1000);
    setTimeout(function () { bottomCubeShow() }, 4000);
    setTimeout(function () { bottomCube() }, 5000);
    setTimeout(function () { bottomLine() }, 5700);
    setTimeout(function () { centerMove() }, 6500);
    setTimeout(function () { centerKeyId() }, 7500);
    setTimeout(function () { centerKeyPass() }, 8500);
    setTimeout(function () { centerLoad() }, 9500);
    setTimeout(function () { centerLoadHide() }, 12500);
    setTimeout(function () { loadBack() }, 15500);

    function leftTop() {
        $(".left-top").animate({ 'opacity': '100%' }, 300);
        $(".left-top").children(".left-top h1").animate({ 'padding-left': '0' }, 500);
        $(".left-top").children(".left-top h2").animate({ 'padding-left': '0' }, 600);
        $(".left-top").children(".left-top p").animate({ 'padding-left': '0' }, 700);
    }

    function rightTop() {
        $(".right-top").animate({ 'opacity': '100%', 'right': '5%' }, 500);
    }

    function center() {
        $(".center").animate({ 'width': '300px' }, 1000);
        $(".center").animate({ 'height': '150px' }, 1000);
        $(".center").children(".center h1").delay(2000).animate({ 'margin-left': '0' }, 1000);
        $(".center").children(".center h2").delay(2000).animate({ 'margin-left': '0' }, 1100);
        $(".center").children(".center p").delay(2000).animate({ 'margin-left': '0' }, 1200);
    }

    function bottomCubeShow() {
        $(".cube-p3").animate({ 'margin-top': '0' }, 500);
        $(".cube-p2").animate({ 'margin-top': '0' }, 700);
        $(".cube-p1").animate({ 'margin-top': '0' }, 900);
    }

    function bottomCube() {
        $(".cube-p3").css({
            'transition': 'all 1s',
            'transform': 'rotate(135deg)'
        });
        $(".cube-p2").css({
            'transition': 'all 1.5s',
            'transform': 'rotate(135deg)'
        });
        $(".cube-p1").css({
            'transition': 'all 2s',
            'transform': 'rotate(135deg)'
        });
    }

    function bottomLine() {
        $(".bottom-line-top").animate({ 'width': '100%' }, 1000);
        $(".bottom-line-bottom").animate({ 'width': '100%' }, 1000);
    };

    function centerMove() {
        $(".center").animate({ 'left': '25%' }, 1000);
        $(".center-2").delay(500).animate({ 'opacity': '100%' }, 1000)
    }

    function centerKeyId() {
        for (let i = 0; i < $(".center-2-top span").length; i++) {
            $(".center-2-top span").eq(i).delay(i * 100).animate({ 'opacity': '100%' }, 100)
        }
    }
    function centerKeyPass() {
        for (let i = 0; i < $(".center-2-bottom span").length; i++) {
            $(".center-2-bottom span").eq(i).delay(i * 100).animate({ 'opacity': '100%' }, 100)
        }
    }

    function centerLoad() {
        $(".center-load").animate({ 'opacity': '100%' }, 500, function () {
            $(".center-load-inner").animate({ 'width': '280px' }, 2000);
        });
    }

    function centerLoadHide() {
        $(".center-2").animate({ 'opacity': '0%' }, 10);
        $(".center-login").animate({ 'opacity': '100%' }, 10);
        $(".center-load").animate({ 'width': '140px' }, 1000);
        $(".center-load-inner").animate({ 'width': '120px' }, 1000, function () {
            $(".center-load").animate({ 'left': '75%' }, 1000, function () {
                $(".center-login-line").animate({ 'width': '100%' }, 1000);
            });
        });
    }

    function loadBack() {
        $(".top-black").animate({'opacity':'50%'},1000);
        $(".bottom-black").animate({'opacity':'50%'},1000);
        $("header").css({
            'transition':'all 1s',
            'background-color':'rgba(255, 255, 255, 0.75)'
        });
    }

    

    let dfwWidth = window.$(window).width();
    let wWidth = 0;

    function fKvSize() {
        let width = $(window).width();
        let height = $(window).height();
        $(".area").css({
            'width': width,
        });
    }

    $(window).bind("resize", resizeFkv);
    resizeFkv();

    function resizeFkv() {
        dfwWidth = wWidth;
        wWidth = window.$(window).width();
        if (dfwWidth != wWidth) {
            fKvSize()
        };
    };
});
// HEADER
$(function () {

    let btnNow = 0;

    function headerBtn() {
        $(".header-btn").click(function () {
            if (btnNow === 0) {
                $(".header-btn-line-1").stop().css({
                    'transform': 'rotate(405deg)'
                });
                $(".header-btn-text-1").stop().animate({
                    'left': '200%'
                }, 1000);
                $(".header-btn-text-2").stop().animate({
                    'left': '50%'
                }, 1000)
                $(".header-l").stop().animate({
                    'left': '150%'
                }, 1500);
                $(".header-r").stop().animate({
                    'right': '-150%'
                }, 1500);
                $("header").css({
                    'transition':'all 1s',
                    'background-color':'rgba(255, 255, 255, 0)'
                });
                btnNow++;
            } else {
                $(".header-btn-line-1").stop().css({
                    'transform': 'rotate(0deg)'
                });
                $(".header-btn-text-1").stop().animate({
                    'left': '50%'
                }, 1000);
                $(".header-btn-text-2").stop().animate({
                    'left': '-150%'
                }, 1000)
                $(".header-l").stop().animate({
                    'left': '0%'
                }, 1500);
                $(".header-r").stop().animate({
                    'right': '0%'
                }, 1500);
                $("header").css({
                    'transition':'all 1s',
                    'background-color':'rgba(255, 255, 255, 0.75)'
                });
                btnNow = 0;
            }
        });
    }
    headerBtn();

})
// F-CAROUSEL
$(function () {

    setTimeout(function () { $(".f-carousel").animate({ 'opacity': '100%' }, 2000) }, 16000);
    setTimeout(function () { startTimer() }, 16000);

    let dfwWidth = window.$(window).width();
    let wWidth = 0;
    fCarouselCurrent = 0;
    fLastCurrent = $(".f-carousel-i").length - 1;


    function carouselView() {
        let windowHeight = $(window).height();
        let carouselHeight = windowHeight;
        $(".f-carousel").css('height', carouselHeight);
    };

    function carouselIsize() {
        let carouselIwidth = $(".f-carousel").width();
        let carouselIheight = $(".f-carousel").height();
        $(".f-carousel-i").css({
            'width': carouselIwidth,
            'height': carouselIheight
        });
    };

    $(window).bind("resize", resizeCarousel);
    resizeCarousel();

    function resizeCarousel() {
        dfwWidth = wWidth;
        wWidth = window.$(window).width();
        if (dfwWidth != wWidth) {
            carouselView();
            carouselIsize();
        };
    };

    function changeCarousel() {
        $(".f-carousel-g").stop().animate({
            'left': fCarouselCurrent * -100 + '%'
        });
    };

    let carouselTimer;
    function startTimer() {
        carouselTimer = setInterval(function () {
            if (fCarouselCurrent === fLastCurrent) {
                fCarouselCurrent = 0;
                changeCarousel();
            } else {
                fCarouselCurrent++;
                changeCarousel();
            };
        }, 5000);
    };
});
// ABOUT
$(function () {

    function aboutAnime() {
        $(".about-content-img").animate({ 'top': '0', 'opacity': '100%' }, 500);
    };
    // aboutAnime();

    function aboutScroll() {
        $(".about-content-img").each(function () {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                aboutAnime();
            } else {

            };
        });
    };
    $(window).scroll(function () {
        aboutScroll();
    });


    function aboutHover() {
        $(".about-content").hover(function () {
            $(this).children(".about-content-hover").animate({ 'opacity': '50%' }, 500);
            $(this).children(".about-content-text").animate({ 'opacity': '1' }, 500);
        }, function () {
            $(this).children(".about-content-hover").animate({ 'opacity': '0%' }, 500);
            $(this).children(".about-content-text").animate({ 'opacity': '0' }, 500);
        });
    };
    aboutHover();
});

// ARTWORK
// ARTWORK hover event
$(function () {

    function artworkHover() {
        $(".artwork-content-img-box").hover(function () {
            let index = $(this).index();
            $(this).animate({ 'opacity': '50%' })
            // js
            // workText[index].style.visibility = 'visible';
            $(".artwork-content-title").eq(index).animate({ 'left': '0%' }, 500);
            $(".artwork-content-text").eq(index).animate({ 'left': '0%' }, 600);
            $(".artwork-content-title-line").eq(index).animate({ 'width': '100%' }, 500);
            $(".artwork-content-text-line").eq(index).animate({ 'width': '100%' }, 600);
        }, function () {
            let index = $(this).index();
            $(this).animate({ 'opacity': '1' });
            // js
            // workText[index].style.visibility = 'hidden';
            $(".artwork-content-title").eq(index).animate({ 'left': '120%' }, 600);
            $(".artwork-content-text").eq(index).animate({ 'left': '120%' }, 500);
            $(".artwork-content-title-line").eq(index).animate({ 'width': '0%' }, 500);
            $(".artwork-content-text-line").eq(index).animate({ 'width': '0%' }, 600);
        });
    };
    artworkHover();
});
// ARTWORK resize
$(function () {

    let dfwWidth = window.$(window).width();
    let wWidth = 0;

    function aboutContentHeight() {
        let aboutkWidth = $(".about-content").width();
        let aboutHeight = aboutkWidth / 16 * 9;
        $(".about-content").css('height', aboutHeight + 'px');
    };

    // resize ARTWORK
    function artworkBoxHeight() {
        let artworkWidth = $(".artwork-content-img-box").width();
        let artworkHeight = artworkWidth * 4 / 3;
        let artworkMarginTop = artworkHeight * 1 / 4;
        $(".artwork-content-img-box").css('height', artworkHeight + 'px');
        $(".artwork-content-img-box-2").css('margin-top', '-' + artworkMarginTop + 'px');
        $(".artwork-content-img-box-3").css('margin-top', '-' + artworkMarginTop + 'px');
    };

    $(window).bind("resize", resizeArtworkImg);
    resizeArtworkImg();

    function resizeArtworkImg() {
        dfwWidth = wWidth;
        wWidth = window.$(window).width();
        if (dfwWidth != wWidth) {
            artworkBoxHeight();
            aboutContentHeight();
        };
    };
});
//ARTWORK scroll event
$(function () {

    function artworkScroll() {
        $(".artwork-content-img").each(function () {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                // artworkScrollAnime();
                $(this).animate({ 'top': '0', 'opacity': '1' }, 500)
            } else {

            }
        });
    }
    $(window).scroll(function () {
        artworkScroll();
    });

})

// GALLERY
// GALLERY carousel slide
$(function () {

    let dfwWidth = window.$(window).width();
    let wWidth = 0;
    gCarouselCurrent = 0;
    gLastCurrent = $(".g-carousel-l-1-i").length - 1;


    function gCarouselSize() {
        let width = $(window).width();
        let height = $(window).height();
        console.log(width);
        console.log(height);
        $(".g-carousel-container").css({
            'height': height
        });
        $(".g-carousel-l-1-i").css({
            'width': $(".g-carousel-l-1").width(),
            'margin-left': $(".g-carousel-l-1").width()
        });
        $(".g-carousel-l-2-i").css({
            'width': $(".g-carousel-l-2").width(),
            'margin-left': $(".g-carousel-l-2").width(),
        });
        $(".g-carousel-l-3-i").css({
            'width': $(".g-carousel-l-3").width(),
            'margin-left': $(".g-carousel-l-3").width(),
        });
    }
    gCarouselSize();

    $(window).bind("resize", resizeGcarousel);
    resizeGcarousel();

    function resizeGcarousel() {
        dfwWidth = wWidth;
        wWidth = window.$(window).width();
        if (dfwWidth != wWidth) {
            gCarouselSize();
        };
    };

    $(".g-carousel-r-i").eq(0).css({ 'opacity': '100%' });

    function changeGcarousel() {
        $(".g-carousel-l-1-g").stop().animate({
            'right': gCarouselCurrent * -200 + '%'
        }, 800);
        $(".g-carousel-l-2-g").stop().animate({
            'right': gCarouselCurrent * -200 + '%'
        }, 900);
        $(".g-carousel-l-3-g").stop().animate({
            'right': gCarouselCurrent * -200 + '%'
        }, 1000);
        $(".g-carousel-r-i").stop().animate({
            'opacity': '0%'
        }, 0)
        $(".g-carousel-r-i").eq(gCarouselCurrent).stop().animate({
            'opacity': '100%'
        }, 1000)
    };
    function changeGcarouselLine() {
        $(".g-carousel-top-l-line").animate({
            'width': '0%'
        }, 0, function () {
            $(".g-carousel-top-l-line").animate({
                'width': '48%'
            }, 1000)
        });
        $(".g-carousel-top-r-line").animate({
            'width': '0%'
        }, 0, function () {
            $(".g-carousel-top-r-line").animate({
                'width': '48%'
            }, 1000)
        });
        $(".g-carousel-bottom-l-line").animate({
            'width': '0%'
        }, 0, function () {
            $(".g-carousel-bottom-l-line").animate({
                'width': '48%'
            }, 1000)
        });
        $(".g-carousel-bottom-r-line").animate({
            'width': '0%'
        }, 0, function () {
            $(".g-carousel-bottom-r-line").animate({
                'width': '48%'
            }, 1000)
        });
        $(".g-carousel-left-line").animate({
            'height': '0%'
        }, 0, function () {
            $(".g-carousel-left-line").delay(1000).animate({
                'height': '92%'
            }, 1000)
        });
        $(".g-carousel-right-line").animate({
            'height': '0%'
        }, 0, function () {
            $(".g-carousel-right-line").delay(1000).animate({
                'height': '92%'
            }, 1000)
        });
        $(".g-carousel-l-cube-1").css({
            'transform': 'rotate(' + gCarouselCurrent * 360 + 'deg)'
        });
        $(".g-carousel-l-cube-2").css({
            'transform': 'rotate(' + gCarouselCurrent * -360 + 'deg)'
        });
    }
    let carouselTimer;
    function startTimer() {
        carouselTimer = setInterval(function () {
            if (gCarouselCurrent === gLastCurrent) {
                gCarouselCurrent = 0;
                changeGcarousel();
                changeGcarouselLine()
            } else {
                gCarouselCurrent++;
                changeGcarousel();
                changeGcarouselLine()
            };
        }, 5000);
    };
    startTimer();
});


// NEWS
$(function () {

    function newsSubBack() {
        $(".news-logo-main-title").animate({ 'top': '0', 'opacity': '1' }, 800, function () {
            $(".news-sub-title-l-color").animate({ 'width': '100%' }, 800);
            $(".news-sub-title-r-color").animate({ 'width': '100%' }, 800);
            $(".news-logo-sub-title").delay(800).animate({ 'left': '50%' }, 1000);
        });
    };
    // newsSubBack();

    function newsContentLine() {
        for (let i = 0; i < $(".news-content-article-line").length; i++) {
            $(".news-content-article-line").eq(i).delay(i * 100).animate({
                'width': '100%'
            }, 500)
        };
    };
    // newsContentLine();

    // news scroll event
    function newsScroll() {
        $(".news").each(function () {
            let elemPosHeight = $(this).height();
            let elemPosHelf = elemPosHeight / 2;
            let elemPos = $(this).offset().top + elemPosHeight;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                newsSubBack();
                newsContentLine();
            } else {

            }
        });
    }
    $(window).scroll(function () {
        newsScroll();
    });

});

// ----------ARTWORKS.HTML----------

$(function () {

    function artworksContainer() {
        let height = $(".artworks-content").height();
        $(".artworks-content-container").css('height', height);
    }
    artworksContainer();

    function artworksMainZindex() {
        let length = $(".artworks-main-i").length;
        for (let i = 0; i <= length; i++) {
            $(".artworks-main-i").eq(i).css('z-index', i * -1);
        }
    };
    artworksMainZindex();

    function artworksMainChange() {
        $(".artworks-sub-i").click(function () {
            let index = $(this).index();
            $(this).parent().parent().children(".artworks-main-g").children(".artworks-main-i").animate({ 'opacity': '0' }, 300);
            $(this).parent().parent().children(".artworks-main-g").children(".artworks-main-i").eq(index).animate({ 'opacity': '1' }, 500);
        });
    };
    artworksMainChange();

    function artworksMainSize() {
        let artworksMainWidth = $(".artworks-main-g").width();
        let artworksMainHeight = artworksMainWidth * 9 / 16;
        $(".artworks-main-g").css('height', artworksMainHeight);
    }
    function artworksSubSize() {
        let artworksSubWidth = $(".carousel-sub-i").width();
        let artworksSubHeight = artworksSubWidth * 9 / 16;
        $(".artworks-sub-i").css('height', artworksSubHeight);
    }

    let dfwWidth = window.$(window).width();
    let wWidth = 0;

    function resizeArtworksMain() {
        dfwWidth = wWidth;
        wWidth = window.$(window).width();
        if (dfwWidth != wWidth) {
            artworksMainSize();
            artworksSubSize();
            artworksContainer();
        };
    };

    $(window).bind("resize", resizeArtworksMain);
    resizeArtworksMain();

});

$(function () {

    function artworksContentVisibility() {
        let length = $(".artworks-content").length;
        for (let i = 0; i < length; i++) {
            if (i === 0) {
                $(".artworks-content").eq(i).css('visibility', 'visible');
            } else {
                $(".artworks-content").eq(i).css('visibility', 'hidden')
            };
        };
    };
    artworksContentVisibility();

    function clickChangeArtworks() {
        $(".carousel-slider-i").click(function () {
            let index = $(this).index();
            $(".artworks-content").animate({ 'opacity': '0%' }, 500, function () {
                $(".artworks-content").css('visibility', 'hidden');
                $(".artworks-content").eq(index).css('visibility', 'visible');
            });
            $(".artworks-content").eq(index).delay(500).animate({ 'opacity': '100%' }, 500);
        });
    };
    clickChangeArtworks();
})

$(function () {

    let dfwWidth = window.$(window).width();
    let wWidth = 0;

    // carousel-slider-list
    function artworksImg() {
        // list
        let windowWidth = $(window).width();
        let artworksImgWidth = windowWidth * 18 / 100;
        let artworksImgHeight = artworksImgWidth * 3 / 4;
        let artworksImgMargin = windowWidth * 1 / 100;
        let total = artworksImgWidth + artworksImgMargin * 2;
        let length = $(".carousel-slider-i").length;
        // list
        $(".carousel-slider-i").css({
            'width': artworksImgWidth + 'px',
            'height': artworksImgHeight + 'px',
            'margin-left': artworksImgMargin + 'px',
            'margin-right': artworksImgMargin + 'px'
        });
        // container ul
        let artworksCarouselWith = total * length;
        $(".carousel-slider-container").css('height', artworksImgHeight);
        $(".carousel-slider-g").css('width', artworksCarouselWith + 'px');
        let width = $(".carousel-slider-i").width();
        let height = $(".carousel-slider-i").height();
        $(".carousel-slider-img").css({
            'width': width,
            'height': height
        });
    };

    // resize 関数
    function resizeArtworksCarousel() {
        dfwWidth = wWidth;
        wWidth = window.$(window).width();
        if (dfwWidth != wWidth) {
            artworksImg();
        };
    };

    // resize event
    $(window).bind("resize", resizeArtworksCarousel);
    resizeArtworksCarousel();

    // CAROUSEL SLIDER CHANGE
    let slideCurrent = 0;
    let lastCurrent = $(".carousel-slider-i").length - 1;

    function changeslide() {
        $(".carousel-slider-g").stop().animate({
            'left': slideCurrent * -20 + '%'
        });
    };

    // CAROUSEL SLIDER CLICK
    // NEXT
    $(".next").click(function () {
        if (slideCurrent === lastCurrent) {
            slideCurrent = 0;
            changeslide();
        } else {
            slideCurrent++;
            changeslide();
        };
    });

    // BACK
    $(".back").click(function () {
        if (slideCurrent === 0) {
            slideCurrent = lastCurrent;
            changeslide();
        } else {
            slideCurrent--;
            changeslide();
        };
    });

});

// NEWS.HTML
$(function () {

    // 右のメニューのテキストのliのwidthを指定
    function newsMenuW() {
        let length = $(".news-p-menu-text").length;
        for (let i = 0; i < length; i++) {
            let width = $(".news-p-menu-text").eq(i).width();
            $(".news-p-menu-i").eq(i).css('width', width);
        };
    };
    newsMenuW();

    // メニューのホバーアニメーション
    function newsPageHover() {
        $(".news-p-menu-i").hover(function () {
            $(this).children(".news-p-menu-text").stop().animate({ 'top': '-100%' }, 300);
            $(this).children(".news-p-menu-text-hidden").stop().animate({ 'top': '4px' }, 300);
            $(this).children(".news-p-menu-line").stop().animate({ 'width': '100%' }, 500)
        }, function () {
            $(this).children(".news-p-menu-text").stop().animate({ 'top': '4px' }, 300);
            $(this).children(".news-p-menu-text-hidden").stop().animate({ 'top': '120%' }, 300);
            $(this).children(".news-p-menu-line").stop().animate({ 'width': '0%' }, 500)
        });
    };
    newsPageHover();

    // メニューをクリックすると対応した記事が表示される
    function newsPageClick() {
        $(".news-p-menu-i").click(function () {
            let index = $(this).index();
            $(".news-p-article").animate({ 'opacity': '0' }, 300);
            $(".news-p-article").eq(index).animate({ 'opacity': '1' }, 500);
        });
    };
    newsPageClick();

});

// CONTACT.HTML

$(function () {
    function timer() {
        let today = new Date();
        $weekday = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        month = today.getMonth() + 1
        $(".time").html(month + "/" + today.getDate() + " ( " + $weekday[today.getDay()] + " ) " + today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2));
    };
    setInterval(timer, 1000);

    function contactPageImgSize() {
        let height = $(".contact-page-img-g").width() * 3 / 4;
        $(".contact-page-img-g").css('height', height);
    }
    contactPageImgSize();

    let dfwWidth = window.$(window).width();
    let wWidth = 0;

    function resizeContactPage() {
        dfwWidth = wWidth;
        wWidth = window.$(window).width();
        if (dfwWidth != wWidth) {
            contactPageImgSize();
        };
    };

    // resize event
    $(window).bind("resize", resizeContactPage);
    resizeContactPage();

});
