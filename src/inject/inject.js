
/**
 * Hides the side bar counts
 **/
function hideUISideCounts() {
	// Get all elements that have a count associated with it.
	var countElms = $('.uiSideNavCount');

	// Clear counts for each
	for (var i = 0; i < countElms.length; i++) {
		countElms[i].remove();
	}

}

/**
 * Hides the Trending Topics paglet
 **/
function hideTrendingTopics() {
	var trending = $('[id^=pagelet_trending_tags_and_topics]');
	if (trending) trending.remove();

}


/**
 * Based on Neal Wu's Kill News Feed!
 **/
function blockAndDisplay() {
    var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');

    feed.children().remove();
    $('.ticker_stream').remove();
    $('.ego_column').remove();
}

// Repeats a function over time
function repeatFunction(funcs, delay) {
    for (var i = 0; i < funcs.length; i++) {
			funcs[i]();
		}
    setTimeout(function() {
        repeatFunction(funcs, delay);
    }, delay);
}

// Start Repeating
repeatFunction([blockAndDisplay, hideUISideCounts, hideTrendingTopics], 100);
