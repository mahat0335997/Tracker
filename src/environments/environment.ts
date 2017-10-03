// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBRZUVGL2fDrpKImHP9KvZSnnzP19FRWW4",
    authDomain: "poc-tracker-80f96.firebaseapp.com",
    databaseURL: "https://poc-tracker-80f96.firebaseio.com",
    projectId: "poc-tracker-80f96",
    storageBucket: "poc-tracker-80f96.appspot.com",
    messagingSenderId: "871095518077"
  }

};
