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

#### 4. Make your changes and commit

#### 5. Once again, make sure your branch is up-to-date with master

```sh
git rebase origin/master
git push -f
```

If you have any doubt with rebasing, run the following to keep a local backup

```sh
git checkout -b backup-123
```

And make sure to checkout back to your working branch

#### 6. Send a PR!

Now, wait until we review your PR and add any requested changes to your PR by pushing to the same branch.
