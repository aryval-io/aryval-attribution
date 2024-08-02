getAttributionData();
function getAttributionData(){
  let storedAtt = getStoredAttData();
  //we have stored data for attribution and it is not expired
  if(storedAtt){
    return storedAtt;
  }

  console.log('started attribution... ');
  const socials = ["facebook","twitter","linkedin","youtube","instagram","tumblr","pinterest","slideshare","digg","reddit","stumbleupon","sphinn","myspace","propeller","mixx","fark","tip’d","triiibes","livejournal","technorati","slashdot","ning","orkut","mybloglog","metacafe","meebo","squidoo","wikipedia","flickr","slide","plurk","blogcatalog","delicious","knol","friendfeed","hootsuite","cotweet","seesmic","quora","xing","vimeo","hackernews"];
  const searchs = ["alhea.com","alot.com","aol.com","aolsearch.com","ask.com","avg.com","b1.org","babylon.com","baidu.cn","baidu.co.th","baidu.com","bing.com","blackle.com","blekko.com","blindsearch.fejus.com","bt.com","centurylink.net","charter.net","clearch.org","cnn.com","daum.net","devilfinder.com","dmoz.org","dogpile.com","duckduckgo.com","ekolay.net","entireweb.com","excite.com","fast.ng","findgala.com","findsmarter.com","findsmarter.ru","g.cn","genieo.com","go.speedbit.com","goofram.com","google.ac","google.ad","google.ae","google.al","google.am","google.as","google.at","google.az","google.ba","google.be","google.bf","google.bg","google.bi","google.bj","google.bs","google.bt","google.by","google.ca","google.cat","google.cc","google.cd","google.cf","google.cg","google.ch","google.ci","google.cl","google.cm","google.cn","google.co.ao","google.co.bw","google.co.ck","google.co.cr","google.co.id","google.co.il","google.co.in","google.co.jp","google.co.ke","google.co.kr","google.co.ls","google.co.ma","google.co.mz","google.co.nz","google.co.th","google.co.tz","google.co.ug","google.co.uk","google.co.uz","google.co.ve","google.co.vi","google.co.za","google.co.zm","google.co.zw","google.com","google.com.af","google.com.ag","google.com.ai","google.com.ar","google.com.au","google.com.bd","google.com.bh","google.com.bn","google.com.bo","google.com.br","google.com.by","google.com.bz","google.com.co","google.com.cu","google.com.cy","google.com.do","google.com.ec","google.com.eg","google.com.et","google.com.fj","google.com.gh","google.com.gi","google.com.gt","google.com.hk","google.com.jm","google.com.kh","google.com.kw","google.com.lb","google.com.lc","google.com.ly","google.com.mm","google.com.mt","google.com.mx","google.com.my","google.com.na","google.com.nf","google.com.ng","google.com.ni","google.com.np","google.com.om","google.com.pa","google.com.pe","google.com.pg","google.com.ph","google.com.pk","google.com.pr","google.com.py","google.com.qa","google.com.sa","google.com.sb","google.com.sg","google.com.sl","google.com.sv","google.com.tj","google.com.tn","google.com.tr","google.com.tw","google.com.ua","google.com.uy","google.com.vc","google.com.vn","google.cv","google.cz","google.de","google.dj","google.dk","google.dm","google.dz","google.ee","google.es","google.fi","google.fm","google.fr","google.ga","google.gd","google.ge","google.gf","google.gg","google.gl","google.gm","google.gp","google.gr","google.gy","google.hn","google.hr","google.ht","google.hu","google.ie","google.im","google.io","google.iq","google.is","google.it","google.it.ao","google.je","google.jo","google.kg","google.ki","google.kz","google.la","google.li","google.lk","google.lt","google.lu","google.lv","google.md","google.me","google.mg","google.mk","google.ml","google.mn","google.ms","google.mu","google.mv","google.mw","google.ne","google.nl","google.no","google.nr","google.nu","google.pl","google.pn","google.ps","google.pt","google.ro","google.rs","google.ru","google.rw","google.sc","google.se","google.sh","google.si","google.sk","google.sm","google.sn","google.so","google.st","google.td","google.tg","google.tk","google.tl","google.tm","google.tn","google.to","google.tt","google.us","google.vg","google.vu","google.ws","heapr.com","hotbot.com","iboogie.com","inbox.com","incredibar.com","info.com","infospace.com","isearch-123.com","iseek.com","izito.com","k9safesearch.com","kidrex.org","kvasir.no","lycos.com","mamma.com","monstercrawler.com","myallsearch.com","mynet.com","mysearchresults.com","myway.com","mywebsearch.com","naver.com","out1000.com","pageset.com","portal.tds.net","qone8.com","qrobe.it","rambler.ru","redz.com","safehomepage.com","safesearch.net","search-results.com","search.centurylink.com","search.com","search.comcast.net","search.earthlink.net","search.frontier.com","search.iminent.com","search.incredimail.com","search.juno.com","search.mail.com","search.orange.co.uk","search.pch.com","search.peoplepc.com","search.quebles.com","search.snap.do","search.snapdo.com","search.sweetim.com","search.thunderstone.com","search.toolbars.alexa.com","search.twcc.com","search.walla.co.il","search.zonealarm.com","searchalot.com","searchassist.verizon.com","searchfunmoods.com","searchlock.com","searchresults.verizon.com","searchtool.com","seznam.cz","similarsitesearch.com","so.com","sogou.com","spacetime3d.com","spezify.com","start.funmoods.com","start.iminent.com","start.toshiba.com","startgoogle.startpagina.nl","startpage.com","startsiden.no","surfcanyon.com","swagbucks.com","terra.com","thenet1.com","torcho.com","tuvaro.com","ustart.org","virgilio.it","voila.fr","web.canoe.ca","webcache.googleusercontent.com","webcrawler.com","webhelper.centurylink.com","webssearches.com","windstream.net","wolframalpha.com","wow.com”, “wowway.net","wp.pl","www1.dlinksearch.com","yabigo.com","yahoo.co.jp","yahoo.com","yaimo.com","yam.com","yandex.by","yandex.com","yandex.com.tr","yandex.kz","yandex.ru","yandex.ua","yippy.com","zapmeta.com","ecosia.org","qwant.com","search.brave.com"];
  //current params from current url
  let params = new URL(document.location.toString()).searchParams; 
  if(document.referrer != ''){
    var referrerDomain = document.referrer.split('/')[2].replace("www.",""); //referrer domain xx.com
    var refArray = referrerDomain.replace(".com","").split(".");
    var referrerName = refArray[refArray.length-1]; 
  }

  var channel = 'Direct Traffic'; //can be direct traffic, organic search, paid search, organic social, referral, email marketing, Other campaigns, Affiliates, Display Advertising

  var utm_source = params.get('utm_source'); //channeldrilldown1
  var utm_campaign = params.get('utm_campaign'); //channeldrilldown2
  var utm_term = params.get('utm_term'); //channeldrilldown3
  var utm_content = params.get('utm_content'); //channeldrilldown4
  var utm_medium = params.get('utm_medium'); 

  var gclid = params.get('gclid');
  var fbclid = params.get('fbclid');
  var msclkid = params.get('msclkid');

  var channeldrilldown1 = utm_source;
  var channeldrilldown2 = utm_campaign;
  var channeldrilldown3 = utm_term;

  if(utm_medium && utm_medium.includes("email")){
    channel = 'Email Marketing';
  }
  else if(params.get('fbclid') || utm_source == 'paidsocial' || 
     (utm_medium && (utm_medium.includes('paid')|| utm_medium.includes('ppc')|| utm_medium.includes('cpc')) 
       && 
        (socials.includes(utm_source) || socials.includes(referrerName)))){
    channel = 'Paid Social';
  }
  else if(params.get('msclkid') || params.get('gclid') || utm_source == 'paidsearch' || utm_medium == 'paidsearch' || 
     (utm_source || utm_medium || utm_term && searchs.includes(referrer))
    ){
    channel = "Paid Search";
  }
  else if(utm_medium && utm_medium.includes('display')){
    channel = "Display";
  }
  else if(utm_medium && utm_medium.includes('affiliate')){
    channel = "Affiliates";
  }
  else if(utm_medium || utm_source || utm_campaign || params.get('source')){
    channel = 'Other Campaigns';
  }
  else if(socials.includes(referrerName)){
    channel = 'Organic Social';
    channeldrilldown1 = referrerName.charAt(0).toUpperCase() + referrerName.slice(1);
    channeldrilldown2 = referrer;
  }
  else if(searchs.includes(referrerDomain)){
    channel = 'Organic Search';
    channeldrilldown1 = referrerName.charAt(0).toUpperCase() + referrerName.slice(1);
    channeldrilldown2 = referrerDomain;
  }
  else if(document.referrer != ''){
    channel = 'Referral';
    channeldrilldown1 = referrerDomain;
    channeldrilldown2 = document.referrer;
  }

  var locationNoParams = window.location.href.split('?')[0];

  let expDays = 3;

  let jsonAtt = {channel: channel, 
    channeldrilldown1: channeldrilldown1,
    channeldrilldown2: channeldrilldown2,
    channeldrilldown3: channeldrilldown3,
    landingpage: locationNoParams,
    landingpagegroup: locationNoParams.split('/')[3],
    gclid: gclid,
    fbclid: fbclid,
    msclkid: msclkid,
    timestamp: new Date().getTime() + (expDays * 24 * 60 * 60 * 1000)};
  let attData = JSON.stringify(jsonAtt);
  localStorage.setItem("aryval-attribution", btoa(attData));

  return jsonAtt;
}

function getStoredAttData(){
  let storedAtt = localStorage["aryval-attribution"];
  //we have stored data for attribution and it is not expired
  try {
    if(storedAtt){
      let parsed = JSON.parse(atob(storedAtt));
      if(parsed.timestamp > new Date().getTime()){
        return parsed;
      }
    }
  } catch (e) {
    return ;
  }
  return ;
}
