<?php

Class Post {
    public $post_aid;
    public $post_title;
    public $post_photo;
    public $post_author;
    public $post_category_id;
    public $post_tag_id;
    public $post_is_featured;
    public $post_is_active;
    public $post_article;
    public $post_publish_date;
    public $post_datetime;
    public $post_created;

    public $post_search;

    public $connection;
    public $lastInsertedId;
    public $tblPost;
    public $tblCategory;
    public $tblTag;
    

    public function __construct($db) {
        $this->connection = $db;
        $this->tblPost = "post";
        $this->tblCategory = "category";
        $this->tblTag = "tag";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblPost} ";
            $sql .= "( post_title, ";
            $sql .= "post_category_id, ";
            $sql .= "post_tag_id, ";
            $sql .= "post_photo, ";
            $sql .= "post_is_featured, ";
            $sql .= "post_author, ";
            $sql .= "post_is_active, ";
            $sql .= "post_article, ";
            $sql .= "post_publish_date, ";
            $sql .= "post_created, ";
            $sql .= "post_datetime ) values ( ";
            $sql .= ":post_title, ";
            $sql .= ":post_category_id, ";
            $sql .= ":post_tag_id, ";
            $sql .= ":post_photo, ";
            $sql .= ":post_is_featured, ";
            $sql .= ":post_author, ";
            $sql .= ":post_is_active, ";
            $sql .= ":post_article, ";
            $sql .= ":post_publish_date, ";
            $sql .= ":post_created, ";
            $sql .= ":post_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_title" => $this->post_title,
                "post_category_id" => $this->post_category_id,
                "post_tag_id" => $this->post_tag_id,
                "post_photo" => $this->post_photo,
                "post_is_featured" => $this->post_is_featured,
                "post_author" => $this->post_author,
                "post_is_active" => $this->post_is_active,
                "post_article" => $this->post_article,
                "post_publish_date" => $this->post_publish_date,
                "post_created" => $this->post_created,
                "post_datetime" => $this->post_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }

        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPost} as post, ";
            $sql .= "{$this->tblCategory} as category, ";
            $sql .= "{$this->tblTag} as tag ";
            $sql .= "where post.post_category_id = category.category_aid ";
            $sql .= "and post.post_tag_id = tag.tag_aid ";
            $sql .= "order by post.post_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readByFeature()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPost} as post, ";
            $sql .= "{$this->tblCategory} as category, ";
            $sql .= "{$this->tblTag} as tag ";
            $sql .= "where post.post_category_id = category.category_aid ";
            $sql .= "and post.post_tag_id = tag.tag_aid ";
            $sql .= "and post.post_is_featured = 1 ";
            $sql .= "order by post.post_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readById()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPost} as post, ";
            $sql .= "{$this->tblCategory} as category, ";
            $sql .= "{$this->tblTag} as tag ";
            $sql .= "where post.post_category_id = category.category_aid ";
            $sql .= "and post.post_tag_id = tag.tag_aid ";
            $sql .= "and post_aid = :post_aid ";
            $sql .= "order by post_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_aid" => $this->post_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblPost} ";
            $sql .= "where post_aid = :post_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_aid" => $this->post_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblPost} set ";
            $sql .= "post_title = :post_title, ";
            $sql .= "post_photo = :post_photo, ";
            $sql .= "post_author = :post_author, ";
            $sql .= "post_category_id = :post_category_id, ";
            $sql .= "post_tag_id = :post_tag_id, ";
            $sql .= "post_is_featured = :post_is_featured, ";
            $sql .= "post_article = :post_article, ";
            $sql .= "post_publish_date = :post_publish_date, ";
            $sql .= "post_datetime = :post_datetime ";
            $sql .= "where post_aid  = :post_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_title" => $this->post_title,
                "post_photo" => $this->post_photo,
                "post_author" => $this->post_author,
                "post_category_id" => $this->post_category_id,
                "post_tag_id" => $this->post_tag_id,
                "post_is_featured" => $this->post_is_featured,
                "post_article" => $this->post_article,
                "post_publish_date" => $this->post_publish_date,
                "post_datetime" => $this->post_datetime,
                "post_aid" => $this->post_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblPost} set ";
            $sql .= "post_is_active = :post_is_active, ";
            $sql .= "post_datetime = :post_datetime ";
            $sql .= "where post_aid  = :post_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_is_active" => $this->post_is_active,
                "post_datetime" => $this->post_datetime,
                "post_aid" => $this->post_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPost} ";
            $sql .= "where post_title like :post_title ";
            $sql .= "order by post_is_active desc, ";
            $sql .= "post_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "post_title" => "%{$this->post_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}