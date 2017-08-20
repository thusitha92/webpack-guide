
(function(){
    'use-strict';

    var generateRandomRGB = function(){
        return Math.floor((Math.random() * 255));
    };

    var render = function(){
        document.getElementById("btnBackgroundChanger").addEventListener('click', function(){
            document.body.style.background = "rgb(" +
            generateRandomRGB()+  ", "+
            generateRandomRGB()+", "+
            generateRandomRGB()+ ")";
        });
    }();
    
}())

