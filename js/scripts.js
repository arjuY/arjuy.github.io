/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {

    // Show current year
    $("#current-year").text(new Date().getFullYear());

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// let spots = [];
// let hue = 0;

// const mouse = {
//     x:undefined,
//     y:undefined
// }

// canvas.addEventListener('mousemove', function(event) {
// mouse.x = event.x
// mouse.y = event.y
// for (let i = 0; i<3; i++){
//     spots.push(new Particle())
// }
// });

// class Particle{
//     constructor() {
//         this.x = mouse.x;
//         this.y = mouse.y;
//         this.size = Math.random() * 2 + 0.1
//         this.speedX = Math.random() * 2 - 1
//         this.speedY = Math.random() * 2 - 1
//         this.color = 'hsl('+ hue + ', 100%, 50%)';
//     }
//     update(){
//         this.x += this.speedX;
//         this.y += this.speedY;
//         if(this.size > 0.1) this.size -= 0.03
//     }

//     draw(){
//         ctx.fillstyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
//     }
// }

// function handleParticle() {
//     for(let i=0;i < spots.length;i++){
//         spots[i].update()
//         spots[i].draw()
//         for(let j=i;j < spots.length;j++){
//             const dx = spots[i].x - spots[j].x;
//             const dy = spots[i].y - spots[j].y;
//             const distance = Math.sqrt(dx * dx + dy * dy)
//             if(distance < 90){
//                 ctx.beginPath();
//                 ctx.strokeStyle = spots[i].color;
//                 ctx.lineWidth - spots[i].size / 10;
//                 ctx.moveTo(spots[i].x, spots[i].y);
//                 ctx.lineTo(spots[i].x, spots[i].y);
//                 ctx.stroke();
//             }
//         }
//         if (spots[i].size <= 0.3) {
//             spots.splice(i , 1); i--;
//         }
//     }
// }

// function animate() {

//     ctx.clearRect(0,0, canvas.width, canvas.height);
//     handleParticle();
//     hue++;
//     requestAnimationFrame(animate);
// }

// window.addEventListener('resize',function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     // init();
// })
// window.addEventListener('mouseout',function(){
//     mouse.x = undefined;
//     mouse.y = undefined;
    
// })
// animate()
