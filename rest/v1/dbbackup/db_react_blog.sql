-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 30, 2024 at 07:31 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_react_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_aid` int(11) NOT NULL,
  `category_title` varchar(50) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_aid`, `category_title`, `category_is_active`, `category_datetime`, `category_created`) VALUES
(2, 'Trending', 1, '2024-05-24 13:31:10', '2024-05-24 13:22:24'),
(3, 'Featured', 1, '2024-05-24 13:31:17', '2024-05-24 13:31:17');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_aid` int(11) NOT NULL,
  `post_title` varchar(100) NOT NULL,
  `post_photo` varchar(50) NOT NULL,
  `post_author` varchar(50) NOT NULL,
  `post_category_id` int(11) NOT NULL,
  `post_tag_id` int(11) NOT NULL,
  `post_is_featured` tinyint(1) NOT NULL,
  `post_is_active` tinyint(1) NOT NULL,
  `post_article` text NOT NULL,
  `post_publish_date` varchar(20) NOT NULL,
  `post_datetime` varchar(20) NOT NULL,
  `post_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_aid`, `post_title`, `post_photo`, `post_author`, `post_category_id`, `post_tag_id`, `post_is_featured`, `post_is_active`, `post_article`, `post_publish_date`, `post_datetime`, `post_created`) VALUES
(1, 'Title nng blog', 'feature-2.jpg', 'loveboy', 2, 2, 0, 1, '# Header 1 ito\n## Header 2 ito\n### Header 3 ito\n#### header 4\n##### header 5 ito\n\n\nThis is really***very***important text.\n\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis a veniam, necessitatibus voluptatum blanditiis sed error reprehenderit consectetur dolorem in. don`t\n\nLorem ipsum, #dolor sit amet consectetur adipisicing elit. Nobis a veniam, necessitatibus voluptatum blanditiis sed error reprehenderit consectetur dolorem in.\n\n  ![Bini](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbbMyUTod3HnE6xj0WFGyhxDsUn2W_1UchiQgz1WMdWOmkh30T)\n\nLove **is** bold\n\n1. First item\n2. Second item\n3. Third item\n4. Fourth item', '20012', '2024-07-15 15:48:30', '2024-05-24 07:38:52'),
(2, 'xxx', 'banner-netflix.jpg', 'xxx', 2, 2, 0, 1, '###asdasdasd\n\n#fak\\\\\\\'s;dlfk\\\\\\\'a;lsdkfas', 'xx', '2024-07-15 15:53:29', '2024-05-24 07:41:49'),
(3, 'yyyy', 'feature-4.png', 'yyyy', 2, 1, 1, 1, '###ytertyert', 'yy', '2024-07-15 15:54:10', '2024-05-24 07:42:08'),
(4, 'test', 'banner-netflix.jpg', 'etete', 3, 1, 0, 1, '# asdasdasdasdasd', '2024-05-29', '2024-05-28 08:21:43', '2024-05-24 15:05:31'),
(5, 'Testing Tag', 'Screenshot 2024-01-17 124620.png', 'loverboy', 2, 1, 0, 1, '# header 1\n## header 2', '2024-05-23', '2024-05-28 08:19:21', '2024-05-28 08:19:21'),
(6, 'testing', 'Screenshot 2024-02-28 100833.png', 'test', 2, 2, 0, 1, '# Header 1\n\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aspernatur cumque quidem possimus obcaecati facere ducimus a quae accusamus harum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aspernatur cumque quidem possimus obcaecati facere ducimus a quae accusamus harum?\n\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aspernatur cumque quidem possimus obcaecati facere ducimus a quae accusamus harum?\n\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aspernatur cumque quidem possimus obcaecati facere ducimus a quae accusamus harum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aspernatur cumque quidem possimus obcaecati facere ducimus a quae accusamus harum?\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aspernatur cumque quidem possimus obcaecati facere ducimus a quae accusamus harum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aspernatur cumque quidem possimus obcaecati facere ducimus a quae accusamus harum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aspernatur cumque quidem possimus obcaecati facere ducimus a quae accusamus harum?', '2024-05-08', '2024-05-28 12:30:43', '2024-05-28 12:30:43');

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `tag_aid` int(11) NOT NULL,
  `tag_is_active` tinyint(1) NOT NULL,
  `tag_title` varchar(50) NOT NULL,
  `tag_datetime` varchar(20) NOT NULL,
  `tag_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tag`
--

INSERT INTO `tag` (`tag_aid`, `tag_is_active`, `tag_title`, `tag_datetime`, `tag_created`) VALUES
(1, 1, 'Travel', '2024-05-28 08:21:10', '2024-05-24 13:52:47'),
(2, 1, 'Food', '2024-05-28 08:21:31', '2024-05-28 08:21:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_aid`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`tag_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tag`
--
ALTER TABLE `tag`
  MODIFY `tag_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
