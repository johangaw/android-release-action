# Hello world javascript action

This action is used to create a new release with a specified Android App Bundle (.aab) on google play console.

To allow the action to upload bundles you will nee to connect a service account to your app.
This is done on google play console under `Settings > Developer Account > API Access`

## Inputs

### `key-file`

**Required** Path to the service account key file (relative the project root).

### `package-name`

**Required** Android package name.

### `aab-file`

**Required** Path to the aab file (relative the project root).

### `track`

**Required** The track tp publish the aab to (internal, alpha, beta or production). Default internal

### `release-name`

**Required** The name of the new release. If not provided the versionCode of the aab will be used.

## Outputs

### `version-code`

The version code of the uploaded aab.

## Example usage

```yml
uses: actions/hello-world-javascript-action@v1.1
with:
  key-file: ./path/to/account-service-key-file.json
  package-name: com.example.app
  aab-file: ./path/to/app-bundle.aab
  track: internal
  release-name: Ny for my next release
```
