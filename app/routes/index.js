import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {});

export default Ember.Route.extend({
    fileManager: Ember.inject.service(),
    model() {
    // JamDB
//        return {
//            preprints: this.store.findAll('preprint')
//        };
    },
    actions: {
        goToSubject(sub, subID) {
            this.transitionTo('browse-preprints', {queryParams: {subject: sub, subjectID: subID}});
        }
    }
});
