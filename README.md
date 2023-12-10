# Requirements

- nodejs v14.20.0 or higher version
- npm 6.14.17 or higher version
- docker 24.0.7 or higher version
- docker compose v2.21.0 or higher version
- cypress v12.13.0 or higher version
- synpress v3.7.2-beta.9

# For local run

Add to your project root `.env` file for MetaMask setup, that should look like this:

```bash
NETWORK_NAME=sepolia
PRIVATE_KEY=04e3efb6e8c6b**********443df6c40803224b96e829f01df05985806f42
SECRET_WORDS='test test test test test test test test test test test test'
```

For this test task suggets using `sepolia` network, tested service does not support `goerli` network.

Then run these commands:

```bash
# install dependencies
npm i
# run syregression:e2e command to run tests using synpress
npm run syregression:e2e
# run sy:regression command to run tests using synpress and generate allure report
npm run sy:regression
```

or

```bash
# docker build
docker build --progress=plain -t test-task-red_synpress:latest .
# docker compose
docker-compose up synpress
```

# For Ci run

Add `GH_PAT`, `GH_USERNAME`, `NETWORK_NAME`, `PRIVATE_KEY`, `SECRET_WORDS` values to your github secrets.

## ⚙️ Notes

1. If you want to setup project for CI (GitHub Actions) you should use Docker, as suggested in Synpress documentation https://github.com/Synthetixio/synpress#-using-with-docker
   Otherwise, you would not be able to run tests on CI without Docker.
2. Allure reported does not seem to work with Synpress, suggest using another one.
   Also for this test task I tried using older compatible versions of:

- cypress 12.5.1
- synpress 3.1.0
- allure 2.38 and lower versions

  and still it did not work.

3. While we have successful runs on local, there is one problem with running the on Docker, CI with Docker - slow network connection speed that causes fail on run due to slow connection of MetaMask wallet to the service. Maybe using other MetaMask test networks, which are also suported by the service will help with this issue. Using VPN inside docker did not work out.
