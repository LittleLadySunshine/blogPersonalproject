import Ember from 'ember';
export default Ember.ObjectController.extend({
  actions: {
  deletePost: function(post) {
    post.destroyRecord();
    }
  }
});
