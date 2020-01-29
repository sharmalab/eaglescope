function setupData(targetVersion){
  var db = new Dexie("cptac_repo_view");
  db.version(1).stores({repo: "id++,project,modality,site"})
  if (window.localStorage.getItem("cptac_repo_version") !== targetVersion){
    // add new data
    data = fetch("data.json").then(x=>x.json())
    data.then(x=>{
      db.repo.bulkPut(x).then(x=>{
        window.localStorage.setItem("cptac_repo_version", targetVersion)
      })
      // set version to target
    })
  } else {
    console.log("already have this version of data")
  }
  return db
}
