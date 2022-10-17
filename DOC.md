# installation

## making react-native-ultimate-config work with the new arch

refer to this link https://github.com/maxkomarychev/react-native-ultimate-config/issues/107

- inside the package look for this line under `/android/build.gradle`
  `project.getConfigurations().implementation.setCanBeResolved(true)`
- comment it
- the package look for this line under `/android/build.gradle`
  `classpath += files(project.getConfigurations().getByName('implementation').asList())`
- comment it

## adding values to the env file

### ios

- open xcode and make sure the variable is like this
  `${APP_URL}`

### android

- open the file in you want to call the variable
  if the file is xml `${APP_NAME}`
  if the file is java file or anyother `project.config.get("BUNDLE_ID")`
