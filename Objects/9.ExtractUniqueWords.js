function solve(input){

    let set = new Set();

    for(let line of input){
        let tokens = line.toLowerCase().split(/\W+/).filter(w => w !="");

        for(let word of tokens){
            set.add(word);
        }
    }
    
    let temp = Array.from(set.keys()).join(", ")
    console.log(temp)
}

solve(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.', 
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 
'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'])