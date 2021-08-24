# How to setup The Home

You must to keep in the app folder and execute the next command:

```
npx yarn install
```

This one´ll install npm dependencies from **package.json**', now:

You must to start the web server with the next

```
npx yarn start 
```

## Continous Integration

The steps are order in the next table:

Command  	            | Description
----------------------  | -------------
yarn install            | Let to download npm dependencies
yarn test -- --coverage | Invoke the test runner (Jest) and make lconv.info(coverage for javascript project)
yarn sonarqube          | Send the app to sonarqube scanner

**Note**: Follow the order to avoid trouble with the pipeline.
