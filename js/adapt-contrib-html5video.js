/*
* adapt-contrib-html5video
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Kevin Corry <kevinc@learningpool.com>
*/
define(function(require) {

    var ComponentView = require("coreViews/componentView");
    var Adapt = require("coreJS/adapt");
    var html5video = ComponentView.extend({
    
        events: {
            'inview': 'inview'
        },


        checkIfResetOnRevisit: function() {
            var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled set defaults
            if (isResetOnRevisit) {
                this.model.reset(isResetOnRevisit);
            }
        },



        inview: function(event, visible) {
                this.setCompletionStatus();
        },
        

    });
    Adapt.register("html5video", html5video);
});
