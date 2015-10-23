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
    	'click .logout': function(event){
    		event.preventDefault();
    		Meteor.logout();
    	}
    });
}
