<?php
var_dump($_FILES);

if(!move_uploaded_file($_FILES['fh_file']['tmp_name'], '/git/simpleupload/data/')){
  echo $_FILES['fh_file'];
} else {
  echo $_FILES['fh_file'];
}

?>