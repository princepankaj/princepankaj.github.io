$(document).ready(function() {
    var count = 0;
    var materialColors = ['#F44336', '#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C', '#FF8A80', '#FF5252',
        '#FF1744', '#D50000', '#E91E63', '#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F', '#FF80AB', '#FF4081',
        '#F50057', '#C51162', '#9C27B0', '#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC', '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C', '#EA80FC', '#E040FB',
        '#D500F9', '#AA00FF', '#673AB7', '#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#B388FF', '#7C4DFF',
        '#651FFF', '#6200EA', '#3F51B5', '#E8EAF6', '#C5CAE9', '#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#8C9EFF', '#536DFE',
        '#3D5AFE', '#304FFE', '#2196F3', '#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF',
        '#2979FF', '#2962FF', '#03A9F4', '#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#80D8FF', '#40C4FF',
        '#00B0FF', '#0091EA', '#00BCD4', '#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4', '#00ACC1', '#0097A7', '#00838F', '#006064', '#84FFFF', '#18FFFF',
        '#00E5FF', '#00B8D4', '#009688', '#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#A7FFEB', '#64FFDA',
        '#1DE9B6', '#00BFA5', '#4CAF50', '#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#43A047', '#388E3C', '#2E7D32', '#1B5E20', '#B9F6CA', '#69F0AE',
        '#00E676', '#00C853', '#8BC34A', '#F1F8E9', '#DCEDC8', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#7CB342', '#689F38', '#558B2F', '#33691E', '#CCFF90', '#B2FF59',
        '#76FF03', '#64DD17', '#CDDC39', '#F9FBE7', '#F0F4C3', '#E6EE9C', '#DCE775', '#D4E157', '#CDDC39', '#C0CA33', '#AFB42B', '#9E9D24', '#827717', '#F4FF81', '#EEFF41',
        '#C6FF00', '#AEEA00', '#FFEB3B', '#FFFDE7', '#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FDD835', '#FBC02D', '#F9A825', '#F57F17', '#FFFF8D', '#FFFF00',
        '#FFEA00', '#FFD600', '#FFC107', '#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000', '#FF8F00', '#FF6F00', '#FFE57F', '#FFD740',
        '#FFC400', '#FFAB00', '#FF9800', '#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100', '#FFD180', '#FFAB40',
        '#FF9100', '#FF6D00', '#FF5722', '#FBE9E7', '#FFCCBC', '#FFAB91', '#FF8A65', '#FF7043', '#FF5722', '#F4511E', '#E64A19', '#D84315', '#BF360C', '#FF9E80', '#FF6E40',
        '#FF3D00', '#DD2C00', '#795548', '#EFEBE9', '#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63', '#795548', '#6D4C41', '#5D4037', '#4E342E', '#3E2723', '#9E9E9E', '#FAFAFA',
        '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#9E9E9E', '#757575', '#616161', '#424242', '#212121', '#607D8B', '#ECEFF1', '#CFD8DC', '#B0BEC5', '#90A4AE', '#78909C',
        '#607D8B', '#546E7A', '#455A64', '#37474F', '#263238', '#000000', '#FFFFFF'
    ];
    var animations = ["bounce",
        "flash",
        "pulse",
        "rubberBand",
        "shake",
        "headShake",
        "swing",
        "tada",
        "wobble",
        "jello",
        "bounceIn",
        "bounceInDown",
        "bounceInLeft",
        "bounceInRight",
        "bounceInUp",
        "bounceOut",
        "bounceOutDown",
        "bounceOutLeft",
        "bounceOutRight",
        "bounceOutUp",
        "fadeIn",
        "fadeInDown",
        "fadeInDownBig",
        "fadeInLeft",
        "fadeInLeftBig",
        "fadeInRight",
        "fadeInRightBig",
        "fadeInUp",
        "fadeInUpBig",
        "fadeOut",
        "fadeOutDown",
        "fadeOutDownBig",
        "fadeOutLeft",
        "fadeOutLeftBig",
        "fadeOutRight",
        "fadeOutRightBig",
        "fadeOutUp",
        "fadeOutUpBig",
        "flip",
        "flipInX",
        "flipInY",
        "flipOutX",
        "flipOutY",
        "lightSpeedIn",
        "lightSpeedOut",
        "rotateIn",
        "rotateInDownLeft",
        "rotateInDownRight",
        "rotateInUpLeft",
        "rotateInUpRight",
        "rotateOut",
        "rotateOutDownLeft",
        "rotateOutDownRight",
        "rotateOutUpLeft",
        "rotateOutUpRight",
        "hinge",
        "jackInTheBox",
        "rollIn",
        "rollOut",
        "zoomIn",
        "zoomInDown",
        "zoomInLeft",
        "zoomInRight",
        "zoomInUp",
        "zoomOut",
        "zoomOutDown",
        "zoomOutLeft",
        "zoomOutRight",
        "zoomOutUp",
        "slideInDown",
        "slideInLeft",
        "slideInRight",
        "slideInUp",
        "slideOutDown",
        "slideOutLeft",
        "slideOutRight",
        "slideOutUp"

    ];
    var interval = window.setInterval(function() {
        changeBackgroundVideo();
    }, 500000);
    //     var interval2 = window.setInterval(function(){
    //        $("#my-video").animate({
    //   opacity: 0.1
    // }, 1000);},

    //     18000);

    function changeBackgroundVideo() {
        // $("#my-video").css({display:'none'});
        console.log("trace");
        $("#my-video").animate({
            opacity: 0.1
        }, 2000);
        setTimeout(function() {

            var video = document.getElementById('my-video');
            video.pause();
            var index = Math.floor(Math.random() * 22);
            console.log(index);
            var source = document.getElementById('video-source');
            source.setAttribute('src', 'Media/background-' + index + '.mp4');

            video.load();
            video.play();
            //  $("#my-video").css({display:'block'});

            $("#my-video").css('opacity', 0.1).animate({
                opacity: 1
            }, 1000);
        }, 2000);
    }

    var animationInterval;
    animate();
    //get the welcome msg element
    function animate() {
        var $all_msg = $('#welcome_msg');
        //get a list of letters from the welcome text
        var $wordList = $('#welcome_msg').text().split("");
        //clear the welcome text msg
        $('#welcome_msg').text("");
        //loop through the letters in the $wordList array
        $.each($wordList, function(idx, elem) {
            //create a span for the letter and set opacity to 0
            var newEL = $("<span/>").text(elem).css({
                opacity: 0
            });
            //append it to the welcome message
            newEL.appendTo($all_msg);
            //set the delay on the animation for this element
            newEL.delay(idx * 50);
            //animate the opacity back to full 1
            newEL.animate({
                opacity: 1
            }, 1000);
        });
    }
    //displayAwardsSection();
    function displayAwardsSection() {
        var elements = $('#awards ul li p');
        //get a list of letters from the welcome text
        // var $wordList = $('#awards').text().split("");
        //clear the welcome text msg
        //$('#awards').text("");
        //loop through the letters in the $wordList array
        $.each(elements, function(idx, element) {
            $(element).css("visibility", "visible");
            var index = Math.floor(Math.random() * materialColors.length);
            // $(element).css("color", materialColors[index]);
            var text = $(element).text().split("");

            $(element).text("");
            $.each(text, function(idx, ele) {
                
                //create a span for the letter and set opacity to 0
                var newEL = $("<span/>").text(ele).css({
                    opacity: 1
                });
                newEL.appendTo(element);
                // newEL.css('animation', 'zoomIn 20s');
                //animate the opacity back to full 1
                // newEL.animate({
                //     opacity: 1
                // }, 1000);
            });

        });
    }

    function hideEverything() {
        $('#welcome_msg').fadeOut();
        $('#expertise').fadeOut();
        $('#experience').fadeOut();
        $('#hobbies').fadeOut();
        $('#carousel').fadeOut();
        $('#carousel2').fadeOut();
        $('#awards').fadeOut();
        $('#awards-main-holder').fadeOut();
        if (animationInterval != undefined) {
            clearInterval(animationInterval);
        }
    }

    function animateHobbies() {
        var index = Math.floor(Math.random() * animations.length);

        var elements = $('#hobbiesList').children();
        $.each(elements, function(idx, element) {
            var x = Math.floor(Math.random() * 1600);

            var y = Math.floor(Math.random() * 500);
            //var randomColor = Math.floor(Math.random()*16777215).toString(16);
            var indexColor = Math.floor(Math.random() * materialColors.length);
            $(element).css({
                left: x,
                top: y,
                position: 'absolute',
                backgroundColor: materialColors[indexColor],
                animation: 'pulsenew',
                animationDuration: '3s',
                animationIterationCount: 'infinite',
                animationDirection: 'alternate'

            });
        });
    }

    function animateTools() {
        var index = Math.floor(Math.random() * animations.length);

        var elements = $('#tools-container').children();
        $.each(elements, function(idx, element) {
            var x = Math.floor(Math.random() * 1400);

            var y = Math.floor(Math.random() * 500);
            //var randomColor = Math.floor(Math.random()*16777215).toString(16);
            var indexColor = Math.floor(Math.random() * materialColors.length);
            $(element).css({
                //left: x,
                //top: y,
                //position:'absolute',
                //backgroundColor:materialColors[indexColor],
                //animation:'pulsenew',
                //animationDuration:'3s',
                //animationIterationCount:'infinite',
                //animationDirection: 'alternate'

            });
        });
    }
    
    $('#btnContainer li').click(function() {
        hideEverything();
        if (this.id === 'btnHome') {
            $('#welcome_msg').fadeIn();
        } else if (this.id === 'btnExpertise') {
            $('#expertise').fadeIn();
            $('#expertise-list').siblings().hide();
            $('#carousel').fadeIn();
            $('#carousel2').fadeIn();
            $('#pl-container').fadeIn();
        } else if (this.id === 'btnExperience') {
            $('#projectList').siblings().hide();
            $('#experience').fadeIn();
            $('#project-fg-desc').fadeIn();

        } else if (this.id === 'btnHobbies') {
            $('#hobbies').fadeIn();
            animateHobbies();
            if (animationInterval != undefined) {
                clearInterval(animationInterval);
            }
            animationInterval = window.setInterval(function() {
                animateHobbies();
            }, 10000);
        } else if (this.id === 'btnAwards') {
            $('#awards').fadeIn();
            $('#awards-main-holder').fadeIn();
            displayAwardsSection();

        }

    });
    $('#projectList li').click(function() {
        $(this).parent().siblings().hide();
        if (this.id === 'project-fg') {
            $('#project-fg-desc').fadeIn();
        } else if (this.id === 'project-cdp') {
            $('#project-cdp-desc').fadeIn();
        } else if (this.id === 'project-di') {
            $('#project-di-desc').fadeIn();
        } else if (this.id === 'project-ewm') {
            $('#project-ewm-desc').fadeIn();
        } else if (this.id === 'project-kiit') {
            $('#project-kiit-desc').fadeIn();
        }

    });
    $('#expertise-list li').click(function() {
        $(this).parent().siblings().hide();
        if (this.id === 'e-language') {
            $('#pl-container').fadeIn();
            $('#carousel').fadeIn();
            $('#carousel2').fadeIn();
        } else if (this.id === 'e-os') {
            $('#os-container').fadeIn();
            $('#carousel').fadeIn();
            $('#carousel2').fadeIn();
        } else if (this.id === 'e-tools') {
            $('#tools-container').fadeIn();
            $('#carousel').fadeOut();
            $('#carousel2').fadeOut();
            if (animationInterval != undefined) {
                clearInterval(animationInterval);
            }
            animationInterval = window.setInterval(function() {
                animateTools();
            }, 10000);
            // animateTools();       
        } else if (this.id === 'e-framework') {
            $('#frameworks-container').fadeIn();
            $('#carousel').fadeIn();
            $('#carousel2').fadeIn();
        }

    });


    $('#welcome_msg').click(function() {
        count++;
        var index = Math.floor(Math.random() * animations.length);
        if (count == 3) {
            count = 0;
            animate();
            return;

        }
        var elements = $(this).children();
        $.each(elements, function(idx, element) {
            var x = Math.floor(Math.random() * 1800);

            var y = Math.floor(Math.random() * 600);
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            $(element).css({
                left: x,
                top: y,
                position: 'absolute',
                color: randomColor,
                /* animation:animations[index],
                animationDuration:'8s',
                animationIterationCount: '4' */

            });

        });
    });

});