
/*
 * 설정
 */

module.exports = {
	server_port: 3000,
	db_url: 'mongodb://localhost:27017/db',
	db_schemas: [
	    {file:'./user_schema', collection:'users1', schemaName:'UserSchema', modelName:'UserModel'}
	],
	route_info: [
	],
	facebook: {		// passport facebook
		clientID: '241455674256721',
		clientSecret: '4b01517db4ec8ee3eae0a84ebbf4e64e',
		callbackURL: '/auth/facebook/callback'
	}
}