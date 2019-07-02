// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEndpoint: 'http://localhost:8080/api/v1/hn/items',
  searchContext: '/search',
  getLastContext: '/last',
  defaultSorting: 'DESC',
  defaultSize: 10,
  github: 'https://github.com/MAtchane',
  linkedin: 'https://linkedin.com/in/matchane',
  githubRepo: 'https://github.com/MAtchane/elastic-hn-search',
  faqUrl: '/faq',
  personalWebsite: 'https://matchane.github.io/',
  myEmail: 'mosab.atchane@gmail.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
