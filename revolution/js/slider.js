
/*------------------------------------------------------------------------------*/
/*  Home_Page Slider
/*------------------------------------------------------------------------------*/
var revapi41,
tpj=jQuery;

 tpj(document).ready(function() {
  if(tpj("#rev_slider_4_1").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_4_1");
    }else{
      revapi41 = tpj("#rev_slider_4_1").show().revolution({
        sliderType: "standard",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9000,
                        navigation: {
                            keyboardNavigation: "off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation: "off",
                            mouseScrollReverse: "default",
                            onHoverStop: "off",
                            touch: { touchenabled: "on", touchOnDesktop: "off", swipe_threshold: 75, swipe_min_touches: 1, swipe_direction: "horizontal", drag_block_vertical: false },
                            arrows: {
                                style: "zeus",
                                enable: true,
                                hide_onmobile: true,
                                hide_under: 768,
                                hide_onleave: true,
                                hide_delay: 200,
                                hide_delay_mobile: 1200,
                                tmp: '<div class="tp-title-wrap">  <div class="tp-arr-imgholder"></div> </div>',
                                left: { h_align: "left", v_align: "center", h_offset: 20, v_offset: 0 },
                                right: { h_align: "right", v_align: "center", h_offset: 20, v_offset: 0 },
                            },
                        },
                        responsiveLevels: [1240, 1240, 778, 480],
                        visibilityLevels: [1240, 1240, 778, 480],
                        gridwidth: [1240, 1240, 778, 480],
                        gridheight: [760, 760, 450, 350],
                        lazyType: "none",
                        shadow: 0,
                        spinner: "spinner0",
                        stopLoop: "off",
                        stopAfterLoops: -1,
                        stopAtSlide: -1,
                        shuffle: "off",
                        autoHeight: "off",
                        disableProgressBar: "on",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: { simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: false },
                    });
    }
  });
 

/* home-2(bg-video) */
 tpj(document).ready(function() {
  if(tpj("#rev_slider_4_2").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_4_2");
    }else{
      revapi42 = tpj("#rev_slider_4_2").show().revolution({
        sliderType:"standard",
        sliderLayout: "auto",
        dottedOverlay:"none",
        delay:9000,
        navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation:"off",
          mouseScrollReverse:"default",
          onHoverStop:"off",
          touch:{
            touchenabled:"on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          }
          ,
          arrows: {
            style:"zeus",
            enable:true,
            hide_under:991,
            hide_onleave:true,
            tmp:'',
            left: {
              h_align:"left",
              v_align:"center",
              h_offset:20,
              v_offset:0
            },
            right: {
              h_align:"right",
              v_align:"center",
              h_offset:20,
              v_offset:0
            }
          }
        },
         viewPort: {
            enable:true,
            outof:"pause",
            visible_area:"100%",
            presize:false
        },
        responsiveLevels:[1240,1024,778,480],
        visibilityLevels:[1240,1024,778,480],
        gridwidth:[1240,1024,778,480],
        gridheight:[755,735,532,278],
        lazyType:"none",
        parallax: {
            type:"mouse",
            origo:"slidercenter",
            speed:2000,
            levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
            type:"mouse",
        },
        shadow:0,
        spinner:"spinner0",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
        }
      });
    }
  });

 /* overlay header */
 tpj(document).ready(function() {
  if(tpj("#rev_slider_4_3").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_4_3");
    }else{
      revapi43 = tpj("#rev_slider_4_3").show().revolution({
        sliderType:"standard",
        sliderLayout: "auto",
        dottedOverlay:"none",
        delay:9000,
        navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation:"off",
          mouseScrollReverse:"default",
          onHoverStop:"off",
          touch:{
            touchenabled:"on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          }
          ,
          arrows: {
            style:"zeus",
            enable:true,
            hide_under:991,
            hide_onleave:true,
            tmp:'',
            left: {
              h_align:"left",
              v_align:"center",
              h_offset:20,
              v_offset:0
            },
            right: {
              h_align:"right",
              v_align:"center",
              h_offset:20,
              v_offset:0
            }
          }
        },
         viewPort: {
            enable:true,
            outof:"pause",
            visible_area:"100%",
            presize:false
        },
        responsiveLevels:[1240,1024,778,480],
        visibilityLevels:[1240,1024,778,480],
        gridwidth:[1240,1024,778,480],
        gridheight:[872,735,532,278],
        lazyType:"none",
        parallax: {
            type:"mouse",
            origo:"slidercenter",
            speed:2000,
            levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
            type:"mouse",
        },
        shadow:0,
        spinner:"spinner0",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
        }
      });
    }
  });
/* home-3 */
 tpj(document).ready(function() {
  if(tpj("#rev_slider_4_4").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_4_4");
    }else{
      revapi41 = tpj("#rev_slider_4_4").show().revolution({
        sliderType:"standard",
        sliderLayout: "auto",
        dottedOverlay:"none",
        delay:9000,
        navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation:"off",
          mouseScrollReverse:"default",
          onHoverStop:"off",
          touch:{
            touchenabled:"on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          }
          ,
          arrows: {
            style:"zeus",
            enable:true,
            hide_under:991,
            hide_onleave:true,
            tmp:'<div class="tp-title-wrap">  <div class="tp-arr-imgholder"></div> </div>',
            left: {
              h_align:"left",
              v_align:"center",
              h_offset:20,
              v_offset:0
            },
            right: {
              h_align:"right",
              v_align:"center",
              h_offset:20,
              v_offset:0
            }
          }
        },
         viewPort: {
            enable:true,
            outof:"pause",
            visible_area:"100%",
            presize:false
        },
        responsiveLevels:[1240,1024,778,480],
        visibilityLevels:[1240,1024,778,480],
        gridwidth:[1240,1024,778,480],
        gridheight:[698,698,450,352],
        lazyType:"none",
        parallax: {
            type:"mouse",
            origo:"slidercenter",
            speed:2000,
            levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
            type:"mouse",
        },
        shadow:0,
        spinner:"spinner0",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
        }
      });
    }
  });
 
