function showMailingPopUp() {
  require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us14.list-manage.com","uuid":"61aa25325b541e52f240c10d3","lid":"912cacc6a1"}) })
  document.cookie = 'MCEvilPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
};

document.getElementById("open-popup").onclick = function() {showMailingPopUp()};
