## You want to contribute some code?

We are always looking for quality contributions and will be happy to accept your 
Pull Requests as long as they adhere to some basic rules:

* Please make sure that your contribution fits well in the project's context:
  * we are aiming at rebuilding bootstrap components in pure Angular 2, without any dependencies on any external JavaScript library;
  * the only dependency should be bootstrap CSS and its markup structure
* Please assure that you are submitting quality code, specifically make sure that:
  * your component has accompanying tests and all the tests are passing
  * your PR doesn't break the build; check the jenkins build status after opening a PR and push corrective commits if anything goes wrong
  * your commits conform to the conventions established [here](https://github.com/stevemao/conventional-changelog-angular/blob/master/convention.md)

* Remember to keep the changes at [CHANGELOG.md](CHANGELOG.md), just types **feat** or **fix**.

**Note:**: Title commit must be:
```
<type>(scope): title
```
* **project**: name´s project.
* **type**: go to [conventions](https://github.com/stevemao/conventional-changelog-angular/blob/master/convention.md)
* **(scope)**: why do i do commit? (context)
* **title**: a short pharse.

**Example:** <code>DP01 - chore(app): Initial Commit</code>, **you must take care spaces, hyphen, two dots**

### Test

The unit test must be type like the next conventions (**remember a assert by test and to do test with mocks (if applied)**) :
```
NameClassTest
```

Where **NameClassTest** is the class to evaluate and must be the same package level. Otherwise, method´s convention is:
```
@Test
methodName_action_modify
```

* **methodName**: This name must be equals to the method to test.
* **action**: Use **isValueRight**, **isNotNull**, etc.. what expected about of the test.
* **modify**: If you need a second name, to avoid duplicity.
