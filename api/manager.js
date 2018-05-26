/*
 * Name:            OpenExchange.API.Manager
 * Author:          James Rhodes
 * License:         MIT License
 *
 * Description:
 *  Manages the JSON API for OpenExchange.
 *
 */
var Class = require('../lib/prototype/class.js');
 
OpenExchange.API.Manager = Class.create({

    // <summary>
    // Initializes the API handler.
    // </summary>
    initialize: function(parent)
    {
        // Maintain a reference to the main manager.
        this.parent = parent;
    }
    
});