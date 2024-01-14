#### 1. Clone the respository (for first time setup)

```sh
git clone git@github.com:isac-nitkkr/node-modules.git
```

#### 2. Make sure the master branch is up-to-date

```sh
git pull origin master
```

#### 3. Create a branch for your work

```sh
git checkout -b {feature,fix,refactor,remove}/foo
```

Pick any one of the above mentioned categories and replace `foo` with one or two words about your change. For example: `refactor/directors-corner`

#### 4. Make your changes, commit and send a pull request

Note that you will need to send a pull request against the `staging` branch, NOT the `master` branch.

#### 5. Test changes on staging

Once you have incorporated all changes requested in the PR and it is merged, test your changes on \<some-website-url> and make sure everything works the way it is supposed to. After this, open another PR from your branch to `master`.
