var db = new Dexie("cptac_repo_view");
db.version(1).stores({repo: "project,modality,site"})

async function setupData(targetVersion){
  if (window.localStorage.getItem("cptac_repo_version") < targetVersion){
    // add new data
    data = await fetch("data.json").then(x=>x.json())
    db.repo.bulkPut(data)
    // set version to target
    window.localStorage.put("cptac_repo_version", targetVersion)
  }
}
