(function() {
  window.menuStartup = document.createElement("HTMLElement");
  menuStartup.innerHTML = `
                       <style>                    
                        p { color: orange; }   
                      </style>
                      <br/>
                      user: <input id='usr'/><br/>
                      pswd: <input id='pswd'/><br/>
                      <button id='submit'>submit</button>  
         `;
}());


(function() {
  window.search = document.createElement("HTMLElement");
  search.innerHTML = `
                       <style>                    
                        .unexpand {
                                  width: 15px;
                                  padding: 9px 10px 9px 12px;
                                  color: transparent;
                                  background-color: #fff;
                                }  
                        .expand {
                                width: 1130px;
                                padding-left: 32px;
                                color: #000;
                                background-color: #fff;
                                cursor: auto;
                              } 
                      </style>
                      <br/>
                      <input type="search" class="unexpand" placeholder="Speak (or write here) your question.."/>
         `;
}());

// (() => window.searchbar = document.createElement("HTMLElement"))();
(() => window.itembar = document.createElement("HTMLElement"))();

