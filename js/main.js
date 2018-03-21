var asana = require('asana');
var util = require('util');
var client = asana.Client.create().useAccessToken('0/832c5b7890b9ed65d67b179e2b18de7b');
console.log(client);
console.log(client.projects.findById('587290233856319'));
console.log(client.tasks.findByProject('587290233856319'));

//displays project name
client.projects.findById('587290233856319').then(function(response){
  var title = document.getElementById('title');
  console.log(response);
  title.innerHTML = response.name;
});

//displays project tasks
client.tasks.findByProject('587290233856319').then(function(response){
  for (let i = 0; i < response.data.length; i++) {
    var div = document.createElement('div');
    var taskElement = document.createElement('a');
    var closeElement = document.createElement('div');
    div.classList.add('task-container')
    taskElement.classList.add('tasks');
    closeElement.classList.add('close-btn');
    taskElement.href = 'https://app.asana.com/0/587290233856319/'+response.data[i].id;
    taskElement.innerHTML = response.data[i].name;
    let container = document.getElementById('main-container');
    div.appendChild(taskElement);
    div.appendChild(closeElement);
    container.appendChild(div);
  }
});
