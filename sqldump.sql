-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Dec 18, 2018 at 11:41 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `c1018db`
--

-- --------------------------------------------------------

--
-- Table structure for table `currentNumber`
--

CREATE TABLE `currentNumber` (
  `ID` mediumint(8) unsigned NOT NULL,
  `number` int(10) unsigned NOT NULL,
  `numberCode` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--
-- Indexes for dumped tables
--

--
-- Indexes for table `currentNumber`
--
ALTER TABLE `currentNumber`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `currentNumber`
--
ALTER TABLE `currentNumber`
  MODIFY `ID` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;