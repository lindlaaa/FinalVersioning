/***********************
 *  CUSTOM TEMPLATES   *
 ***********************/

// var myTemplateConfig = {
//   orientation: "vertical-reverse",
//   colors: ["#F00", "#0F0", "#00F"], // branches colors, 1 per column
//   branch: {
//     lineWidth: 8,
//     // Dash segments, see:
//     // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
//     lineDash: [5, 3],
//     spacingX: 50
//   },
//   commit: {
//     spacingY: -80,
//     dot: {
//       size: 12,
//       lineDash: [4]
//     },
//     message: {
//       display: true,
//       displayAuthor: true,
//       displayBranch: true,
//       displayHash: false,
//       font: "normal 12pt Arial"
//     },
//     shouldDisplayTooltipsInCompactMode: true, // default = true
//     tooltipHTMLFormatter: function (commit) {
//       return "<b>" + commit.sha1 + "</b>" + ": " + commit.message;
//     }
//   }
// };
// var myTemplate = new GitGraph.Template(myTemplateConfig);

/***********************
 *    INITIALIZATION   *
 ***********************/

// var config = {
//   template: "metro", // could be: "blackarrow" or "metro" or `myTemplate` (custom Template object)
//   reverseArrow: false, // to make arrows point to ancestors, if displayed
//   orientation: "vertical",
//   // mode: "compact" // special compact mode: hide messages & compact graph
// };
// var gitGraph = new GitGraph(config);

// const masterConfig = {
//   name: "master",
//   column: 3, 
//   color: "#17BEBB",
//   commitDefaultOptions: {
//     dotColor: "black",
//     messageColor: "#17BEBB",
//     tagColor: "#17BEBB",
//     displayTagBox: true
//   }
// }
// const developConfig = {
//   name: "develop",
//   column: 5,
//   color: "#E0CA3C",
//   commitDefaultOptions: {
//     dotColor: "black",
//     tagColor: "#E0CA3C",
//     messageColor: "#E0CA3C",
//     displayTagBox: true,
//   }
// }
// const unfinished = {
//   lineDash: [3, 2],
//   dotColor: "white",
//   dotStrokeWidth: 5,
//   message: "Unfinished feature branch."
// }

// const tag = (tag) => {
//   return {
//     tag: tag
//   }
// }
// const counter = (start) => {
//   let count = start - 1
//   return {
//     getCurr: () => count - (start - 2),
//     nextColumn: () => count++,
//     closeColumn: () => --count
//   }
// }

// const newRelease = (version) => {
//   return develop.branch({
//     name: "release/v" + version,
//     column: 4,
//     color: "#4CB944",
//     commitDefaultOptions: {
//       dotColor: "black",
//       tagColor: "#4CB944",
//       messageColor: "#4CB944",
//     }
//   }).commit({
//     lineDash: [3, 2],
//     dotStrokeWidth: 5,
//     dotStrokeColor: "#4CB944",
//     dotColor: "white",
//     tag: version,
//     displayTagBox: false,
//     message: "Testing for release v" + version,
//   });
// }
// const newProduction = (version) => {
//   return master.branch({
//     name: "production/v" + version,
//     column: 2,
//     color: "#E55934",
//     commitDefaultOptions: {
//       dotColor: "black",
//       messageColor: "#E55934",
//       tagColor: "#E55934",
//     }
//   }).commit({
//     lineDash: [3, 2],
//     dotStrokeWidth: 5,
//     dotStrokeColor: "#E55934",
//     dotColor: "white",
//   });
// }
// const newHotfix = (prod, version) => {
//   return prod.branch({
//     name: "hotfix/" + version,
//     column: 1,
//     color: "red",
//     commitDefaultOptions: {
//       dotColor: "black",
//       messageColor: "red",
//       tagColor: "red",
//     },
//   });
// }

// let branchFactory = (originator, name, startingColumn, color) => {
//   let prefix = name;
//   let origin = originator;
//   const column = counter(startingColumn + 1)

//   return {
//     new: () => origin.branch({
//       name: prefix + "/" + column.getCurr(),
//       column: column.nextColumn(),
//       color: color,
//       commitDefaultOptions: {
//         dotColor: "black",
//         messageColor: color,
//         tagColor: color,
//         displayTagBox: false,
//       }
//     }).commit(),
//     finish: (feature) => feature.merge(develop)
//   }
// }

