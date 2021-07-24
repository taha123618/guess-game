const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let sWords = ['python','javascript','c++','GO','php','java','C Sharp','html','css3','React','Svelte','SolidJs','Angular','Swift','Blockchain','IOS','Android','Kotline','AutoCad','SolidWorks','MachineLearning','DeepLearning'];



const createNewwords = () =>{
   let runNo = Math.floor(Math.random() * sWords.length);
//    new words 
   let newTemparoryWords = sWords[runNo];
   return newTemparoryWords;
}

const scrambleWords = (arr) => {
for(let i = arr.length-1;i>0;i--){
let temp = arr[i];
let j = Math.floor(Math.random()*(i+1));
// console.log(j);
// console.log(i);
// console.log(temp);

arr[i] = arr[j];
arr[j] = arr[i];
}
return arr; 

}

btn.addEventListener('click', () => {
    if(!play){
        play = true;
        btn.innerHTML = 'Guess';
        guess.classList.toggle('hidden');
        // word genetarte
       newWords =  createNewwords();
        // scrimle krne ke lye 
        randWords =  scrambleWords(newWords.split("").join(""));
        msg.innerHTML =   randWords;
    }else{
        let tempWord = guess.value;
        if(tempWord === newWords){
            // console.log('correct');
            play = false;
            msg.innerHTML = 'Awesome Its Correct. It is ${newWords}';
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }else{
            console.log('incorrect');
            msg.innerHTML = 'Soory Boss, It is InCorrect. Plz try again ${randWords}';
        }
    }

});
