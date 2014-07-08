/**
 * simpleUpload Class 
 * ajax driven Upload class
 * @author Sam Alfano
 * @date 08.07.2014
 * @version v0.1
**/

function simpleUpload(dataIn, uploadURL, uploadMethod, contentType, dataType) {

  // Inizialize Values
  this.dataIn = dataIn.files[0];

  this.dataOut = new FormData();

  this.uploadURL = uploadURL || '';

  this.uploadMethod = uploadMethod || 'GET';

  this.contentType = contentType || 'application/x-www-form-urlencoded; charset=UTF-8';

  this.dataType = dataType || 'text';
}

simpleUpload.prototype.uploadFile = function() {
  _this = this;
  console.log(_this.dataIn);
  _this.dataOut.append('fh_file', _this.dataIn)
    xhr = new XMLHttpRequest();
     
    xhr.open("POST", _this.uploadURL);
    xhr.send(_this.dataOut);
  // $.ajax({

  //   url: _this.uploadUrl,
  //   data: _this.dataOut,
  //   type: _this.uploadMethod,
  //   contentType: _this.contentType,
  //   dataType: _this.dataType,
  //   processData:false,
  //   cache: false,
  //   success: function(response, event, xhr){
  //     var data = JSON.parse(response);
  //     console.log(data);
  //   },
  //   error: function(data){
  //     console.log(data);

  //   },
  //   complete: function(data){
  //     console.log(data);
  //   }

  // })
};

simpleUpload.prototype.dataToObject = function(formData) {
  _this = this;
  // Create key Value from html data
  var file = formData.files[0];
  // var name = formData.attr('name');

  _this.dataIn = file;

};

