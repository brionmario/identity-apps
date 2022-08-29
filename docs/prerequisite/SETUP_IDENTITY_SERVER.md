# Setup WSO2 Identity Server

## Allow CORS Origins

Add the following code to `repository/conf/deployment.toml` in `WSO2 Identity Server` distribution pack to allow CORS.

```toml
[cors]
allowed_origins = [
    "https://localhost:9000",
    "https://localhost:9001"
]
supported_methods = [
    "GET",
    "POST",
    "HEAD",
    "OPTIONS",
    "PUT",
    "PATCH",
    "HEAD",
    "DELETE",
    "PATCH"
]
exposed_headers = [ "Location" ]
```

## Configure FIDO2 origins

Add your hostname and port as a trusted FIDO2 origin to the `deployment.toml` file as given below.

```toml
[fido.trusted]
origins=["https://localhost:9000"]
```

## Make Applications Editable

Currently, `Console` & `My Account` are considered as system applications hence they are readonly by default. In order configure them, you need to add the following config to the `deployment.toml` file to override the default behavior.

```toml
[system_applications]
read_only_apps = []
```

## Start the Identity Server

Now you can go ahead and start the Identity Server that was downloaded in the [Prerequisites](#prerequisite) step.

For instructions on startup, [read the docs](https://is.docs.wso2.com/en/latest/deploy/get-started/run-the-product/).

## Go to Management Console

Navigate to the Management Console i.e `https://localhost:9443/carbon/` from the browser, and login to the system by entering an admin password.

> 💡 You can find out the default password details here: [https://docs.wso2.com/display/ADMIN44x/Configuring+the+System+Administrator](https://docs.wso2.com/display/ADMIN44x/Configuring+the+System+Administrator)

## Configure Callback URLs

In the Management Console, navigate to `Service Providers -> List` from left side panel. And then go to `Edit` option in the application that you want to configure in dev mode (ex: `MY_ACCOUNT`). Then click on `Inbound Authentication Configuration -> OAuth/OpenID Connect Configuration -> Edit`. And then update the `Callback Url` field with below corresponding values.

### Console

```shell
regexp=(https://localhost:9443/console|https://localhost:9443/t/(.*)/console|https://localhost:9443/console/login|https://localhost:9443/t/(.*)/console/login|https://localhost:9001/console|https://localhost:9001/t/(.*)/console|https://localhost:9001/console/login|https://localhost:9001/t/(.*)/console/login)
```

### My Account

```shell
regexp=(https://localhost:9443/myaccount|https://localhost:9443/t/(.*)/myaccount|https://localhost:9443/myaccount/login|https://localhost:9443/t/(.*)/myaccount/login|https://localhost:9000/myaccount|https://localhost:9000/t/(.*)/myaccount|https://localhost:9000/myaccount/login|https://localhost:9000/t/(.*)/myaccount/login)
```
