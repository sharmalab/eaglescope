

function setupData(targetVersion){
  var db = new Dexie("cptac_repo_view");
  db.version(1).stores({repo: "project,modality,site"})
  if (window.localStorage.getItem("cptac_repo_version") < targetVersion){
    // add new data
    data = fetch("data.json").then(x=>x.json())
    data.then(x=>{
      db.repo.bulkPut(x)
      // set version to target
      window.localStorage.put("cptac_repo_version", targetVersion)
    })
  }
  return db
}
