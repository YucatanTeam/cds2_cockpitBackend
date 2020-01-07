'use strict';

const { sanitizeEntity } = require('strapi-utils');


/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async findOneBySlug(ctx) {
        let lang = ctx.params.lang
        let slug = ctx.params.slug
        let post
        if(lang === "fa") {
            post = await strapi.query('post').findOne({ slug });
        } else if(lang === "en") {
            post = await strapi.query('post').findOne({ en_slug: slug });
        }

        if(post) {
            return sanitizeEntity(post, { model: strapi.models.post })
        } else {
            ctx.notFound("Post does not exist")
        }
    }
};
