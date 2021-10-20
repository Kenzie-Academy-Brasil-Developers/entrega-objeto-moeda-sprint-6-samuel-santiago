const container1 = document.createElement('div');
const container2 = document.createElement('div');
container2.className = 'text'
document.body.append(container1,container2);
console.log(document.body);
const coin = {
    state: 0,
  
    flip: function () {

        this.state = getRandomInt(0,1);
        // console.log(this.state);

        function getRandomInt(min, max) {
            return Math.round(Math.random() * (max - min)) + min;
        }
        return this.state;
    },
  
    toString: function () {
        return this.state === 0 ? 'Heads': 'Tails'  
    },
    
    toHTML: function () {
        const image = document.createElement("img");
        image.style.width = '100px';
        image.style.height = '100px';

      
        if(this.state === 0){
            image.src = "./assets/img/cara.png"
            image.alt = "Heads"
        }
        else{
            image.src = "./assets/img/coroa.png"
            image.alt = "Tails"
        }
        container1.appendChild(image);

      return image;
    },

  };
// console.log(coin.flip())
// console.log(coin.toString())
// console.log(coin.toHTML())

  function display20Flips() {
    const results = [];

    for(let i = 1; i<20; i++){
        results.push(coin.flip())

        let texto = document.createElement('p');
        texto.innerText = coin.toString();
        container2.appendChild(texto);
        
    }

    return results;
    

    //PERGUNTAR COMO FAZER P SUBSTITUIR O ARRAY RESULTS PELO HEAD/TAILS USANDO 'MAP'
    // let results2 = results.map((el) => {
    //   if(el === 0){
    //     el = 'tails'
    //   }
    //   else{
    //     el = 'heads';
    //   }
    // })

    // console.log(results);
  
  }
  
  display20Flips()

  function display20Images() {
    const results = [];


    for(let i=0; i<=20; i++){
      results.push(coin.flip())
      coin.toHTML()
    }
    return results;
    
  }
  display20Images();


  