// TODO alindley
// create a function to create production branches
// create a function to create hotfix branches
//
// create a function to keep track of the versions and increment automatically.
//   A new version object maybe, based in a clojure and compared accross branches?
//
// create a method to merfe features into develop, then backpull develop into features
//    push new features to a list and merge to each?
//
// Better yet: create a feature, master, release, hotfix, priduction clojure 
//    that is responsible for controlling all activity of that branch type.
//    This can make versioning easier?

/************************
 * BRANCHES AND COMMITS *
 ************************/

// Create branch named "master"
// var master = gitGraph.branch( masterConfig );

// master.commit( tag("1.1") );

// let develop = master.branch( developConfig );

// let featureFactory = branchFactory(develop, "feature", 6, "#CA61C3")
// let feature1 = featureFactory.new()

// develop.commit( tag("1.0.0") );

// feature1
//   .commit()

// feature1
//   .merge( develop, tag("1.1.0") )

// let release1 = newRelease("1.1.0")
// release1
//   .merge( master, tag("1.2.0") );

// let feature3 = featureFactory.new()

// feature3
//   .commit()

// feature3
//   .merge( develop, tag("1.2.0") )


// let release2 = newRelease("1.2.0")

// release2
//   .merge( master, tag("1.2.0") );

// let prodution1 = newProduction("1.2.0")

// let hotfix1 = newHotfix( prodution1, "1.2.1" )
// hotfix1
//   .commit({message: "Hotfix for production version 1.2",});
// hotfix1
//   .merge(prodution1, {message: "Merge hotfix/1.2.1 into production/1.2.0",});
// prodution1
//   .merge( master, tag("1.2.1") );
// master
//   .merge( develop, backpull );


  /*****************
 *   constants   *
 *****************/

const hotfixColumn = 1;
const productionColumn = 2;
const developColumn = 3;
const releaseColumn = 4;
const featureStartingColumn = 5;

const backpull = {
  lineDash: [3, 2],
  dotColor: "white",
  dotStrokeWidth: 5,
  dotStrokeColor: "#E0CA3C",
  displayTagBox: false,
}


/******************
 *   generators   *
 ******************/

// couter for branch columns
let counterGenerator = (firstPos) => {
  let firstPosition = firstPos;
  let curr = firstPosition - 1;
  return {
    curr: () => curr,
    next: () => ++curr,
    remove: () => --curr,
  }
}

// version generator
let versionGenerator = (startingVer) => {
  let verArray = startingVer.split('.') // Split on '.' (x.y.z)
  let patchArr = verArray[2].split('-') // Split on z (z-SNAPSHOT)

  let major = parseInt(verArray[0]) || 0 // (x)
  let minor = parseInt(verArray[1]) || 0 // (y)
  let patch = parseInt(patchArr[0]) || 0 // (z)
  let isSnapshot = patchArr.length > 1   // (z-SNAPSHOT)?
  let current = () => {
    return major+'.'+minor+'.'+patch + (isSnapshot ? '-SNAPSHOT' : '')
  }

  return {
    curr: current,
    major: () => {
      ++major
      minor = 0
      patch = 0
      isSnapshot = false
      return current()
    },
    minor: () => {
      ++minor
      patch = 0
      isSnapshot = false
      return current()
    },
    patch: () => {
      ++patch
      isSnapshot = false
      return current()
    },
    snapshot: () => {
      isSnapshot = true
      return current()
    },
  }
}

class master {
  constructor(gitgraph) {
    this.parent = gitGraph;
    this.own = gitgraph.branch({
      name: "master",
      column: 3, 
      color: "#17BEBB",
      commitDefaultOptions: {
        dotColor: "black",
        messageColor: "#17BEBB",
        tagColor: "#17BEBB",
        displayTagBox: true
      }
    }).commit();
    this.version = versionGenerator("0.0.0");
    this.develop = this.own.branch({
      name: "develop",
      column: 5,
      color: "#E0CA3C",
      commitDefaultOptions: {
        dotColor: "black",
        tagColor: "#E0CA3C",
        messageColor: "#E0CA3C",
        displayTagBox: true,
      }
    }).commit();
    this.production;
    this.develop.features = [];
    this.develop.featureCounter = counterGenerator(1)
    this.develop.release;
    this.allowsSnapshots = false;
  }

