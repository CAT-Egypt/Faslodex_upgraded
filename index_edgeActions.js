/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${indexOpen}", "click", function(sym, e) {
         sym.$("Index").show().css({"left":"0px", "-webkit-transition-duration":".5s"});

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));              
         
         
         if(isDevice) {
         
           interactionUp = "touchend";
           interactionDown = "touchstart";
           interactionOver = interactionDown;
           interactionMove = 'touchmove';
         
         } else {
         
           interactionUp = "click";
           interactionDown = "mousedown";
           interactionOver = "mouseover";
           interactionMove = 'mousemove';
         
         };
         
         //main content
         //@symbolName - the name of the symbol
         //@topText - the text (if any) for the top title (in purple)
         //@indexImage - the thumbnail image used in the index list
         //@indexTitle - the title for the index item
         //@indexBody - the bosy for the index item
         
         var pagesArray = [
         {symbolName:"Cover", indexImage:"poster.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_01", indexImage:"Poster2.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_02", indexImage:"Poster3.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_03", indexImage:"Poster4.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_04", indexImage:"Poster5.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_05", indexImage:"Poster6.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_06", indexImage:"Poster7.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_07", indexImage:"Poster8.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_08", indexImage:"Poster9.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_09", indexImage:"Poster10.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_10", indexImage:"Poster11.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_11", indexImage:"Poster12.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_12", indexImage:"Poster13.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_13", indexImage:"Poster14.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_14", indexImage:"Poster15.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_15", indexImage:"Poster16.jpg",indexTitle:"Faslodex",indexBody:"Slide"},
         {symbolName:"Slide_16", indexImage:"Poster17.jpg",indexTitle:"Faslodex",indexBody:"Slide"}
         ];
         
         //number of pages
         var numPages = pagesArray.length;
         //ref to stage
         var stage = $('#Stage');
         //ref to the container that holds the pages
         var pageContainer = sym.$('pageContainer');
         //ref to the index slide out symbol
         var indexSymbol = sym.getSymbol('index');
         //..and its element
         var indexElement = indexSymbol.getSymbolElement();
         //ref to the container that holds the index items
         var indexListContainer = indexSymbol.$('indexListContainer');
         //refs to next and prev buttons
         var nextBtn = sym.$('nextBtn');
         var prevBtn = sym.$('prevBtn');
         //your original button refs
         var plyIndex = sym.$('plyIndex');
         var plyHome = sym.$('plyHome');
         
         var poster = sym.getSymbol("Index").$("Poster");
         var poster2 = sym.getSymbol("Index").$("Poster2");
         var poster3 = sym.getSymbol("Index").$("Poster3");
         var poster4 = sym.getSymbol("Index").$("Poster4");
         var poster5 = sym.getSymbol("Index").$("Poster5");
         var poster6 = sym.getSymbol("Index").$("Poster6");
         var poster7 = sym.getSymbol("Index").$("Poster7");
         var poster8 = sym.getSymbol("Index").$("Poster8");
         var poster9 = sym.getSymbol("Index").$("Poster9");
         var poster10 = sym.getSymbol("Index").$("Poster10");
         var poster11 = sym.getSymbol("Index").$("Poster11");
         var poster12 = sym.getSymbol("Index").$("Poster12");
         var poster13 = sym.getSymbol("Index").$("Poster13");
         var poster14 = sym.getSymbol("Index").$("Poster14");
         var poster15 = sym.getSymbol("Index").$("Poster15");
         var poster16 = sym.getSymbol("Index").$("Poster16");
         var poster17 = sym.getSymbol("Index").$("Poster17");
         
         
         //various refs to variables
         var isDevice;
         var stageWidth = stage.width();
         var stageHeight = stage.height();
         var touchPos = {initPosX:0, threshold:5};
         var pageTweenDuration = 0.6;
         var isAnimating = false;
         
         var currentPageId = 0;
         var currentPageSymbol, currentPageElement, oldPageSymbol, oldPageElement, indexDragger;
         
         
         function init(){
         
            //don't put a shadow on if it's a movile device (performance reasons)
            if(!isDevice){
         
            	TweenMax.set(stage, {
            		boxShadow:"0px 0px 10px 3px #000000"
         
            	})
            }
         
            //set the stage's CSS
           	TweenMax.set(stage, {
           		margin:'auto'
           	})
         
            //build the index menu
            buildIndexMenu();
         
            //build the top nav
            buildNav();
         
         
         }
         
         function buildNav(){
         
            nextBtn.bind(interactionUp, {dir:'next'},clickArrow);
            prevBtn.bind(interactionUp, {dir:'prev'},clickArrow);
            plyHome.bind(interactionUp, clickHome);
            poster.bind(interactionUp, clickP1);
            poster2.bind(interactionUp, clickP2);
            poster3.bind(interactionUp, clickP3);
            poster4.bind(interactionUp, clickP4);
            poster5.bind(interactionUp, clickP5);
            poster6.bind(interactionUp, clickP6);
            poster7.bind(interactionUp, clickP7);
            poster8.bind(interactionUp, clickP8);
            poster9.bind(interactionUp, clickP9);
            poster10.bind(interactionUp, clickP10);
            poster11.bind(interactionUp, clickP11);
            poster12.bind(interactionUp, clickP12);
            poster13.bind(interactionUp, clickP13);
            poster14.bind(interactionUp, clickP14);
            poster15.bind(interactionUp, clickP15);
            poster16.bind(interactionUp, clickP16);
            poster17.bind(interactionUp, clickP17);
            
         }
         
         (function(symbolName) {    
         	Symbol.bindElementAction(compId, symbolName, "${Tab_1}", "click", function(sym, e) {
         	var dest = 2;
            if(currentPageId > dest){currentPageId = dest; addPage('prev');}
         	else if(currentPageId < dest){currentPageId = dest; addPage('next');}
            glowButton(e); 
            
         	});
         })("Slide_01");
         
         (function(symbolName) {    
         	Symbol.bindElementAction(compId, symbolName, "${Tab_2}", "click", function(sym, e) {
         	var dest = 4;
            if(currentPageId > dest){currentPageId = dest; addPage('prev');}
         	else if(currentPageId < dest){currentPageId = dest; addPage('next');}
            glowButton(e); 
            
         	});
         })("Slide_01");
         
         (function(symbolName) {    
         	Symbol.bindElementAction(compId, symbolName, "${Tab_3}", "click", function(sym, e) {
         	var dest = 13;
            if(currentPageId > dest){currentPageId = dest; addPage('prev');}
         	else if(currentPageId < dest){currentPageId = dest; addPage('next');}
            glowButton(e); 
            
         	});
         })("Slide_01");
         
         (function(symbolName) {    
         	Symbol.bindElementAction(compId, symbolName, "${Tab_4}", "click", function(sym, e) {
         	var dest = 5;
            if(currentPageId > dest){currentPageId = dest; addPage('prev');}
         	else if(currentPageId < dest){currentPageId = dest; addPage('next');}
            glowButton(e); 
            
         	});
         })("Slide_01");
         
         (function(symbolName) {    
         	Symbol.bindElementAction(compId, symbolName, "${Tab_5}", "click", function(sym, e) {
         	var dest = 3;
            if(currentPageId > dest){currentPageId = dest; addPage('prev');}
         	else if(currentPageId < dest){currentPageId = dest; addPage('next');}
            glowButton(e); 
            
         	});
         })("Slide_01");
         
         function clickHome(e){
         
            if(currentPageId !== 0){
         
               currentPageId = 0;
               addPage('prev');
         
            }
         
            //make it glow when clicked
            glowButton(e);
         }
         
         function clickP1(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 0;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP2(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 1;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP3(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 2;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP4(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 3;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP5(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 4;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP6(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 5;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP7(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 6;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP8(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 7;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP9(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 8;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP10(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 9;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP11(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 10;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP12(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 11;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP13(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 12;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP14(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 13;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP15(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 14;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP16(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 15;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickP17(e){
         
            //14 is the slide this buttons was originally poitning to
         	var dest = 16;
            //don't do anything it we're already on 14
            if(currentPageId > dest){
               currentPageId = dest;
               addPage('prev');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
            }
         	else if(currentPageId < dest){
               currentPageId = dest;
               addPage('next');
               sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);
         
         
            }
            //make it glow when clicked 
            glowButton(e);
         }
         
         function clickArrow(e){
         
            //if the whole app is animating then don't do anything until it's stopped
         	if(isAnimating){return};
         
            var dir = e.data.dir;
         
            currentPageId = checkPageId(dir);
         
         
            addPage(dir);
         }
         
         function buildIndexMenu(){
         
            var indexItemSymbol, indexItemElement;
         
            for(var i = 0; i < numPages; i++){
         
               indexItemSymbol = sym.createChildSymbol('IndexItemSymbol', indexListContainer);
               indexItemElement = indexItemSymbol.getSymbolElement();
         
               TweenMax.set(indexItemElement, {
                  position:'absolute',
                  y:(i * indexItemElement.height()),
                  cursor:'pointer'
               });
         
               //indexItemSymbol.$('imageHolder').attr('src', 'images/index_default.jpg');
               TweenMax.set(indexItemSymbol.$('imageHolder'), {
                  backgroundImage: 'url(images/ '+ pagesArray[i].indexImage +')'
               });
         
         
               indexItemSymbol.$('titleText').html(pagesArray[i].indexTitle)
               indexItemSymbol.$('bodyText').html(pagesArray[i].indexBody + ' ' + i)
         
         
               indexItemElement.bind(interactionUp, {itemId:i}, clickIndexItem);
         
               //console.log(indexItemSymbol.$('imageHolder'))
         
            }
         
            //indexListContainer[0].style.height = numPages * indexItemElement.height() + 'px';
         
            pageContainer.bind('swipeleft', function(){
         
               currentPageId = checkPageId('next');
               addPage('next');
            })
         
            pageContainer.bind('swiperight', function(){
         
               currentPageId = checkPageId('prev');
               addPage('prev');
            })
         
            initIndex();
         
            initPages();
         
            checkArrows();
         
         
         
         }
         
         function initPages(){
         
            currentPageSymbol = sym.createChildSymbol(pagesArray[currentPageId].symbolName, pageContainer);
            currentPageElement = currentPageSymbol.getSymbolElement();
         
            currentPageSymbol.play(0);
         
         
         
         }
         
         function addPage(dir){
         
            //if the whole app is animating then don't do anything until it's stopped
         	if(isAnimating){return};
         
            oldPageSymbol = currentPageSymbol;
            oldPageElement = currentPageElement;
            oldPageSymbol.stopAll();
            currentPageSymbol = sym.createChildSymbol(pagesArray[currentPageId].symbolName, pageContainer);
            currentPageElement = currentPageSymbol.getSymbolElement();
         
            //set the old and new one to absolute
            TweenMax.set([oldPageElement, currentPageElement], {
               position:'absolute',
            })
         
            TweenMax.set(oldPageElement, {
              zIndex:10
            });
            //avoids a flash as the new one comes on to the stage
            TweenMax.set(currentPageElement, {
              zIndex:-10,
              autoAlpha:0
            })
         
            //if we hit next then slide the old page to the left
            TweenMax.to(oldPageElement, pageTweenDuration, {
               x:(dir == 'next') ? -stageWidth : stageWidth,
               onStart:function(){
         
               		isAnimating = true;
               },
               ease:Power2.easeInOut,
               onComplete:removePage,
               onCompleteParams:[oldPageSymbol]
            })
         
         
            //if we hit next then slide the new page from the right
            TweenMax.fromTo(currentPageElement, pageTweenDuration, {
               x:(dir == 'next') ? stageWidth : -stageWidth,
               autoAlpha:0
            },{
         
            	x:0,
            	autoAlpha:1,
               force3D:'auto',
               ease:Power2.easeInOut,
               onComplete:function(){
         
                  currentPageSymbol.play(0);
                  isAnimating = false;
                  checkArrows();
         
               }
            })
         
         
         
         
         }
         
         function removePage(s){
         
            s.deleteSymbol();
         }
         
         
         function initIndex() {
         
            plyIndex.bind(interactionUp, toggleIndex);
            indexElement.bind('swipeleft', toggleIndex);
            indexElement.bind(interactionDown, setInteractionDownPos)
            indexSymbol.$('closeBtn').bind(interactionDown, toggleIndex);
            TweenMax.set(indexElement, {
               position:'absolute',
               alpha:1,
               x:-indexElement.width()
            })
         
            //set the webkit scrolling on a touch device only
            if(isDevice){
         
               TweenMax.set('.scroll', {
                     'overflow-y': 'scroll',
                     'overflow-x': 'hidden',
                     webkitOverflowScrolling: 'touch'
               })
            } else {
         
              TweenMax.set('.scroll', {
                 'overflow-x': 'hidden',
                  overflow: 'scroll'
         
            })
         
            }
         
         
         }
         
         function setInteractionDownPos(e){
         
            touchPos.initPosX = (!isDevice) ? e.originalEvent.pageX : e.originalEvent.changedTouches[0].pageX ;
            touchPos.initPosY = (!isDevice) ? e.originalEvent.screenY : e.originalEvent.changedTouches[0].screenY;
         }
         
         
         
         function clickIndexItem(e){
         
            //if the whole app is animating then don't do anything until it's stopped
         	if(isAnimating){return};
         
            var itemId = e.data.itemId, dir;
         
            touchPos.endPosX = (!isDevice) ? e.originalEvent.pageX : e.originalEvent.changedTouches[0].pageX;
            touchPos.endPosY =  (!isDevice) ? e.originalEvent.screenY : e.originalEvent.changedTouches[0].screenY;
         
            //if you tapped and moved your finger too much then it's probably a swipe
            if((Math.abs(touchPos.initPosX - touchPos.endPosX) > touchPos.threshold) || (Math.abs(touchPos.initPosY - touchPos.endPosY) > touchPos.threshold)) {
         
               return;
            }
         
         
            if(itemId > currentPageId){
         
               currentPageId = itemId;
               addPage('next');
         
            } else if(itemId < currentPageId){
         
               currentPageId = itemId;
               addPage('prev');
         
            } else {
         
               //do nothing as it's the same page
            }
         
         
         
         
         
         }
         
         
         function toggleIndex(e){
         
            //avoids the index button glowing when the index list is swiped
         	if(e.type === 'click'){
         
         		glowButton(e);
         	}
         
            if(indexElement[0]._gsTransform.x < 0){
         
               TweenMax.to(indexElement, 0.4, {
                  x:0,
                  ease:Power3.easeOut
               })
            } else {
               TweenMax.to(indexElement, 0.4, {
                  x:-367,
                  ease:Power3.easeOut
               })
         
            }
         
         
         }
         
         function checkPageId(dir){
         
            var id;
         
            switch(dir){
         
               case 'next':
         
                  id = ((currentPageId + 1) < numPages) ? currentPageId + 1 : currentPageId;
         
               break;
               case 'prev':
         
                  id = ((currentPageId - 1) > -1) ? currentPageId - 1 : 0;
         
               break;
            }
         
         
            return id;
         
         
         }
         
         function checkArrows(){
         
            TweenMax.to(nextBtn, 0.3, {
            	autoAlpha:(currentPageId == numPages-1) ? 0 : 1
            })
            TweenMax.to(prevBtn, 0.3, {
            	autoAlpha:(currentPageId == 0) ? 0 : 1
            })
         
         
         }
         
         function glowButton(e){
         
            TweenMax.fromTo(e.target, 0.3, {
         
               alpha:0
            }, 
            {
               alpha:1,
               repeat:0,
               yoyo:true
            })
         
         }
         
         
         init();
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'title'
   (function(symbolName) {   
   
   })("title");
   //Edge symbol end:'title'

   //=========================================================
   
   //Edge symbol: 'title2'
   (function(symbolName) {   
   
   })("title2");
   //Edge symbol end:'title2'

   //=========================================================
   
   //Edge symbol: 'title3'
   (function(symbolName) {   
   
   })("title3");
   //Edge symbol end:'title3'

   //=========================================================
   
   //Edge symbol: 'Glass_sym'
   (function(symbolName) {   
   
   })("Glass_sym");
   //Edge symbol end:'Glass_sym'

   //=========================================================
   
   //Edge symbol: 'Cover'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_Cover_01").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_Cover_01").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         
         
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Cover");
   //Edge symbol end:'Cover'

   //=========================================================
   
   //Edge symbol: 'Ref_Cover'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Cover").$("Ref_Cover_01").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         
         sym.getComposition().getStage().getSymbol("Cover").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         
         sym.getComposition().getStage().getSymbol("Cover").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Ref_Cover_01");
   //Edge symbol end:'Ref_Cover_01'

   //=========================================================
   
   //Edge symbol: 'BackGround'
   (function(symbolName) {   
   
   })("BackGround");
   //Edge symbol end:'BackGround'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Tab_1}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Tab_2}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Tab_3}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S14");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Tab_4}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Tab_5}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S4");

      });
      //Edge binding end

      

   })("Slide_01");
   //Edge symbol end:'Slide_01'

   //=========================================================
   
   //Edge symbol: 'Ref_Cover_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_02").$("Ref_S02").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         
         sym.getComposition().getStage().getSymbol("Slide_02").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         
         sym.getComposition().getStage().getSymbol("Slide_02").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S02");
   //Edge symbol end:'Ref_S02'

   //=========================================================
   
   //Edge symbol: 'Ref_S2_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_04").$("Ref_S04").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         
         sym.getComposition().getStage().getSymbol("Slide_04").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         
         sym.getComposition().getStage().getSymbol("Slide_04").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S04");
   //Edge symbol end:'Ref_S04'

   //=========================================================
   
   //Edge symbol: 'Ref_S2_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_05").$("Ref_S05").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_05").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_05").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S05");
   //Edge symbol end:'Ref_S05'

   //=========================================================
   
   //Edge symbol: 'Ref_S2_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_06").$("Ref_S06").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_06").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_06").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S06");
   //Edge symbol end:'Ref_S06'

   //=========================================================
   
   //Edge symbol: 'Ref_S2_4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_07").$("Ref_S07").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_07").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_07").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S07");
   //Edge symbol end:'Ref_S07'

   //=========================================================
   
   //Edge symbol: 'Ref_S2_5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_08").$("Ref_S08").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_08").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_08").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S08");
   //Edge symbol end:'Ref_S08'

   //=========================================================
   
   //Edge symbol: 'Ref_S2_6'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_09").$("Ref_S09").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_09").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_09").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S09");
   //Edge symbol end:'Ref_S09'

   //=========================================================
   
   //Edge symbol: 'Ref_S2_7'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_10").$("Ref_S10").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_10").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_10").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S10");
   //Edge symbol end:'Ref_S10'

   //=========================================================
   
   //Edge symbol: 'Ref_S2_8'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_11").$("Ref_S11").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_11").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_11").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S11");
   //Edge symbol end:'Ref_S11'

   //=========================================================
   
   //Edge symbol: 'Ref_S2_9'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_12").$("Ref_S12").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_12").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_12").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S12");
   //Edge symbol end:'Ref_S12'

   //=========================================================
   
   //Edge symbol: 'Ref_S2_10'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_03").$("Ref_S03").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         
         sym.getComposition().getStage().getSymbol("Slide_03").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         
         sym.getComposition().getStage().getSymbol("Slide_03").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S03");
   //Edge symbol end:'Ref_S03'

   //=========================================================
   
   //Edge symbol: 'Ref_S12_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_13").$("Ref_S13").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_13").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_13").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S13");
   //Edge symbol end:'Ref_S13'

   //=========================================================
   
   //Edge symbol: 'Ref_S13_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_14").$("Ref_S14").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_14").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_14").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S14");
   //Edge symbol end:'Ref_S14'

   //=========================================================
   
   //Edge symbol: 'Ref_S13_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_15").$("Ref_S15").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_15").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_15").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S15");
   //Edge symbol end:'Ref_S15'

   //=========================================================
   
   //Edge symbol: 'Ref_S13_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_16").$("Ref_S16").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_16").$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.getComposition().getStage().getSymbol("Slide_16").$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      })("Ref_S16");
   //Edge symbol end:'Ref_S16'

   //=========================================================
   
   //Edge symbol: 'Slide_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S02").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S02").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         
         
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${S2_03}", "click", function(sym, e) {
         sym.getSymbol("Video_Frame").$("Vid3").hide();
         sym.getSymbol("Video_Frame").$("Vid2").hide();
         sym.getSymbol("Video_Frame").$("Vid1").show();
         
         sym.$("Video_Frame").css({"left":"0","top":"0","-webkit-transition-duration":".5s"});
         
         var vid1 = sym.getSymbol("Video_Frame").$("Vid1");
         vid1.html('<video width="1024" height="600" src="images/movies/Estrogen.mp4" poster="images/S2/S2_03.png" type="video/mp4" controls autoplay="autoplay" </video>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S2_06}", "click", function(sym, e) {
         sym.getSymbol("Video_Frame").$("Vid3").hide();
         sym.getSymbol("Video_Frame").$("Vid2").show();
         sym.getSymbol("Video_Frame").$("Vid1").hide();
         
         sym.$("Video_Frame").css({"left":"0","top":"0","-webkit-transition-duration":".5s"});
         
         var vid2 = sym.getSymbol("Video_Frame").$("Vid2");
         vid2.html('<video width="1024" height="600" src="images/movies/Tamoxifen.mp4" poster="images/S2/S2_06.png" type="video/mp4" controls autoplay="autoplay" </video>');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${S2_09}", "click", function(sym, e) {
         sym.getSymbol("Video_Frame").$("Vid3").show();
         sym.getSymbol("Video_Frame").$("Vid2").hide();
         sym.getSymbol("Video_Frame").$("Vid1").hide();
         
         sym.$("Video_Frame").css({"left":"0","top":"0","-webkit-transition-duration":".5s"});
         
         var vid3 = sym.getSymbol("Video_Frame").$("Vid3");
         vid3.html('<video width="1024" height="600" src="images/movies/Fulvestrant.mp4" poster="images/S2/S2_09.png" type="video/mp4" controls autoplay="autoplay" </video>');

      });
      //Edge binding end

   })("Slide_02");
   //Edge symbol end:'Slide_02'

   //=========================================================
   
   //Edge symbol: 'Slide_03'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S03").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S03").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_03");
   //Edge symbol end:'Slide_03'

   //=========================================================
   
   //Edge symbol: 'Slide_04'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S04").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S04").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_04");
   //Edge symbol end:'Slide_04'

   //=========================================================
   
   //Edge symbol: 'Slide_05'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S05").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S05").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_05");
   //Edge symbol end:'Slide_05'

   //=========================================================
   
   //Edge symbol: 'Slide_06'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S06").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S06").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_06");
   //Edge symbol end:'Slide_06'

   //=========================================================
   
   //Edge symbol: 'Slide_07'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S07").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S07").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_07");
   //Edge symbol end:'Slide_07'

   //=========================================================
   
   //Edge symbol: 'Slide_08'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S08").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S08").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_08");
   //Edge symbol end:'Slide_08'

   //=========================================================
   
   //Edge symbol: 'Slide_09'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S09").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S09").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_09");
   //Edge symbol end:'Slide_09'

   //=========================================================
   
   //Edge symbol: 'Slide_10'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S10").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S10").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_10");
   //Edge symbol end:'Slide_10'

   //=========================================================
   
   //Edge symbol: 'Slide_11'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S11").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S11").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_11");
   //Edge symbol end:'Slide_11'

   //=========================================================
   
   //Edge symbol: 'Slide_12'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S12").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S12").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_12");
   //Edge symbol end:'Slide_12'

   //=========================================================
   
   //Edge symbol: 'Slide_13'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S13").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S13").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_13");
   //Edge symbol end:'Slide_13'

   //=========================================================
   
   //Edge symbol: 'Slide_14'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S14").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S14").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_14");
   //Edge symbol end:'Slide_14'

   //=========================================================
   
   //Edge symbol: 'Slide_15'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S15").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S15").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_15");
   //Edge symbol end:'Slide_15'

   //=========================================================
   
   //Edge symbol: 'Slide_16'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i_info1}", "click", function(sym, e) {
         sym.$("Ref_S16").css({'clip':'Rect(0px 800px 200px 0px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info1").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info2").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i_info2}", "click", function(sym, e) {
         sym.$("Ref_S16").css({'clip':'Rect(100px 400px 100px 400px)', "-webkit-transition-duration":".5s"});
         sym.$("i_info2").hide({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});
         sym.$("i_info1").show({"-webkit-transform":"rotate(360deg)", "-webkit-transition-duration":"1s"});

      });
      //Edge binding end

   })("Slide_16");
   //Edge symbol end:'Slide_16'

   //=========================================================
   
   //Edge symbol: 'Chart_S07'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${ply}", "click", function(sym, e) {
         sym.play(0);
         
         sym.$("ply").hide();
         sym.$("stop").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${stop}", "click", function(sym, e) {
         sym.playReverse(1000);
         sym.$("ply").show();
         sym.$("stop").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${zoom}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_07").$("Chart_S07").css({"left":"13px","top":"13px", "-webkit-transform":"scaleX(1)","-webkit-transform":"scaleY(1)",  "-webkit-transition":"ease-in-out"});
         
         sym.$("S7_03").hide();
         sym.$("S7_02").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${out}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("Slide_07").$("Chart_S07").css({"left":"-140px","top":"15px", "-webkit-transform":"scale(0.6)", "-webkit-transition":"ease-in-out"});
         
         sym.$("S7_03").show();
         sym.$("S7_02").hide();

      });
      //Edge binding end

   })("Chart_S07");
   //Edge symbol end:'Chart_S07'

   //=========================================================
   
   //Edge symbol: 'Graph_S05'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${ply}", "click", function(sym, e) {
         sym.play(0);
         sym.$("ply").hide();
         sym.$("stop").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${stop}", "click", function(sym, e) {
         sym.playReverse();
         
         sym.$("ply").show();
         sym.$("stop").hide();

      });
      //Edge binding end

   })("Graph_S05");
   //Edge symbol end:'Graph_S05'

   //=========================================================
   
   //Edge symbol: 'Graph_S06'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${ply}", "click", function(sym, e) {
         sym.play(0);
         sym.$("ply").hide();
         sym.$("stop").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${stop}", "click", function(sym, e) {
         sym.playReverse();
         
         sym.$("ply").show();
         sym.$("stop").hide();

      });
      //Edge binding end

   })("Graph_S06");
   //Edge symbol end:'Graph_S06'

   //=========================================================
   
   //Edge symbol: 'Graph_S09'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${ply}", "click", function(sym, e) {
         sym.play(0);
         sym.$("ply").hide();
         sym.$("stop").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${stop}", "click", function(sym, e) {
         sym.playReverse();
         
         sym.$("ply").show();
         sym.$("stop").hide();

      });
      //Edge binding end

   })("Graph_S09");
   //Edge symbol end:'Graph_S09'

   //=========================================================
   
   //Edge symbol: 'Graph_S11'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${ply}", "click", function(sym, e) {
         sym.play(0);
         sym.$("ply").hide();
         sym.$("stop").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${stop}", "click", function(sym, e) {
         sym.playReverse();
         
         sym.$("ply").show();
         sym.$("stop").hide();

      });
      //Edge binding end

   })("Graph_S11");
   //Edge symbol end:'Graph_S11'

   //=========================================================
   
   //Edge symbol: 'Graph_S12'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${ply}", "click", function(sym, e) {
         sym.play(0);
         sym.$("ply").hide();
         sym.$("stop").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${stop}", "click", function(sym, e) {
         sym.playReverse();
         
         sym.$("ply").show();
         sym.$("stop").hide();

      });
      //Edge binding end

   })("Graph_S12");
   //Edge symbol end:'Graph_S12'

   //=========================================================
   
   //Edge symbol: 'Graph_S15'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${ply}", "click", function(sym, e) {
         sym.play(0);
         sym.$("ply").hide();
         sym.$("stop").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${stop}", "click", function(sym, e) {
         sym.playReverse();
         
         sym.$("ply").show();
         sym.$("stop").hide();

      });
      //Edge binding end

   })("Graph_S15");
   //Edge symbol end:'Graph_S15'

   //=========================================================
   
   //Edge symbol: 'Index'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Poster}", "mouseover", function(sym, e) {
         sym.$("Poster").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster}", "mouseout", function(sym, e) {
         sym.$("Poster").css({"-webkit-transform":"scale(.16)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster2}", "mouseover", function(sym, e) {
         sym.$("Poster2").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster2}", "mouseout", function(sym, e) {
         sym.$("Poster2").css({"-webkit-transform":"scale(.16)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster5}", "mouseover", function(sym, e) {
         sym.$("Poster5").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster5}", "mouseout", function(sym, e) {
         sym.$("Poster5").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster4}", "mouseover", function(sym, e) {
         sym.$("Poster4").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster4}", "mouseout", function(sym, e) {
         sym.$("Poster4").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster3}", "mouseover", function(sym, e) {
         sym.$("Poster3").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster3}", "mouseout", function(sym, e) {
         sym.$("Poster3").css({"-webkit-transform":"scale(.16)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster17}", "mouseover", function(sym, e) {
         sym.$("Poster17").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster17}", "mouseout", function(sym, e) {
         sym.$("Poster17").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster16}", "mouseover", function(sym, e) {
         sym.$("Poster16").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster16}", "mouseout", function(sym, e) {
         sym.$("Poster16").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster15}", "mouseover", function(sym, e) {
         sym.$("Poster15").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster15}", "mouseout", function(sym, e) {
         sym.$("Poster15").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster14}", "mouseover", function(sym, e) {
         sym.$("Poster14").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster14}", "mouseout", function(sym, e) {
         sym.$("Poster14").css({"-webkit-transform":"scale(.14)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster13}", "mouseover", function(sym, e) {
         sym.$("Poster13").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster13}", "mouseout", function(sym, e) {
         sym.$("Poster13").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster12}", "mouseover", function(sym, e) {
         sym.$("Poster12").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster12}", "mouseout", function(sym, e) {
         sym.$("Poster12").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster11}", "mouseover", function(sym, e) {
         sym.$("Poster11").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster11}", "mouseout", function(sym, e) {
         sym.$("Poster11").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster10}", "mouseover", function(sym, e) {
         sym.$("Poster10").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster10}", "mouseout", function(sym, e) {
         sym.$("Poster10").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster9}", "mouseover", function(sym, e) {
         sym.$("Poster9").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster9}", "mouseout", function(sym, e) {
         sym.$("Poster9").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster8}", "mouseover", function(sym, e) {
         sym.$("Poster8").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster8}", "mouseout", function(sym, e) {
         sym.$("Poster8").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster7}", "mouseover", function(sym, e) {
         sym.$("Poster7").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster7}", "mouseout", function(sym, e) {
         sym.$("Poster7").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster6}", "mouseover", function(sym, e) {
         sym.$("Poster6").css({"-webkit-transform":"scale(.2)"}).fadeTo("slow",1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster6}", "mouseout", function(sym, e) {
         sym.$("Poster6").css({"-webkit-transform":"scale(.13)"}).fadeTo("slow",.5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close}", "click", function(sym, e) {
         sym.getComposition().getStage().$("Index").animate({"left":"-1024px"}, 500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S1");
         
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster2}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S2");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster3}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S3");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster4}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S4");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster5}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S5");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster6}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S6");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster7}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S7");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster8}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S8");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster9}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S9");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster10}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S10");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster11}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S11");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster12}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S12");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster13}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S13");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster14}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S14");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster15}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().stop("S15");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster16}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S16");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Poster17}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("S17");
         sym.getComposition().getStage().$("indexOpen").show();

      });
      //Edge binding end

   })("Index");
   //Edge symbol end:'Index'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

   //=========================================================
   
   //Edge symbol: 'Video_Frame'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close}", "click", function(sym, e) {
         sym.$("Vid1").empty();
         sym.$("Vid2").empty();
         sym.$("Vid3").empty();
         sym.getParentSymbol().$("Video_Frame").animate({"left":"1024", "-webkit-transition-duration":".5s"});
         

      });
      //Edge binding end

   })("Video_Frame");
   //Edge symbol end:'Video_Frame'

   //=========================================================
   
   //Edge symbol: 'Hourglass'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Hourglass");
   //Edge symbol end:'Hourglass'

   //=========================================================
   
   //Edge symbol: 'index'
   (function(symbolName) {   
   
   })("index");
   //Edge symbol end:'index'

   //=========================================================
   
   //Edge symbol: 'IndexItemSymbol'
   (function(symbolName) {   
   
   })("IndexItemSymbol");
   //Edge symbol end:'IndexItemSymbol'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2741850");