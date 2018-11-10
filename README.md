oxford-cli
==========

# Getting started
You'll first want to make sure you have set gotten your Oxford API id and key. Those can be 
obtained [here](https://developer.oxforddictionaries.com/). After that set your environment variables.

```shell
$ export OXFORD_CLI_APP_ID=yourid
$ export OXFORD_CLI_APP_KEY=yourkey
```

# Running locally
1. Install the dependencies
```shell
$ npm install
```
2. Run
```shell
$ ./bin/run word
```
3. Create a link
If you would like to be able to run
```shell
$ oxford-cli myword
```
then create the link
```shell
$ npm link
```
4. Alias

Typing in `oxford-cli` might be Q_Q for some. If so then just set up an alias!
```shell
$ alias define=oxford-cli
$ define profit
```
# Usage
# Commands
# Development Status
Issues are disabled for now but you can see the status of development [here](https://publish.smartsheet.com/790d5d9285894795b44a24d97590b69c).

Email me if you want to get in contact with me about this repo
