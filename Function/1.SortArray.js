


    function main (arr, command){    
        return command === 'asc'? arr.sort((a, b) => a-b): command === 'desc'? arr.sort((a, b) => b - a):"";
    }





console.log(main([14, 7, 17, 6, 8], 'desc'));