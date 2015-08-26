Router.configure({
  layoutTemplate: 'polyenvironments'
});

// comps should havean image reference and analysis info
Comps = new Mongo.Collection('comps');

var Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});


if (Meteor.isClient) {

  Router.route('/', function () {
    this.render('allComps');
    this.layout('polyenvironments');
  },{
    name: 'comp.all'
  });

  Template.allComps.helpers({
    comp: function () {
      // return function to return comp from db
    }
  });

  Template.allComps.events({
    // events for nav and for play
    'click button': function () {
      // increment the counter when button is clicked
      // Session.set('counter', Session.get('counter') + 1);
    }
  });



  Router.route('/comp/:_id', function () {
    // use the template named ApplicationLayout for our layout
    this.layout('polyenvironments');

    this.render('comp');

  },{
    name: 'comp.show'
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
