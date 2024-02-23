<?php
include('db.php');

if($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST['username']) && !empty($_POST['password']))
{
    $returnarray = array('status' => '', 'name' => '');
	$sql = "select stname FROM studentinfo WHERE (stid = '". $_POST['username'] . "' AND stpass = '" . $_POST['password'] ."');";
    $result = $conn->query($sql);
    if ($result->num_rows > 0)
    {
        $obj = $result -> fetch_object();
        $returnarray['status'] = '$$$SL$$$';
        $returnarray['name'] = $obj->stname;
        echo json_encode($returnarray);
        die();
    }
    else
    {
        $returnarray['status'] = '$$$WUOP$$$';
        echo json_encode($returnarray);
        die();
    }
}
else
{
    die('Unauthorized access!');
}