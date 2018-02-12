# ember-auth-github

A sample Ember project that uses Github OAuth with [Ember Simple Auth](https://github.com/simplabs/ember-simple-auth) and [Torii](https://github.com/Vestorly/torii).
Everything in this project is explaind in the official document - [Full GitHub Authorization with the torii-provider](https://github.com/simplabs/ember-simple-auth/blob/master/guides/auth-torii-with-github.md)

## Prerequisites

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-auth-github`
* `npm install`

## Configuration
Put your .env file in the project root.

```bash
GITHUB_DEV_CLIENT_ID=<YOUR_API_KEY>
GITHUB_DEV_CLIENT_SECRET=<YOUR CLIENT SECRET>
GITHUB_DEV_USER_AGENT=<YOUR APPLICATION NAME>
DEV_TOKEN_EXCHANGE_URL=http://localhost:4200/api/token
```

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
