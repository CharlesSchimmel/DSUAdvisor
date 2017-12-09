var mongoose = require('mongoose');

var configDB = {
    'url': 'APIKeyRedacted'
};

mongoose.connect(configDB.url, {
    useMongoClient: true,
}, function(error) {
  if(error){
	  console.log('Error connecting to cluster');
  }
  else{
	  console.log('You have succsesfully connected to the cluster!');
  }
});