define([
	"Ember",
	"config",
	"nwjs/nwGui",
	"nwjs/nwWindow",
	"utils/node/platform",
	"gui/selectable",
	"gui/smoothscroll"
], function(
	Ember,
	config,
	nwGui,
	nwWindow,
	platform,
	guiSelectable,
	guiSmoothscroll
) {

	var get = Ember.get;
	var getOwner = Ember.getOwner;
	var alias = Ember.computed.alias;
	var reTheme = /^theme-/;


	function setupRefresh( controller ) {
		// OSX has its own refresh logic in the menubar module
		if ( platform.isDarwin ) { return; }

		document.documentElement.addEventListener( "keyup", function( e ) {
			var f5    = e.keyCode === 116;
			var ctrlR = e.keyCode ===  82 && e.ctrlKey === true;
			if ( f5 || ctrlR ) {
				controller.send( "refresh" );
			}
		}, false );
	}


	return Ember.Component.extend({
		settings: Ember.inject.service(),

		tagName: "body",
		classNames: [ "wrapper", "vertical" ],

		themes: config.themes[ "themes" ],
		theme: alias( "settings.content.gui_theme" ),

		themeObserver: function() {
			var themes = get( this, "themes" );
			var theme  = get( this, "theme" );

			if ( themes.indexOf( theme ) === -1 ) {
				theme = "default";
			}

			var list = document.documentElement.classList;
			[].forEach.call( list, function( name ) {
				if ( !reTheme.test( name ) ) { return; }
				list.remove( name );
			});

			list.add( "theme-" + theme );
		}.observes( "themes", "theme" ).on( "init" ),

		smoothscrollObserver: function() {
			if ( get( this, "settings.content.gui_smoothscroll" ) ) {
				guiSmoothscroll.enable();
			} else {
				guiSmoothscroll.disable();
			}
		}.observes( "settings.content.gui_smoothscroll" ).on( "didInsertElement" ),


		willInsertElement: function() {
			document.documentElement.removeChild( document.body );
		},

		didInsertElement: function() {
			var controller = getOwner( this ).lookup( "controller:application" );

			guiSelectable();
			setupRefresh( controller );
		}
	});

});
