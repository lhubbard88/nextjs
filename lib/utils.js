require("isomorphic-fetch");


function getProfile(user) {
	  return fetch(`http://35.190.190.219/info?q=${user}`).then(function(resp) {
		      return resp.json();
		    });
}

function handleError(error) {
	  console.warn(error);
	  return null;
}

function getJson(url){
	return fetch(url).then(function(resp){
		console.log(url, resp);
		return resp.json();
	});
}
	
function getImage(image){
	return getJson(`http://zacahrski.org/files/campgrounds/${image}`);
}

module.exports = {
	  getInfo: function(user) {
		      return getProfile(user).catch(handleError);
		    }

}
