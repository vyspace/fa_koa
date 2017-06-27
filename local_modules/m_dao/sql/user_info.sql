create table if not exists user_info (
  id int not null primary key auto_increment,
  name varchar(50) not null default '',
  gender char(1) not null default '1',
  phone varchar(50) not null default '',
  profile varchar(255) not null default '',
  birthday date not null default '1990-01-01'
  status char(1) not null default '1'
) default charset=utf8;