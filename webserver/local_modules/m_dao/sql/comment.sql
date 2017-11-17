drop table if exists comment;
create table comment (
  id int not null primary key auto_increment,
  blog_id int not null,
  user_id int not null,
  content varchar(255) not null,
  create_time datetime not null default now()
) default charset=utf8;

insert into comment (blog_id,user_id,content) values (1,1,"不错，很漂亮");
insert into comment (blog_id,user_id,content) values (1,2,"it's nice !!!");
insert into comment (blog_id,user_id,content) values (1,3,"大家好，我是来打酱油的，哈哈哈哈！！！");
insert into comment (blog_id,user_id,content) values (1,4,"抢沙发啊，抢沙发啊");

insert into comment (blog_id,user_id,content) values (8,5,"沙发，呼呼哈哈哈");
insert into comment (blog_id,user_id,content) values (8,2,"it's nice !!!");
insert into comment (blog_id,user_id,content) values (8,1,"大家好，我是来打酱油的，哈哈哈哈！！！");
insert into comment (blog_id,user_id,content) values (8,4,"抢沙发啊，抢沙发啊");
insert into comment (blog_id,user_id,content) values (8,3,"阿迪散发的说法地方");
