var topic = ['HTML','CSS','Javascript','Git'];
var randomTopic = topic[Math.floor(Math.random() * topic.length)];

    function listTopics(){
for(var x = 0; x< topic.length; x++){
   console.log(topic[x]);
}
}
function selectTopic(){
if(randomTopic === 'HTML'){
    console.log("Let's study HTML!");
}else if (randomTopic === 'CSS'){
    console.log("Let's study CSS");
}else if (randomTopic === 'Javascript'){
    console.log("Let's study Javascript");
}else if (randomTopic === 'Git'){
    console.log("Let's Study Git");
} else{
    console.log("Please try again");
}
}
console.log('Here are the topics we learned through the prework:');
listTopics();
console.log('Which topic should we study first?');
 selectTopic();