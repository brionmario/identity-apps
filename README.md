# WSO2 Identity Server Apps

End-user apps in WSO2 Identity Server

===============================

|  Branch | Build Status | Travis CI Status |
| :------------ |:------------- |:-------------
| master      | [![Build Status](https://wso2.org/jenkins/view/Dashboard/job/platform-builds/job/identity-apps/badge/icon)](https://wso2.org/jenkins/view/Dashboard/job/platform-builds/job/identity-apps/) | [![Build Status](https://travis-ci.org/wso2/identity-apps.svg?branch=master)](https://travis-ci.org/wso2/identity-apps) |

[![Stackoverflow](https://img.shields.io/badge/Ask%20for%20help%20on-Stackoverflow-orange)](https://stackoverflow.com/questions/tagged/wso2is)
[![Slack](https://img.shields.io/badge/Join%20us%20on-Slack-%23e01563.svg)](https://join.slack.com/t/wso2is/shared_invite/zt-19lsbfvhc-T6t0p_J4tXcMvnuHX8605w)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/wso2/product-is/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/follow/wso2.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=wso2)

## Prerequisite

### Setup Development Environment

1. Install NodeJS LTS(Latest Stable Version) from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Instal the latest version of [pnpm](https://pnpm.io/).

    ```shell
    npm install -g pnpm@latest
    ```

    Or, follow the other [recommended installation options](https://pnpm.io/installation).

3. Install Maven from [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi).
4. Install JDK 1.8 [https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html).

### Download WSO2 Identity Server

In order to setup this repository locally, you need to have [WSO2 Identity Server](https://wso2.com/identity-server/) installed on your local environment.

We recommend you to download the [latest release](https://github.com/wso2/product-is/releases) or build the [product-is](https://github.com/wso2/product-is) from [source](https://github.com/wso2/product-is#building-the-distribution-from-source).

### Setup WSO2 Identity Server

Follow the [Identity Server setup guide](./docs/prerequisite/SETUP_IDENTITY_SERVER.md) and configure the WSO2 Identity Server for running the apps in the development mode.

## Build & Run

### Build

Clone or download the Identity Apps repository and run the following commands from the command line in the project root directory (where the `package.json` is located) to build all the packages with dependencies.

```shell
# From project root.
mvn clean install
```

### Run

To start the apps in development mode, execute the following commands accordingly.

#### Console

```shell
# To start Console
cd apps/console
pnpm start
```

Once the development server is live, you can access the application via [https://localhost:9001/console](https://localhost:9001/console).

#### My Account

```shell
# To start My Account
cd apps/myaccount
pnpm start
```

Once the development server is live, you can access the application via [https://localhost:9000/myaccount](https://localhost:9000/myaccount).

## Configuration

The portals i.e. Console & My Account are configurable using the `deployment.toml` when they are hosted inside the Identity Server.
Read through our [configurations guidelines](./docs/CONFIGURATION.md) to learn about the configuration process.

## Deployment

Go through our [deployment guide](./docs/DEPLOYMENT.md) to learn the different supported app deployment options.

## Connectors

Go through our [connectors guide](./docs/CONNECTORS.md) to learn how to handle connectors in the Identity Server Console.

## Troubleshoot

Go through our [troubleshooting guide](./docs/TROUBLESHOOTING.md) to clarify and issues you encounter.

If the issue you are facing is not on the existing guide, consider reaching out to us on slack, stackoverflow threads or by creating an issue as described in [Reporting Issues](#reporting-issues).

## Contributing

Go through our [contributing guideline](./CONTRIBUTING.md) to get an understanding about our contribution process and other necessary instructions.

## Reporting Issues

We encourage you to report issues, improvements and feature requests regarding the project through [GitHub Issue Tracker](https://github.com/wso2/product-is/issues).

**Important:** And please be advised that, security issues must be reported to [security@wso2.com](mailto:security@wso2.com), not as GitHub issues, in order to reach proper audience. We strongly advise following the [WSO2 Security Vulnerability Reporting Guidelines](https://docs.wso2.com/display/Security/WSO2+Security+Vulnerability+Reporting+Guidelines) when reporting the security issues.

## License

Licenses this source under the Apache License, Version 2.0 ([LICENSE](LICENSE)), You may not use this file except in compliance with the License.

---------------------------------------------------------------------------
(c) Copyright 2022 WSO2 LLC.
