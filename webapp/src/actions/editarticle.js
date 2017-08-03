'use strict';

export const EDIT_ARTICLE_SAVE = 'EDIT_ARTICLE_SAVE';

export function saveEditArticle(payload) {
    return {
        type: EDIT_ARTICLE_SAVE,
        payload
    };
}

