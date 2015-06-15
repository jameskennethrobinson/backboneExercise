var MountainsView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {

    this.render();
  },

  render: function() {
    this.$el.html('<th>Images</th>').append(
      this.collection.map(function(mountain){
        debugger;
        return new MountainView({model: mountain}).render();
      })
    )
  }
});
