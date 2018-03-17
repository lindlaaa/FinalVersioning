/*****************
 *   constants   *
 *****************/

const hotfixColumn = 1;
const productionColumn = 2;
const developColumn = 3;
const releaseColumn = 4;
const featureStartingColumn = 5;


/******************
 *   generators   *
 ******************/

// couter for branch columns
let counterGenerator = (firstPos) => {
  let firstPosition = firstPos;
  let curr = firstPosition;
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

  let startingVersion = [major, minor, patch, isSnapshot] // [x, y, z, ?]
  let curr = startingVersion;
  return {
    curr: () => '${major}.${minor}.${patch}' + isSnapshot ? '-SNAPSHOT' : '',
    major: () => '${major}',
    minor: () => '${minor}',
  }
}
