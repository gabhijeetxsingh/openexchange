/*
 * Name:            OpenExchange.Wallets.Manager
 * Author:          James Rhodes
 * License:         MIT License
 *
 * Description:
 *  Manages the wallets for OpenExchange.
 *
 */
var Class = require('../lib/prototype/class.js');
OpenExchange.Wallets.Manager = Class.create({

    // <summary>
    // Initializes the wallet handler.
    // </summary>
    initialize: function(parent)
    {
        // Maintain a reference to the main manager.
        this.parent = parent;
    }

});