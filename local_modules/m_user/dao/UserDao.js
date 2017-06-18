'use strict';

class UserDao {
    add(user) {
        let session = null;
        const loadUser = this.loadByUsername(user.Username);
        if(loadUser  != null) {
            throw new Error(user.Username+' is exist');
            return;
        }
        try {
            session = SNBatisUtil.createSession();
            session.insert('insert', user);
            session.commit();
        }
        catch (err){
            session.rollback();
            throw err;
        }
        finally {
            SNBatisUtil.closeSession(session);
        }
    }
    delete(id) {
        let session = null;
        try {
            session = SNBatisUtil.createSession();
            session.update('delete', id);
            session.commit();
        }
        catch (err){
            session.rollback();
            throw err;
        }
        finally {
            SNBatisUtil.closeSession(session);
        }
    }
    update(user) {
        let session = null;
        try {
            session = SNBatisUtil.createSession();
            session.update('update', user)
            session.commit();
        }
        catch (err){
            session.rollback();
            throw err;
        }
        finally {
            SNBatisUtil.closeSession(session);
        }
    }
    loadById(id) {
        let session = null,
            user = null;
        try {
            session = SNBatisUtil.createSession();
            user = session.selectOne('loadById', id);
        }
        catch (err){
            throw err;
        }
        finally {
            SNBatisUtil.closeSession(session);
        }
        return user;
    }
    loadByUsername(username) {
        let session = null,
            user = null;
        try {
            session = SNBatisUtil.createSession();
            user = session.selectOne('loadByUsername', username);
        }
        catch (err){
            throw err;
        }
        finally {
            SNBatisUtil.closeSession(session);
        }
        return user;
    }
    pageList() {

    }

}