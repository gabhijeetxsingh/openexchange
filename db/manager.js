/*
 * Name:            OpenExchange.DB.Manager
 * Author:          James Rhodes
 * License:         MIT License
 *
 * Description:
 *  Manages the database for OpenExchange.
 *
 */
var Class = require('../lib/prototype/class.js');
OpenExchange.DB.Manager = Class.create({

    // <summary>
    // Initializes the database and connects to it.
    // </summary>
    initialize: function(parent)
    {
        // Maintain a reference to the main manager.
        this.parent = parent;
    }

});