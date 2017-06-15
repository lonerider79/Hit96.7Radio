	function schedule()
	{
		dhxWins = new dhtmlXWindows();
		dhxWins.setImagePath("codebase/imgs/");
		dhxWins.setSkin("dhx_black");
		win = dhxWins.createWindow("sched",250,250,400,200);
		win.button("close").show();
		win.button("park").hide();
		win.centerOnScreen();
		win.setModal(true);
		win.setText("Radio Program Schedule");
		win.attachURL("http://www.hit967.com/radio-schedule/");
		win.bringToTop();
		win.maximize();		
	};
	function showsite()
	{
		action_url="http://www.hit967.com/";
		chrome.tabs.create({ url: action_url });
	};
