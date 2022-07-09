<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Simple Blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nlink-box" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="n-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="n-link">About</RouterLink>
          </li>
          <li class="nav-item nav-st-en">
            <RouterLink to="/login" class="n-link">Login</RouterLink>
          </li>
          <li class="nav-item nav-st-en">
            <RouterLink to="/register" class="n-link">Register</RouterLink>
          </li>
          <li class="nav-item nav-st-de">
            <RouterLink to="/adminblog" class="n-link">Dashbord</RouterLink>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {

}
</script>

<style>
    

  .n-link{
    text-decoration: none;
    outline: none;
    color: white;
    padding: 10px;
    float: right;
  }
  
  .nlink-box{
    margin-left: 60%;
  }
  .nav-st-de{
    display: none;
  }
</style>