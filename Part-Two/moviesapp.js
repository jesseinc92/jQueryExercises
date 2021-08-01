// get inputs and create new ratings card
$('form').on('submit', (e) => {
    e.preventDefault();

    let $title = $('input').eq(0).val();
    let $rating = $('input').eq(1).val();

    let $ratingPanel = $('<div class="rating-card"><button>X</button><h2>' + $title + '</h2><h3>' + $rating + '</h3></div>');
    $ratingPanel.appendTo('#ratings-container');

    $('input').eq(0).val('');
    $('input').eq(1).val('');
});

// remove card with event delegation
$('#ratings-container').on('click', 'button', function() {
    $(this).closest('div').remove();
});

// TODO: Allow users to sort alphabetically