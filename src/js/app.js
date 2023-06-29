import '../css/style.css';
import '../css/reset.css';

"use strict"

// EXO 1 :
// Écrivez une fonction qui prend deux nombres en argument
// et retourne vrai si le premier est supérieur au deuxieme ou faux dans le cas contraire
// f(4,2) retourne true
// f(4,7) retourne false

// function superieur(n1,n2){
//     return n1 > n2
// }superieur(1,5)


// EXO 2 :
// Implémentez une fonction pour inverser une chaîne de caractères.
// Vous ne devez pas utiliser la méthode reverse
// f("test") retourne "tset"

// function inverser(str){
//     let reversedStr = ""
//     for(let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i]
//     }
//     return reversedStr
// }inverser("test")

// EXO 3 :
// Un palindrome est un mot qui se lit dans les deux sens ("kayak")
// Écrivez un algorithme pour vérifier si une chaîne de caractères donnée est un palindrome.
// f("kayak") retourne true
// f("test") retourne false

// let str = 'kayak'
// for(let i = 0; i < str.length; i++){
//     if(str[i] === str[str.length - i]){
//         console.log('ca marche');
//     }
// }

// EXO 4 :
// Créez une fonction qui retourne le factoriel d'un nombre passé en argument.
// f(5) retourne 120

// function factoriel(num){
//     let res = 1

//     for(let i = 0; i < num; i++){
//         res += res*i
//     }
//     return res 
// }factoriel(5)

// EXO 5 :
// Implémentez une fonction pour vérifier si un nombre est premier.
// Un nombre premier est un nombre qui est divisible uniquement par 1 ou par lui même
// f(11) retourne true
// f(20) retourne false

// function isPrime(num){
//     return num % 2 === 0 
// }isPrime(5)

// EXO 6 :
// Écrire une fonction qui renvoie le plus grand nombre dans un tableau.
// Vous ne devez pas utiliser de boucle

// function plus_grand_nombre(arr){
//     return Math.max(...arr)
// }plus_grand_nombre([7,12,9,7])

// EXO 7 :
// Un anagramme est une phrase composée des même lettres qu'une autre phrase dans un ordre différent
// "La crise économique" et "Le scénario comique" sont des anagrammes
// Écrivez une fonction retourne vrai si deux chaînes de caractères sont des anagrammes l'une de l'autre ou faux dans le cas contraire.

// function anagramme(str,str2){

    
//     let words = str.split(' ')
//     let words2 = str2.split(' ')

// }anagramme("La crise économique","Le scénario comique")


// EXO 8 :
// Écrivez une fonction pour déterminer si une chaîne de caractères donnée ne contient que des caractères uniques.
// f("test") retourne faux car le caractère t est présente 2 fois
// f("hopital") retourne vrai car chaque caractère est présent 1 seule fois
// f("Test") retourne vrai car chaque caractère est présent 1 seule fois (t n'est pas pareil que T)

// function unique(str){
//     let tmp = []
//     for(let i = 0; i < str.length ; i++){
//         tmp.push(str[i])
//     }

//     let res = []
//     for(let j = 0; j < str.length; j ++){
//         let shift = tmp.shift()
//         res.push(shift)
    
//     }
//     return tmp.includes(res[j]) 
// }unique("test")


// EXO 9 :
// Implémentez une fonction qui retourne le deuxieme plus grand élément d'un tableau de nombre entier.
// f([5,6,2,9,23]) retourne 9 car 23 est le plus grand et 9 est le deuxieme plus grand

// function plus_grand_element(arr){
//     let plus_grand = arr[0]
//     let res 
//     let tmp

//     for(let i = 1; i < arr.length; i++){
//         if(plus_grand < arr[i]){
//             res = plus_grand
//             plus_grand = arr[i]
//         } else {
//             tmp = arr[i]
//         }

//         if(tmp > res){
//             res = tmp
//         }

//     }
//     return res 
// }plus_grand_element([1,5,7,89,5])


// EXO 10 :
// Écrivez une fonction pour calculer la somme de tous les nombres pairs d'un tableau.
// f([3,2,6]) retoune 8 (2+6)


// function som_pairs(arr){
//     let res = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             res += arr[i]
//         }
//     }
//     console.log(res);
// }som_pairs([3,2,6])

// EXO 11 :
// Créez une fonction pour inverser l'ordre des mots dans une phrase.
// Vous pouvez utliser les méthode disponible dans les prototypes String et Array
// f("bonjour je vais bien") affiche "bien vais je bonjour"
// la fonction ne retourne rien

// function inverser(str){
//     let words = str.split(' ')
//     let reversed = words.reverse()

//     let str2 = ""
//     for(let i = 0; i < reversed.length; i++){
//         str2 += reversed[i] + " "
//     }
//     console.log(str2);
// }inverser("bonjour je vais bien")


// EXO 12 :
// Implémentez une fonction pour supprimer toutes les occurrences d'un élément donné d'un tableau.
// f([3,5,7,3,1,3,5], 3) retourne  [5,7,1,5] car on a supprimer tout les 3 (deuxieme argument)
// Vous devez utiliser la méthode filter()

// function occurrences(arr,n){

//     let res = arr.filter(nombre => nombre !== 3 )
//     return res
// }occurrences([3,5,7,3,1,3,5],3)

// EXO 13
// Écrivez un algorithme pour trouver le nombre de voyelles dans une chaîne de caractères.
// f("bonjour") retourne 3 car il y 1 "a", 2 "o" et un "u"
// f("voyage") retourne 3 car il y a 1 "e", 1 "a" et 1 "o"

// function algo_voyelles(str){
//     let voyelles = "aeiouy"
//     let res = 0

//     for(let i = 0; i < str.length; i++){
//         for(let j = 0; j < voyelles.length;j++){
//             if(voyelles[j] === str[i]){
//                 res ++
//             }
//         }   
//     }
//     console.log(res);
// }algo_voyelles("bonjour")



// EXO 14
// Implémentez une fonction qui permet de trouver le plus petit nombre
// d'un tableau à 2 dimensions passé en argument
// ex: f([[1,2,3],[5,6,7],[39,-23,0]]) retourne -23

// function plus_petit(arr1,arr2,arr3,arr4){
//     console.log(arr1);
//     let res = arr1[0][0]
//          for(let i = 0; i < arr1.length; i++){
//             for(let j = 0; j < arr1[i].length;j++){
//                 if(res > arr1[i][j]){
//                     res = arr1[i][j]
//                 }
//             }

//         }
//         console.log(res);
// }plus_petit([[1,2,3],[5,6,7],[39,-23,0]])



// EXO 15
// Implémentez une fonction pour rechercher tous les index d'un nombre donné (premier argument)
// dans un tableau de nombre entier (deuxieme argument).
// f(3,[3,5,3,6]) retourne [0,2] car le 3 est présent à l'index 0 et à l'index 2

// function index(int,arr){
//     let arr2 = []
//     for(let i = 0; i < arr.length; i++){
//         if(int === arr[i]){
//             let del = arr.indexOf(arr[i])
//             arr2.push(del)
//             delete arr[del]
//         } 
//     }
//     console.log(arr);
//     console.log(arr2);
// }index(3,[3,5,3,6])

// EXO 16
// Implémentez une fonction pour calculer le nombre de chiffres d'un nombre entier.
// f(102543) retourne 6 car 102543 contient 6 chiff

// function calculer(int){
//     let res = 0 
//     let tmp = int.toString()
//     res+= tmp.length
//     return res
// }calculer(102543)