jq('#slideshow_3').cycle({
    fx: 'uncover',
    speed:  700,
    timeout: 5000,
    pager: '.ss3_wrapper .slideshow_paging',
    pagerAnchorBuilder: pager_create,
    prev: '.ss3_wrapper .slideshow_prev',
    next: '.ss3_wrapper .slideshow_next'
});
jq('.ss3_wrapper').mouseenter(function(){
    jq('#slideshow_3').cycle('pause');
}).mouseleave(function(){
    jq('#slideshow_3').cycle('resume');
});

jq('#portal_wrapper1').cycle({
    fx: 'uncover',
    speed:  700,
    timeout: 5000,
    pager: '.portal_wrapper1 .slideshow_paging',
    pagerAnchorBuilder: pager_create,
    prev: '.portal_wrapper1 .slideshow_prev',
    next: '.portal_wrapper1 .slideshow_next',
});
jq('.portal_wrapper1').mouseenter(function(){
    jq('#portal_wrapper1').cycle('pause');
}).mouseleave(function(){
    jq('#portal_wrapper1').cycle('resume');
});

jq('#portal_wrapper2').cycle({
    fx: 'uncover',
    speed:  700,
    timeout: 5000,
    pager: '.portal_wrapper2 .slideshow_paging',
    pagerAnchorBuilder: pager_create,
    prev: '.portal_wrapper2 .slideshow_prev',
    next: '.portal_wrapper2 .slideshow_next',
    before: function(currSlideElement, nextSlideElement) {
        var data = jq('.data', jq(nextSlideElement)).html();
        jq('.portal_wrapper2 .slideshow_box .data').fadeOut(300, function(){
            jq('.portal_wrapper2 .slideshow_box .data').remove();
            jq('<div class="data">'+data+'</div>').hide().appendTo('.portal_wrapper2 .slideshow_box').fadeIn(600);
        });
    }
});
jq('.portal_wrapper2').mouseenter(function(){
    jq('#portal_wrapper2').cycle('pause');
}).mouseleave(function(){
    jq('#portal_wrapper2').cycle('resume');
});

jq('#portal_wrapper3').cycle({
    fx: 'uncover',
    speed:  700,
    timeout: 5000,
    pager: '.portal_wrapper3 .slideshow_paging',
    pagerAnchorBuilder: pager_create,
    prev: '.portal_wrapper3 .slideshow_prev',
    next: '.portal_wrapper3 .slideshow_next',
    before: function(currSlideElement, nextSlideElement) {
        var data = jq('.data', jq(nextSlideElement)).html();
        jq('.portal_wrapper3 .slideshow_box .data').fadeOut(300, function(){
            jq('.portal_wrapper3 .slideshow_box .data').remove();
            jq('<div class="data">'+data+'</div>').hide().appendTo('.portal_wrapper3 .slideshow_box').fadeIn(600);
        });
    }
});
jq('.portal_wrapper3').mouseenter(function(){
    jq('#portal_wrapper3').cycle('pause');
}).mouseleave(function(){
    jq('#portal_wrapper3').cycle('resume');
});


jq('#portal_wrapper4').cycle({
    fx: 'uncover',
    speed:  700,
    timeout: 5000,
    pager: '.portal_wrapper4 .slideshow_paging',
    pagerAnchorBuilder: pager_create,
    prev: '.portal_wrapper4 .slideshow_prev',
    next: '.portal_wrapper4 .slideshow_next',
    before: function(currSlideElement, nextSlideElement) {

        var data = jq('.data', jq(nextSlideElement)).html();

        jq('.portal_wrapper4 .slideshow_box .data').fadeOut(300, function(){

            jq('.portal_wrapper4 .slideshow_box .data').remove();

            jq('<div class="data">'+data+'</div>').hide().appendTo('.portal_wrapper4 .slideshow_box').fadeIn(600);

        });

    }
});
jq('.portal_wrapper4').mouseenter(function(){
    jq('#portal_wrapper4').cycle('pause');
}).mouseleave(function(){
    jq('#portal_wrapper4').cycle('resume');
});













jq('a[href="#"]').click(function(event){
    event.preventDefault();
});
function pager_create(id, slide) {
    var thumb = jq('.thumb', jq(slide)).html();
    var title = jq('h4 a', jq(slide)).html();
    var add_first = (id==0)?' class="first"':'';
    return '<li><a href="#" title="'+title+'"'+add_first+'>'+thumb+'</a></li>';
}