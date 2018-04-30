const escola = 'Cod3r';

console.log(escola.charAt(4)); // retorna 'r'
console.log(escola.charAt(5)); // não retorna nada
console.log(escola.charCodeAt(3)); // retorna o valor na tabela unicode '51'
console.log(escola.indexOf('3')); // retorna o índice que está o valor informado '3'

console.log(escola.substring(1)); // retorna o conteúdo a partir do índice 1 'od3r'
console.log(escola.substring(0, 3)); // retorna o conteúdo a partir do índice 0 pegando apenas 3 caracteres 'Cod'

console.log('Escola '.concat(escola).concat('!'));
console.log('Escola ' + escola + '!');
console.log(escola.replace(3, 'e')); // substitui o '3' pelo 'e'

console.log('Ana,Maria,Pedro'.split(',')); // transforma em array