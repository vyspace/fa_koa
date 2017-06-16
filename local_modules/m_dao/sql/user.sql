CREATE TABLE IF NOT EXISTS 'user' (
  'id' int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  'username' varchar(50) DEFAULT '',
  'password' varchar(50) DEFAULT ''
) DEFAULT CHARSET=utf8;
