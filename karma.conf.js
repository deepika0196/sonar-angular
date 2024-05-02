module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      // ! start sonar reports configuration
      require('karma-phantomjs-launcher'),
      require('karma-sonarqube-unit-reporter'),
      // ! end sonar reports configuration
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    // ! start sonar reports configuration
    sonarQubeUnitReporter: {
      sonarQubeVersion: 'LATEST',
      outputFile: 'reports/ut_report.xml',
      useBrowserName: false,
    },
    // ! end sonar reports configuration
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/arquetipo-angular'),
      reports: ['html', 'lcovonly', 'text-summary'], // ! sonarqube can only read lcov files.
      fixWebpackSourcePaths: true,
    },
    port: 9876,
    reporters: ['progress', 'kjhtml', 'sonarqubeUnit'], // ! Add sonarqubeUnit in array
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: ["Chrome"],
    // ! start sonar reports configuration
    browsers: ['PhantomJS', 'ChromeHeadless', 'Chrome'],
    customLaunchers: {
      ChromeHeadlessCI: { base: 'ChromeHeadless', flags: ['--no-sandbox'] },
    },
    // ! end sonar reports configuration
    singleRun: false,
    restartOnFileChange: true,
  });
};
