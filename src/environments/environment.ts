// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYnJhc2thbSIsImEiOiJja3NqcXBzbWoyZ3ZvMm5ybzA4N2dzaDR6In0.RUAYJFnNgOnn80wXkrV9ZA',
  },
  recaptcha: {
    siteKey: '6LedcGQeAAAAABdkiQERIul3gOQsjq4X10ocSOwP',
  },
  recaptchav3: {
    siteKey: '6LdH4mYeAAAAAAtUAV9WkHKeTHeuGleYqSVbcQxf',
  },
  logger: {
    level: 'TRACE',
  },
  tomtom: {
    key: 'Fh6qeqoSmkXn29cSN3Uac57h3MICSl0m',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
