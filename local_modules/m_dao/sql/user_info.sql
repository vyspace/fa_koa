create table if not exists user_info (
  id int(11) not null primary key auto_increment,
  name varchar(50) default '',
  gender char(1) default '1',
  phone varchar(50) default '',
  birthday date default '1990-01-01'
) default charset=utf8;