drop table if exists blog;
create table blog (
  id int not null primary key auto_increment,
  type char(1) not null default '',
  create_time datetime not null default now(),
  user_id int not null,
  photos json,
  title varchar(50) default '',
  num_of_likes int default 0,
  num_of_comments int default 0,
  num_of_forwards int default 0,
  text varchar(255) default '',
  link varchar(255) default ''
) default charset=utf8;

insert into blog (type,user_id,photos,num_of_likes,num_of_comments,num_of_forwards,text) values
('1',1,'{"src":"a.jpg","w":0,"h":0}',1,2,3,'this is a test blog');