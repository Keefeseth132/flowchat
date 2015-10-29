// Messages = new Meteor.Collection('messages');

if (Meteor.isClient) {
	// console.log("script is loading")
    Template.loginPage.events({
        'submit #login': function(event) {
            event.preventDefault();
            var usernameVar = event.target.username.value;
            var passwordVar = event.target.password.value;
            // console.log("Form submitted.");
            Meteor.loginWithPassword(usernameVar, passwordVar);
        },

        'submit #register': function(event){
        	event.preventDefault();
        	var usernameVar = event.target.regUsername.value;
        	var passwordVar = event.target.regPassword.value;
        	// console.log("reg form submitted");
        	Accounts.createUser({
        	    username: usernameVar,
        	    password: passwordVar
        	});
        }
    });

    Template.chatPage.events({
    	'click #logout': function(event){
    		event.preventDefault();
    		Meteor.logout();
    	},

        'submit form': function(event){
            event.preventDefault();
            console.log(Meteor.user());
            if (Meteor.user()){
              var name = Meteor.user().username;
            } else {
              var name = 'Annoymous';
            }

            var message = document.getElementById('message');
            // console.log(message);
            if (message.value !== '') {
              Messages.insert({
                name: name,
                message: message.value,
                time: Date.now()
              })

              document.getElementById('message').value = '';
              message.value = '';
            };
          },

          // 'submit form': function (event) {
          //   event.preventDefault();
          //   var postContent = $('.postContent').val();
          //   Meteor.call('newPost', {postContent: postContent});
          // }
    });

    Template.messages.helpers({
      messages: function(){
        return Messages.find({}, {sort: {time: -1}} );
      }
    });

//     Meteor.methods({
//       newPost: function (post) {
//         Posts.insert(post);
//       }
//     })
// }
