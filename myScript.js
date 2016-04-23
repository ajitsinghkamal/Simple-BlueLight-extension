

var d=document.createElement('div');
d.id="fade";
document.body.insertBefore(d,document.body.childNodes[0]);

var s=document.createElement('link');
s.rel="stylesheet";
s.type="text/css";
s.href=chrome.extension.getURL("filter.css");
(document.head||document.documentElement).appendChild(s);