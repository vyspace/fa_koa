'use strict';

import { combineReducers } from 'redux';
import header from './header';
import footer from './footer';
import record from './record';
import home from './home';
import comment from './comment';
import reply from './reply';
import article from './article';
import editarticle from './editarticle';
import photoalbum from './photoalbum';
import userinfo from './userinfo';
import follow from './follow';
import editlink from './editlink';
import myhome from './myhome';

const rootReducer = combineReducers({
    header,
    footer,
    record,
    home,
    comment,
    reply,
    article,
    editarticle,
    photoalbum,
    userinfo,
    follow,
    editlink,
    myhome
});

export default rootReducer;

