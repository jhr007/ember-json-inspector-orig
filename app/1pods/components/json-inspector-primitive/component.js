import Ember from 'ember';
import jiMixin from 'ember-json-inspector/mixins/json-inspector-mixin';

export default Ember.Component.extend(jiMixin, {
  classNames: ['ji-primitive'],

  init: function () {
    var val = this.get('jiPrimitive');
    var type = Ember.typeOf(val);

    if( type === 'string') {
      val = '"' + val + '"';
    }
    if( type === 'null') {
      val = "null";
    }


    //add command if not last
    if( ! this.get('isLast') ) {
      val += ',';
    }

    this.set('displayPrimitive', val);

    this._super();
  }
});
