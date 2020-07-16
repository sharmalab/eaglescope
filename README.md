# DataScope 2
Cohort Visualization And Selection Dashboard For Biomedical Data Exploration Without Any Coding. 

## Development
Install dependencies using `npm install`

Build app using `npm run build`

Develop mode using `npm run dev`


### Running ###


##### Prerequisites

* Install [Node.js](https://nodejs.org/en/download/) and [NPM](https://www.npmjs.com/get-npm)


##### Installation

* Clone the [repository](https://github.com/birm/datascope2.git)
* Enter the datascope2 directory (this directory)
* Get dependencies with ```npm install``
* Run ```npm run build```

##### Running
* Modify the files present in ```./config/vis-config.json``` to fit your needs:
    * UNIT_OF_GRID_VIEW
    * MARGIN_OF_GRID_VIEW
    * DATA_RESOURCE_URL (For data resource)
    * VISUALIZATION_VIEW_CONFIGURATION (For dashboard settings)


* Run ```node app.js```
* Goto ```http://localhost:3000``` from your favorite browser.

Read the [User Guide](https://github.com/sharmalab/Datascope/wiki)  for more details