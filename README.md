# rentcar-io

Personal Project to search for prices on GoldCar site using the UI Test Tool Node.JS + WebDriver.IO

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Node.JS and NPM installed on your machine.

## Installing & Running

1. Install Node.JS and NPM on your machine (using Homebrew).
```sh
   brew install node
```

2. Clone the repository (using git)
```sh
    git clone https://github.com/jontavd/rentcar-io.git 
```

3. Install dependencies (using npm)
```sh
    npm install
```

4. Enjoy!

Running the tests will open a Chrome browser run the scripts, use all available dates from 3 days from now and last day of the next month respecting the car rental rules (minimum 3 days, maximum 28 days).

```sh
    npm run alldates
```


5. Advanced (Optional)

You can limit the range of dates and put them on the scenario 'specificdates' on `features/login.feature` file. and run the command:
```sh
    npm run specificdates
```

## Known issues (TODOs)
- As this is a very small project done in a couple of hours there are a lot of bad practices as sleeps, hardcodes and more.
- It will be evolving on demand ( for each new car rent contract ).
- Feel free to use and improve
