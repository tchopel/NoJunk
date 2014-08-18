/*

1. need to learn about iframe
2. html action link vs html ajax link
3. what is this @html helper method
4. some keywords of intrest: 
    a.@html.partial
    b.@html.actionLink(a,b,c,new {sortBy = "video: url "}, null)
    c.@html.display();
    d. httpGet and httpPost attribute, how do they work
    e. @html.partials


5. kenjo.mvc in reference and kendo.js for client side, how do they integrate, @html.kendo ? 
6. ajax to different domain, coz i need to get code from github
7. code highlighting, good example is the one in css tricks website, they used pre on the code sample 
8. request object in asp.net mvc, and global.asax and web.config and packages.config and another web.config inside shared folder
9. how to debug js. inside asp.net mvc
10. learn how to use intern explorer dev tools
11. yahoo.com, mangareader.net, nwanime.com, bbc.com, hotmail.com, gmail.com, google.com, 




To Do list
1. need to learn more about pseudo elements, specially :before and :after keywords. they can be useful for putting icons before links
    instead of putting images in the background.  link of interest: http://nicolasgallagher.com/pure-css-gui-icons/. 
2. 




***********************index.js**************
    $('#a, #ui-tabs-2, #ui-tabs-3, #ui-tabs-4, #ui-tabs-5, #ui-tabs-6, #ui-tabs-1').height(windowHeight);
    $('#mainTab').css('min-height', windowHeight + 'px');
    $('#slidr-home').css('min-height', windowHeight * .60 + 'px');

    slidr.create('slidr-home', {
        breadcrumbs: true,
        controls: 'corner',
        fade: false,
        keyboard: true,
        overflow: false,
        touch: true,
        transition: 'cube'
    }).start();


************************index.css******************
#slidr{
    width: 50%;
    margin: 0 auto;
}
#slidr>div {
    width: 100%;
    height: 100%;
}
.demo-slides div{width:100%;padding: 5px; height:100%}


******************index.cshtml*********************
    <div id="mainTab">
        <div id="slidr">
            <div id="slidr-home" class="demo-slides">
                <div style="background-color: #2aca76;" data-slidr="one">@{Html.RenderPartial("projectChat");}</div>
                <div style="background-color: #69bfe9;" data-slidr="two">@{Html.RenderPartial("projectBell");}</div>
                <div style="background-color: #fa7979;" data-slidr="three">@{Html.RenderPartial("projectRobotic");}</div>
                <div style="background-color: #a685ca;" data-slidr="four">@{Html.RenderPartial("Resume");}</div>
                <div style="background-color: #fee687;" data-slidr="five">@{Html.RenderPartial("Resume2");}</div>
                <div style="background-color: #ed956e;" data-slidr="six">@{Html.RenderPartial("projectChat");}</div>
            </div>
        </div>
    </div>



      <connectionStrings>
    <add name="messageContext"
         connectionString="Data Source=184.168.194.58;User ID=adminChopel;Password=Ranges5!;persist security info=False;initial catalog=personalSite;" providerName="System.Data.SqlClient"/>
  </connectionStrings>


*/