(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,a){},27:function(e,t,a){e.exports=a(47)},32:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),l=a.n(o),i=(a(32),a(33),a(34),a(7)),c=a(8),s=a(14),m=a(10),u=a(9),p=(a(22),a(1)),d=a(3),_=a(5),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleResize=n.handleResize.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleResize",value:function(){var e=document.getElementById("sidebar-moremenu");if("block"===e.style.display){var t=document.getElementById("sidebar-more"),a=t.offsetLeft,n=t.offsetTop;e.scrollHeight>window.innerHeight?e.style.top="0px":t.offsetTop+t.clientHeight>window.innerHeight?e.style.top=window.innerHeight-e.clientHeight+"px":e.style.top=n-e.clientHeight+t.clientHeight+"px",e.offsetTop<0&&(e.style.top=parseInt(e.style.top)-e.offsetTop+"px"),e.style.left=a+"px"}}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"ShowSideBarMoreMenu",value:function(){var e=document.getElementById("sidebar-moremenu");"none"===e.style.display||""===e.style.display?(e.style.display="block",e.style.zIndex=10,document.getElementById("sidebar-moremenu-clickoffdiv").style.zIndex=9):(e.style.display="none",document.getElementById("sidebar-moremenu-clickoffdiv").style.zIndex=-100);var t=document.getElementById("sidebar-more"),a=t.offsetLeft,n=t.offsetTop;e.scrollHeight>window.innerHeight?e.style.top="0px":t.offsetTop+t.clientHeight>window.innerHeight?e.style.top=window.innerHeight-e.clientHeight+"px":e.style.top=n-e.clientHeight+t.clientHeight+"px",e.offsetTop<0&&(e.style.top=parseInt(e.style.top)-e.offsetTop+"px"),e.style.left=a+"px"}},{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("div",{id:"sidebar-home",className:"sidebar-container-element"},r.a.createElement("button",{className:"sidebar-button"},r.a.createElement(p.a,{icon:_.f,size:"1x",color:"white"})," ",r.a.createElement("span",{className:"side-bar-text"},"Home"))),r.a.createElement("div",{id:"sidebar-explore",className:"sidebar-container-element"},r.a.createElement("button",{className:"sidebar-button"},r.a.createElement(p.a,{icon:_.e,size:"1x",color:"white"})," ",r.a.createElement("span",{className:"side-bar-text"},"Explore"))),r.a.createElement("div",{id:"sidebar-notifications",className:"sidebar-container-element"},r.a.createElement("button",{className:"sidebar-button"},r.a.createElement(p.a,{icon:d.a,size:"1x",color:"white"})," ",r.a.createElement("span",{className:"side-bar-text"},"Notifications"))),r.a.createElement("div",{id:"sidebar-messages",className:"sidebar-container-element"},r.a.createElement("button",{className:"sidebar-button"},r.a.createElement(p.a,{icon:d.f,size:"1x",color:"white"})," ",r.a.createElement("span",{className:"side-bar-text"},"Messages"))),r.a.createElement("div",{id:"sidebar-bookmarks",className:"sidebar-container-element"},r.a.createElement("button",{className:"sidebar-button"},r.a.createElement(p.a,{icon:d.b,size:"1x",color:"white"})," ",r.a.createElement("span",{className:"side-bar-text"},"Bookmarks"))),r.a.createElement("div",{id:"sidebar-lists",className:"sidebar-container-element"},r.a.createElement("button",{className:"sidebar-button"},r.a.createElement(p.a,{icon:d.h,size:"1x",color:"white"})," ",r.a.createElement("span",{className:"side-bar-text"},"Lists"))),r.a.createElement("div",{id:"sidebar-profile",className:"sidebar-container-element"},r.a.createElement("button",{className:"sidebar-button"},r.a.createElement(p.a,{icon:d.j,size:"1x",color:"white"})," ",r.a.createElement("span",{className:"side-bar-text"},"Profile"))),r.a.createElement("div",{className:"sidebar-container-element",id:"sidebar-more"},r.a.createElement("button",{className:"sidebar-button",onClick:this.ShowSideBarMoreMenu},r.a.createElement(p.a,{icon:_.d,size:"1x",color:"white"})," ",r.a.createElement("span",{className:"side-bar-text"},"More"))),r.a.createElement("div",{className:"sidebar-container-element"},r.a.createElement("button",{className:"tweet-button"},r.a.createElement("span",{className:"side-bar-text"},"Tweet"),r.a.createElement("span",{className:"tweet-plus-icon"},r.a.createElement(p.a,{icon:_.g,size:"1x",color:"white"})))))}}]),a}(n.Component),b=(a(40),a(41),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={username:null,handle:null,profilePicture:null,tweetedUTC:null,comments:101,retweets:null,likes:null,text:null,retweet_bool:!0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){void 0!==this.props.data&&this.setState({text:this.props.data.text,retweets:this.props.data.retweet_count,likes:this.props.data.favorite_count,username:this.props.data.user.name,profilePicture:this.props.data.user.profile_picture_url,handle:this.props.data.user.screen_name,retweet_bool:this.props.data.retweeted})}},{key:"render",value:function(){return r.a.createElement("div",{className:"tweet"},r.a.createElement("div",{id:"retweeted_by_message"},this.state.retweet_bool&&r.a.createElement("span",null,r.a.createElement(p.a,{icon:_.h})," Retweeted by @",this.props.screen_name)),r.a.createElement("img",{className:"tweet-profile-picture",src:this.state.profilePicture}),r.a.createElement("div",{className:"tweet-content"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-bolder"},this.state.username)," ",r.a.createElement("span",{className:"text-lighter"},"@",this.state.handle," 14h")),r.a.createElement("div",null,this.state.text),r.a.createElement("div",{className:"engagement-grid text-lighter"},r.a.createElement("div",{className:"tweet-comment-number"},r.a.createElement(p.a,{icon:d.e,size:"1x",color:"rgb(136, 153, 166)"})," ",this.state.comments),r.a.createElement("div",{className:"tweet-retweet-number"},r.a.createElement(p.a,{icon:_.h,size:"1x",color:"rgb(136, 153, 166)"})," ",this.state.retweets),r.a.createElement("div",{className:"tweet-like-number"},r.a.createElement(p.a,{icon:d.g,size:"1x",color:"rgb(136, 153, 166)"})," ",this.state.likes))))}}]),a}(r.a.Component)),h=(a(42),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"feed-buttons"},r.a.createElement("button",{className:"feed-button feed-tweets-button"},"Tweets"),r.a.createElement("button",{className:"feed-button feed-tweetsreplies-button"},"Tweets & replies"),r.a.createElement("button",{className:"feed-button feed-media-button"},"Media"),r.a.createElement("button",{className:"feed-button feed-likes-button"},"Likes")),r.a.createElement("div",{id:"feed-container"},this.props.feed&&this.props.feed.map((function(t){return r.a.createElement(b,{data:t,screen_name:e.props.screen_name})}))))}}]),a}(r.a.Component)),w=[{text:"Thanks for making your voice heard, Adam. I know a thing or two about being hopeful in the rain, too.\u2026 https://t.co/qcfKxooafS",retweet_count:1547,favorite_count:16601,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"This right here is what it's all about. Tell your mom thank you for voting, Leta. https://t.co/jx3i9laoWn",retweet_count:4272,favorite_count:62595,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"Stella, thank you for being a poll worker. You\u2019re making a difference and helping folks cast their ballot safely. https://t.co/oPXWnBi5Ud",retweet_count:2502,favorite_count:33189,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"RT @JoeBiden: With one week left until Election Day, I'm delivering remarks in Warm Springs, Georgia, on how we can unite to address the cr\u2026",retweet_count:3346,favorite_count:0,user:{name:"Joe Biden",screen_name:"JoeBiden",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg",follower_count:11639702,following_count:29},retweeted:!0},{text:"We\u2019ve only got one week left in this election. I\u2019m in Orlando for @JoeBiden to get more folks to vote and use their\u2026 https://t.co/ZALVIEr4QA",retweet_count:10782,favorite_count:72955,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"In Miami this weekend, I dropped by The Shop to talk with @KingJames and @MavCarter about the NBA bubble, the racia\u2026 https://t.co/cGubu1qVZ3",retweet_count:10963,favorite_count:71835,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"Republicans love to say right before an election that they\u2019ll protect preexisting conditions. Well, Joe and I actua\u2026 https://t.co/LgH9OuC9Kv",retweet_count:15865,favorite_count:111740,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"In the middle of a pandemic, this administration is trying to dismantle the Affordable Care Act in the Supreme Cour\u2026 https://t.co/Sw4SLniuUA",retweet_count:15624,favorite_count:120164,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"Felicidades, Sofia \u2014 I'll bet your car decorations alone inspired a few folks to head to the polls! Thank you for m\u2026 https://t.co/2m6wGf2Re5",retweet_count:9718,favorite_count:119565,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"Dawn, you're showing us all how it's done \u2014 not just making your own voice heard, but helping others do so, too. Ki\u2026 https://t.co/lka4czIr46",retweet_count:5975,favorite_count:65031,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"To anyone considering sitting this election out, look at this image. Then make a plan to vote. You're an inspiratio\u2026 https://t.co/fwSmzRhB7l",retweet_count:24207,favorite_count:180719,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"Eight months into the pandemic, as new cases are breaking records, we need an administration that\u2019s not going to wa\u2026 https://t.co/gyMtlicnTS",retweet_count:29685,favorite_count:181125,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"In 2020, we show up early \u2014 for everything, but especially for voting. Get out there and vote!\u2026 https://t.co/89m57Fs7qw",retweet_count:10321,favorite_count:89280,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"Hello, Florida! It's #VoteEarlyDay and we\u2019re just 10 days away from this election. I want to see you make a plan to\u2026 https://t.co/Q1Hw3uMIfv",retweet_count:11299,favorite_count:77458,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"One election won't make everything perfect\u2014but it could make things better. And that's why it\u2019s worth taking a few\u2026 https://t.co/VfL9e3uO3B",retweet_count:15099,favorite_count:101837,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"We\u2019re just days away from the election and I know there are a lot of good lawyers out there who want to make sure t\u2026 https://t.co/lErDPG1ZVF",retweet_count:8537,favorite_count:34187,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"Joe has the character and the experience to make our country better - but first, he needs your vote. Make a plan to\u2026 https://t.co/cYbLpwD1Wa",retweet_count:15661,favorite_count:125749,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"I just voted by mail for @JoeBiden and @KamalaHarris. If you're planning on doing the same, follow all the instruct\u2026 https://t.co/czHPiWAhE5",retweet_count:29464,favorite_count:213392,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"Great to be back in Philly today. I'm fired up and ready to go! https://t.co/6r3W4EyeFU",retweet_count:35761,favorite_count:454608,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426677,following_count:599418},retweeted:!1},{text:"Thanks for making your voice heard, Adam. I know a thing or two about being hopeful in the rain, too.\u2026 https://t.co/qcfKxooafS",retweet_count:1547,favorite_count:16601,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"This right here is what it's all about. Tell your mom thank you for voting, Leta. https://t.co/jx3i9laoWn",retweet_count:4272,favorite_count:62596,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"Stella, thank you for being a poll worker. You\u2019re making a difference and helping folks cast their ballot safely. https://t.co/oPXWnBi5Ud",retweet_count:2502,favorite_count:33189,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"RT @JoeBiden: With one week left until Election Day, I'm delivering remarks in Warm Springs, Georgia, on how we can unite to address the cr\u2026",retweet_count:3346,favorite_count:0,user:{name:"Joe Biden",screen_name:"JoeBiden",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg",follower_count:11639702,following_count:29},retweeted:!0},{text:"We\u2019ve only got one week left in this election. I\u2019m in Orlando for @JoeBiden to get more folks to vote and use their\u2026 https://t.co/ZALVIEr4QA",retweet_count:10782,favorite_count:72955,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"In Miami this weekend, I dropped by The Shop to talk with @KingJames and @MavCarter about the NBA bubble, the racia\u2026 https://t.co/cGubu1qVZ3",retweet_count:10963,favorite_count:71835,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"Republicans love to say right before an election that they\u2019ll protect preexisting conditions. Well, Joe and I actua\u2026 https://t.co/LgH9OuC9Kv",retweet_count:15865,favorite_count:111740,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"In the middle of a pandemic, this administration is trying to dismantle the Affordable Care Act in the Supreme Cour\u2026 https://t.co/Sw4SLniuUA",retweet_count:15624,favorite_count:120164,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"Felicidades, Sofia \u2014 I'll bet your car decorations alone inspired a few folks to head to the polls! Thank you for m\u2026 https://t.co/2m6wGf2Re5",retweet_count:9718,favorite_count:119565,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"Dawn, you're showing us all how it's done \u2014 not just making your own voice heard, but helping others do so, too. Ki\u2026 https://t.co/lka4czIr46",retweet_count:5975,favorite_count:65031,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"To anyone considering sitting this election out, look at this image. Then make a plan to vote. You're an inspiratio\u2026 https://t.co/fwSmzRhB7l",retweet_count:24207,favorite_count:180719,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"Eight months into the pandemic, as new cases are breaking records, we need an administration that\u2019s not going to wa\u2026 https://t.co/gyMtlicnTS",retweet_count:29685,favorite_count:181125,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"In 2020, we show up early \u2014 for everything, but especially for voting. Get out there and vote!\u2026 https://t.co/89m57Fs7qw",retweet_count:10321,favorite_count:89280,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"Hello, Florida! It's #VoteEarlyDay and we\u2019re just 10 days away from this election. I want to see you make a plan to\u2026 https://t.co/Q1Hw3uMIfv",retweet_count:11299,favorite_count:77458,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"One election won't make everything perfect\u2014but it could make things better. And that's why it\u2019s worth taking a few\u2026 https://t.co/VfL9e3uO3B",retweet_count:15099,favorite_count:101837,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"We\u2019re just days away from the election and I know there are a lot of good lawyers out there who want to make sure t\u2026 https://t.co/lErDPG1ZVF",retweet_count:8537,favorite_count:34187,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"Joe has the character and the experience to make our country better - but first, he needs your vote. Make a plan to\u2026 https://t.co/cYbLpwD1Wa",retweet_count:15661,favorite_count:125749,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"I just voted by mail for @JoeBiden and @KamalaHarris. If you're planning on doing the same, follow all the instruct\u2026 https://t.co/czHPiWAhE5",retweet_count:29464,favorite_count:213392,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1},{text:"Great to be back in Philly today. I'm fired up and ready to go! https://t.co/6r3W4EyeFU",retweet_count:35761,favorite_count:454608,user:{name:"Barack Obama",screen_name:"BarackObama",banner_picture_url:null,profile_picture_url:"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",follower_count:124426687,following_count:599418},retweeted:!1}],g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={profile_name:null,name:null,screen_name:null,joinedUTC:null,following:null,followers:null,feed:null,profile_url:null,most_recent_inifinite_scroll_update:null,banner_url:null},n.getMoreTweets=n.getMoreTweets.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"getMoreTweets",value:function(){if(!(null===this.state.feed||(new Date).getTime()<this.state.most_recent_inifinite_scroll_update+1e3)){this.setState({most_recent_inifinite_scroll_update:(new Date).getTime()});var e=this.state.feed;w.forEach((function(t){e.push(t)})),this.setState({feed:e}),document.getElementById("infinite-scroll").style.top="100%"}}},{key:"componentDidMount",value:function(){this.setState({profile_name:this.props.match.params.user});var e="Barack Obama",t="BarackObama",a="https://pbs.twimg.com/profile_banners/813286/1502508746",n="http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",r=124426606,o=599418;this.setState({name:e,screen_name:t,followers:r,following:o,profile_url:n,banner_url:a}),this.setState({feed:w});var l=document.getElementById("infinite-scroll");new IntersectionObserver(this.getMoreTweets,{rootMargin:"0px",threshold:.1}).observe(l)}},{key:"render",value:function(){var e=new Date(1e3*this.state.joinedUTC);return r.a.createElement("div",null,!this.state.feed&&r.a.createElement("div",{id:"page-loading-overlay"},r.a.createElement("div",{id:"spin-animation"},r.a.createElement(p.a,{icon:_.i,size:"9x",color:"rgb(136, 153, 166)"})," ",this.state.comments)),r.a.createElement("div",{className:"profile-details"},r.a.createElement("div",null,r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"banner-image"},r.a.createElement("img",{src:this.state.banner_url,width:"100%"})),r.a.createElement("div",{className:"circular-image"},r.a.createElement("img",{src:this.state.profile_url,height:"100%"}))),r.a.createElement("div",{className:"profile-content"},r.a.createElement("div",{className:"username profile-detail"},this.state.name),r.a.createElement("div",{className:"handle profile-detail"},"@",this.state.screen_name),r.a.createElement("div",{className:"join-date profile-detail"},"Joined ",e.toDateString()),r.a.createElement("span",{className:"following-count profile-detail"},r.a.createElement("span",{className:"follow-number"},this.state.following)," Following"),r.a.createElement("span",{className:"follower-count profile-detail"},r.a.createElement("span",{className:"follow-number"},this.state.followers)," Followers")))),r.a.createElement(h,{feed:this.state.feed,screen_name:this.state.screen_name}),r.a.createElement("div",{id:"infinite-scroll"}))}}]),a}(r.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).ClickOffSideBar=n.ClickOffSideBar.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"ClickOffSideBar",value:function(){document.getElementById("sidebar-moremenu").style.display="none",document.getElementById("sidebar-moremenu-clickoffdiv").style.zIndex=-100}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"sidebar-moremenu"},r.a.createElement("div",{className:"sidebar-moremenu-element"},r.a.createElement("button",{className:"sidebar-moremenu-button"},r.a.createElement(p.a,{icon:d.d,size:"1x",color:"white"}),"\xa0\xa0Topics")),r.a.createElement("div",{className:"sidebar-moremenu-element"},r.a.createElement("button",{className:"sidebar-moremenu-button"},r.a.createElement(p.a,{icon:_.b,size:"1x",color:"white"}),"\xa0\xa0Moments")),r.a.createElement("div",{className:"sidebar-moremenu-element"},r.a.createElement("button",{className:"sidebar-moremenu-button"},r.a.createElement(p.a,{icon:_.a,size:"1x",color:"white"}),"\xa0\xa0Twitter Ads")),r.a.createElement("div",{className:"sidebar-moremenu-element"},r.a.createElement("button",{className:"sidebar-moremenu-button"},r.a.createElement(p.a,{icon:d.c,size:"1x",color:"white"}),"\xa0\xa0Analytics")),r.a.createElement("div",{id:"sidebar-moremenu-notifications",className:"sidebar-moremenu-element"},r.a.createElement("button",{className:"sidebar-moremenu-button"},r.a.createElement(p.a,{icon:d.a,size:"1x",color:"white"}),"\xa0\xa0Notifications")),r.a.createElement("div",{id:"sidebar-moremenu-messages",className:"sidebar-moremenu-element"},r.a.createElement("button",{className:"sidebar-moremenu-button"},r.a.createElement(p.a,{icon:d.f,size:"1x",color:"white"}),"\xa0\xa0Messages")),r.a.createElement("div",{id:"sidebar-moremenu-bookmarks",className:"sidebar-moremenu-element"},r.a.createElement("button",{className:"sidebar-moremenu-button"},r.a.createElement(p.a,{icon:d.b,size:"1x",color:"white"}),"\xa0\xa0Bookmarks")),r.a.createElement("div",{id:"sidebar-moremenu-lists",className:"sidebar-moremenu-element"},r.a.createElement("button",{className:"sidebar-moremenu-button"},r.a.createElement(p.a,{icon:d.h,size:"1x",color:"white"}),"\xa0\xa0Lists")),r.a.createElement("div",{className:"sidebar-moremenu-break"}),r.a.createElement("div",{className:"sidebar-moremenu-element"},r.a.createElement("button",{className:"sidebar-moremenu-button"},r.a.createElement(p.a,{icon:_.c,size:"1x",color:"white"}),"\xa0\xa0Settings & privacy")),r.a.createElement("div",{className:"sidebar-moremenu-element"},r.a.createElement("button",{className:"sidebar-moremenu-button"},r.a.createElement(p.a,{icon:d.i,size:"1x",color:"white"}),"\xa0\xa0Help center")),r.a.createElement("div",{className:"sidebar-moremenu-element"},r.a.createElement("button",{className:"sidebar-moremenu-button"},r.a.createElement(p.a,{icon:_.j,size:"1x",color:"white"}),"\xa0\xa0Display"))),r.a.createElement("button",{id:"sidebar-moremenu-clickoffdiv",onClick:this.ClickOffSideBar}))}}]),a}(n.Component),k=(a(43),a(44),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={username:"The Void",handle:"GazeWithin",profilePicture:"https://pbs.twimg.com/profile_images/1311487905928417280/jN96sBXm_400x400.jpg",tweetedUTC:null,comments:101,retweets:101,likes:101,quoteTweetNum:101,text:'holy shit imagine if Trump suddenly finds the "go live" button on Twitter',time:1602083791e3,formattedTime:null,intToMonth:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"}},n}return Object(c.a)(a,[{key:"epochToString",value:function(){var e=new Date(this.state.time),t=e.getHours(),a=e.getMinutes(),n=e.getMonth(),r=e.getDay(),o=e.getFullYear(),l="".concat(t,":").concat(a," \xb7 ").concat(this.state.intToMonth[n]," ").concat(r,", ").concat(o);this.setState({formattedTime:l})}},{key:"componentDidMount",value:function(){this.epochToString()}},{key:"render",value:function(){return r.a.createElement("div",{className:"replies-reply reply-grid"},r.a.createElement("div",{className:"reply-grid-left"},r.a.createElement("img",{className:"tweet-profile-picture-small",src:this.state.profilePicture})),r.a.createElement("div",{className:"reply-grid-right"},r.a.createElement("div",{className:"replies-reply-header"},r.a.createElement("span",{className:"replies-reply-header-text"},r.a.createElement("span",{className:"text-bolder"},this.state.username),r.a.createElement("span",{className:"text-lighter"},"@",this.state.handle))),r.a.createElement("div",{className:"replies-reply-content"},this.state.text),r.a.createElement("div",{className:"replies-engagement engagement-grid text-lighter"},r.a.createElement("div",{className:"tweet-comment-number"},r.a.createElement(p.a,{icon:d.e,size:"1x",color:"rgb(136, 153, 166)"})," ",this.state.comments),r.a.createElement("div",{className:"tweet-retweet-number"},r.a.createElement(p.a,{icon:_.h,size:"1x",color:"rgb(136, 153, 166)"})," ",this.state.retweets),r.a.createElement("div",{className:"tweet-like-number"},r.a.createElement(p.a,{icon:d.g,size:"1x",color:"rgb(136, 153, 166)"})," ",this.state.likes))))}}]),a}(n.Component)),E=(n.Component,a(25)),y=a(4);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"item1"},r.a.createElement(f,null)),r.a.createElement("div",{className:"item2"},r.a.createElement(E.a,null,r.a.createElement(y.a,{path:"/:user",component:g})))),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.225d5623.chunk.js.map