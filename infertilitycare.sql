-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: infertility
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `customer_id` bigint DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `service_id` bigint DEFAULT NULL,
  `appointment_time` timestamp NOT NULL,
  `status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `doctor_note` text COLLATE utf8mb4_unicode_ci,
  `appointment_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `service_id` (`service_id`),
  KEY `idx_customer_id` (`customer_id`),
  KEY `idx_doctor_id` (`doctor_id`),
  KEY `idx_appointment_time` (`appointment_time`),
  CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `appointments_ibfk_3` FOREIGN KEY (`service_id`) REFERENCES `infertility_services` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,3,2,2,'2025-07-09 20:00:00','SCHEDULED',NULL,'Tái khám siêu âm');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examination_records`
--

DROP TABLE IF EXISTS `examination_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examination_records` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `patient_id` bigint NOT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `appointment_id` bigint DEFAULT NULL,
  `date` timestamp NOT NULL,
  `betaHCG` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hormones` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ultrasound` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medication_reaction` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `clinical_progress` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `patient_id` (`patient_id`),
  KEY `doctor_id` (`doctor_id`),
  KEY `appointment_id` (`appointment_id`),
  CONSTRAINT `examination_records_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `examination_records_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `examination_records_ibfk_3` FOREIGN KEY (`appointment_id`) REFERENCES `appointments` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examination_records`
--

LOCK TABLES `examination_records` WRITE;
/*!40000 ALTER TABLE `examination_records` DISABLE KEYS */;
/*!40000 ALTER TABLE `examination_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `infertility_services`
--

DROP TABLE IF EXISTS `infertility_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `infertility_services` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `infertility_services`
--

LOCK TABLES `infertility_services` WRITE;
/*!40000 ALTER TABLE `infertility_services` DISABLE KEYS */;
INSERT INTO `infertility_services` VALUES (1,'IUI Service','Dịch vụ thụ tinh trong tử cung',500.00),(2,'IVF Service','Dịch vụ thụ tinh trong ống nghiệm',5000.00);
/*!40000 ALTER TABLE `infertility_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN'),(3,'CUSTOMER'),(2,'DOCTOR'),(4,'MANAGER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_doctors`
--

DROP TABLE IF EXISTS `service_doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_doctors` (
  `service_id` bigint NOT NULL,
  `doctor_id` bigint NOT NULL,
  PRIMARY KEY (`service_id`,`doctor_id`),
  KEY `doctor_id` (`doctor_id`),
  CONSTRAINT `service_doctors_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `infertility_services` (`id`) ON DELETE CASCADE,
  CONSTRAINT `service_doctors_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_doctors`
--

