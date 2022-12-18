document.addEventListener("click", (e) => {
  //Darkmode
  if (e.target.matches(".ModeContainer #ChangeMode")) {
    body.classList.toggle('Darkmode');
	store(body.classList.contains('Darkmode'));
  }

  if (e.target.matches(".Links .Food")) {
    Status = "Section"
    AnimarSection(ComidaInfo)
  };


  if (e.target.matches(".Links .Carac")) {
    Status = "Section"
    AnimarSection(CaracteristicasInfo)
    
  }

  if (e.target.matches(".Links .Histori")) {
    Status = "Section"
    AnimarSection(HistoryInfo)
    
  }

  if (e.target.matches(".Links #ReturnIndex")){
    Status = "Index"
    AnimarSection(IndexInfo)
  }

});
