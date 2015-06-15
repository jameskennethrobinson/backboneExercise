var MountainView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= name %>)</td>'),

  events: {
    'click': function() {
      console.log('clicked');
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  

});

