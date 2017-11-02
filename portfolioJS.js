var modal = document.getElementsByClassName('modal');
var modalBtn = document.getElementsByClassName('projectButton');
var dModal = document.getElementsByClassName('dModal');
var docBtn = document.getElementsByClassName('docLaunch');
var pModal = document.getElementsByClassName('pModal');
var picBtn = document.getElementsByClassName('picLaunch');

for (var i = 0; i < modalBtn.length; i++){
	modalOpenClose(i);
}

for (var i = 0; i < docBtn.length; i++){
	docModalOpenClose(i);
}

for (var i = 0; i < picBtn.length; i++){
	 picModalOpenClose(i);
}

function modalOpenClose(count){
	 modalBtn[count].addEventListener('click', function() {
		modal[count].setAttribute('style', 'display:block !important');
    }, false);

   window.addEventListener('click', function() {
		 if (event.target == modal[count]) {
			modal[count].style.display = "none";
		}
    }, false);
}

function docModalOpenClose(count){
	docBtn[count].addEventListener('click', function() {
		dModal[count].setAttribute('style', 'display:block !important');
    }, false);

   window.addEventListener('click', function() {
		 if (event.target == dModal[count]) {
			dModal[count].style.display = "none";
		}
    }, false);
}

function picModalOpenClose(count){
	picBtn[count].addEventListener('click', function() {
		pModal[count].setAttribute('style', 'display:block !important');
    }, false);

   window.addEventListener('click', function() {
		 if (event.target == pModal[count]) {
			pModal[count].style.display = "none";
		}
    }, false);
}

//Google analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-97191578-1', 'auto');
  ga('send', 'pageview');