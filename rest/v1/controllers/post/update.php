<?php
$conn = null;
$conn = checkDbConnection();
$post = new Post($conn);
$error = [];
$returnData = [];
if (array_key_exists("postid", $_GET)) {
    checkPayload($data);
    $post->post_aid = $_GET['postid'];
    $post->post_title = checkIndex($data, "post_title");
    $post->post_photo = strtolower($data["post_photo"]);
    $post->post_author = strtolower($data["post_author"]);
    $post->post_category_id = checkIndex($data, "post_category_id");
    $post->post_tag_id = checkIndex($data, "post_tag_id");
    $post->post_is_featured = checkIndex($data, "post_is_featured");
    $post->post_publish_date = checkIndex($data, "post_publish_date");
    $post->post_article = checkIndex($data, "post_article");
    $post->post_datetime = date("Y-m-d H:i:s");
    
    checkId($post->post_aid);
    // $post_name_old = checkIndex($data, "post_name_old");
    // compareName($post, $post_name_old, $post->post_name);
    $query = checkUpdate($post);
    returnSuccess($post, "post", $query);
}

checkEndpoint();