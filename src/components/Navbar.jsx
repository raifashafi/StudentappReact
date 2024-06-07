import React from 'react'

const Navbar = () => {
  return (
    <div>



<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">STUDENT APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">ADD STUDENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/SearchStudent">SEARCH</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/DeleteStudent">DELETE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/ViewStudent">VIEW</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar