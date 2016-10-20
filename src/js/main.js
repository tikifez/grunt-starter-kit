// This is the main function which methods should be called through.
;
(function($)
{

    $(document).ready(function()
    {
        // jquery triggers go in here
        
        // remove loading placeholder when page loaded
        $('#preload').fadeOut('slow', function()
        {
            $('#preload').css('remove');
        });
    });

})(jQuery);
