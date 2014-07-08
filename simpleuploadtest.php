<!DOCTYPE html>

<html>
<meta charset="utf-8">
<head>
    <title> </title>
</head>
<rel="stylesheet" type="text/css" href="css/main.css" />
<script src="/git/simpleupload/js/jquery-2.1.1.min.js"></script>
<script src="/git/simpleupload/js/class.simpleUpload.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
$(document).ready(function() {
  

upload = function(elem){
  console.log(elem);
  var newUpload = new simpleUpload(elem, '/git/simpleupload/upload.php', 'POST', "false", 'json');
  newUpload.uploadFile();
}

});


</script>

<body>

<input type="file" id="fh_file" name="fh_file" value="" placeholder="file Upload" onchange="upload(this)">


</body>

</html>