LOCK TABLES `service_doctors` WRITE;
/*!40000 ALTER TABLE `service_doctors` DISABLE KEYS */;
INSERT INTO `service_doctors` VALUES (1,2),(2,2);
/*!40000 ALTER TABLE `service_doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `treatment_phases`
--

DROP TABLE IF EXISTS `treatment_phases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `treatment_phases` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `treatment_id` bigint NOT NULL,
  `phase_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `fk_treatment_id` (`treatment_id`),
  CONSTRAINT `treatment_phases_ibfk_1` FOREIGN KEY (`treatment_id`) REFERENCES `treatments` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `treatment_phases`
--

LOCK TABLES `treatment_phases` WRITE;
/*!40000 ALTER TABLE `treatment_phases` DISABLE KEYS */;
INSERT INTO `treatment_phases` VALUES (1,1,'Giai đoạn chuyển phôi','2025-07-01',NULL,'Chuyển phôi thành công');
/*!40000 ALTER TABLE `treatment_phases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `treatment_updates`
--

DROP TABLE IF EXISTS `treatment_updates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `treatment_updates` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `treatment_id` bigint NOT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `next_injection` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `next_appointment` timestamp NULL DEFAULT NULL,
  `notes` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `treatment_id` (`treatment_id`),
  KEY `doctor_id` (`doctor_id`),
  CONSTRAINT `treatment_updates_ibfk_1` FOREIGN KEY (`treatment_id`) REFERENCES `treatments` (`id`) ON DELETE CASCADE,
  CONSTRAINT `treatment_updates_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `treatment_updates`
--

LOCK TABLES `treatment_updates` WRITE;
/*!40000 ALTER TABLE `treatment_updates` DISABLE KEYS */;
/*!40000 ALTER TABLE `treatment_updates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `treatments`
--

DROP TABLE IF EXISTS `treatments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `treatments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `customer_id` bigint DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `service_id` bigint DEFAULT NULL,
  `method` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_date` date NOT NULL,
  `phase` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `service_id` (`service_id`),
  KEY `idx_customer_id` (`customer_id`),
  KEY `idx_doctor_id` (`doctor_id`),
  KEY `FKkcuat58mifrgqvy08n2eokwa5` (`user_id`),
  CONSTRAINT `treatments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `treatments_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `treatments_ibfk_3` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `treatments_ibfk_4` FOREIGN KEY (`service_id`) REFERENCES `infertility_services` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `treatments`
--

LOCK TABLES `treatments` WRITE;
/*!40000 ALTER TABLE `treatments` DISABLE KEYS */;
INSERT INTO `treatments` VALUES (1,3,2,2,'IVF','Đang điều trị','2025-07-28','Giai đoạn chuyển phôi',NULL),(2,3,2,2,'IVF','Đã hoàn thành','2025-06-22','Ngày thụ tinh (Fertilization)',NULL),(3,3,2,2,'IVF','Đã hoàn thành','2024-06-18','Kích thích buồng trứng',NULL),(4,3,2,2,'IVF','Đã hoàn thành','2024-06-13','Tiêm thuốc kích trứng',NULL),(5,3,2,2,'IVF','Đã hoàn thành','2024-06-12','Thăm khám siêu âm',NULL),(6,3,2,2,'IVF','Đã hoàn thành','2025-06-10','Xét nghiệm nội tiết',NULL);
/*!40000 ALTER TABLE `treatments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,1),(2,2),(5,2),(6,2),(7,2),(8,2),(9,2),(3,3),(10,3),(11,3),(12,3),(13,3),(14,3),(15,3),(16,3),(17,3),(4,4);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `idx_username` (`username`),
  KEY `idx_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin1','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','Admin One','admin1@fertilitycare.com'),(2,'doctor1','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','TS.BS Nguyễn  Thị Nhã','doctor1@fertilitycare.com'),(3,'customer1','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','Nguyễn Văn Xô Bin','customer1@fertilitycare.com'),(4,'manager1','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','Quản lý 1','manager1@fertilitycare.com'),(5,'doctor2','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','PGS.TS.BS Hồ Mạnh  Tường','doctor2@fertilitycare.com'),(6,'doctor3','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','BS.CKII Trần Thị Kim Xuyến','doctor3@fertilitycare.com'),(7,'doctor4','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','TS.BS Vũ Nhật Khang','doctor4@fertilitycare.com'),(8,'doctor5','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','BS.CKII Nguyễn Thanh Tâm','doctor5@fertilitycare.com'),(9,'doctor6','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','PGS.TS.BS Lê Hoàng','doctor6@fertilitycare.com'),(10,'customer2','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','Nguyễn Thị Bầu','customer2@fertilitycare.com'),(11,'customer3','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','Trần Văn Cú','customer3@fertilitycare.com'),(12,'customer4','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','Lê Thị Doan','customer4@fertilitycare.com'),(13,'customer5','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','Nguyễn Thị Bí','customer5@fertilitycare.com'),(14,'customer6','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','Trần Văn Chó','customer6@fertilitycare.com'),(15,'customer7','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','Lê Thị Diệu','customer7@fertilitycare.com'),(16,'customer8','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','Nguyễn Thị Bưởi','customer8@fertilitycare.com'),(17,'customer9','$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi','Trần Văn Cáo','customer9@fertilitycare.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-09 14:07:22
