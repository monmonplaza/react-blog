<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Post.php';

$body = file_get_contents('php://input');
$data = json_decode($body, true);

$conn = null;
$conn = checkDbConnection();
$post = new Post($conn);
$error = [];
$returnData = [];



if (empty($_GET)) {
    $query = checkReadByFeature($post);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();