
CREATE TABLE `kids` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kids_first_name` varchar(255) DEFAULT NULL,
  `kids_last_name` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;


CREATE TABLE `pickups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kid_id` int(11) DEFAULT NULL,
  `pickup_flag` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `kid_id` (`kid_id`),
  CONSTRAINT `pickups_ibfk_1` FOREIGN KEY (`kid_id`) REFERENCES `kids` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;