  startProduction() {
    this.production = this.own.branch({ // Check the versions when creating to ensure they are different.
          name: "production/v" + this.version.curr(), // TODO add versioning to each commit, late created prods show wrong version
          column: 2,
          color: "#E55934",
          commitDefaultOptions: {
            dotColor: "black",
            messageColor: "#E55934",
            tagColor: "#E55934",
          }
        }
      ).commit();
  }
  
  startFeature() {
    let findFirstAvailableColumn = () => {
      let usedColumns = this.develop.features.map(f => f.column)
      let pos = 6
      let found = false
      while(!found) {
        usedColumns.includes(pos)
          ? pos++
          : found = true
      }
      return pos
    }
    let featureNumber = this.develop.featureCounter.next()
    let featureColumn = this.develop.features.length == 1 && this.develop.features[0].column == 7
      ? 6
      : this.develop.features.length + 6
    let newFeature = this.develop.branch({
      name: "feature/" + featureNumber,
      column: findFirstAvailableColumn(),
      color: "#CA61C3",
      commitDefaultOptions: {
        dotColor: "black",
        messageColor: "#CA61C3",
        tagColor: "#CA61C3",
        displayTagBox: false,
      }
    }).commit()

    this.develop.features.push(newFeature)
  }

  closeFeature() {
    // TODO check there are features to close.
    this.version.minor()
    let finishedFeature = this.develop.features.shift()
    this.develop.merge(finishedFeature, backpull)
    finishedFeature.merge(this.develop, {tag: this.version.curr(), displayTagBox: false})
  }

  startRelease() {
    let newRelease = this.develop.release
      ? this.develop.release // TODO there is already a release in progress.
      : this.develop.branch({
        name: "release/v" + this.version.curr(),
        column: 4,
        color: "#4CB944",
        commitDefaultOptions: {
          dotColor: "black",
          tagColor: "#4CB944",
          messageColor: "#4CB944",
        }
      }).commit({
        lineDash: [3, 2],
        dotStrokeWidth: 5,
        dotStrokeColor: "#4CB944",
        dotColor: "white",
        tag: this.version.curr(),
        displayTagBox: false,
        message: "Testing for release v" + this.version.curr(),
      });

      this.develop.release = newRelease;
  }

  acceptRelease() {
    this.develop.release.merge(this.own, {displayTagBox: true, tag: this.version.curr()})
    this.develop.release = null;
    this.own.merge(this.develop, backpull)
  }

  updateFeatures() {
    this.develop.features.forEach((feature) => {
      if(this.develop.parentCommit != feature.parentCommit) {
        this.develop.merge(feature, backpull)
      }
    })
  }
}

class GMFlow {
  constructor() {
    this.gitgraph = new GitGraph({
      template: "metro", // could be: "blackarrow" or "metro" or `myTemplate` (custom Template object)
      reverseArrow: false, // to make arrows point to ancestors, if displayed
      orientation: "vertical",
      // mode: "compact" // special compact mode: hide messages & compact graph
    });
    this.root = new master(this.gitgraph);
  }

  scheduleMajorRelease() {
    this.root.version.major()
  }

  startFeature() {
    this.root.startFeature()
  }

  closeFeature() {
    this.root.closeFeature()
  }

  startRelease() {
    this.root.startRelease()
  }

  startProduction() {
    this.root.startProduction()
  }

  acceptRelease() {
    this.root.acceptRelease()
  }
}

let flow = new GMFlow()
flow.startFeature()
flow.startFeature()
flow.startFeature()
flow.closeFeature()
flow.closeFeature()
flow.closeFeature()
flow.startRelease()
flow.acceptRelease()
flow.startProduction()
flow.startFeature()
flow.startFeature()
flow.closeFeature()
flow.closeFeature()
flow.startRelease()
flow.acceptRelease()
flow.startProduction()
flow.scheduleMajorRelease()
flow.startFeature()
flow.startFeature()
flow.closeFeature()
flow.startRelease()
flow.acceptRelease()
flow.startFeature()
flow.startFeature()
flow.startFeature()
flow.closeFeature()
flow.closeFeature()
flow.startFeature()
flow.startFeature()
flow.closeFeature()
flow.startFeature()
flow.closeFeature()
flow.closeFeature()
flow.closeFeature()
flow.closeFeature()
flow.startRelease()
flow.acceptRelease()
flow.startProduction()
flow.scheduleMajorRelease()
flow.startFeature()
flow.closeFeature()
