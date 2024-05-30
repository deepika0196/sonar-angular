var sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'http://10.6.76.231:9000',
    token: '2d68d9ab11709b0d2c2656309d487a11ff02e616',
    options: {
      'sonar.projectName': 'ECMCA FRONTEND',
      'sonar.sources': '.',
      'sonar.inclusions': 'src/**', // Entry point of your code
      'sonar.exclusions':
        'src/assets/**, **/*.spec.ts, **/*.module.ts, *.env.ts, *.interceptor.ts, src/environments/**, src/app/core/utils/cif-validator.ts, src/app/services/item-example.service.ts', // Entry point of your code which you want to exclude
      // "sonar.exclusions": "src/assets/**,**/*.spec.ts,encryption.service.ts", // Entry point of your code which you want to exclude
      'sonar.language': 'ts',
      // 'sonar.testExecutionReportPaths': 'reports/ut_report.xml', // Entry point of test report xml file 'sonar.'sonar.
      // 'typescript.lcov.reportPaths': 'coverage/{project-name}/lcov.info', // Entry point of coverage report lcov file also added project 'coverage/project-name/lcov.info
    },
  }
  // () => process.exit()
);
