$(document).ready(function(){
  $("#ip").on('keyup',function(e){
let username = e.target.value;

$.ajax({
url:'https://api.github.com/users/'+username,
data:{
client_id:'001e7684d9b1543145e6',
client_secret:'e7ff1c335aa9051c8385f8643c3c28865eecf02b'
}
}).done(function(user){
  $.ajax({
  url:'https://api.github.com/users/'+username+'/repos',
  data:{
  client_id:'001e7684d9b1543145e6',
  client_secret:'e7ff1c335aa9051c8385f8643c3c28865eecf02b',
sort:'created:asc',
per_page:5
  }

}).done(function(repos){
  $.each(repos,function(index,repo){
    $('#repos').append(`
<div class="well">
<div class="row">
<div class="col-md-7">
<strong>${repo.name}</strong>:${repo.description}
</div>
<div class="col-md-3">
<span class="label label-info">Stars:${repo.stargazers_count}</span>
<span class="label label-info">Forks:${repo.fork_count}</span>
<span class="label label-info">Watchers:${repo.watchers_count}</span>
</div>
<div class="col-md-2">
<a href="${repo.html_url}" target="_blank" class="btn btn-danger">Repository</a>
</div>
</div>
</div>
`);
});
});
$('#profile').html(`<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">${user.name}</h3>
  </div>
  <div class="panel-body">
  <div class="row">
<div class="col-md-3">
<img class="thumbnail" style="width:100%" src="${user.avatar_url}">
<a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">Prifile Link</a>
</div>
<div class="col-md-4">
<h2><span class="label label-primary">Public Gists:${user.public_gists}</span>
</h2>
<hr>
</h2>
<h2><span class="label label-success">Public Repos:${user.public_repos}</span>
<hr>
<h2><span class="label label-info">Followers:${user.follower}</span>
</h2>
<hr>
<h2><span class="label label-warning">Following:${user.following}</span>
</h2>
<hr>
</h2>
<h2><span class="label label-danger">User Email:${user.email}</span>
<hr>
<h2><span class="label label-default">User Location:${user.location}</span>
</h2>
<br>
  </div>
  <div class="col-md-4">
  <h2><span class="label label-primary">Site Name:${user.blog}</span>
  </h2>
  <hr>
  </h2>
  <h2><span class="label label-success">Company:${user.company}</span>
  <hr>
  <h2><span class="label label-info">Profile type:${user.type}</span>
  </h2>
  <hr>
  <h2><span class="label label-warning">Created at:${user.created_at}</span>
  </h2>
  <hr>
<br>
</div>
</div>
<h3 class="page-header">Repository latest by date</h3>
<div id="repos"></div>
`);

});

  })
});
