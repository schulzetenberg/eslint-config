# eslint-config-react
 Custom eslint config enforcing Airbnb, Typescript, React & Prettier rules

### Install
`
	$ npm i --dev @schulzetenberg/eslint-config-react
`

### Enable ESLint on TS files in VSCode
Add the following to settings.json:

`
	"eslint.validate": [
		"javascript",
		"javascriptreact",
		{
			"autoFix": true,
			"language": "typescript"
		},
		{
			"autoFix": true,
			"language": "typescriptreact"
		}
	]
`
