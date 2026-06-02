 let compra = 0;
 let total = 0;


const carrinho = [
  { produto: "Notebook",   preco: 4500, quantidade: 1 },
  { produto: "Mouse",      preco: 120,  quantidade: 2 },
  { produto: "Teclado",    preco: 280,  quantidade: 1 },
  { produto: "Monitor",    preco: 1800, quantidade: 2 },
  { produto: "Headset",    preco: 350,  quantidade: 1 }
];

 let itemcaro = carrinho[0];

for(let i=0;i<carrinho.length;i++){

 console.log(`${carrinho[i].produto} X${carrinho[i].quantidade} R$${carrinho[i].preco}`);

 let subtotal = carrinho[i].preco * carrinho[i].quantidade;
 console.log(`subtotal: ${subtotal}`);

    compra += subtotal;
    console.log(`valor total:${compra}`);

    if(carrinho[i].preco > itemcaro.preco){

        itemcaro = carrinho[i];

    };


    if(compra > 5000){

        totald= compra *0.9;
        console.log(`valor com desconto: ${totald}`);
    }

}



