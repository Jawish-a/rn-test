# installation

## adding values to the env file

### ios

- open xcode and make sure the variable is like this
  `${APP_URL}`

### android

- open the file in you want to call the variable
  if the file is xml `${APP_NAME}`
  if the file is java file or anyother `project.config.get("BUNDLE_ID")`
