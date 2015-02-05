import Ember from 'ember';
export default Ember.ObjectController.extend({
  actions: {
    editPost: function(post) {
      var title = this.get('title');
      var body = this.get('body');
      post.set('title', title);
      post.set('body', body);
      post.save().then(function(){
        this.transitionToRoute('posts');
      }.bind(this));
    },
  }
});
