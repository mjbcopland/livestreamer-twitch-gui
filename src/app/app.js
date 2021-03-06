define(function( require ) {

	var Ember = require( "Ember" );
	var DS    = require( "EmberData" );

	var nwWindow = require( "nwjs/nwWindow" );

	require( "initializers/initializers" );


	return Ember.Application.create({

		// Configuration
		rootElement: document.documentElement,


		// Routing
		Router: require( "router" ),


		// Store
		ApplicationAdapter: require( "store/TwitchAdapter" ),
		BooleanTransform: require( "store/BooleanTransform" ),


		// Models: memory
		Livestreamer: require( "models/Livestreamer" ),
		LivestreamerAdapter: DS.Adapter,


		// Models: localstorage
		Window: require( "models/localstorage/Window" ),
		WindowAdapter: DS.LSAdapter.extend({ namespace: "window" }),
		WindowSerializer: DS.LSSerializer,
		Settings: require( "models/localstorage/Settings" ),
		SettingsAdapter: DS.LSAdapter.extend({ namespace: "settings" }),
		SettingsSerializer: DS.LSSerializer,
		Versioncheck: require( "models/localstorage/Versioncheck" ),
		VersioncheckAdapter: DS.LSAdapter.extend({ namespace: "versioncheck" }),
		VersioncheckSerializer: DS.LSSerializer,
		Auth: require( "models/localstorage/Auth" ),
		AuthAdapter: DS.LSAdapter.extend({ namespace: "auth" }),
		AuthSerializer: DS.LSSerializer,
		Search: require( "models/localstorage/Search" ),
		SearchAdapter: DS.LSAdapter.extend({ namespace: "search" }),
		SearchSerializer: DS.LSSerializer,
		ChannelSettings: require( "models/localstorage/ChannelSettings" ),
		ChannelSettingsAdapter: DS.LSAdapter.extend({ namespace: "channelsettings" }),
		ChannelSettingsSerializer: DS.LSSerializer,


		// Models: github
		GithubReleases: require( "models/github/Releases" ),
		GithubReleasesAdapter: require( "store/GithubAdapter" ),
		GithubReleasesSerializer: require( "models/github/ReleasesSerializer" ),


		// Models: twitch
		TwitchToken: require( "models/twitch/Token" ),
		TwitchTokenSerializer: require( "models/twitch/TokenSerializer" ),

		TwitchGame: require( "models/twitch/Game" ),
		TwitchGameSerializer: require( "models/twitch/GameSerializer" ),
		TwitchStream: require( "models/twitch/Stream" ),
		TwitchStreamSerializer: require( "models/twitch/StreamSerializer" ),
		TwitchChannel: require( "models/twitch/Channel" ),
		TwitchChannelSerializer: require( "models/twitch/ChannelSerializer" ),
		TwitchImage: require( "models/twitch/Image" ),
		TwitchImageSerializer: require( "models/twitch/ImageSerializer" ),

		TwitchGamesTop: require( "models/twitch/GamesTop" ),
		TwitchGamesTopSerializer: require( "models/twitch/GamesTopSerializer" ),
		TwitchStreamsSummary: require( "models/twitch/StreamsSummary" ),
		TwitchStreamsSummarySerializer: require( "models/twitch/StreamsSummarySerializer" ),
		TwitchStreamsFeatured: require( "models/twitch/StreamsFeatured" ),
		TwitchStreamsFeaturedSerializer: require( "models/twitch/StreamsFeaturedSerializer" ),

		TwitchStreamsFollowed: require( "models/twitch/StreamsFollowed" ),
		TwitchStreamsFollowedSerializer: require( "models/twitch/StreamsFollowedSerializer" ),
		TwitchStreamsHosted: require( "models/twitch/StreamsHosted" ),
		TwitchStreamsHostedSerializer: require( "models/twitch/StreamsHostedSerializer" ),
		TwitchChannelsFollowed: require( "models/twitch/ChannelsFollowed" ),
		TwitchChannelsFollowedSerializer: require( "models/twitch/ChannelsFollowedSerializer" ),
		TwitchGamesFollowed: require( "models/twitch/GamesFollowed" ),
		TwitchGamesFollowedSerializer: require( "models/twitch/GamesFollowedSerializer" ),
		TwitchGamesLiveFollowed: require( "models/twitch/GamesLiveFollowed" ),
		TwitchGamesLiveFollowedSerializer: require( "models/twitch/GamesLiveFollowedSerializer" ),

		TwitchSearchGame: require( "models/twitch/SearchGame" ),
		TwitchSearchGameSerializer: require( "models/twitch/SearchGameSerializer" ),
		TwitchSearchStream: require( "models/twitch/SearchStream" ),
		TwitchSearchStreamSerializer: require( "models/twitch/SearchStreamSerializer" ),
		TwitchSearchChannel: require( "models/twitch/SearchChannel" ),
		TwitchSearchChannelSerializer: require( "models/twitch/SearchChannelSerializer" ),

		TwitchUserFollowsChannel: require( "models/twitch/UserFollowsChannel" ),
		TwitchUserFollowsChannelSerializer: require( "models/twitch/UserFollowsChannelSerializer" ),
		TwitchUserFollowsGame: require( "models/twitch/UserFollowsGame" ),
		TwitchUserFollowsGameAdapter: require( "models/twitch/UserFollowsGameAdapter" ),
		TwitchUserFollowsGameSerializer: require( "models/twitch/UserFollowsGameSerializer" ),
		TwitchUserSubscription: require( "models/twitch/UserSubscription" ),
		TwitchUserSubscriptionSerializer: require( "models/twitch/UserSubscriptionSerializer" ),

		TwitchTicket: require( "models/twitch/Ticket" ),
		TwitchTicketSerializer: require( "models/twitch/TicketSerializer" ),
		TwitchProduct: require( "models/twitch/Product" ),
		TwitchProductSerializer: require( "models/twitch/ProductSerializer" ),
		TwitchProductEmoticon: require( "models/twitch/ProductEmoticon" ),
		TwitchProductEmoticonSerializer: require( "models/twitch/ProductEmoticonSerializer" ),

		TwitchChannelPanel: require( "models/twitch/ChannelPanel" ),
		TwitchChannelPanelSerializer: require( "models/twitch/ChannelPanelSerializer" ),
		TwitchChannelPanelItem: require( "models/twitch/ChannelPanelItem" ),
		TwitchChannelPanelItemSerializer: require( "models/twitch/ChannelPanelItemSerializer" ),


		// Helpers
		IsEqualHelper: require( "helpers/IsEqualHelper" ),
		IsNullHelper: require( "helpers/IsNullHelper" ),
		IsGtHelper: require( "helpers/IsGtHelper" ),
		IsGteHelper: require( "helpers/IsGteHelper" ),
		BoolNotHelper: require( "helpers/BoolNotHelper" ),
		BoolAndHelper: require( "helpers/BoolAndHelper" ),
		BoolOrHelper: require( "helpers/BoolOrHelper" ),
		MathAddHelper: require( "helpers/MathAddHelper" ),
		MathSubHelper: require( "helpers/MathSubHelper" ),
		MathMulHelper: require( "helpers/MathMulHelper" ),
		MathDivHelper: require( "helpers/MathDivHelper" ),
		FormatViewersHelper: require( "helpers/FormatViewersHelper" ),
		FormatTimeHelper: require( "helpers/FormatTimeHelper" ),
		HoursFromNowHelper: require( "helpers/HoursFromNowHelper" ),
		TimeFromNowHelper: require( "helpers/TimeFromNowHelper" ),
		GetParamHelper: require( "helpers/GetParamHelper" ),
		HasOwnPropertyHelper: require( "helpers/HasOwnPropertyHelper" ),


		// Services
		SettingsService: require( "services/SettingsService" ),
		AuthService: require( "services/AuthService" ),
		ModalService: require( "services/ModalService" ),
		VersioncheckService: require( "services/VersioncheckService" ),
		LivestreamerService: require( "services/LivestreamerService" ),
		NotificationService: require( "services/NotificationService" ),
		ChatService: require( "services/ChatService" ),


		// Application
		ApplicationRoute: require( "routes/ApplicationRoute" ),
		ApplicationController: require( "controllers/ApplicationController" ),
		ApplicationView: require( "components/ApplicationComponent" ),
		ApplicationTemplate: require( "hbs!templates/Application" ),

		LoadingRoute: require( "routes/LoadingRoute" ),
		LoadingTemplate: require( "hbs!templates/Loading" ),

		ErrorRoute: require( "routes/ErrorRoute" ),
		ErrorTemplate: require( "hbs!templates/Error" ),

		IndexRoute: require( "routes/IndexRoute" ),


		// Components
		EmbeddedLinksComponent: require( "components/link/EmbeddedLinksComponent" ),
		ExternalLinkComponent: require( "components/link/ExternalLinkComponent" ),
		LinkComponent: require( "components/link/LinkComponent" ),
		DocumentationLinkComponent: require( "components/link/DocumentationLinkComponent" ),

		CheckBoxComponent: require( "components/form/CheckBoxComponent" ),
		RadioBtnComponent: require( "components/form/RadioBtnComponent" ),
		RadioBtnsComponent: require( "components/form/RadioBtnsComponent" ),
		DropDownComponent: require( "components/form/DropDownComponent" ),
		FileSelectComponent: require( "components/form/FileSelectComponent" ),
		TextFieldComponent: require( "components/form/TextFieldComponent" ),

		FollowChannelComponent: require( "components/button/FollowChannelComponent" ),
		FollowGameComponent: require( "components/button/FollowGameComponent" ),
		FormButtonComponent: require( "components/button/FormButtonComponent" ),
		OpenChatComponent: require( "components/button/OpenChatComponent" ),
		ShareChannelComponent: require( "components/button/ShareChannelComponent" ),
		SubscribeChannelComponent: require( "components/button/SubscribeChannelComponent" ),
		TwitchEmotesComponent: require( "components/button/TwitchEmotesComponent" ),

		ModalBodyComponent: require( "components/modal/ModalBodyComponent" ),
		ModalChangelogComponent: require( "components/modal/ModalChangelogComponent" ),
		ModalConfirmComponent: require( "components/modal/ModalConfirmComponent" ),
		ModalFirstrunComponent: require( "components/modal/ModalFirstrunComponent" ),
		ModalFooterComponent: require( "components/modal/ModalFooterComponent" ),
		ModalHeaderComponent: require( "components/modal/ModalHeaderComponent" ),
		ModalLivestreamerComponent: require( "components/modal/ModalLivestreamerComponent" ),
		ModalLogComponent: require( "components/modal/ModalLogComponent" ),
		ModalNewreleaseComponent: require( "components/modal/ModalNewreleaseComponent" ),
		ModalQuitComponent: require( "components/modal/ModalQuitComponent" ),

		ContentListComponent: require( "components/list/ContentListComponent" ),
		ChannelItemComponent: require( "components/list/ChannelItemComponent" ),
		GameItemComponent: require( "components/list/GameItemComponent" ),
		HeadlineTotalsComponent: require( "components/list/HeadlineTotalsComponent" ),
		InfiniteScrollComponent: require( "components/list/InfiniteScrollComponent" ),
		StreamItemComponent: require( "components/list/StreamItemComponent" ),
		SubscriptionItemComponent: require( "components/list/SubscriptionItemComponent" ),

		QuickBarComponent: require( "components/quick/QuickBarComponent" ),
		QuickBarHomepageComponent: require( "components/quick/QuickBarHomepageComponent" ),
		QuickBarRandomStreamComponent: require( "components/quick/QuickBarRandomStreamComponent" ),

		ChannelPanelsComponent: require( "components/channel/ChannelPanelsComponent" ),
		ChannelPanelItemComponent: require( "components/channel/ChannelPanelItemComponent" ),

		StatsRowComponent: require( "components/stream/StatsRowComponent" ),
		StreamPresentationComponent: require( "components/stream/StreamPresentationComponent" ),
		StreamPreviewImageComponent: require( "components/stream/StreamPreviewImageComponent" ),

		FlagIconComponent: require( "components/FlagIconComponent" ),
		LangFilterComponent: require( "components/LangFilterComponent" ),
		LoadingSpinnerComponent: require( "components/LoadingSpinnerComponent" ),
		PreviewImageComponent: require( "components/PreviewImageComponent" ),
		SearchBarComponent: require( "components/SearchBarComponent" ),
		SelectableTextComponent: require( "components/SelectableTextComponent" ),

		SettingsRowComponent: require( "components/SettingsRowComponent" ),
		SettingsChannelItemComponent: require( "components/list/SettingsChannelItemComponent" ),
		SettingsSubmitComponent: require( "components/SettingsSubmitComponent" ),


		// Content
		FeaturedRoute: require( "routes/FeaturedRoute" ),
		FeaturedController: require( "controllers/FeaturedController" ),
		FeaturedTemplate: require( "hbs!templates/Featured" ),

		WatchingRoute: require( "routes/WatchingRoute" ),
		WatchingController: require( "controllers/WatchingController" ),
		WatchingTemplate: require( "hbs!templates/Watching" ),

		SearchRoute: require( "routes/SearchRoute" ),
		SearchController: require( "controllers/SearchController" ),
		SearchTemplate: require( "hbs!templates/Search" ),

		GamesLoadingRoute: require( "routes/LoadingRoute" ),
		GamesLoadingTemplate: require( "hbs!templates/Loading" ),
		GamesIndexRoute: require( "routes/GamesIndexRoute" ),
		GamesIndexController: require( "controllers/GamesIndexController" ),
		GamesIndexTemplate: require( "hbs!templates/games/GamesIndex" ),
		GamesGameRoute: require( "routes/GamesGameRoute" ),
		GamesGameController: require( "controllers/GamesGameController" ),
		GamesGameTemplate: require( "hbs!templates/games/GamesGame" ),

		ChannelsRoute: require( "routes/ChannelsRoute" ),
		ChannelsController: require( "controllers/ChannelsController" ),
		ChannelsTemplate: require( "hbs!templates/Channels" ),

		ChannelRoute: require( "routes/ChannelRoute" ),
		ChannelController: require( "controllers/ChannelController" ),
		ChannelTemplate: require( "hbs!templates/channel/Channel" ),
		ChannelLoadingRoute: require( "routes/LoadingRoute" ),
		ChannelLoadingTemplate: require( "hbs!templates/Loading" ),
		ChannelIndexRoute: require( "routes/ChannelIndexRoute" ),
		ChannelIndexController: require( "controllers/ChannelIndexController" ),
		ChannelIndexTemplate: require( "hbs!templates/channel/ChannelIndex" ),
		ChannelSettingsRoute: require( "routes/ChannelSettingsRoute" ),
		ChannelSettingsController: require( "controllers/ChannelSettingsController" ),
		ChannelSettingsTemplate: require( "hbs!templates/channel/ChannelSettings" ),

		UserLoadingRoute: require( "routes/LoadingRoute" ),
		UserLoadingTemplate: require( "hbs!templates/Loading" ),
		UserIndexRoute: require( "routes/UserIndexRoute" ),
		UserIndexController: require( "controllers/UserIndexController" ),
		UserIndexTemplate: require( "hbs!templates/user/UserIndex" ),
		UserAuthRoute: require( "routes/UserAuthRoute" ),
		UserAuthController: require( "controllers/UserAuthController" ),
		UserAuthTemplate: require( "hbs!templates/user/UserAuth" ),
		UserSubscriptionsRoute: require( "routes/UserSubscriptionsRoute" ),
		UserSubscriptionsTemplate: require( "hbs!templates/user/UserSubscriptions" ),
		UserFollowedStreamsRoute: require( "routes/UserFollowedStreamsRoute" ),
		UserFollowedStreamsTemplate: require( "hbs!templates/user/UserFollowedStreams" ),
		UserHostedStreamsRoute: require( "routes/UserHostedStreamsRoute" ),
		UserHostedStreamsTemplate: require( "hbs!templates/user/UserHostedStreams" ),
		UserFollowedChannelsRoute: require( "routes/UserFollowedChannelsRoute" ),
		UserFollowedChannelsController: require( "controllers/UserFollowedChannelsController" ),
		UserFollowedChannelsTemplate: require( "hbs!templates/user/UserFollowedChannels" ),
		UserFollowedGamesRoute: require( "routes/UserFollowedGamesRoute" ),
		UserFollowedGamesController: require( "controllers/UserFollowedGamesController" ),
		UserFollowedGamesTemplate: require( "hbs!templates/user/UserFollowedGames" ),

		SettingsRoute: require( "routes/SettingsRoute" ),
		SettingsController: require( "controllers/SettingsController" ),
		SettingsTemplate: require( "hbs!templates/settings/Settings" ),
		SettingsIndexRoute: require( "routes/SettingsIndexRoute" ),
		SettingsMainRoute: require( "routes/SettingsSubmenuRoute" ),
		SettingsMainTemplate: require( "hbs!templates/settings/SettingsMain" ),
		SettingsStreamsRoute: require( "routes/SettingsSubmenuRoute" ),
		SettingsStreamsTemplate: require( "hbs!templates/settings/SettingsStreams" ),
		SettingsLivestreamerRoute: require( "routes/SettingsSubmenuRoute" ),
		SettingsLivestreamerTemplate: require( "hbs!templates/settings/SettingsLivestreamer" ),
		SettingsPlayerRoute: require( "routes/SettingsSubmenuRoute" ),
		SettingsPlayerTemplate: require( "hbs!templates/settings/SettingsPlayer" ),
		SettingsChatRoute: require( "routes/SettingsSubmenuRoute" ),
		SettingsChatTemplate: require( "hbs!templates/settings/SettingsChat" ),
		SettingsGuiRoute: require( "routes/SettingsSubmenuRoute" ),
		SettingsGuiTemplate: require( "hbs!templates/settings/SettingsGui" ),
		SettingsListsRoute: require( "routes/SettingsSubmenuRoute" ),
		SettingsListsTemplate: require( "hbs!templates/settings/SettingsLists" ),
		SettingsLanguagesRoute: require( "routes/SettingsSubmenuRoute" ),
		SettingsLanguagesTemplate: require( "hbs!templates/settings/SettingsLanguages" ),
		SettingsNotificationsRoute: require( "routes/SettingsSubmenuRoute" ),
		SettingsNotificationsTemplate: require( "hbs!templates/settings/SettingsNotifications" ),
		SettingsChannelsRoute: require( "routes/SettingsChannelsRoute" ),
		SettingsChannelsController: require( "controllers/SettingsChannelsController" ),
		SettingsChannelsTemplate: require( "hbs!templates/settings/SettingsChannels" ),

		AboutController: require( "controllers/AboutController" ),
		AboutTemplate: require( "hbs!templates/About" ),


		// ready event
		ready: function ready() {
			nwWindow.emit( "ready" );
		},

		toString: function() { return "App"; }

	});

});
