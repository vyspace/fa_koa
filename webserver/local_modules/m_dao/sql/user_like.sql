drop table if exists user_like;
create table user_like (
    user_id int not null,
    blog_id int not null
) default charset=utf8;

insert into user_like (user_id, blog_id) values
(1,3), (1,5),(2,5),(1,8),(1,10);

select * from user_like where user_id=1 and blog_id=3;

select blog_id from user_like where user_id=1;