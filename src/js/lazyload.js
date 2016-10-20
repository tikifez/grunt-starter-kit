(function($)
{
    $(function()
    {
        $('#gallery .lazy').Lazy(
        {
            // your configuration goes here
            scrollDirection: 'vertical',
            effect: 'fadeIn',
            delay: 200,
            onError: function(element)
            {
                console.log('error loading ' + element.data('src'));
            }
        });
        $('#cast .lazy').Lazy(
        {
            // your configuration goes here
            scrollDirection: 'vertical',
            effect: 'fadeIn',
            delay: 800,
            onError: function(element)
            {
                console.log('error loading ' + element.data('src'));
            }
        });
        $('#filmmakers .lazy').Lazy(
        {
            // your configuration goes here
            scrollDirection: 'vertical',
            effect: 'fadeIn',
            delay: 1600,
            onError: function(element)
            {
                console.log('error loading ' + element.data('src'));
            }
        });
    });
})(jQuery);
