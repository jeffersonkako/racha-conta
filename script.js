function calculateTip(event) {
    event.preventDefault();
    let Conta=document.getElementById('Conta').value;
    let Qualidade=document.getElementById('Qualidade').value;
    let Pessoas=document.getElementById('Pessoas').value;
                  
    if(Conta == ""| Qualidade ==0){
        alert("Campos Obrigatórios")
        return;
    }
    if(Pessoas == "" | Pessoas <= 1){
      Pessoas = 1;
      document.getElementById('Cada').style.display = "none"
   } else {
    document.getElementById('Cada').style.display = "block"
   }
    let total=(Conta * Qualidade)/Pessoas;
    total=total.toFixed(2);
  document.getElementById('tips').innerHTML = total;
  document.getElementById('totalTips').style.display = "block";
}
                                        
  document.getElementById('totalTips').style.display = "none";
  document.getElementById('Cada').style.display = "none";
  document.getElementById('tipsForms').addEventListener('submit', calculateTip);
