'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        let entities;
    
        ctx.query = {
          ...ctx.query,
          Status: 'Active'
        };
        console.log(ctx.query);
    
        console.log(strapi.services);
        if (ctx.query._q) {
          entities = await strapi.services['san-pham'].search(ctx.query);
        } else {
          entities = await strapi.services['san-pham'].find(ctx.query);
        }
    
        return entities.map(entity =>
          sanitizeEntity(entity, { model: strapi.models['san-pham'] })
        );
      },
};
