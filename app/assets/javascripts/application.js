// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery.min
//= require popper.min
//= require bootstrap.min
//= require jquery.flexslider-min
//= require jquery.fancybox.pack
//= require retina.min
//= require modernizr
//= require main
//= require rails-ujs
//= require perfect-scrollbar.jquery.min
//= require_tree .
//= require_self


var $loading = $('#loading-image').hide();
//Attach the event handler to any element
$(document)
    .ajaxStart(function () {
        //ajax request went so show the loading image
        $loading.show();
    })
    .ajaxStop(function () {
        //got response so hide the loading image
        $loading.hide();
    });
