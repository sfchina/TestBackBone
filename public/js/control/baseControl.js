var BaseControl=Backbone.Model.extend({
    defaults:function() {
        return baseControlDefault;
      },
});

var BaseControls=Backbone.Collection.extend({
    model:BaseControl,
});

var baseControls=new BaseControls();

var BaseControlView=Backbone.View.extend({
    initialize: function() {
        },
    render: function() {
        return 
        }
});