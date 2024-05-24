<?php
$conn = null;
$conn = checkDbConnection();
$tag = new Tag($conn);
$error = [];
$returnData = [];
if (array_key_exists("tagid", $_GET)) {
    checkPayload($data);
    $tag->tag_aid = $_GET['tagid'];
    $tag->tag_title = checkIndex($data, "tag_title");
    $tag->tag_datetime = date("Y-m-d H:i:s");
    $tag_title_old = checkIndex($data, "tag_title");
    checkId($tag->tag_aid);
    // $tag_title_old = checkIndex($data, "tag_title_old");
    // compareName($tag, $tag_title_old, $tag->tag_name);
    $query = checkUpdate($tag);
    returnSuccess($tag, "tag", $query);
}

checkEndpoint();